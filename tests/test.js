const lib = require('../index');

// test('allCaps function', () => {
//   expect(lib.allCaps('abc')).toBe('ABC');
// });

describe('test suite', () => {
  it('allCaps function', () => {
    expect.assertions(1);
    expect(lib.allCaps('abc')).toBe('ABC');
  });
});

// test('capitalizeHeadline function', () => {
//   expect(lib.capitalizeHeadline('munchausen syndrome by proxy is an unusual name for a cat')).toBe('Munchausen Syndrome by Proxy is an Unusual Name for a Cat');
// });
