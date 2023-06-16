import Bowerman from '../bowerman';

test('shoud create object', () => {
  expect(new Bowerman('testName', 'bowerman')).toBeInstanceOf(Bowerman);
});
