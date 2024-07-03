const sampleTrailData = {
    name: "Cape Perpetua Hike",
    length: 6.5,
    Difficulty: "Moderate",
    data: [
      { lon: -124.1119, lat: 44.27809, ele: 24 },
      { lon: -124.11189, lat: 44.27809, ele: 24 },
      { lon: -124.11177, lat: 44.27818, ele: 26 },
      { lon: -124.11165, lat: 44.27826, ele: 29 },
      { lon: -124.11154, lat: 44.27841, ele: 30 },
      { lon: -124.11148, lat: 44.27846, ele: 30 },
      { lon: -124.11146, lat: 44.27849, ele: 30 },
      { lon: -124.11149, lat: 44.2785, ele: 29 },
      { lon: -124.11154, lat: 44.27851, ele: 27 },
      { lon: -124.11159, lat: 44.27849, ele: 27 },
      { lon: -124.11173, lat: 44.27841, ele: 25 },
      { lon: -124.11188, lat: 44.27828, ele: 23 },
      { lon: -124.11206, lat: 44.27817, ele: 20 },
      { lon: -124.1121, lat: 44.27811, ele: 20 },
      { lon: -124.1122, lat: 44.2779, ele: 18 },
      { lon: -124.11222, lat: 44.27789, ele: 18 },
      { lon: -124.11225, lat: 44.27789, ele: 17 },
      { lon: -124.11226, lat: 44.2779, ele: 17 },
      { lon: -124.11226, lat: 44.27792, ele: 17 },
      { lon: -124.11223, lat: 44.27806, ele: 17 },
      { lon: -124.11225, lat: 44.27808, ele: 17 },
      { lon: -124.11228, lat: 44.27808, ele: 16 },
      { lon: -124.1123, lat: 44.27807, ele: 16 },
      { lon: -124.11235, lat: 44.278, ele: 15 },
      { lon: -124.11241, lat: 44.27795, ele: 14 },
      { lon: -124.1125, lat: 44.27791, ele: 12 },
      { lon: -124.11257, lat: 44.27789, ele: 11 },
      { lon: -124.1126, lat: 44.2779, ele: 11 },
      { lon: -124.11258, lat: 44.27793, ele: 11 },
      { lon: -124.1125, lat: 44.27801, ele: 12 },
      { lon: -124.11264, lat: 44.278, ele: 10 },
      { lon: -124.1127, lat: 44.27795, ele: 10 },
      { lon: -124.11274, lat: 44.2779, ele: 9 },
      { lon: -124.11282, lat: 44.27785, ele: 8 },
      { lon: -124.11297, lat: 44.27798, ele: 5 },
      { lon: -124.11313, lat: 44.27812, ele: 3 },
      { lon: -124.11328, lat: 44.27824, ele: 3 },
      { lon: -124.11338, lat: 44.27841, ele: 2 },
      { lon: -124.11329, lat: 44.27824, ele: 3 },
      { lon: -124.11312, lat: 44.27812, ele: 3 },
      { lon: -124.11297, lat: 44.27798, ele: 5 },
      { lon: -124.11282, lat: 44.27785, ele: 8 },
      { lon: -124.11274, lat: 44.2779, ele: 9 },
      { lon: -124.1127, lat: 44.27795, ele: 10 },
      { lon: -124.11264, lat: 44.278, ele: 10 },
      { lon: -124.1125, lat: 44.27801, ele: 12 },
      { lon: -124.11243, lat: 44.27809, ele: 14 },
      { lon: -124.11236, lat: 44.27818, ele: 14 },
      { lon: -124.11232, lat: 44.27823, ele: 14 },
      { lon: -124.11227, lat: 44.27828, ele: 15 },
      { lon: -124.11221, lat: 44.27833, ele: 16 },
      { lon: -124.11215, lat: 44.27835, ele: 16 },
      { lon: -124.1121, lat: 44.27836, ele: 17 },
      { lon: -124.11206, lat: 44.2784, ele: 17 },
      { lon: -124.11203, lat: 44.27846, ele: 17 },
      { lon: -124.11198, lat: 44.27851, ele: 17 },
      { lon: -124.11192, lat: 44.27857, ele: 17 },
      { lon: -124.11188, lat: 44.27859, ele: 17 },
      { lon: -124.1117, lat: 44.27868, ele: 19 },
      { lon: -124.11167, lat: 44.27872, ele: 19 },
      { lon: -124.11166, lat: 44.27878, ele: 17 },
      { lon: -124.11167, lat: 44.27882, ele: 16 },
      { lon: -124.11166, lat: 44.27893, ele: 14 },
      { lon: -124.11164, lat: 44.27898, ele: 13 },
      { lon: -124.11166, lat: 44.27902, ele: 12 },
      { lon: -124.11166, lat: 44.27903, ele: 12 },
      { lon: -124.11172, lat: 44.2791, ele: 10 },
      { lon: -124.1118, lat: 44.27915, ele: 8 },
      { lon: -124.11186, lat: 44.27921, ele: 7 },
      { lon: -124.11187, lat: 44.27927, ele: 7 },
      { lon: -124.11182, lat: 44.27932, ele: 7 },
      { lon: -124.11169, lat: 44.27937, ele: 8 },
      { lon: -124.11157, lat: 44.27939, ele: 9 },
      { lon: -124.11154, lat: 44.2794, ele: 9 },
      { lon: -124.11154, lat: 44.27946, ele: 9 },
      { lon: -124.11142, lat: 44.27948, ele: 10 },
      { lon: -124.11139, lat: 44.27951, ele: 10 },
      { lon: -124.11135, lat: 44.27956, ele: 10 },
      { lon: -124.11129, lat: 44.27957, ele: 11 },
      { lon: -124.11119, lat: 44.27958, ele: 12 },
      { lon: -124.11104, lat: 44.27958, ele: 13 },
      { lon: -124.11083, lat: 44.27955, ele: 15 },
      { lon: -124.1108, lat: 44.27954, ele: 15 },
      { lon: -124.11069, lat: 44.27952, ele: 16 },
      { lon: -124.11058, lat: 44.27949, ele: 17 },
      { lon: -124.11028, lat: 44.27947, ele: 21 },
      { lon: -124.11046, lat: 44.27936, ele: 21 },
      { lon: -124.11085, lat: 44.27911, ele: 22 },
      { lon: -124.111, lat: 44.27901, ele: 23 },
      { lon: -124.11119, lat: 44.27886, ele: 24 },
      { lon: -124.11133, lat: 44.27871, ele: 27 },
      { lon: -124.11159, lat: 44.27849, ele: 27 },
      { lon: -124.11154, lat: 44.27851, ele: 27 },
      { lon: -124.11149, lat: 44.2785, ele: 29 },
      { lon: -124.11146, lat: 44.27849, ele: 30 },
      { lon: -124.11148, lat: 44.27846, ele: 30 },
      { lon: -124.11154, lat: 44.27841, ele: 30 },
      { lon: -124.11165, lat: 44.27826, ele: 29 },
      { lon: -124.11177, lat: 44.27818, ele: 26 },
      { lon: -124.11189, lat: 44.27809, ele: 24 },
      { lon: -124.1119, lat: 44.27809, ele: 24 }
    ]
  };