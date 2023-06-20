import Magician from '../magician';

test('shoud create object', () => {
  expect(new Magician('testName', 'magician')).toBeInstanceOf(Magician);
});

test('shoud create object', () => {
  expect(new Magician('testName')).toBeInstanceOf(Magician);
});


test('shoud throw error', () => {
  expect(() => { new Magician('testName', 'wrongType'); }).toThrow();
});
