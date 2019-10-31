const lib = require('../index');

test('sanity check', () => {
  expect(lib.allCaps('abc')).toBe('ABC');
});
