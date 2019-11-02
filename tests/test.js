const lib = require('../index');


describe('test suite', () => {
  it('allCaps function', () => {
    expect.assertions(1);
    expect(lib.allCaps('abc')).toBe('ABC');
  });

  it('capitalizeHeadline function', () => {
    expect.assertions(1);
    expect(lib.capitalizeHeadline('munchausen syndrome by proxy is an unusual name for a cat')).toBe('Munchausen Syndrome by Proxy is an Unusual Name for a Cat');
  });
});


