import Daemon from '../daemon';

test('shoud create object', () => {
  expect(new Daemon('testName', 'bowerman')).toBeInstanceOf(Daemon);
});

test('shoud create object', () => {
  expect(new Daemon('testName')).toBeInstanceOf(Daemon);
});


test('shoud throw error', () => {
  expect(() => { new Daemon('testName', 'wrongType'); }).toThrow();
});
