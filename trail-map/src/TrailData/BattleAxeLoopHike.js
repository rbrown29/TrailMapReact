const sampleTrailData = {
    name: "Battle Ax Loop Hike",
    length: 6,
    Difficulty: "Moderate",
    data: [
      { lon: -122.12466, lat: 44.8252, ele: 1185 },
          { lon: -122.12621, lat: 44.82501, ele: 1199 },
          { lon: -122.12744, lat: 44.82478, ele: 1208 },
          { lon: -122.12995, lat: 44.82387, ele: 1222 },
          { lon: -122.13052, lat: 44.82356, ele: 1221 },
          { lon: -122.13084, lat: 44.82348, ele: 1229 },
          { lon: -122.13091, lat: 44.82345, ele: 1230 },
          { lon: -122.13199, lat: 44.8229, ele: 1227 },
          { lon: -122.13513, lat: 44.82159, ele: 1233 },
          { lon: -122.13804, lat: 44.82067, ele: 1268 },
          { lon: -122.14012, lat: 44.82048, ele: 1283 },
          { lon: -122.14094, lat: 44.82031, ele: 1279 },
          { lon: -122.14152, lat: 44.82048, ele: 1293 },
          { lon: -122.14205, lat: 44.82043, ele: 1299 },
          { lon: -122.14299, lat: 44.82029, ele: 1314 },
          { lon: -122.14369, lat: 44.8199, ele: 1309 },
          { lon: -122.1444, lat: 44.81972, ele: 1314 },
          { lon: -122.14499, lat: 44.81928, ele: 1315 },
          { lon: -122.14575, lat: 44.81916, ele: 1315 },
          { lon: -122.14566, lat: 44.8193, ele: 1316 },
          { lon: -122.14526, lat: 44.81951, ele: 1324 },
          { lon: -122.14515, lat: 44.81969, ele: 1328 },
          { lon: -122.14487, lat: 44.82018, ele: 1345 },
          { lon: -122.14451, lat: 44.82031, ele: 1346 },
          { lon: -122.1443, lat: 44.82057, ele: 1357 },
          { lon: -122.14339, lat: 44.82113, ele: 1364 },
          { lon: -122.14277, lat: 44.82148, ele: 1382 },
          { lon: -122.14231, lat: 44.82166, ele: 1382 },
          { lon: -122.14243, lat: 44.82169, ele: 1387 },
          { lon: -122.14273, lat: 44.82167, ele: 1392 },
          { lon: -122.14369, lat: 44.82148, ele: 1393 },
          { lon: -122.14385, lat: 44.82149, ele: 1397 },
          { lon: -122.14411, lat: 44.82157, ele: 1403 },
          { lon: -122.14434, lat: 44.82156, ele: 1404 },
          { lon: -122.14454, lat: 44.82163, ele: 1406 },
          { lon: -122.14464, lat: 44.82169, ele: 1405 },
          { lon: -122.14456, lat: 44.82174, ele: 1407 },
          { lon: -122.14428, lat: 44.82177, ele: 1412 },
          { lon: -122.14371, lat: 44.82183, ele: 1416 },
          { lon: -122.14337, lat: 44.82205, ele: 1429 },
          { lon: -122.14312, lat: 44.82215, ele: 1430 },
          { lon: -122.14298, lat: 44.82227, ele: 1435 },
          { lon: -122.1427, lat: 44.82239, ele: 1439 },
          { lon: -122.14316, lat: 44.82236, ele: 1443 },
          { lon: -122.14372, lat: 44.82221, ele: 1438 },
          { lon: -122.14381, lat: 44.82235, ele: 1445 },
          { lon: -122.14368, lat: 44.82244, ele: 1449 },
          { lon: -122.14326, lat: 44.8226, ele: 1457 },
          { lon: -122.14265, lat: 44.82278, ele: 1463 },
          { lon: -122.14235, lat: 44.82291, ele: 1471 },
          { lon: -122.14209, lat: 44.82306, ele: 1480 },
          { lon: -122.14187, lat: 44.82325, ele: 1490 },
          { lon: -122.1418, lat: 44.82336, ele: 1497 },
          { lon: -122.14149, lat: 44.82333, ele: 1492 },
          { lon: -122.1413, lat: 44.82338, ele: 1492 },
          { lon: -122.14126, lat: 44.82357, ele: 1501 },
          { lon: -122.14107, lat: 44.82374, ele: 1507 },
          { lon: -122.14037, lat: 44.82415, ele: 1527 },
          { lon: -122.14117, lat: 44.82404, ele: 1525 },
          { lon: -122.14132, lat: 44.82406, ele: 1528 },
          { lon: -122.14151, lat: 44.82412, ele: 1533 },
          { lon: -122.14169, lat: 44.82428, ele: 1542 },
          { lon: -122.14153, lat: 44.8244, ele: 1548 },
          { lon: -122.14101, lat: 44.82461, ele: 1563 },
          { lon: -122.14025, lat: 44.82483, ele: 1570 },
          { lon: -122.1397, lat: 44.8249, ele: 1575 },
          { lon: -122.13938, lat: 44.82497, ele: 1575 },
          { lon: -122.13924, lat: 44.82509, ele: 1582 },
          { lon: -122.13951, lat: 44.82506, ele: 1585 },
          { lon: -122.13978, lat: 44.82506, ele: 1586 },
          { lon: -122.14037, lat: 44.82515, ele: 1588 },
          { lon: -122.14065, lat: 44.82525, ele: 1590 },
          { lon: -122.14083, lat: 44.82541, ele: 1591 },
          { lon: -122.14086, lat: 44.82551, ele: 1594 },
          { lon: -122.14054, lat: 44.8255, ele: 1607 },
          { lon: -122.14031, lat: 44.82552, ele: 1613 },
          { lon: -122.13969, lat: 44.82556, ele: 1621 },
          { lon: -122.13955, lat: 44.82561, ele: 1626 },
          { lon: -122.13985, lat: 44.82564, ele: 1627 },
          { lon: -122.14019, lat: 44.82569, ele: 1628 },
          { lon: -122.14034, lat: 44.82585, ele: 1636 },
          { lon: -122.14036, lat: 44.82614, ele: 1651 },
          { lon: -122.1403, lat: 44.82608, ele: 1650 },
          { lon: -122.14008, lat: 44.82603, ele: 1653 },
          { lon: -122.13986, lat: 44.82604, ele: 1656 },
          { lon: -122.13955, lat: 44.82608, ele: 1660 },
          { lon: -122.13934, lat: 44.82615, ele: 1663 },
          { lon: -122.13891, lat: 44.82624, ele: 1656 },
          { lon: -122.1391, lat: 44.82626, ele: 1662 },
          { lon: -122.13961, lat: 44.8263, ele: 1669 },
          { lon: -122.13975, lat: 44.82639, ele: 1671 },
          { lon: -122.13939, lat: 44.82645, ele: 1673 },
          { lon: -122.13951, lat: 44.82651, ele: 1674 },
          { lon: -122.13975, lat: 44.82664, ele: 1675 },
          { lon: -122.14001, lat: 44.82714, ele: 1673 },
          { lon: -122.14019, lat: 44.82732, ele: 1669 },
          { lon: -122.1403, lat: 44.82755, ele: 1668 },
          { lon: -122.14033, lat: 44.82811, ele: 1666 },
          { lon: -122.14032, lat: 44.82844, ele: 1658 },
          { lon: -122.14026, lat: 44.82864, ele: 1652 },
          { lon: -122.14038, lat: 44.82883, ele: 1644 },
          { lon: -122.14058, lat: 44.8287, ele: 1650 },
          { lon: -122.14064, lat: 44.82881, ele: 1646 },
          { lon: -122.14073, lat: 44.8289, ele: 1642 },
          { lon: -122.14085, lat: 44.82882, ele: 1643 },
          { lon: -122.14093, lat: 44.82889, ele: 1639 },
          { lon: -122.14095, lat: 44.82899, ele: 1636 },
          { lon: -122.14108, lat: 44.82929, ele: 1630 },
          { lon: -122.14129, lat: 44.8292, ele: 1627 },
          { lon: -122.14164, lat: 44.82885, ele: 1611 },
          { lon: -122.14171, lat: 44.82902, ele: 1610 },
          { lon: -122.14191, lat: 44.82933, ele: 1598 },
          { lon: -122.142, lat: 44.83003, ele: 1576 },
          { lon: -122.14204, lat: 44.83092, ele: 1539 },
          { lon: -122.14196, lat: 44.83161, ele: 1522 },
          { lon: -122.14207, lat: 44.83201, ele: 1510 },
          { lon: -122.14127, lat: 44.83425, ele: 1503 },
          { lon: -122.14081, lat: 44.83467, ele: 1484 },
          { lon: -122.14081, lat: 44.83519, ele: 1478 },
          { lon: -122.14081, lat: 44.83604, ele: 1483 },
          { lon: -122.14067, lat: 44.83648, ele: 1479 },
          { lon: -122.14072, lat: 44.83682, ele: 1485 },
          { lon: -122.14034, lat: 44.83807, ele: 1468 },
          { lon: -122.14022, lat: 44.83831, ele: 1464 },
          { lon: -122.14015, lat: 44.83859, ele: 1466 },
          { lon: -122.14003, lat: 44.83874, ele: 1462 },
          { lon: -122.13957, lat: 44.83883, ele: 1452 },
          { lon: -122.13935, lat: 44.83888, ele: 1449 },
          { lon: -122.1393, lat: 44.83899, ele: 1450 },
          { lon: -122.13925, lat: 44.83908, ele: 1451 },
          { lon: -122.1392, lat: 44.83983, ele: 1449 },
          { lon: -122.13922, lat: 44.84058, ele: 1462 },
          { lon: -122.13928, lat: 44.84091, ele: 1469 },
          { lon: -122.1393, lat: 44.84113, ele: 1472 },
          { lon: -122.13918, lat: 44.84187, ele: 1476 },
          { lon: -122.13919, lat: 44.84212, ele: 1479 },
          { lon: -122.13925, lat: 44.84222, ele: 1481 },
          { lon: -122.13998, lat: 44.84249, ele: 1509 },
          { lon: -122.1402, lat: 44.84263, ele: 1509 },
          { lon: -122.14038, lat: 44.84288, ele: 1502 },
          { lon: -122.14038, lat: 44.84319, ele: 1496 },
          { lon: -122.13981, lat: 44.84426, ele: 1500 },
          { lon: -122.13984, lat: 44.84447, ele: 1498 },
          { lon: -122.14023, lat: 44.84493, ele: 1486 },
          { lon: -122.14056, lat: 44.84587, ele: 1475 },
          { lon: -122.14071, lat: 44.84612, ele: 1468 },
          { lon: -122.14098, lat: 44.8463, ele: 1464 },
          { lon: -122.14109, lat: 44.84644, ele: 1461 },
          { lon: -122.14117, lat: 44.84666, ele: 1456 },
          { lon: -122.14144, lat: 44.84677, ele: 1453 },
          { lon: -122.14159, lat: 44.8468, ele: 1451 },
          { lon: -122.14189, lat: 44.84685, ele: 1445 },
          { lon: -122.1421, lat: 44.84698, ele: 1440 },
          { lon: -122.14224, lat: 44.84719, ele: 1435 },
          { lon: -122.14245, lat: 44.84789, ele: 1428 },
          { lon: -122.14249, lat: 44.84862, ele: 1414 },
          { lon: -122.14262, lat: 44.84874, ele: 1415 },
          { lon: -122.14281, lat: 44.84879, ele: 1414 },
          { lon: -122.143, lat: 44.84893, ele: 1417 },
          { lon: -122.14316, lat: 44.84906, ele: 1418 },
          { lon: -122.14327, lat: 44.84924, ele: 1422 },
          { lon: -122.14325, lat: 44.84941, ele: 1429 },
          { lon: -122.14319, lat: 44.84951, ele: 1433 },
          { lon: -122.14276, lat: 44.84973, ele: 1439 },
          { lon: -122.14235, lat: 44.85014, ele: 1439 },
          { lon: -122.14214, lat: 44.85077, ele: 1442 },
          { lon: -122.14196, lat: 44.85104, ele: 1437 },
          { lon: -122.14193, lat: 44.85127, ele: 1436 },
          { lon: -122.14199, lat: 44.85148, ele: 1438 },
          { lon: -122.142, lat: 44.85169, ele: 1439 },
          { lon: -122.14193, lat: 44.85181, ele: 1434 },
          { lon: -122.14197, lat: 44.85228, ele: 1430 },
          { lon: -122.14192, lat: 44.85252, ele: 1428 },
          { lon: -122.1418, lat: 44.85265, ele: 1425 },
          { lon: -122.14138, lat: 44.85287, ele: 1417 },
          { lon: -122.14074, lat: 44.85304, ele: 1413 },
          { lon: -122.1404, lat: 44.8532, ele: 1412 },
          { lon: -122.13985, lat: 44.85328, ele: 1406 },
          { lon: -122.13971, lat: 44.85336, ele: 1404 },
          { lon: -122.13964, lat: 44.85348, ele: 1403 },
          { lon: -122.1395, lat: 44.85353, ele: 1401 },
          { lon: -122.13938, lat: 44.85347, ele: 1398 },
          { lon: -122.13923, lat: 44.85366, ele: 1398 },
          { lon: -122.13912, lat: 44.85404, ele: 1395 },
          { lon: -122.13877, lat: 44.85411, ele: 1390 },
          { lon: -122.13779, lat: 44.85441, ele: 1386 },
          { lon: -122.13738, lat: 44.85459, ele: 1385 },
          { lon: -122.13719, lat: 44.8548, ele: 1388 },
          { lon: -122.13669, lat: 44.85498, ele: 1391 },
          { lon: -122.13638, lat: 44.85534, ele: 1396 },
          { lon: -122.13568, lat: 44.85538, ele: 1396 },
          { lon: -122.13524, lat: 44.85539, ele: 1400 },
          { lon: -122.13465, lat: 44.85514, ele: 1403 },
          { lon: -122.13411, lat: 44.85486, ele: 1399 },
          { lon: -122.13362, lat: 44.85464, ele: 1392 },
          { lon: -122.13307, lat: 44.85455, ele: 1388 },
          { lon: -122.13229, lat: 44.85458, ele: 1385 },
          { lon: -122.13157, lat: 44.8546, ele: 1382 },
          { lon: -122.13099, lat: 44.85461, ele: 1390 },
          { lon: -122.13061, lat: 44.85448, ele: 1387 },
          { lon: -122.12991, lat: 44.85434, ele: 1389 },
          { lon: -122.12902, lat: 44.85415, ele: 1385 },
          { lon: -122.12823, lat: 44.85405, ele: 1382 },
          { lon: -122.12747, lat: 44.854, ele: 1375 },
          { lon: -122.12644, lat: 44.8539, ele: 1369 },
          { lon: -122.12572, lat: 44.85377, ele: 1360 },
          { lon: -122.12491, lat: 44.85382, ele: 1357 },
          { lon: -122.12438, lat: 44.85393, ele: 1353 },
          { lon: -122.12421, lat: 44.85416, ele: 1353 },
          { lon: -122.12417, lat: 44.85451, ele: 1348 },
          { lon: -122.12398, lat: 44.85453, ele: 1345 },
          { lon: -122.12379, lat: 44.85432, ele: 1341 },
          { lon: -122.12332, lat: 44.85421, ele: 1336 },
          { lon: -122.1233, lat: 44.85398, ele: 1335 },
          { lon: -122.1229, lat: 44.85374, ele: 1332 },
          { lon: -122.12252, lat: 44.85358, ele: 1326 },
          { lon: -122.12204, lat: 44.85349, ele: 1323 },
          { lon: -122.12175, lat: 44.85354, ele: 1322 },
          { lon: -122.12137, lat: 44.85366, ele: 1318 },
          { lon: -122.12107, lat: 44.85365, ele: 1317 },
          { lon: -122.12087, lat: 44.85373, ele: 1317 },
          { lon: -122.12093, lat: 44.85406, ele: 1317 },
          { lon: -122.12073, lat: 44.85434, ele: 1313 },
          { lon: -122.12049, lat: 44.85429, ele: 1314 },
          { lon: -122.12011, lat: 44.85438, ele: 1309 },
          { lon: -122.11974, lat: 44.85442, ele: 1306 },
          { lon: -122.11941, lat: 44.85439, ele: 1303 },
          { lon: -122.11914, lat: 44.85436, ele: 1301 },
          { lon: -122.119, lat: 44.85442, ele: 1299 },
          { lon: -122.11868, lat: 44.85438, ele: 1297 },
          { lon: -122.11843, lat: 44.85432, ele: 1297 },
          { lon: -122.1182, lat: 44.85433, ele: 1296 },
          { lon: -122.11816, lat: 44.85441, ele: 1295 },
          { lon: -122.11788, lat: 44.85453, ele: 1292 },
          { lon: -122.11764, lat: 44.85465, ele: 1288 },
          { lon: -122.11739, lat: 44.85459, ele: 1288 },
          { lon: -122.11692, lat: 44.85452, ele: 1287 },
          { lon: -122.11674, lat: 44.85458, ele: 1284 },
          { lon: -122.11646, lat: 44.85453, ele: 1282 },
          { lon: -122.11609, lat: 44.8545, ele: 1278 },
          { lon: -122.11606, lat: 44.8546, ele: 1276 },
          { lon: -122.11619, lat: 44.85464, ele: 1276 },
          { lon: -122.11575, lat: 44.85485, ele: 1265 },
          { lon: -122.1159, lat: 44.85504, ele: 1260 },
          { lon: -122.11616, lat: 44.85514, ele: 1260 },
          { lon: -122.11674, lat: 44.85532, ele: 1260 },
          { lon: -122.11712, lat: 44.85554, ele: 1249 },
          { lon: -122.11746, lat: 44.85563, ele: 1246 },
          { lon: -122.11807, lat: 44.85582, ele: 1247 },
          { lon: -122.11872, lat: 44.85603, ele: 1241 },
          { lon: -122.11931, lat: 44.8561, ele: 1242 },
          { lon: -122.11968, lat: 44.85612, ele: 1244 },
          { lon: -122.12034, lat: 44.85629, ele: 1234 },
          { lon: -122.12106, lat: 44.85634, ele: 1232 },
          { lon: -122.12139, lat: 44.85645, ele: 1232 },
          { lon: -122.12175, lat: 44.85666, ele: 1230 },
          { lon: -122.12188, lat: 44.85689, ele: 1224 },
          { lon: -122.12209, lat: 44.85714, ele: 1217 },
          { lon: -122.12228, lat: 44.85742, ele: 1218 },
          { lon: -122.12231, lat: 44.85763, ele: 1216 },
          { lon: -122.12216, lat: 44.85786, ele: 1213 },
          { lon: -122.12204, lat: 44.85808, ele: 1212 },
          { lon: -122.12173, lat: 44.85818, ele: 1214 },
          { lon: -122.12137, lat: 44.85833, ele: 1215 },
          { lon: -122.12112, lat: 44.85849, ele: 1216 },
          { lon: -122.12076, lat: 44.85856, ele: 1214 },
          { lon: -122.12054, lat: 44.85873, ele: 1213 },
          { lon: -122.12011, lat: 44.85884, ele: 1213 },
          { lon: -122.11972, lat: 44.85891, ele: 1213 },
          { lon: -122.1194, lat: 44.85895, ele: 1212 },
          { lon: -122.1191, lat: 44.85883, ele: 1212 },
          { lon: -122.11887, lat: 44.85868, ele: 1212 },
          { lon: -122.11873, lat: 44.85868, ele: 1212 },
          { lon: -122.11839, lat: 44.85876, ele: 1215 },
          { lon: -122.11793, lat: 44.85883, ele: 1217 },
          { lon: -122.11778, lat: 44.85897, ele: 1217 },
          { lon: -122.11754, lat: 44.85898, ele: 1218 },
          { lon: -122.1173, lat: 44.85892, ele: 1219 },
          { lon: -122.11705, lat: 44.85893, ele: 1221 },
          { lon: -122.11688, lat: 44.85899, ele: 1222 },
          { lon: -122.11674, lat: 44.85915, ele: 1221 },
          { lon: -122.11653, lat: 44.85923, ele: 1223 },
          { lon: -122.11627, lat: 44.85925, ele: 1222 },
          { lon: -122.11598, lat: 44.8593, ele: 1220 },
          { lon: -122.11549, lat: 44.85917, ele: 1216 },
          { lon: -122.11494, lat: 44.85915, ele: 1207 },
          { lon: -122.11485, lat: 44.85909, ele: 1207 },
          { lon: -122.11441, lat: 44.859, ele: 1207 },
          { lon: -122.11419, lat: 44.85874, ele: 1211 },
          { lon: -122.11367, lat: 44.85852, ele: 1211 },
          { lon: -122.11349, lat: 44.8583, ele: 1209 },
          { lon: -122.11362, lat: 44.85801, ele: 1209 },
          { lon: -122.11366, lat: 44.85787, ele: 1206 },
          { lon: -122.11364, lat: 44.85773, ele: 1203 },
          { lon: -122.11371, lat: 44.85751, ele: 1198 },
          { lon: -122.11364, lat: 44.85741, ele: 1196 },
          { lon: -122.11288, lat: 44.85727, ele: 1194 },
          { lon: -122.11163, lat: 44.85681, ele: 1182 },
          { lon: -122.11121, lat: 44.85682, ele: 1183 },
          { lon: -122.11083, lat: 44.85669, ele: 1180 },
          { lon: -122.11118, lat: 44.85679, ele: 1182 },
          { lon: -122.11158, lat: 44.85675, ele: 1181 },
          { lon: -122.11279, lat: 44.85713, ele: 1191 },
          { lon: -122.11362, lat: 44.85728, ele: 1194 },
          { lon: -122.11372, lat: 44.85739, ele: 1197 },
          { lon: -122.11365, lat: 44.8576, ele: 1200 },
          { lon: -122.11367, lat: 44.85774, ele: 1203 },
          { lon: -122.11364, lat: 44.85788, ele: 1206 },
          { lon: -122.1135, lat: 44.85818, ele: 1209 },
          { lon: -122.11364, lat: 44.85839, ele: 1211 },
          { lon: -122.11407, lat: 44.85861, ele: 1212 },
          { lon: -122.1143, lat: 44.85887, ele: 1208 },
          { lon: -122.11475, lat: 44.85897, ele: 1208 },
          { lon: -122.11485, lat: 44.85903, ele: 1208 },
          { lon: -122.11539, lat: 44.85907, ele: 1215 },
          { lon: -122.11588, lat: 44.85929, ele: 1219 },
          { lon: -122.11615, lat: 44.85927, ele: 1221 },
          { lon: -122.11641, lat: 44.85929, ele: 1223 },
          { lon: -122.11662, lat: 44.85925, ele: 1222 },
          { lon: -122.11676, lat: 44.85909, ele: 1222 },
          { lon: -122.11693, lat: 44.85901, ele: 1221 },
          { lon: -122.11718, lat: 44.85898, ele: 1219 },
          { lon: -122.11742, lat: 44.85902, ele: 1218 },
          { lon: -122.11767, lat: 44.85902, ele: 1217 },
          { lon: -122.11782, lat: 44.85891, ele: 1217 },
          { lon: -122.11828, lat: 44.85882, ele: 1216 },
          { lon: -122.11862, lat: 44.85871, ele: 1213 },
          { lon: -122.11877, lat: 44.85868, ele: 1212 },
          { lon: -122.11899, lat: 44.85881, ele: 1213 },
          { lon: -122.11929, lat: 44.85896, ele: 1213 },
          { lon: -122.11962, lat: 44.85893, ele: 1213 },
          { lon: -122.12001, lat: 44.85889, ele: 1214 },
          { lon: -122.12044, lat: 44.85882, ele: 1214 },
          { lon: -122.12066, lat: 44.85867, ele: 1214 },
          { lon: -122.12101, lat: 44.85863, ele: 1216 },
          { lon: -122.12126, lat: 44.85847, ele: 1216 },
          { lon: -122.12161, lat: 44.85831, ele: 1215 },
          { lon: -122.12197, lat: 44.85821, ele: 1214 },
          { lon: -122.12211, lat: 44.85799, ele: 1212 },
          { lon: -122.12228, lat: 44.85776, ele: 1214 },
          { lon: -122.12231, lat: 44.85754, ele: 1218 },
          { lon: -122.12215, lat: 44.85726, ele: 1216 },
          { lon: -122.12198, lat: 44.85702, ele: 1220 },
          { lon: -122.12186, lat: 44.85679, ele: 1228 },
          { lon: -122.12149, lat: 44.85658, ele: 1228 },
          { lon: -122.12114, lat: 44.85646, ele: 1228 },
          { lon: -122.12041, lat: 44.85641, ele: 1227 },
          { lon: -122.11975, lat: 44.85622, ele: 1238 },
          { lon: -122.11938, lat: 44.8562, ele: 1237 },
          { lon: -122.11879, lat: 44.85616, ele: 1234 },
          { lon: -122.11814, lat: 44.85597, ele: 1240 },
          { lon: -122.11754, lat: 44.85576, ele: 1240 },
          { lon: -122.11721, lat: 44.85567, ele: 1243 },
          { lon: -122.11684, lat: 44.85546, ele: 1252 },
          { lon: -122.11622, lat: 44.85528, ele: 1255 },
          { lon: -122.1159, lat: 44.85517, ele: 1256 },
          { lon: -122.11574, lat: 44.855, ele: 1259 },
          { lon: -122.11618, lat: 44.85478, ele: 1273 },
          { lon: -122.11606, lat: 44.85468, ele: 1274 },
          { lon: -122.11605, lat: 44.85451, ele: 1277 },
          { lon: -122.11633, lat: 44.85453, ele: 1280 },
          { lon: -122.11663, lat: 44.85459, ele: 1282 },
          { lon: -122.11681, lat: 44.85454, ele: 1286 },
          { lon: -122.11728, lat: 44.8546, ele: 1287 },
          { lon: -122.11753, lat: 44.85466, ele: 1287 },
          { lon: -122.11777, lat: 44.85459, ele: 1290 },
          { lon: -122.11807, lat: 44.85451, ele: 1293 },
          { lon: -122.1181, lat: 44.85438, ele: 1295 },
          { lon: -122.11831, lat: 44.85431, ele: 1296 },
          { lon: -122.11856, lat: 44.85438, ele: 1296 },
          { lon: -122.11888, lat: 44.85443, ele: 1298 },
          { lon: -122.11903, lat: 44.85435, ele: 1300 },
          { lon: -122.1193, lat: 44.85438, ele: 1302 },
          { lon: -122.11964, lat: 44.85442, ele: 1305 },
          { lon: -122.12, lat: 44.85441, ele: 1309 },
          { lon: -122.12037, lat: 44.85436, ele: 1311 },
          { lon: -122.12061, lat: 44.8544, ele: 1310 },
          { lon: -122.12086, lat: 44.85421, ele: 1316 },
          { lon: -122.12079, lat: 44.85387, ele: 1318 },
          { lon: -122.12096, lat: 44.85372, ele: 1317 },
          { lon: -122.12125, lat: 44.8537, ele: 1318 },
          { lon: -122.12164, lat: 44.8536, ele: 1321 },
          { lon: -122.12195, lat: 44.8535, ele: 1324 },
          { lon: -122.12242, lat: 44.85354, ele: 1324 },
          { lon: -122.12279, lat: 44.85365, ele: 1329 },
          { lon: -122.12324, lat: 44.85386, ele: 1334 },
          { lon: -122.12325, lat: 44.85412, ele: 1336 },
          { lon: -122.12368, lat: 44.85428, ele: 1340 },
          { lon: -122.12386, lat: 44.8545, ele: 1343 },
          { lon: -122.12407, lat: 44.85453, ele: 1346 },
          { lon: -122.12412, lat: 44.85424, ele: 1349 },
          { lon: -122.12428, lat: 44.85398, ele: 1351 },
          { lon: -122.12483, lat: 44.85385, ele: 1357 },
          { lon: -122.12565, lat: 44.85376, ele: 1359 },
          { lon: -122.12639, lat: 44.85384, ele: 1367 },
          { lon: -122.12741, lat: 44.85393, ele: 1372 },
          { lon: -122.12817, lat: 44.85395, ele: 1377 },
          { lon: -122.12896, lat: 44.85401, ele: 1380 },
          { lon: -122.12986, lat: 44.85418, ele: 1378 },
          { lon: -122.13054, lat: 44.85434, ele: 1379 },
          { lon: -122.13093, lat: 44.85455, ele: 1387 },
          { lon: -122.13151, lat: 44.85458, ele: 1381 },
          { lon: -122.13223, lat: 44.85455, ele: 1383 },
          { lon: -122.133, lat: 44.8545, ele: 1385 },
          { lon: -122.13355, lat: 44.85457, ele: 1389 },
          { lon: -122.13404, lat: 44.85471, ele: 1394 },
          { lon: -122.13457, lat: 44.85505, ele: 1402 },
          { lon: -122.13517, lat: 44.85536, ele: 1400 },
          { lon: -122.1356, lat: 44.85537, ele: 1396 },
          { lon: -122.1363, lat: 44.85538, ele: 1395 },
          { lon: -122.1366, lat: 44.85509, ele: 1393 },
          { lon: -122.13709, lat: 44.85493, ele: 1391 },
          { lon: -122.13729, lat: 44.85472, ele: 1387 },
          { lon: -122.1377, lat: 44.85453, ele: 1389 },
          { lon: -122.13868, lat: 44.85422, ele: 1389 },
          { lon: -122.13901, lat: 44.85416, ele: 1393 },
          { lon: -122.13911, lat: 44.8538, ele: 1396 },
          { lon: -122.13925, lat: 44.85355, ele: 1397 },
          { lon: -122.13938, lat: 44.85362, ele: 1401 },
          { lon: -122.13952, lat: 44.85358, ele: 1402 },
          { lon: -122.1396, lat: 44.85348, ele: 1402 },
          { lon: -122.13974, lat: 44.85341, ele: 1405 },
          { lon: -122.1403, lat: 44.85333, ele: 1416 },
          { lon: -122.14064, lat: 44.85318, ele: 1412 },
          { lon: -122.14127, lat: 44.853, ele: 1415 },
          { lon: -122.14168, lat: 44.85278, ele: 1424 },
          { lon: -122.14186, lat: 44.85264, ele: 1426 },
          { lon: -122.14193, lat: 44.85239, ele: 1428 },
          { lon: -122.1419, lat: 44.85192, ele: 1431 },
          { lon: -122.14196, lat: 44.8518, ele: 1435 },
          { lon: -122.14196, lat: 44.85159, ele: 1437 },
          { lon: -122.14192, lat: 44.85138, ele: 1435 },
          { lon: -122.14192, lat: 44.85115, ele: 1436 },
          { lon: -122.14202, lat: 44.85087, ele: 1439 },
          { lon: -122.14221, lat: 44.85024, ele: 1438 },
          { lon: -122.14263, lat: 44.84984, ele: 1440 },
          { lon: -122.14313, lat: 44.84963, ele: 1437 },
          { lon: -122.14323, lat: 44.84953, ele: 1433 },
          { lon: -122.14329, lat: 44.84937, ele: 1426 },
          { lon: -122.14323, lat: 44.84919, ele: 1421 },
          { lon: -122.14311, lat: 44.84906, ele: 1419 },
          { lon: -122.14293, lat: 44.84891, ele: 1417 },
          { lon: -122.14276, lat: 44.84884, ele: 1417 },
          { lon: -122.14261, lat: 44.84873, ele: 1415 },
          { lon: -122.14256, lat: 44.84799, ele: 1425 },
          { lon: -122.14237, lat: 44.8473, ele: 1430 },
          { lon: -122.14223, lat: 44.8471, ele: 1435 },
          { lon: -122.14202, lat: 44.84696, ele: 1443 },
          { lon: -122.14172, lat: 44.84688, ele: 1449 },
          { lon: -122.14157, lat: 44.84686, ele: 1451 },
          { lon: -122.14129, lat: 44.84679, ele: 1453 },
          { lon: -122.14121, lat: 44.84656, ele: 1458 },
          { lon: -122.1411, lat: 44.84642, ele: 1462 },
          { lon: -122.14085, lat: 44.84623, ele: 1466 },
          { lon: -122.1407, lat: 44.84596, ele: 1473 },
          { lon: -122.14029, lat: 44.84501, ele: 1484 },
          { lon: -122.13987, lat: 44.84455, ele: 1497 },
          { lon: -122.13982, lat: 44.84434, ele: 1499 },
          { lon: -122.1404, lat: 44.84328, ele: 1496 },
          { lon: -122.14043, lat: 44.84298, ele: 1499 },
          { lon: -122.14027, lat: 44.84274, ele: 1505 },
          { lon: -122.14006, lat: 44.8426, ele: 1507 },
          { lon: -122.13933, lat: 44.84233, ele: 1483 },
          { lon: -122.13924, lat: 44.84222, ele: 1481 },
          { lon: -122.13919, lat: 44.84197, ele: 1478 },
          { lon: -122.1393, lat: 44.84122, ele: 1473 },
          { lon: -122.13931, lat: 44.841, ele: 1471 },
          { lon: -122.13922, lat: 44.84067, ele: 1464 },
          { lon: -122.13918, lat: 44.83992, ele: 1450 },
          { lon: -122.13919, lat: 44.83918, ele: 1451 },
          { lon: -122.13926, lat: 44.8391, ele: 1451 },
          { lon: -122.13928, lat: 44.83898, ele: 1449 },
          { lon: -122.13928, lat: 44.8389, ele: 1448 },
          { lon: -122.13946, lat: 44.83886, ele: 1451 },
          { lon: -122.13965, lat: 44.83879, ele: 1453 },
          { lon: -122.1398, lat: 44.83866, ele: 1454 },
          { lon: -122.13972, lat: 44.83776, ele: 1434 },
          { lon: -122.13981, lat: 44.83722, ele: 1440 },
          { lon: -122.13962, lat: 44.83655, ele: 1436 },
          { lon: -122.13985, lat: 44.83535, ele: 1443 },
          { lon: -122.13977, lat: 44.83474, ele: 1441 },
          { lon: -122.13977, lat: 44.83414, ele: 1434 },
          { lon: -122.13972, lat: 44.83388, ele: 1430 },
          { lon: -122.13964, lat: 44.83372, ele: 1428 },
          { lon: -122.13951, lat: 44.83353, ele: 1424 },
          { lon: -122.13947, lat: 44.83336, ele: 1422 },
          { lon: -122.13917, lat: 44.83287, ele: 1419 },
          { lon: -122.139, lat: 44.83257, ele: 1419 },
          { lon: -122.1386, lat: 44.83224, ele: 1421 },
          { lon: -122.13833, lat: 44.83222, ele: 1424 },
          { lon: -122.13815, lat: 44.83217, ele: 1426 },
          { lon: -122.13769, lat: 44.83175, ele: 1441 },
          { lon: -122.13754, lat: 44.8317, ele: 1441 },
          { lon: -122.13739, lat: 44.8316, ele: 1441 },
          { lon: -122.13715, lat: 44.83111, ele: 1448 },
          { lon: -122.13695, lat: 44.831, ele: 1443 },
          { lon: -122.13662, lat: 44.83092, ele: 1434 },
          { lon: -122.13644, lat: 44.83083, ele: 1434 },
          { lon: -122.13619, lat: 44.83061, ele: 1437 },
          { lon: -122.13597, lat: 44.83002, ele: 1427 },
          { lon: -122.13591, lat: 44.8298, ele: 1427 },
          { lon: -122.13588, lat: 44.82951, ele: 1425 },
          { lon: -122.13546, lat: 44.82904, ele: 1426 },
          { lon: -122.13509, lat: 44.82886, ele: 1419 },
          { lon: -122.13404, lat: 44.82849, ele: 1412 },
          { lon: -122.13388, lat: 44.82838, ele: 1415 },
          { lon: -122.13309, lat: 44.82837, ele: 1409 },
          { lon: -122.13274, lat: 44.82839, ele: 1410 },
          { lon: -122.13244, lat: 44.82843, ele: 1411 },
          { lon: -122.13135, lat: 44.82846, ele: 1406 },
          { lon: -122.13084, lat: 44.82827, ele: 1406 },
          { lon: -122.13034, lat: 44.82809, ele: 1405 },
          { lon: -122.13003, lat: 44.82801, ele: 1400 },
          { lon: -122.12974, lat: 44.82783, ele: 1387 },
          { lon: -122.12931, lat: 44.82705, ele: 1364 },
          { lon: -122.12932, lat: 44.82685, ele: 1358 },
          { lon: -122.13005, lat: 44.82658, ele: 1364 },
          { lon: -122.13033, lat: 44.82636, ele: 1360 },
          { lon: -122.13061, lat: 44.82595, ele: 1352 },
          { lon: -122.13106, lat: 44.82548, ele: 1332 },
          { lon: -122.13127, lat: 44.82541, ele: 1335 },
          { lon: -122.13159, lat: 44.82539, ele: 1346 },
          { lon: -122.13145, lat: 44.82528, ele: 1336 },
          { lon: -122.13123, lat: 44.8252, ele: 1326 },
          { lon: -122.13092, lat: 44.82515, ele: 1319 },
          { lon: -122.13017, lat: 44.8253, ele: 1310 },
          { lon: -122.1299, lat: 44.82538, ele: 1306 },
          { lon: -122.12967, lat: 44.82543, ele: 1303 },
          { lon: -122.12952, lat: 44.82554, ele: 1306 },
          { lon: -122.12924, lat: 44.82564, ele: 1304 },
          { lon: -122.12903, lat: 44.82578, ele: 1304 },
          { lon: -122.12855, lat: 44.82582, ele: 1283 },
          { lon: -122.12817, lat: 44.82588, ele: 1276 },
          { lon: -122.12898, lat: 44.82542, ele: 1282 },
          { lon: -122.13004, lat: 44.82431, ele: 1242 },
          { lon: -122.13037, lat: 44.82414, ele: 1240 },
          { lon: -122.13083, lat: 44.82348, ele: 1229 },
          { lon: -122.13053, lat: 44.82352, ele: 1220 },
          { lon: -122.13001, lat: 44.82384, ele: 1222 },
          { lon: -122.12747, lat: 44.82471, ele: 1207 },
          { lon: -122.12621, lat: 44.82498, ele: 1198 },
          { lon: -122.12466, lat: 44.8252, ele: 1185 }
    ]
  };