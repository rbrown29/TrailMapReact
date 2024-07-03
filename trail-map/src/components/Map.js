import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { lineString, along, length, bbox } from '@turf/turf';
import 'mapbox-gl/dist/mapbox-gl.css';

// Set the access token on the mapboxgl object
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

// Function to compute the camera position
const computeCameraPosition = (pitch, bearing, targetPosition, altitude) => {
  const bearingInRadian = bearing / 57.29;
  const pitchInRadian = (90 - pitch) / 57.29;
  
  const lngDiff = ((altitude / Math.tan(pitchInRadian)) * Math.sin(-bearingInRadian)) / 70000; // ~70km/degree longitude
  const latDiff = ((altitude / Math.tan(pitchInRadian)) * Math.cos(-bearingInRadian)) / 110000; // 110km/degree latitude
  
  const correctedLng = targetPosition.lng + lngDiff;
  const correctedLat = targetPosition.lat - latDiff;
  
  return {
    lng: correctedLng,
    lat: correctedLat
  };
};

const MapComponent = ({ trail }) => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/satellite-streets-v12?optimize=true',
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
          'line-color': '#888',
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
      const cameraAltitude = 3500; // Smith Rock 3000, Adams Glacier 3500, Angel's Rest 2000, eagle creek 3000, Multnomah-Wahkeena Loop 3000, cape perpetua 500, battleAxeLoop 4500, belknapCrater 4500, Ice Lake 5000, cached lake 4500, Garfield Peak 5000
      const pitch = 20; // Smith Rock 10, Adams Glacier 20, Angel's Rest 30, eagle creek 20, Multnomah-Wahkeena Loop 20, cape perpetua 60, battleAxeLoop 20, belknapCrater 20, Ice Lake 10, cached lake 20, Garfield Peak 10
      const startBearing = 0; // Smith Rock 0, Adams Glacier 0, Angel's Rest 0, eagle creek 0, Multnomah-Wahkeena Loop 0, cape perpetua -120, battleAxeLoop 0, belknapCrater 0, Ice Lake 0, cached lake 0, Garfield Peak 0
      
      const routeDistance = length(lineString(targetRoute));

      let start;

      const popup = new mapboxgl.Popup({ closeButton: false });
      const marker = new mapboxgl.Marker({
        color: '#1E2952',
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
          data: {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: cameraRoute,
            },
          },
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
        const targetPosition = { lng: alongRoute[0], lat: alongRoute[1] };
        
        const bearing = startBearing - phase * 200.0;
        const cameraPosition = computeCameraPosition(pitch, bearing, targetPosition, cameraAltitude);

        const camera = map.getFreeCameraOptions();

        camera.position = mapboxgl.MercatorCoordinate.fromLngLat(
          cameraPosition,
          cameraAltitude
        );

        camera.lookAtPoint(targetPosition);

        map.setFreeCameraOptions(camera);

        const elevation = Math.floor(map.queryTerrainElevation(targetPosition, { exaggerated: false }));
        popup.setHTML('Altitude: ' + elevation + 'm<br/>');
        marker.setLngLat(targetPosition);

        map.setPaintProperty('line', 'line-gradient', [
          'step',
          ['line-progress'],
          'rgb(180,255,0)',  // green #08ff08, yellow #F2FF40, red rgb(255,15,0), neon Green/Yellow rgb(180,255,0), blue #004B93
          phase,
          'rgba(255, 0, 0, 0)',
        ]);

        window.requestAnimationFrame(frame);
      }

      window.requestAnimationFrame(frame);
    });

    return () => map.remove();
  }, [trail]);

  return (
    <>
      <div id="trail-name">{trail.name}</div>
      <div id="trail-length">{trail.length} Miles</div>
      <div id="trail-difficulty">Difficulty: {trail.Difficulty}</div>
      <div ref={mapContainerRef} id="map-container" />
    </>
  );
};

export default MapComponent;


