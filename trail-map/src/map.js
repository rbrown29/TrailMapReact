import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { lineString, along, length, bbox } from '@turf/turf';
import 'mapbox-gl/dist/mapbox-gl.css';

// Set the access token on the mapboxgl object
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const MapComponent = ({ trail }) => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/satellite-v9?optimize=true',
      center: [trail.data[0].lon, trail.data[0].lat],
      zoom: 11,
      pitch: isMobile ? 30 : 100,
      bearing: isMobile ? 90 : -180,
      antialias: true,
      interactive: false,
      hash: false
    });

    const uniqueData = Array.from(new Set(trail.data.map(JSON.stringify))).map(JSON.parse);
    const coordinates = uniqueData.map(point => [point.lon, point.lat]);

    const targetRoute = coordinates;
    const cameraRoute = coordinates;

    map.on('style.load', () => {
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
          coordinates: coordinates,
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
          'line-color': '#08ff08',
          'line-width': 8,
        },
      });

      const trailBbox = bbox(geojson);
      map.fitBounds(trailBbox, {
        padding: { top: 20, bottom: 20, left: 20, right: 20 },
        maxZoom: 15,
        duration: 2000,
      });
    });

    map.on('load', () => {
      const animationDuration = 80000;
      const cameraAltitude = 3000;

      const routeDistance = length(lineString(targetRoute));
      const cameraRouteDistance = length(lineString(cameraRoute));

      let start;

      const popup = new mapboxgl.Popup({ closeButton: false });
      const marker = new mapboxgl.Marker({
        color: 'red',
        scale: 0.8,
        draggable: false,
        pitchAlignment: 'auto',
        rotationAlignment: 'auto',
      })
        .setLngLat(coordinates[0])
        .setPopup(popup)
        .addTo(map)
        .togglePopup();

      function frame(time) {
        if (!start) start = time;
        const phase = (time - start) / animationDuration;

        if (phase > 1) {
          setTimeout(() => {
            start = 0.0;
          }, 1500);
          return;
        }
        

        const alongRoute = along(lineString(targetRoute), routeDistance * phase).geometry.coordinates;
        const alongCamera = along(lineString(cameraRoute), cameraRouteDistance * phase).geometry.coordinates;

        const camera = map.getFreeCameraOptions();

        camera.position = mapboxgl.MercatorCoordinate.fromLngLat(
          {
            lng: alongCamera[0],
            lat: alongCamera[1],
          },
          cameraAltitude
        );

        camera.lookAtPoint({
          lng: alongRoute[0],
          lat: alongRoute[1],
        });

        map.setFreeCameraOptions(camera);

        const elevation = Math.floor(map.queryTerrainElevation({ lng: alongRoute[0], lat: alongRoute[1] }, { exaggerated: false }));
        popup.setHTML('Altitude: ' + elevation + 'm<br/>');
        marker.setLngLat({ lng: alongRoute[0], lat: alongRoute[1] });

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