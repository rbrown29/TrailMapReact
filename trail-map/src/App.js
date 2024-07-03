import React from 'react';
import MapComponent from './components/Map';
import './App.css';

const sampleTrailData = {
  name: "Cascade Head Trail",
  length: 4.6,
  Difficulty: "Moderate",
  data: [
    { lon: -123.99224, lat: 45.04194, ele: 16 },
        { lon: -123.99222, lat: 45.04201, ele: 17 },
        { lon: -123.99224, lat: 45.04205, ele: 18 },
        { lon: -123.99223, lat: 45.04213, ele: 19 },
        { lon: -123.99211, lat: 45.04224, ele: 18 },
        { lon: -123.99157, lat: 45.04265, ele: 20 },
        { lon: -123.99142, lat: 45.04273, ele: 19 },
        { lon: -123.9913, lat: 45.0428, ele: 17 },
        { lon: -123.99119, lat: 45.043, ele: 13 },
        { lon: -123.99119, lat: 45.04331, ele: 16 },
        { lon: -123.99118, lat: 45.0435, ele: 17 },
        { lon: -123.9913, lat: 45.04362, ele: 22 },
        { lon: -123.99141, lat: 45.04375, ele: 23 },
        { lon: -123.99158, lat: 45.04389, ele: 25 },
        { lon: -123.99176, lat: 45.04396, ele: 29 },
        { lon: -123.99192, lat: 45.04405, ele: 32 },
        { lon: -123.99196, lat: 45.04414, ele: 31 },
        { lon: -123.99193, lat: 45.04427, ele: 28 },
        { lon: -123.99191, lat: 45.0443, ele: 27 },
        { lon: -123.99189, lat: 45.04433, ele: 26 },
        { lon: -123.99191, lat: 45.04445, ele: 25 },
        { lon: -123.99203, lat: 45.04454, ele: 27 },
        { lon: -123.9925, lat: 45.04483, ele: 34 },
        { lon: -123.99292, lat: 45.0452, ele: 38 },
        { lon: -123.99327, lat: 45.04538, ele: 40 },
        { lon: -123.99372, lat: 45.04558, ele: 43 },
        { lon: -123.99386, lat: 45.04567, ele: 45 },
        { lon: -123.9941, lat: 45.04564, ele: 49 },
        { lon: -123.99464, lat: 45.04593, ele: 48 },
        { lon: -123.99475, lat: 45.04592, ele: 48 },
        { lon: -123.99483, lat: 45.04593, ele: 47 },
        { lon: -123.99501, lat: 45.04603, ele: 46 },
        { lon: -123.99515, lat: 45.0461, ele: 46 },
        { lon: -123.99529, lat: 45.04621, ele: 46 },
        { lon: -123.99535, lat: 45.04632, ele: 46 },
        { lon: -123.99533, lat: 45.04654, ele: 46 },
        { lon: -123.99519, lat: 45.04687, ele: 46 },
        { lon: -123.99497, lat: 45.04721, ele: 49 },
        { lon: -123.99498, lat: 45.04735, ele: 51 },
        { lon: -123.99502, lat: 45.04743, ele: 51 },
        { lon: -123.99504, lat: 45.04748, ele: 52 },
        { lon: -123.99497, lat: 45.04753, ele: 54 },
        { lon: -123.99474, lat: 45.04765, ele: 58 },
        { lon: -123.99467, lat: 45.04782, ele: 63 },
        { lon: -123.99463, lat: 45.04801, ele: 69 },
        { lon: -123.99465, lat: 45.0483, ele: 79 },
        { lon: -123.99484, lat: 45.04858, ele: 88 },
        { lon: -123.99483, lat: 45.04904, ele: 99 },
        { lon: -123.99485, lat: 45.04919, ele: 101 },
        { lon: -123.9948, lat: 45.04934, ele: 102 },
        { lon: -123.99469, lat: 45.04952, ele: 103 },
        { lon: -123.99459, lat: 45.04962, ele: 104 },
        { lon: -123.99457, lat: 45.04972, ele: 105 },
        { lon: -123.99461, lat: 45.04979, ele: 106 },
        { lon: -123.99474, lat: 45.04982, ele: 105 },
        { lon: -123.99487, lat: 45.04991, ele: 105 },
        { lon: -123.99494, lat: 45.05003, ele: 105 },
        { lon: -123.99506, lat: 45.05009, ele: 105 },
        { lon: -123.99532, lat: 45.05012, ele: 106 },
        { lon: -123.99568, lat: 45.05012, ele: 107 },
        { lon: -123.99601, lat: 45.05027, ele: 105 },
        { lon: -123.99625, lat: 45.05063, ele: 104 },
        { lon: -123.99626, lat: 45.05089, ele: 107 },
        { lon: -123.99622, lat: 45.05103, ele: 110 },
        { lon: -123.99615, lat: 45.0511, ele: 111 },
        { lon: -123.99597, lat: 45.05113, ele: 113 },
        { lon: -123.99589, lat: 45.05119, ele: 114 },
        { lon: -123.9959, lat: 45.05141, ele: 117 },
        { lon: -123.99575, lat: 45.05146, ele: 119 },
        { lon: -123.99575, lat: 45.05153, ele: 119 },
        { lon: -123.99564, lat: 45.05159, ele: 121 },
        { lon: -123.99584, lat: 45.05165, ele: 120 },
        { lon: -123.99604, lat: 45.05183, ele: 123 },
        { lon: -123.99607, lat: 45.05191, ele: 124 },
        { lon: -123.99614, lat: 45.05201, ele: 126 },
        { lon: -123.99622, lat: 45.05207, ele: 129 },
        { lon: -123.99626, lat: 45.05214, ele: 131 },
        { lon: -123.99631, lat: 45.05218, ele: 132 },
        { lon: -123.99641, lat: 45.05216, ele: 132 },
        { lon: -123.99655, lat: 45.05211, ele: 133 },
        { lon: -123.99668, lat: 45.05209, ele: 134 },
        { lon: -123.99689, lat: 45.05224, ele: 141 },
        { lon: -123.997, lat: 45.05228, ele: 143 },
        { lon: -123.99707, lat: 45.05231, ele: 144 },
        { lon: -123.99715, lat: 45.05234, ele: 145 },
        { lon: -123.99726, lat: 45.05236, ele: 145 },
        { lon: -123.99747, lat: 45.05234, ele: 144 },
        { lon: -123.99772, lat: 45.05235, ele: 142 },
        { lon: -123.99806, lat: 45.05247, ele: 146 },
        { lon: -123.99823, lat: 45.05246, ele: 149 },
        { lon: -123.99841, lat: 45.05232, ele: 145 },
        { lon: -123.99858, lat: 45.05224, ele: 144 },
        { lon: -123.9989, lat: 45.05223, ele: 147 },
        { lon: -123.99914, lat: 45.05226, ele: 149 },
        { lon: -123.99935, lat: 45.05233, ele: 152 },
        { lon: -123.99956, lat: 45.05254, ele: 162 },
        { lon: -123.99992, lat: 45.05291, ele: 172 },
        { lon: -124.00021, lat: 45.05305, ele: 174 },
        { lon: -124.00041, lat: 45.05318, ele: 178 },
        { lon: -124.00053, lat: 45.05319, ele: 178 },
        { lon: -124.00065, lat: 45.05318, ele: 177 },
        { lon: -124.00071, lat: 45.05315, ele: 175 },
        { lon: -124.00079, lat: 45.05314, ele: 173 },
        { lon: -124.0009, lat: 45.05314, ele: 172 },
        { lon: -124.00108, lat: 45.05311, ele: 169 },
        { lon: -124.00136, lat: 45.05314, ele: 171 },
        { lon: -124.0016, lat: 45.05308, ele: 172 },
        { lon: -124.00205, lat: 45.05283, ele: 171 },
        { lon: -124.00232, lat: 45.05268, ele: 169 },
        { lon: -124.00255, lat: 45.05251, ele: 167 },
        { lon: -124.00276, lat: 45.05228, ele: 166 },
        { lon: -124.00297, lat: 45.05217, ele: 166 },
        { lon: -124.00323, lat: 45.05205, ele: 167 },
        { lon: -124.00393, lat: 45.05169, ele: 167 },
        { lon: -124.00435, lat: 45.05163, ele: 168 },
        { lon: -124.00451, lat: 45.05165, ele: 169 },
        { lon: -124.00454, lat: 45.05168, ele: 170 },
        { lon: -124.00507, lat: 45.05187, ele: 176 },
        { lon: -124.00531, lat: 45.05187, ele: 176 },
        { lon: -124.00546, lat: 45.05182, ele: 173 },
        { lon: -124.00558, lat: 45.05183, ele: 173 },
        { lon: -124.00571, lat: 45.05183, ele: 171 },
        { lon: -124.00584, lat: 45.05178, ele: 168 },
        { lon: -124.00596, lat: 45.0518, ele: 166 },
        { lon: -124.00604, lat: 45.05192, ele: 168 },
        { lon: -124.00608, lat: 45.05201, ele: 171 },
        { lon: -124.00616, lat: 45.05211, ele: 174 },
        { lon: -124.00636, lat: 45.05229, ele: 179 },
        { lon: -124.00665, lat: 45.05246, ele: 185 },
        { lon: -124.00692, lat: 45.05256, ele: 184 },
        { lon: -124.00714, lat: 45.0527, ele: 186 },
        { lon: -124.00716, lat: 45.05272, ele: 187 },
        { lon: -124.00719, lat: 45.05277, ele: 189 },
        { lon: -124.00723, lat: 45.05282, ele: 191 },
        { lon: -124.00735, lat: 45.0528, ele: 189 },
        { lon: -124.00743, lat: 45.05276, ele: 187 },
        { lon: -124.0076, lat: 45.05266, ele: 183 },
        { lon: -124.00777, lat: 45.05257, ele: 180 },
        { lon: -124.00793, lat: 45.0525, ele: 182 },
        { lon: -124.00811, lat: 45.05242, ele: 183 },
        { lon: -124.00825, lat: 45.05237, ele: 184 },
        { lon: -124.00839, lat: 45.05234, ele: 186 },
        { lon: -124.00852, lat: 45.05233, ele: 187 },
        { lon: -124.00864, lat: 45.05233, ele: 188 },
        { lon: -124.00876, lat: 45.05234, ele: 187 },
        { lon: -124.0087, lat: 45.0524, ele: 191 },
        { lon: -124.00862, lat: 45.05242, ele: 192 },
        { lon: -124.00856, lat: 45.05248, ele: 195 },
        { lon: -124.00845, lat: 45.05258, ele: 197 },
        { lon: -124.0083, lat: 45.05268, ele: 198 },
        { lon: -124.00831, lat: 45.05275, ele: 201 },
        { lon: -124.00859, lat: 45.05295, ele: 211 },
        { lon: -124.00883, lat: 45.0532, ele: 217 },
        { lon: -124.00884, lat: 45.05326, ele: 219 },
        { lon: -124.00849, lat: 45.05323, ele: 222 },
        { lon: -124.00817, lat: 45.05331, ele: 226 },
        { lon: -124.00783, lat: 45.05348, ele: 230 },
        { lon: -124.00774, lat: 45.05355, ele: 233 },
        { lon: -124.00766, lat: 45.05358, ele: 234 },
        { lon: -124.00754, lat: 45.05365, ele: 237 },
        { lon: -124.00738, lat: 45.05371, ele: 240 },
        { lon: -124.00733, lat: 45.05374, ele: 242 },
        { lon: -124.0076, lat: 45.05386, ele: 246 },
        { lon: -124.00767, lat: 45.0539, ele: 248 },
        { lon: -124.00769, lat: 45.05395, ele: 249 },
        { lon: -124.00766, lat: 45.05397, ele: 250 },
        { lon: -124.00706, lat: 45.05409, ele: 260 },
        { lon: -124.00679, lat: 45.05422, ele: 271 },
        { lon: -124.00708, lat: 45.05443, ele: 278 },
        { lon: -124.00709, lat: 45.05448, ele: 279 },
        { lon: -124.0063, lat: 45.05446, ele: 295 },
        { lon: -124.00645, lat: 45.05469, ele: 304 },
        { lon: -124.00624, lat: 45.05461, ele: 302 },
        { lon: -124.00629, lat: 45.05477, ele: 308 },
        { lon: -124.00629, lat: 45.05489, ele: 312 },
        { lon: -124.00614, lat: 45.05477, ele: 309 },
        { lon: -124.00608, lat: 45.05487, ele: 313 },
        { lon: -124.00591, lat: 45.05473, ele: 311 },
        { lon: -124.00565, lat: 45.05465, ele: 313 },
        { lon: -124.00537, lat: 45.05463, ele: 315 },
        { lon: -124.00524, lat: 45.05468, ele: 317 },
        { lon: -124.00502, lat: 45.05481, ele: 318 },
        { lon: -124.00502, lat: 45.05486, ele: 320 },
        { lon: -124.00541, lat: 45.05507, ele: 326 },
        { lon: -124.00549, lat: 45.05511, ele: 327 },
        { lon: -124.00553, lat: 45.05516, ele: 328 },
        { lon: -124.00554, lat: 45.05524, ele: 330 },
        { lon: -124.00555, lat: 45.0554, ele: 334 },
        { lon: -124.00559, lat: 45.05561, ele: 339 },
        { lon: -124.00558, lat: 45.05574, ele: 340 },
        { lon: -124.00551, lat: 45.05582, ele: 342 },
        { lon: -124.00545, lat: 45.05589, ele: 343 },
        { lon: -124.00531, lat: 45.05595, ele: 344 },
        { lon: -124.00513, lat: 45.0562, ele: 348 },
        { lon: -124.00485, lat: 45.05639, ele: 355 },
        { lon: -124.00442, lat: 45.05659, ele: 363 },
        { lon: -124.00435, lat: 45.05664, ele: 364 },
        { lon: -124.00385, lat: 45.05686, ele: 363 },
        { lon: -124.00371, lat: 45.05689, ele: 363 },
        { lon: -124.00355, lat: 45.05693, ele: 364 },
        { lon: -124.00347, lat: 45.05693, ele: 364 },
        { lon: -124.00355, lat: 45.05693, ele: 364 },
        { lon: -124.00371, lat: 45.05689, ele: 363 },
        { lon: -124.00385, lat: 45.05686, ele: 363 },
        { lon: -124.00435, lat: 45.05664, ele: 364 },
        { lon: -124.00442, lat: 45.05659, ele: 363 },
        { lon: -124.00485, lat: 45.05639, ele: 355 },
        { lon: -124.00513, lat: 45.0562, ele: 348 },
        { lon: -124.00531, lat: 45.05595, ele: 344 },
        { lon: -124.00545, lat: 45.05589, ele: 343 },
        { lon: -124.00551, lat: 45.05582, ele: 342 },
        { lon: -124.00558, lat: 45.05574, ele: 340 },
        { lon: -124.00559, lat: 45.05561, ele: 339 },
        { lon: -124.00555, lat: 45.0554, ele: 334 },
        { lon: -124.00554, lat: 45.05524, ele: 330 },
        { lon: -124.00553, lat: 45.05516, ele: 328 },
        { lon: -124.00549, lat: 45.05511, ele: 327 },
        { lon: -124.00541, lat: 45.05507, ele: 326 },
        { lon: -124.00502, lat: 45.05486, ele: 320 },
        { lon: -124.00502, lat: 45.05481, ele: 318 },
        { lon: -124.00524, lat: 45.05468, ele: 317 },
        { lon: -124.00537, lat: 45.05463, ele: 315 },
        { lon: -124.00565, lat: 45.05465, ele: 313 },
        { lon: -124.00591, lat: 45.05473, ele: 311 },
        { lon: -124.00608, lat: 45.05487, ele: 313 },
        { lon: -124.00614, lat: 45.05477, ele: 309 },
        { lon: -124.00629, lat: 45.05489, ele: 312 },
        { lon: -124.00629, lat: 45.05477, ele: 308 },
        { lon: -124.00624, lat: 45.05461, ele: 302 },
        { lon: -124.00645, lat: 45.05469, ele: 304 },
        { lon: -124.0063, lat: 45.05446, ele: 295 },
        { lon: -124.00709, lat: 45.05448, ele: 279 },
        { lon: -124.00708, lat: 45.05443, ele: 278 },
        { lon: -124.00679, lat: 45.05422, ele: 271 },
        { lon: -124.00706, lat: 45.05409, ele: 260 },
        { lon: -124.00766, lat: 45.05397, ele: 250 },
        { lon: -124.00769, lat: 45.05395, ele: 249 },
        { lon: -124.00767, lat: 45.0539, ele: 248 },
        { lon: -124.0076, lat: 45.05386, ele: 246 },
        { lon: -124.00733, lat: 45.05374, ele: 242 },
        { lon: -124.00738, lat: 45.05371, ele: 240 },
        { lon: -124.00754, lat: 45.05365, ele: 237 },
        { lon: -124.00766, lat: 45.05358, ele: 234 },
        { lon: -124.00774, lat: 45.05355, ele: 233 },
        { lon: -124.00783, lat: 45.05348, ele: 230 },
        { lon: -124.00817, lat: 45.05331, ele: 226 },
        { lon: -124.00849, lat: 45.05323, ele: 222 },
        { lon: -124.00884, lat: 45.05326, ele: 219 },
        { lon: -124.00883, lat: 45.0532, ele: 217 },
        { lon: -124.00859, lat: 45.05295, ele: 211 },
        { lon: -124.00831, lat: 45.05275, ele: 201 },
        { lon: -124.0083, lat: 45.05268, ele: 198 },
        { lon: -124.00845, lat: 45.05258, ele: 197 },
        { lon: -124.00856, lat: 45.05248, ele: 195 },
        { lon: -124.00862, lat: 45.05242, ele: 192 },
        { lon: -124.0087, lat: 45.0524, ele: 191 },
        { lon: -124.00876, lat: 45.05234, ele: 187 },
        { lon: -124.00864, lat: 45.05233, ele: 188 },
        { lon: -124.00852, lat: 45.05233, ele: 187 },
        { lon: -124.00839, lat: 45.05234, ele: 186 },
        { lon: -124.00825, lat: 45.05237, ele: 184 },
        { lon: -124.00811, lat: 45.05242, ele: 183 },
        { lon: -124.00793, lat: 45.0525, ele: 182 },
        { lon: -124.00777, lat: 45.05257, ele: 180 },
        { lon: -124.0076, lat: 45.05266, ele: 183 },
        { lon: -124.00743, lat: 45.05276, ele: 187 },
        { lon: -124.00735, lat: 45.0528, ele: 189 },
        { lon: -124.00723, lat: 45.05282, ele: 191 },
        { lon: -124.00719, lat: 45.05277, ele: 189 },
        { lon: -124.00716, lat: 45.05272, ele: 187 },
        { lon: -124.00714, lat: 45.0527, ele: 186 },
        { lon: -124.00692, lat: 45.05256, ele: 184 },
        { lon: -124.00665, lat: 45.05246, ele: 185 },
        { lon: -124.00636, lat: 45.05229, ele: 179 },
        { lon: -124.00616, lat: 45.05211, ele: 174 },
        { lon: -124.00608, lat: 45.05201, ele: 171 },
        { lon: -124.00604, lat: 45.05192, ele: 168 },
        { lon: -124.00596, lat: 45.0518, ele: 166 },
        { lon: -124.00584, lat: 45.05178, ele: 168 },
        { lon: -124.00571, lat: 45.05183, ele: 171 },
        { lon: -124.00558, lat: 45.05183, ele: 173 },
        { lon: -124.00546, lat: 45.05182, ele: 173 },
        { lon: -124.00531, lat: 45.05187, ele: 176 },
        { lon: -124.00507, lat: 45.05187, ele: 176 },
        { lon: -124.00454, lat: 45.05168, ele: 170 },
        { lon: -124.00451, lat: 45.05165, ele: 169 },
        { lon: -124.00435, lat: 45.05163, ele: 168 },
        { lon: -124.00393, lat: 45.05169, ele: 167 },
        { lon: -124.00323, lat: 45.05205, ele: 167 },
        { lon: -124.00297, lat: 45.05217, ele: 166 },
        { lon: -124.00276, lat: 45.05228, ele: 166 },
        { lon: -124.00255, lat: 45.05251, ele: 167 },
        { lon: -124.00232, lat: 45.05268, ele: 169 },
        { lon: -124.00205, lat: 45.05283, ele: 171 },
        { lon: -124.0016, lat: 45.05308, ele: 172 },
        { lon: -124.00136, lat: 45.05314, ele: 171 },
        { lon: -124.00108, lat: 45.05311, ele: 169 },
        { lon: -124.0009, lat: 45.05314, ele: 172 },
        { lon: -124.00079, lat: 45.05314, ele: 173 },
        { lon: -124.00071, lat: 45.05315, ele: 175 },
        { lon: -124.00065, lat: 45.05318, ele: 177 },
        { lon: -124.00053, lat: 45.05319, ele: 178 },
        { lon: -124.00041, lat: 45.05318, ele: 178 },
        { lon: -124.00021, lat: 45.05305, ele: 174 },
        { lon: -123.99992, lat: 45.05291, ele: 172 },
        { lon: -123.99956, lat: 45.05254, ele: 162 },
        { lon: -123.99935, lat: 45.05233, ele: 152 },
        { lon: -123.99914, lat: 45.05226, ele: 149 },
        { lon: -123.9989, lat: 45.05223, ele: 147 },
        { lon: -123.99858, lat: 45.05224, ele: 144 },
        { lon: -123.99841, lat: 45.05232, ele: 145 },
        { lon: -123.99823, lat: 45.05246, ele: 149 },
        { lon: -123.99806, lat: 45.05247, ele: 146 },
        { lon: -123.99772, lat: 45.05235, ele: 142 },
        { lon: -123.99747, lat: 45.05234, ele: 144 },
        { lon: -123.99726, lat: 45.05236, ele: 145 },
        { lon: -123.99715, lat: 45.05234, ele: 145 },
        { lon: -123.99707, lat: 45.05231, ele: 144 },
        { lon: -123.997, lat: 45.05228, ele: 143 },
        { lon: -123.99689, lat: 45.05224, ele: 141 },
        { lon: -123.99668, lat: 45.05209, ele: 134 },
        { lon: -123.99655, lat: 45.05211, ele: 133 },
        { lon: -123.99641, lat: 45.05216, ele: 132 },
        { lon: -123.99631, lat: 45.05218, ele: 132 },
        { lon: -123.99626, lat: 45.05214, ele: 131 },
        { lon: -123.99622, lat: 45.05207, ele: 129 },
        { lon: -123.99614, lat: 45.05201, ele: 126 },
        { lon: -123.99607, lat: 45.05191, ele: 124 },
        { lon: -123.99604, lat: 45.05183, ele: 123 },
        { lon: -123.99584, lat: 45.05165, ele: 120 },
        { lon: -123.99564, lat: 45.05159, ele: 121 },
        { lon: -123.99575, lat: 45.05153, ele: 119 },
        { lon: -123.99575, lat: 45.05146, ele: 119 },
        { lon: -123.9959, lat: 45.05141, ele: 117 },
        { lon: -123.99589, lat: 45.05119, ele: 114 },
        { lon: -123.99597, lat: 45.05113, ele: 113 },
        { lon: -123.99615, lat: 45.0511, ele: 111 },
        { lon: -123.99622, lat: 45.05103, ele: 110 },
        { lon: -123.99626, lat: 45.05089, ele: 107 },
        { lon: -123.99625, lat: 45.05063, ele: 104 },
        { lon: -123.99601, lat: 45.05027, ele: 105 },
        { lon: -123.99568, lat: 45.05012, ele: 107 },
        { lon: -123.99532, lat: 45.05012, ele: 106 },
        { lon: -123.99506, lat: 45.05009, ele: 105 },
        { lon: -123.99494, lat: 45.05003, ele: 105 },
        { lon: -123.99487, lat: 45.04991, ele: 105 },
        { lon: -123.99474, lat: 45.04982, ele: 105 },
        { lon: -123.99461, lat: 45.04979, ele: 106 },
        { lon: -123.99457, lat: 45.04972, ele: 105 },
        { lon: -123.99459, lat: 45.04962, ele: 104 },
        { lon: -123.99469, lat: 45.04952, ele: 103 },
        { lon: -123.9948, lat: 45.04934, ele: 102 },
        { lon: -123.99485, lat: 45.04919, ele: 101 },
        { lon: -123.99483, lat: 45.04904, ele: 99 },
        { lon: -123.99484, lat: 45.04858, ele: 88 },
        { lon: -123.99465, lat: 45.0483, ele: 79 },
        { lon: -123.99463, lat: 45.04801, ele: 69 },
        { lon: -123.99467, lat: 45.04782, ele: 63 },
        { lon: -123.99474, lat: 45.04765, ele: 58 },
        { lon: -123.99497, lat: 45.04753, ele: 54 },
        { lon: -123.99504, lat: 45.04748, ele: 52 },
        { lon: -123.99502, lat: 45.04743, ele: 51 },
        { lon: -123.99498, lat: 45.04735, ele: 51 },
        { lon: -123.99497, lat: 45.04721, ele: 49 },
        { lon: -123.99519, lat: 45.04687, ele: 46 },
        { lon: -123.99533, lat: 45.04654, ele: 46 },
        { lon: -123.99535, lat: 45.04632, ele: 46 },
        { lon: -123.99529, lat: 45.04621, ele: 46 },
        { lon: -123.99515, lat: 45.0461, ele: 46 },
        { lon: -123.99501, lat: 45.04603, ele: 46 },
        { lon: -123.99483, lat: 45.04593, ele: 47 },
        { lon: -123.99475, lat: 45.04592, ele: 48 },
        { lon: -123.99464, lat: 45.04593, ele: 48 },
        { lon: -123.9941, lat: 45.04564, ele: 49 },
        { lon: -123.99386, lat: 45.04567, ele: 45 },
        { lon: -123.99372, lat: 45.04558, ele: 43 },
        { lon: -123.99327, lat: 45.04538, ele: 40 },
        { lon: -123.99292, lat: 45.0452, ele: 38 },
        { lon: -123.9925, lat: 45.04483, ele: 34 },
        { lon: -123.99203, lat: 45.04454, ele: 27 },
        { lon: -123.99191, lat: 45.04445, ele: 25 },
        { lon: -123.99189, lat: 45.04433, ele: 26 },
        { lon: -123.99191, lat: 45.0443, ele: 27 },
        { lon: -123.99193, lat: 45.04427, ele: 28 },
        { lon: -123.99196, lat: 45.04414, ele: 31 },
        { lon: -123.99192, lat: 45.04405, ele: 32 },
        { lon: -123.99176, lat: 45.04396, ele: 29 },
        { lon: -123.99158, lat: 45.04389, ele: 25 },
        { lon: -123.99141, lat: 45.04375, ele: 23 },
        { lon: -123.9913, lat: 45.04362, ele: 22 },
        { lon: -123.99118, lat: 45.0435, ele: 17 },
        { lon: -123.99119, lat: 45.04331, ele: 16 },
        { lon: -123.99119, lat: 45.043, ele: 13 },
        { lon: -123.9913, lat: 45.0428, ele: 17 },
        { lon: -123.99142, lat: 45.04273, ele: 19 },
        { lon: -123.99157, lat: 45.04265, ele: 20 },
        { lon: -123.99211, lat: 45.04224, ele: 18 },
        { lon: -123.99223, lat: 45.04213, ele: 19 },
        { lon: -123.99224, lat: 45.04205, ele: 18 },
        { lon: -123.99222, lat: 45.04201, ele: 17 },
        { lon: -123.99224, lat: 45.04194, ele: 16 }
  ]
};

const App = () => (
  <div>
    <MapComponent trail={sampleTrailData} />
  </div>
);

export default App;