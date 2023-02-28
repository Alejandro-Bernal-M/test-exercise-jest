const task1 = require('./task-1.js')
const task2 = require('./task-2.js')
const task3 = require('./task-3')
const task4 = require('./task-4')

test('test length 1', () => {
  expect(task1('hello')).toBe(5);
});

test('length < 1 or > 10', () => {
  expect(task1('hellohellohello')).toMatch("Lengths conditions not fulfilled");
});

test('reverse string', () => {
  expect(task2('hello')).toBe('olleh');
});

describe('calculator', () => {
  const calc = new task3;

  test('adding', () => {
    expect(calc.add(10,2)).toBe(12);
  });

  test('substract', () => {
    expect(calc.subtract(10,2)).toBe(8);
  });

  test('divide', () => {
    expect(calc.divide(10,2)).toBe(5);
  });

  test('multiply', () => {
    expect(calc.multiply(10,2)).toBe(20);
  });
})

test('Capitalize', () => {
  expect(task4('alejandro')).toBe('Alejandro');
})