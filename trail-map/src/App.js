import React from 'react';
import MapComponent from './components/Map';
import './App.css';

const sampleTrailData = {
  name: "Cape Kiwanda",
  length: 5,
  Difficulty: "Easy",
  data: [
    { lon: -123.97112, lat: 45.21572, ele: 11 },
        { lon: -123.97206, lat: 45.21587, ele: 4 },
        { lon: -123.97248, lat: 45.21594, ele: 2 },
        { lon: -123.97276, lat: 45.21593, ele: 1 },
        { lon: -123.97296, lat: 45.21618, ele: 1 },
        { lon: -123.97343, lat: 45.21681, ele: 1 },
        { lon: -123.9738, lat: 45.21734, ele: 1 },
        { lon: -123.97426, lat: 45.21785, ele: 3 },
        { lon: -123.9748, lat: 45.21831, ele: 11 },
        { lon: -123.97494, lat: 45.21838, ele: 13 },
        { lon: -123.97516, lat: 45.21838, ele: 14 },
        { lon: -123.97545, lat: 45.21832, ele: 11 },
        { lon: -123.97565, lat: 45.21832, ele: 11 },
        { lon: -123.97621, lat: 45.21851, ele: 20 },
        { lon: -123.97628, lat: 45.21853, ele: 21 },
        { lon: -123.97679, lat: 45.21866, ele: 20 },
        { lon: -123.97697, lat: 45.21873, ele: 20 },
        { lon: -123.97708, lat: 45.21883, ele: 21 },
        { lon: -123.97725, lat: 45.21904, ele: 22 },
        { lon: -123.97732, lat: 45.21922, ele: 21 },
        { lon: -123.97728, lat: 45.21946, ele: 18 },
        { lon: -123.97734, lat: 45.2196, ele: 15 },
        { lon: -123.97733, lat: 45.21968, ele: 14 },
        { lon: -123.97731, lat: 45.21973, ele: 14 },
        { lon: -123.97721, lat: 45.21973, ele: 17 },
        { lon: -123.97713, lat: 45.21972, ele: 20 },
        { lon: -123.97703, lat: 45.21962, ele: 26 },
        { lon: -123.97701, lat: 45.21956, ele: 27 },
        { lon: -123.97696, lat: 45.21949, ele: 30 },
        { lon: -123.97694, lat: 45.21937, ele: 32 },
        { lon: -123.9769, lat: 45.21928, ele: 34 },
        { lon: -123.97682, lat: 45.2192, ele: 37 },
        { lon: -123.97675, lat: 45.21906, ele: 36 },
        { lon: -123.97668, lat: 45.21899, ele: 36 },
        { lon: -123.97651, lat: 45.21895, ele: 37 },
        { lon: -123.97616, lat: 45.21903, ele: 44 },
        { lon: -123.97598, lat: 45.21912, ele: 50 },
        { lon: -123.97594, lat: 45.21915, ele: 52 },
        { lon: -123.9758, lat: 45.21921, ele: 55 },
        { lon: -123.97573, lat: 45.21928, ele: 56 },
        { lon: -123.97562, lat: 45.21943, ele: 60 },
        { lon: -123.97545, lat: 45.2195, ele: 61 },
        { lon: -123.97519, lat: 45.21955, ele: 61 },
        { lon: -123.97486, lat: 45.21913, ele: 47 },
        { lon: -123.97476, lat: 45.21901, ele: 41 },
        { lon: -123.97453, lat: 45.21857, ele: 19 },
        { lon: -123.97439, lat: 45.21821, ele: 8 },
        { lon: -123.97426, lat: 45.21785, ele: 3 },
        { lon: -123.9738, lat: 45.21734, ele: 1 },
        { lon: -123.97343, lat: 45.21681, ele: 1 },
        { lon: -123.97296, lat: 45.21618, ele: 1 },
        { lon: -123.97276, lat: 45.21593, ele: 1 },
        { lon: -123.97248, lat: 45.21594, ele: 2 },
        { lon: -123.97206, lat: 45.21587, ele: 4 },
        { lon: -123.97112, lat: 45.21572, ele: 11 }
  ]
};

const App = () => (
  <div>
    <MapComponent trail={sampleTrailData} />
  </div>
);

export default App;