const lib = require('../index');

describe('test suite', () => {
  it('firstUpper function', () => {
    expect.hasAssertions();
    expect(lib.firstUpper('hello girl')).toBe('Hello girl');
  });

  it('allCaps function', () => {
    expect.hasAssertions();
    expect(lib.allCaps('hello lady')).toBe('HELLO LADY');
  });

  it('capitalizeWords function', () => {
    expect.hasAssertions();
    expect(lib.capitalizeWords('just do it')).toBe('Just Do It')
  })

  it('capitalizeHeadline function', () => {
    expect.hasAssertions();
    expect(lib.capitalizeHeadline('munchausen syndrome by proxy is an unusual name for a cat')).toBe('Munchausen Syndrome by Proxy is an Unusual Name for a Cat');
  });

});
