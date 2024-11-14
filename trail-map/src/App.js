import React from 'react';
import MapComponent from './components/Map';
import './App.css';

const sampleTrailData = {
  name: "Cape Meares Light House",
  length: 1.7,
  Difficulty: "Easy",
  data: [
      { lon: -123.97444, lat: 45.48587, ele: 106 },
      { lon: -123.97441, lat: 45.48608, ele: 107 },
      { lon: -123.97455, lat: 45.48607, ele: 105 },
      { lon: -123.97468, lat: 45.48604, ele: 103 },
      { lon: -123.97478, lat: 45.48603, ele: 102 },
      { lon: -123.97496, lat: 45.48605, ele: 99 },
      { lon: -123.97578, lat: 45.48616, ele: 91 },
      { lon: -123.97644, lat: 45.48625, ele: 89 },
      { lon: -123.97711, lat: 45.48633, ele: 85 },
      { lon: -123.97777, lat: 45.48642, ele: 71 },
      { lon: -123.97812, lat: 45.48648, ele: 48 },
      { lon: -123.97813, lat: 45.48648, ele: 48 },
      { lon: -123.97814, lat: 45.48637, ele: 42 },
      { lon: -123.97812, lat: 45.48624, ele: 39 },
      { lon: -123.97821, lat: 45.48628, ele: 35 },
      { lon: -123.97822, lat: 45.48636, ele: 37 },
      { lon: -123.97825, lat: 45.4864, ele: 37 },
      { lon: -123.9783, lat: 45.48641, ele: 34 },
      { lon: -123.97835, lat: 45.48642, ele: 32 },
      { lon: -123.97837, lat: 45.48647, ele: 34 },
      { lon: -123.97836, lat: 45.48651, ele: 36 },
      { lon: -123.97835, lat: 45.48654, ele: 38 },
      { lon: -123.97827, lat: 45.48653, ele: 42 },
      { lon: -123.97835, lat: 45.48654, ele: 38 },
      { lon: -123.97836, lat: 45.48651, ele: 36 },
      { lon: -123.97837, lat: 45.48647, ele: 34 },
      { lon: -123.97835, lat: 45.48642, ele: 32 },
      { lon: -123.9783, lat: 45.48641, ele: 34 },
      { lon: -123.97825, lat: 45.4864, ele: 37 },
      { lon: -123.97822, lat: 45.48636, ele: 37 },
      { lon: -123.97821, lat: 45.48628, ele: 35 },
      { lon: -123.97812, lat: 45.48624, ele: 39 },
      { lon: -123.97795, lat: 45.48616, ele: 48 },
      { lon: -123.9776, lat: 45.48608, ele: 67 },
      { lon: -123.97756, lat: 45.48607, ele: 68 },
      { lon: -123.97727, lat: 45.486, ele: 75 },
      { lon: -123.97702, lat: 45.48593, ele: 74 },
      { lon: -123.97664, lat: 45.48586, ele: 74 },
      { lon: -123.9764, lat: 45.48578, ele: 69 },
      { lon: -123.97572, lat: 45.48566, ele: 74 },
      { lon: -123.97484, lat: 45.48551, ele: 94 },
      { lon: -123.97475, lat: 45.48559, ele: 99 },
      { lon: -123.97459, lat: 45.48572, ele: 103 },
      { lon: -123.97444, lat: 45.48574, ele: 105 },
      { lon: -123.97445, lat: 45.4858, ele: 105 },
      { lon: -123.97444, lat: 45.48587, ele: 106 },
  ]
};

const App = () => (
  <div>
    <MapComponent trail={sampleTrailData} />
  </div>
);

export default App;