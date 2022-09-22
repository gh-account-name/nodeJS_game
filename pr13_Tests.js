const devDebugger = require('./devDebugger');
const cowsAndBulls = require('./pr13');

// Тест 0
devDebugger.expect(cowsAndBulls('2314','2341')).willBe(1);

// Тест 1
devDebugger.expect(cowsAndBulls(2314,2341)).willBe(1);

// Тест 2
devDebugger.expect(cowsAndBulls('23145','25341',5)).willBe(1);

// Тест 3
devDebugger.expect(cowsAndBulls('2314','2341','4')).willBe(-1);

// Тест 4
devDebugger.expect(cowsAndBulls('2314','2341',4.1)).willBe(-1);

// Тест 5
devDebugger.expect(cowsAndBulls('12314','2341',4.1)).willBe(-1);

// Тест 6
devDebugger.expect(cowsAndBulls('2314','2341',10)).willBe(-1);

// Тест 7
devDebugger.expect(cowsAndBulls('2314','2341',1)).willBe(-1);

// Тест 8
devDebugger.expect(cowsAndBulls('sixEightOneThree','2341')).willBe(-1);

// Тест 9
devDebugger.expect(cowsAndBulls('0123','3152')).willBe(-1);

// Тест 10
devDebugger.expect(cowsAndBulls(13.42,'2341')).willBe(-1);

// Тест 11
devDebugger.expect(cowsAndBulls('23145','23416')).willBe(-1);

// Тест 12
devDebugger.expect(cowsAndBulls('2314','2341',6)).willBe(-1);

// Тест 13
devDebugger.expect(cowsAndBulls('-2314','2341')).willBe(-1);

// Тест 14
devDebugger.expect(cowsAndBulls('4423','2341')).willBe(-1);

// Тест 15
devDebugger.expect(cowsAndBulls('2314',2334)).willBe(-1);

// Тест 16
devDebugger.expect(cowsAndBulls(2314,2314)).willBe(1);

// Тест 17
devDebugger.expect(cowsAndBulls('2314',2314)).willBe(1);

