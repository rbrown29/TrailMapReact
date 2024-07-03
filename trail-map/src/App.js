import React from 'react';
import MapComponent from './components/Map';
import './App.css';

const sampleTrailData = {
  name: "Multnomah-Wahkeena Loop Hike",
  length: 5.3,
  Difficulty: "Moderate",
  data: [
    { lon: -122.12798, lat: 45.57533, ele: 49 },
        { lon: -122.12797, lat: 45.57534, ele: 49 },
        { lon: -122.12797, lat: 45.57533, ele: 49 },
        { lon: -122.12795, lat: 45.57524, ele: 52 },
        { lon: -122.12828, lat: 45.57524, ele: 52 },
        { lon: -122.12848, lat: 45.57524, ele: 54 },
        { lon: -122.12872, lat: 45.57528, ele: 55 },
        { lon: -122.12897, lat: 45.57528, ele: 60 },
        { lon: -122.12928, lat: 45.57527, ele: 68 },
        { lon: -122.12945, lat: 45.57527, ele: 72 },
        { lon: -122.12962, lat: 45.57527, ele: 74 },
        { lon: -122.12958, lat: 45.57516, ele: 80 },
        { lon: -122.1293, lat: 45.57512, ele: 78 },
        { lon: -122.12911, lat: 45.57507, ele: 77 },
        { lon: -122.12878, lat: 45.57497, ele: 75 },
        { lon: -122.12863, lat: 45.57489, ele: 80 },
        { lon: -122.12851, lat: 45.57472, ele: 96 },
        { lon: -122.12822, lat: 45.57464, ele: 101 },
        { lon: -122.12793, lat: 45.57452, ele: 106 },
        { lon: -122.12779, lat: 45.57447, ele: 109 },
        { lon: -122.12768, lat: 45.57442, ele: 116 },
        { lon: -122.12766, lat: 45.5744, ele: 119 },
        { lon: -122.12756, lat: 45.57432, ele: 132 },
        { lon: -122.12738, lat: 45.57439, ele: 128 },
        { lon: -122.12738, lat: 45.57453, ele: 113 },
        { lon: -122.12733, lat: 45.57458, ele: 111 },
        { lon: -122.12725, lat: 45.57467, ele: 108 },
        { lon: -122.12706, lat: 45.57473, ele: 109 },
        { lon: -122.12676, lat: 45.57482, ele: 105 },
        { lon: -122.12638, lat: 45.57491, ele: 103 },
        { lon: -122.12609, lat: 45.57495, ele: 105 },
        { lon: -122.12605, lat: 45.57495, ele: 106 },
        { lon: -122.1258, lat: 45.57501, ele: 101 },
        { lon: -122.12567, lat: 45.57508, ele: 101 },
        { lon: -122.12535, lat: 45.57521, ele: 102 },
        { lon: -122.12549, lat: 45.57496, ele: 117 },
        { lon: -122.12562, lat: 45.57473, ele: 156 },
        { lon: -122.12589, lat: 45.57458, ele: 177 },
        { lon: -122.12618, lat: 45.57451, ele: 173 },
        { lon: -122.12635, lat: 45.57437, ele: 175 },
        { lon: -122.12645, lat: 45.57432, ele: 173 },
        { lon: -122.12635, lat: 45.57432, ele: 177 },
        { lon: -122.12617, lat: 45.57434, ele: 184 },
        { lon: -122.1259, lat: 45.57435, ele: 195 },
        { lon: -122.12603, lat: 45.5743, ele: 191 },
        { lon: -122.12634, lat: 45.57414, ele: 185 },
        { lon: -122.12597, lat: 45.5742, ele: 196 },
        { lon: -122.12624, lat: 45.57405, ele: 193 },
        { lon: -122.12614, lat: 45.57406, ele: 196 },
        { lon: -122.12595, lat: 45.57412, ele: 200 },
        { lon: -122.12603, lat: 45.57404, ele: 201 },
        { lon: -122.12624, lat: 45.57396, ele: 198 },
        { lon: -122.12583, lat: 45.57402, ele: 211 },
        { lon: -122.12615, lat: 45.57373, ele: 215 },
        { lon: -122.12591, lat: 45.57379, ele: 221 },
        { lon: -122.12613, lat: 45.57357, ele: 226 },
        { lon: -122.12647, lat: 45.57381, ele: 198 },
        { lon: -122.12644, lat: 45.57361, ele: 210 },
        { lon: -122.12641, lat: 45.57341, ele: 224 },
        { lon: -122.12644, lat: 45.57317, ele: 236 },
        { lon: -122.12642, lat: 45.57302, ele: 242 },
        { lon: -122.12632, lat: 45.57272, ele: 247 },
        { lon: -122.12629, lat: 45.57248, ele: 250 },
        { lon: -122.12629, lat: 45.57236, ele: 255 },
        { lon: -122.12625, lat: 45.57222, ele: 261 },
        { lon: -122.12631, lat: 45.57218, ele: 263 },
        { lon: -122.12616, lat: 45.5719, ele: 273 },
        { lon: -122.12602, lat: 45.57168, ele: 275 },
        { lon: -122.12586, lat: 45.57141, ele: 293 },
        { lon: -122.12578, lat: 45.57127, ele: 300 },
        { lon: -122.12569, lat: 45.5713, ele: 299 },
        { lon: -122.1256, lat: 45.5712, ele: 303 },
        { lon: -122.12555, lat: 45.57123, ele: 302 },
        { lon: -122.12541, lat: 45.57132, ele: 302 },
        { lon: -122.12534, lat: 45.57078, ele: 313 },
        { lon: -122.12519, lat: 45.57089, ele: 313 },
        { lon: -122.1252, lat: 45.57055, ele: 317 },
        { lon: -122.12498, lat: 45.57084, ele: 315 },
        { lon: -122.12489, lat: 45.57064, ele: 319 },
        { lon: -122.12469, lat: 45.57043, ele: 326 },
        { lon: -122.12468, lat: 45.57038, ele: 327 },
        { lon: -122.12469, lat: 45.57031, ele: 328 },
        { lon: -122.12479, lat: 45.57013, ele: 337 },
        { lon: -122.1245, lat: 45.57017, ele: 337 },
        { lon: -122.12473, lat: 45.57005, ele: 342 },
        { lon: -122.12442, lat: 45.57008, ele: 341 },
        { lon: -122.12474, lat: 45.56991, ele: 349 },
        { lon: -122.1245, lat: 45.56996, ele: 344 },
        { lon: -122.12473, lat: 45.56956, ele: 368 },
        { lon: -122.12413, lat: 45.56968, ele: 361 },
        { lon: -122.12366, lat: 45.5697, ele: 363 },
        { lon: -122.12435, lat: 45.56933, ele: 382 },
        { lon: -122.12473, lat: 45.56906, ele: 395 },
        { lon: -122.12437, lat: 45.56912, ele: 395 },
        { lon: -122.12398, lat: 45.5692, ele: 394 },
        { lon: -122.12374, lat: 45.56916, ele: 398 },
        { lon: -122.1234, lat: 45.56918, ele: 398 },
        { lon: -122.12325, lat: 45.56907, ele: 405 },
        { lon: -122.12319, lat: 45.56893, ele: 413 },
        { lon: -122.12304, lat: 45.56873, ele: 418 },
        { lon: -122.1227, lat: 45.56851, ele: 422 },
        { lon: -122.12248, lat: 45.56842, ele: 425 },
        { lon: -122.12243, lat: 45.56843, ele: 426 },
        { lon: -122.12201, lat: 45.56855, ele: 430 },
        { lon: -122.12184, lat: 45.56857, ele: 432 },
        { lon: -122.12156, lat: 45.56862, ele: 432 },
        { lon: -122.12122, lat: 45.56851, ele: 436 },
        { lon: -122.12111, lat: 45.56859, ele: 434 },
        { lon: -122.12075, lat: 45.56866, ele: 438 },
        { lon: -122.12046, lat: 45.56867, ele: 441 },
        { lon: -122.12029, lat: 45.56865, ele: 443 },
        { lon: -122.12018, lat: 45.56859, ele: 445 },
        { lon: -122.11982, lat: 45.56842, ele: 451 },
        { lon: -122.1197, lat: 45.56825, ele: 455 },
        { lon: -122.11947, lat: 45.56839, ele: 458 },
        { lon: -122.1192, lat: 45.56861, ele: 459 },
        { lon: -122.11908, lat: 45.56878, ele: 462 },
        { lon: -122.1189, lat: 45.56885, ele: 464 },
        { lon: -122.11876, lat: 45.56889, ele: 468 },
        { lon: -122.11861, lat: 45.5689, ele: 472 },
        { lon: -122.11851, lat: 45.56886, ele: 476 },
        { lon: -122.11839, lat: 45.56893, ele: 482 },
        { lon: -122.11833, lat: 45.56912, ele: 484 },
        { lon: -122.11814, lat: 45.56927, ele: 490 },
        { lon: -122.11803, lat: 45.5695, ele: 492 },
        { lon: -122.11788, lat: 45.56965, ele: 499 },
        { lon: -122.11785, lat: 45.56984, ele: 500 },
        { lon: -122.11792, lat: 45.56996, ele: 497 },
        { lon: -122.11784, lat: 45.57007, ele: 499 },
        { lon: -122.11774, lat: 45.57014, ele: 501 },
        { lon: -122.1175, lat: 45.57037, ele: 501 },
        { lon: -122.11731, lat: 45.57053, ele: 499 },
        { lon: -122.11701, lat: 45.57065, ele: 498 },
        { lon: -122.11666, lat: 45.57085, ele: 491 },
        { lon: -122.11658, lat: 45.57087, ele: 491 },
        { lon: -122.11636, lat: 45.57085, ele: 495 },
        { lon: -122.11617, lat: 45.5709, ele: 499 },
        { lon: -122.11595, lat: 45.57094, ele: 507 },
        { lon: -122.11579, lat: 45.571, ele: 511 },
        { lon: -122.11572, lat: 45.57119, ele: 507 },
        { lon: -122.11569, lat: 45.57128, ele: 506 },
        { lon: -122.11568, lat: 45.57142, ele: 503 },
        { lon: -122.11578, lat: 45.57164, ele: 494 },
        { lon: -122.11579, lat: 45.57172, ele: 492 },
        { lon: -122.11581, lat: 45.57183, ele: 490 },
        { lon: -122.11571, lat: 45.57225, ele: 482 },
        { lon: -122.11564, lat: 45.57233, ele: 480 },
        { lon: -122.11555, lat: 45.5724, ele: 480 },
        { lon: -122.1155, lat: 45.57242, ele: 479 },
        { lon: -122.11539, lat: 45.57243, ele: 480 },
        { lon: -122.11507, lat: 45.57234, ele: 482 },
        { lon: -122.11489, lat: 45.57233, ele: 481 },
        { lon: -122.11461, lat: 45.57229, ele: 484 },
        { lon: -122.1144, lat: 45.57217, ele: 494 },
        { lon: -122.11423, lat: 45.57213, ele: 500 },
        { lon: -122.11412, lat: 45.57217, ele: 499 },
        { lon: -122.11402, lat: 45.57226, ele: 494 },
        { lon: -122.11395, lat: 45.57243, ele: 485 },
        { lon: -122.11388, lat: 45.5725, ele: 483 },
        { lon: -122.11368, lat: 45.57252, ele: 486 },
        { lon: -122.11338, lat: 45.5727, ele: 488 },
        { lon: -122.11332, lat: 45.5728, ele: 486 },
        { lon: -122.11327, lat: 45.57291, ele: 480 },
        { lon: -122.11328, lat: 45.57306, ele: 471 },
        { lon: -122.11323, lat: 45.57316, ele: 465 },
        { lon: -122.11289, lat: 45.57323, ele: 466 },
        { lon: -122.11266, lat: 45.57331, ele: 462 },
        { lon: -122.11247, lat: 45.57342, ele: 454 },
        { lon: -122.11237, lat: 45.57355, ele: 445 },
        { lon: -122.11223, lat: 45.57348, ele: 449 },
        { lon: -122.11204, lat: 45.57336, ele: 454 },
        { lon: -122.11188, lat: 45.57331, ele: 455 },
        { lon: -122.11174, lat: 45.5733, ele: 455 },
        { lon: -122.11148, lat: 45.57336, ele: 451 },
        { lon: -122.11125, lat: 45.57339, ele: 451 },
        { lon: -122.111, lat: 45.57358, ele: 443 },
        { lon: -122.11076, lat: 45.57369, ele: 437 },
        { lon: -122.11053, lat: 45.57379, ele: 432 },
        { lon: -122.11038, lat: 45.57392, ele: 424 },
        { lon: -122.11029, lat: 45.57392, ele: 423 },
        { lon: -122.11008, lat: 45.57372, ele: 428 },
        { lon: -122.10982, lat: 45.57367, ele: 422 },
        { lon: -122.10967, lat: 45.57354, ele: 423 },
        { lon: -122.10945, lat: 45.5735, ele: 418 },
        { lon: -122.10931, lat: 45.57349, ele: 414 },
        { lon: -122.1091, lat: 45.57352, ele: 406 },
        { lon: -122.1089, lat: 45.5736, ele: 395 },
        { lon: -122.10885, lat: 45.57359, ele: 395 },
        { lon: -122.10887, lat: 45.57347, ele: 402 },
        { lon: -122.10885, lat: 45.57309, ele: 412 },
        { lon: -122.10878, lat: 45.57298, ele: 411 },
        { lon: -122.10876, lat: 45.57289, ele: 410 },
        { lon: -122.10878, lat: 45.57272, ele: 411 },
        { lon: -122.10876, lat: 45.57258, ele: 411 },
        { lon: -122.10871, lat: 45.57246, ele: 411 },
        { lon: -122.10857, lat: 45.57239, ele: 406 },
        { lon: -122.1085, lat: 45.57234, ele: 406 },
        { lon: -122.10838, lat: 45.57221, ele: 407 },
        { lon: -122.10815, lat: 45.57201, ele: 411 },
        { lon: -122.10784, lat: 45.57182, ele: 412 },
        { lon: -122.10771, lat: 45.57173, ele: 412 },
        { lon: -122.10755, lat: 45.57169, ele: 410 },
        { lon: -122.10722, lat: 45.57156, ele: 412 },
        { lon: -122.10759, lat: 45.57196, ele: 400 },
        { lon: -122.10796, lat: 45.57223, ele: 396 },
        { lon: -122.10814, lat: 45.57265, ele: 395 },
        { lon: -122.10805, lat: 45.57287, ele: 395 },
        { lon: -122.10812, lat: 45.5731, ele: 394 },
        { lon: -122.10804, lat: 45.57329, ele: 385 },
        { lon: -122.10793, lat: 45.57337, ele: 380 },
        { lon: -122.10788, lat: 45.57346, ele: 376 },
        { lon: -122.10778, lat: 45.57353, ele: 372 },
        { lon: -122.10773, lat: 45.57364, ele: 368 },
        { lon: -122.10761, lat: 45.57368, ele: 365 },
        { lon: -122.10747, lat: 45.57384, ele: 359 },
        { lon: -122.10749, lat: 45.57395, ele: 355 },
        { lon: -122.10741, lat: 45.57407, ele: 355 },
        { lon: -122.10742, lat: 45.57407, ele: 354 },
        { lon: -122.10741, lat: 45.57407, ele: 355 },
        { lon: -122.10751, lat: 45.57417, ele: 349 },
        { lon: -122.10764, lat: 45.57425, ele: 346 },
        { lon: -122.10776, lat: 45.57429, ele: 343 },
        { lon: -122.10795, lat: 45.57435, ele: 340 },
        { lon: -122.1082, lat: 45.57453, ele: 334 },
        { lon: -122.10854, lat: 45.57459, ele: 335 },
        { lon: -122.10866, lat: 45.57471, ele: 329 },
        { lon: -122.10849, lat: 45.57468, ele: 329 },
        { lon: -122.10865, lat: 45.57484, ele: 322 },
        { lon: -122.10838, lat: 45.5747, ele: 328 },
        { lon: -122.10848, lat: 45.5748, ele: 324 },
        { lon: -122.10855, lat: 45.57489, ele: 320 },
        { lon: -122.10864, lat: 45.57496, ele: 317 },
        { lon: -122.10864, lat: 45.57509, ele: 315 },
        { lon: -122.10871, lat: 45.57523, ele: 314 },
        { lon: -122.10886, lat: 45.57542, ele: 314 },
        { lon: -122.109, lat: 45.57551, ele: 312 },
        { lon: -122.10913, lat: 45.57556, ele: 309 },
        { lon: -122.10941, lat: 45.57561, ele: 309 },
        { lon: -122.10978, lat: 45.57562, ele: 309 },
        { lon: -122.1102, lat: 45.57559, ele: 305 },
        { lon: -122.11024, lat: 45.5756, ele: 304 },
        { lon: -122.11045, lat: 45.57565, ele: 302 },
        { lon: -122.11059, lat: 45.57566, ele: 302 },
        { lon: -122.11069, lat: 45.57564, ele: 302 },
        { lon: -122.11104, lat: 45.57547, ele: 307 },
        { lon: -122.11117, lat: 45.57543, ele: 308 },
        { lon: -122.1114, lat: 45.5754, ele: 304 },
        { lon: -122.11159, lat: 45.57546, ele: 304 },
        { lon: -122.11177, lat: 45.57554, ele: 300 },
        { lon: -122.11191, lat: 45.57577, ele: 284 },
        { lon: -122.11211, lat: 45.57583, ele: 277 },
        { lon: -122.11228, lat: 45.57591, ele: 272 },
        { lon: -122.11235, lat: 45.576, ele: 267 },
        { lon: -122.11254, lat: 45.57605, ele: 263 },
        { lon: -122.11263, lat: 45.57614, ele: 260 },
        { lon: -122.11291, lat: 45.57614, ele: 257 },
        { lon: -122.11317, lat: 45.57619, ele: 254 },
        { lon: -122.11327, lat: 45.57614, ele: 254 },
        { lon: -122.11357, lat: 45.57613, ele: 252 },
        { lon: -122.11373, lat: 45.57608, ele: 253 },
        { lon: -122.11411, lat: 45.57602, ele: 253 },
        { lon: -122.11423, lat: 45.57604, ele: 252 },
        { lon: -122.11452, lat: 45.57611, ele: 247 },
        { lon: -122.11424, lat: 45.57595, ele: 252 },
        { lon: -122.11399, lat: 45.57588, ele: 254 },
        { lon: -122.11465, lat: 45.57582, ele: 247 },
        { lon: -122.11506, lat: 45.57587, ele: 244 },
        { lon: -122.11465, lat: 45.57582, ele: 247 },
        { lon: -122.11399, lat: 45.57588, ele: 254 },
        { lon: -122.11424, lat: 45.57595, ele: 252 },
        { lon: -122.11452, lat: 45.57611, ele: 247 },
        { lon: -122.11423, lat: 45.57604, ele: 252 },
        { lon: -122.11411, lat: 45.57602, ele: 253 },
        { lon: -122.11373, lat: 45.57608, ele: 253 },
        { lon: -122.11357, lat: 45.57613, ele: 252 },
        { lon: -122.11368, lat: 45.57614, ele: 252 },
        { lon: -122.11324, lat: 45.57632, ele: 250 },
        { lon: -122.11355, lat: 45.5764, ele: 248 },
        { lon: -122.11305, lat: 45.57654, ele: 246 },
        { lon: -122.11294, lat: 45.57661, ele: 250 },
        { lon: -122.11271, lat: 45.57666, ele: 259 },
        { lon: -122.11242, lat: 45.57664, ele: 258 },
        { lon: -122.11214, lat: 45.57671, ele: 254 },
        { lon: -122.11229, lat: 45.57672, ele: 254 },
        { lon: -122.11234, lat: 45.57673, ele: 255 },
        { lon: -122.1123, lat: 45.57675, ele: 253 },
        { lon: -122.11193, lat: 45.57676, ele: 252 },
        { lon: -122.1122, lat: 45.57684, ele: 245 },
        { lon: -122.11165, lat: 45.57695, ele: 227 },
        { lon: -122.11199, lat: 45.57697, ele: 232 },
        { lon: -122.11233, lat: 45.57693, ele: 246 },
        { lon: -122.11257, lat: 45.57693, ele: 253 },
        { lon: -122.11277, lat: 45.57689, ele: 247 },
        { lon: -122.1129, lat: 45.5769, ele: 234 },
        { lon: -122.11333, lat: 45.5769, ele: 199 },
        { lon: -122.11356, lat: 45.57687, ele: 201 },
        { lon: -122.11384, lat: 45.57686, ele: 191 },
        { lon: -122.11403, lat: 45.57695, ele: 175 },
        { lon: -122.11381, lat: 45.57694, ele: 182 },
        { lon: -122.11366, lat: 45.57699, ele: 183 },
        { lon: -122.1134, lat: 45.57706, ele: 183 },
        { lon: -122.11305, lat: 45.57718, ele: 179 },
        { lon: -122.11256, lat: 45.57733, ele: 180 },
        { lon: -122.11229, lat: 45.57745, ele: 164 },
        { lon: -122.11305, lat: 45.57742, ele: 155 },
        { lon: -122.11354, lat: 45.57739, ele: 154 },
        { lon: -122.11409, lat: 45.57744, ele: 140 },
        { lon: -122.11448, lat: 45.57744, ele: 134 },
        { lon: -122.11504, lat: 45.5774, ele: 124 },
        { lon: -122.11515, lat: 45.57735, ele: 122 },
        { lon: -122.11515, lat: 45.57714, ele: 127 },
        { lon: -122.11543, lat: 45.57733, ele: 113 },
        { lon: -122.11545, lat: 45.57734, ele: 112 },
        { lon: -122.11546, lat: 45.57735, ele: 112 },
        { lon: -122.11557, lat: 45.57736, ele: 108 },
        { lon: -122.11558, lat: 45.57736, ele: 108 },
        { lon: -122.11559, lat: 45.57737, ele: 107 },
        { lon: -122.11559, lat: 45.57738, ele: 107 },
        { lon: -122.11558, lat: 45.57739, ele: 107 },
        { lon: -122.11542, lat: 45.57753, ele: 107 },
        { lon: -122.11518, lat: 45.57763, ele: 113 },
        { lon: -122.11473, lat: 45.57778, ele: 120 },
        { lon: -122.11442, lat: 45.57778, ele: 120 },
        { lon: -122.1146, lat: 45.57787, ele: 113 },
        { lon: -122.11482, lat: 45.5779, ele: 107 },
        { lon: -122.11543, lat: 45.57784, ele: 93 },
        { lon: -122.11574, lat: 45.57781, ele: 79 },
        { lon: -122.116, lat: 45.57777, ele: 71 },
        { lon: -122.11607, lat: 45.57775, ele: 71 },
        { lon: -122.11613, lat: 45.57772, ele: 73 },
        { lon: -122.11614, lat: 45.57768, ele: 77 },
        { lon: -122.11612, lat: 45.57765, ele: 81 },
        { lon: -122.11607, lat: 45.57759, ele: 88 },
        { lon: -122.11602, lat: 45.57746, ele: 98 },
        { lon: -122.11596, lat: 45.57733, ele: 103 },
        { lon: -122.11592, lat: 45.57721, ele: 110 },
        { lon: -122.11594, lat: 45.57705, ele: 119 },
        { lon: -122.11591, lat: 45.57691, ele: 128 },
        { lon: -122.1159, lat: 45.57683, ele: 131 },
        { lon: -122.11589, lat: 45.57673, ele: 135 },
        { lon: -122.11583, lat: 45.57668, ele: 137 },
        { lon: -122.11573, lat: 45.57663, ele: 155 },
        { lon: -122.11571, lat: 45.57661, ele: 162 },
        { lon: -122.1157, lat: 45.57661, ele: 162 },
        { lon: -122.1157, lat: 45.5766, ele: 165 },
        { lon: -122.1157, lat: 45.57659, ele: 167 },
        { lon: -122.11571, lat: 45.57659, ele: 167 },
        { lon: -122.11574, lat: 45.5766, ele: 162 },
        { lon: -122.11576, lat: 45.57661, ele: 157 },
        { lon: -122.11588, lat: 45.57666, ele: 138 },
        { lon: -122.11599, lat: 45.57669, ele: 135 },
        { lon: -122.11605, lat: 45.57671, ele: 134 },
        { lon: -122.11608, lat: 45.57671, ele: 134 },
        { lon: -122.1161, lat: 45.57671, ele: 134 },
        { lon: -122.11611, lat: 45.57671, ele: 134 },
        { lon: -122.11627, lat: 45.57662, ele: 143 },
        { lon: -122.11628, lat: 45.57662, ele: 143 },
        { lon: -122.11631, lat: 45.57662, ele: 142 },
        { lon: -122.11635, lat: 45.57664, ele: 136 },
        { lon: -122.11638, lat: 45.57665, ele: 134 },
        { lon: -122.1164, lat: 45.57665, ele: 133 },
        { lon: -122.11645, lat: 45.57665, ele: 129 },
        { lon: -122.11653, lat: 45.57666, ele: 120 },
        { lon: -122.11698, lat: 45.57672, ele: 101 },
        { lon: -122.11708, lat: 45.57675, ele: 86 },
        { lon: -122.11715, lat: 45.57678, ele: 77 },
        { lon: -122.11722, lat: 45.57683, ele: 68 },
        { lon: -122.11732, lat: 45.5769, ele: 68 },
        { lon: -122.11739, lat: 45.57696, ele: 67 },
        { lon: -122.11745, lat: 45.577, ele: 66 },
        { lon: -122.11749, lat: 45.57702, ele: 66 },
        { lon: -122.11756, lat: 45.57703, ele: 67 },
        { lon: -122.11757, lat: 45.57704, ele: 66 },
        { lon: -122.11758, lat: 45.57704, ele: 66 },
        { lon: -122.11757, lat: 45.57705, ele: 65 },
        { lon: -122.11756, lat: 45.57705, ele: 65 },
        { lon: -122.11755, lat: 45.57705, ele: 65 },
        { lon: -122.11746, lat: 45.57704, ele: 62 },
        { lon: -122.11731, lat: 45.57701, ele: 60 },
        { lon: -122.1172, lat: 45.57698, ele: 58 },
        { lon: -122.11718, lat: 45.57698, ele: 57 },
        { lon: -122.11716, lat: 45.57698, ele: 57 },
        { lon: -122.11715, lat: 45.57698, ele: 57 },
        { lon: -122.11715, lat: 45.57699, ele: 56 },
        { lon: -122.11715, lat: 45.57701, ele: 55 },
        { lon: -122.11716, lat: 45.57703, ele: 54 },
        { lon: -122.11718, lat: 45.57705, ele: 53 },
        { lon: -122.11723, lat: 45.5771, ele: 51 },
        { lon: -122.11724, lat: 45.57711, ele: 50 },
        { lon: -122.11724, lat: 45.57712, ele: 49 },
        { lon: -122.11722, lat: 45.57712, ele: 49 },
        { lon: -122.1172, lat: 45.57712, ele: 49 },
        { lon: -122.11715, lat: 45.57711, ele: 50 },
        { lon: -122.11707, lat: 45.57709, ele: 50 },
        { lon: -122.11703, lat: 45.57707, ele: 51 },
        { lon: -122.11698, lat: 45.57703, ele: 52 },
        { lon: -122.11695, lat: 45.57702, ele: 52 },
        { lon: -122.11692, lat: 45.57701, ele: 52 },
        { lon: -122.11691, lat: 45.57702, ele: 52 },
        { lon: -122.11692, lat: 45.57705, ele: 51 },
        { lon: -122.11694, lat: 45.57708, ele: 50 },
        { lon: -122.11696, lat: 45.5771, ele: 50 },
        { lon: -122.11696, lat: 45.57715, ele: 48 },
        { lon: -122.11696, lat: 45.57718, ele: 47 },
        { lon: -122.11695, lat: 45.57719, ele: 46 },
        { lon: -122.11691, lat: 45.57719, ele: 47 },
        { lon: -122.11687, lat: 45.57718, ele: 49 },
        { lon: -122.11683, lat: 45.57713, ele: 51 },
        { lon: -122.11673, lat: 45.57708, ele: 53 },
        { lon: -122.11667, lat: 45.57706, ele: 53 },
        { lon: -122.11663, lat: 45.57706, ele: 58 },
        { lon: -122.1166, lat: 45.57709, ele: 61 },
        { lon: -122.1166, lat: 45.57714, ele: 60 },
        { lon: -122.11662, lat: 45.57722, ele: 57 },
        { lon: -122.11667, lat: 45.57728, ele: 56 },
        { lon: -122.1167, lat: 45.57733, ele: 56 },
        { lon: -122.1168, lat: 45.57743, ele: 54 },
        { lon: -122.11689, lat: 45.57751, ele: 49 },
        { lon: -122.11709, lat: 45.5776, ele: 33 },
        { lon: -122.11716, lat: 45.57765, ele: 28 },
        { lon: -122.11719, lat: 45.5777, ele: 25 },
        { lon: -122.11721, lat: 45.57775, ele: 23 },
        { lon: -122.11729, lat: 45.57773, ele: 22 },
        { lon: -122.11758, lat: 45.57767, ele: 22 },
        { lon: -122.11802, lat: 45.57759, ele: 24 },
        { lon: -122.11907, lat: 45.57745, ele: 24 },
        { lon: -122.11985, lat: 45.57734, ele: 24 },
        { lon: -122.11993, lat: 45.57725, ele: 29 },
        { lon: -122.1205, lat: 45.57714, ele: 51 },
        { lon: -122.12137, lat: 45.57691, ele: 67 },
        { lon: -122.12206, lat: 45.57674, ele: 85 },
        { lon: -122.12276, lat: 45.57654, ele: 64 },
        { lon: -122.12355, lat: 45.57632, ele: 67 },
        { lon: -122.12385, lat: 45.57612, ele: 87 },
        { lon: -122.12422, lat: 45.57606, ele: 78 },
        { lon: -122.12488, lat: 45.57605, ele: 61 },
        { lon: -122.12538, lat: 45.57598, ele: 59 },
        { lon: -122.12593, lat: 45.57581, ele: 62 },
        { lon: -122.12606, lat: 45.5757, ele: 68 },
        { lon: -122.12638, lat: 45.57549, ele: 75 },
        { lon: -122.12676, lat: 45.57537, ele: 71 },
        { lon: -122.12708, lat: 45.57526, ele: 65 },
        { lon: -122.12727, lat: 45.57522, ele: 62 },
        { lon: -122.12743, lat: 45.57524, ele: 58 },
        { lon: -122.12762, lat: 45.5752, ele: 58 },
        { lon: -122.12766, lat: 45.57527, ele: 53 },
        { lon: -122.12795, lat: 45.57524, ele: 52 },
        { lon: -122.12797, lat: 45.57533, ele: 49 },
        { lon: -122.12797, lat: 45.57534, ele: 49 },
        { lon: -122.12798, lat: 45.57533, ele: 49 }
  ]
};

const App = () => (
  <div>
    <MapComponent trail={sampleTrailData} />
  </div>
);

export default App;