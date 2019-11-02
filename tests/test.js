const lib = require('../index');

test('sanity check', () => {
  expect(lib.allCaps('abc')).toBe('ABC');
});

test('title case', () => {
  expect(lib.capitalizeHeadline('munchausen syndrome by proxy is an unusual name for a cat')).toBe('Munchausen Syndrome by Proxy is an Unusual Name for a Cat');
});
