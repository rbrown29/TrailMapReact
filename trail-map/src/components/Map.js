import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { length, along, lineString, bbox } from '@turf/turf';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const MapComponent = ({ trail }) => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/satellite-v9',
      center: [trail.data[0].lon, trail.data[0].lat],
      zoom: isMobile ? 12 : 14,
      pitch: isMobile ? 20 : 40,  
      bearing: isMobile ? 90 : 150, 
      antialias: true,
      interactive: false,
      hash: false,
    });

    const uniqueData = Array.from(new Set(trail.data.map(JSON.stringify))).map(JSON.parse);
    const coordinates = uniqueData.map(point => [point.lon, point.lat, point.ele]);

    map.on('load', async () => {
      map.addSource('mapbox-dem', {
        type: 'raster-dem',
        url: 'mapbox://mapbox.terrain-rgb',
        tileSize: 512,
        maxzoom: 14,
      });
      map.setTerrain({ source: 'mapbox-dem', exaggeration: 1.5 });

      const geojson = {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: coordinates.map(coord => [coord[0], coord[1]]),
        },
        properties: {},
      };

      map.addSource('route', {
        type: 'geojson',
        data: geojson,
      });

      map.addLayer({
        id: 'route',
        type: 'line',
        source: 'route',
        layout: {
          'line-join': 'round',
          'line-cap': 'round',
        },
        paint: {
          'line-color': '#888',
          'line-width': 8,
        },
      });

      if (coordinates.length > 0) {
        const startCoords = [coordinates[0][0], coordinates[0][1]];
        const endCoords = [coordinates[coordinates.length - 1][0], coordinates[coordinates.length - 1][1]];

        new mapboxgl.Marker({ color: 'green' })
          .setLngLat(startCoords)
          .addTo(map);
          if (isMobile) {
          const trailBbox = bbox(geojson);
          map.fitBounds(trailBbox, {
            padding: { top: 20, bottom: 20, left: 20, right: 20 },
            maxZoom: 14,
            duration: 2000
          });
        }
      } else {
        console.error('No coordinates available to add markers.');
      }

      const popup = new mapboxgl.Popup({ closeButton: false });
      const marker = new mapboxgl.Marker({
        color: 'blue',
        scale: 0.8,
        draggable: false,
        pitchAlignment: 'auto',
        rotationAlignment: 'auto',
      })
        .setLngLat(coordinates[0])
        .setPopup(popup)
        .addTo(map)
        .togglePopup();

      map.addSource('line', {
        type: 'geojson',
        lineMetrics: true,
        data: geojson,
      });

      map.addLayer({
        type: 'line',
        source: 'line',
        id: 'line',
        paint: {
          'line-color': 'rgba(0,0,0,0)',
          'line-width': 5,
        },
        layout: {
          'line-cap': 'round',
          'line-join': 'round',
        },
      });

      await map.once('idle');

      const animationDuration = isMobile ? 80000 : 50000;
      const path = lineString(coordinates);
      const pathDistance = length(path);

      let start;
      function frame(time) {
        if (!start) start = time;
        const animationPhase = (time - start) / animationDuration;
        if (animationPhase > 1) {
          return;
        }

        const alongPath = along(path, pathDistance * animationPhase).geometry.coordinates;
        const lngLat = { lng: alongPath[0], lat: alongPath[1] };

        const elevation = Math.floor(map.queryTerrainElevation(lngLat, { exaggerated: false }));

        popup.setHTML('Altitude: ' + elevation + 'm<br/>');
        marker.setLngLat(lngLat);

        map.setPaintProperty('line', 'line-gradient', [
          'step',
          ['line-progress'],
          '#08ff08',
          animationPhase,
          'rgba(255, 0, 0, 0)',
        ]);

        const rotation = isMobile ? 90 - animationPhase * 10.0 : 150 - animationPhase * 40.0;
        map.setBearing(rotation % 360);

        window.requestAnimationFrame(frame);
      }

      window.requestAnimationFrame(frame);
    });

    return () => map.remove();
  }, [trail]);

  return (
    <>
      <div id="trail-name">{trail.name}</div>
      <div ref={mapContainerRef} id="map-container" />
    </>
  );
};

export default MapComponent;
