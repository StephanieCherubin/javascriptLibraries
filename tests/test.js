const lib = require('../src/index');

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

  it('removeExtraSpaces function', () => {
    expect.hasAssertions();
    expect(lib.removeExtraSpaces('    CSV stands for comma  separated  values ')).toBe('CSV stands for comma separated values');
  });

  it('kabobCase function', () => {
    expect.hasAssertions();
    expect(lib.kabobCase('Protein Sources Are the Building Blocks of a Healthy Diet')).toBe('Protein-Sources-Are-the-Building-Blocks-of-a-Healthy-Diet');
  })

  it('snakeCase function', () => {
    expect.hasAssertions();
    expect(lib.snakeCase('Triple equals checks for strict equality, which means both the type and value must be the same')).toBe('triple_equals_checks_for_strict_equality,_which_means_both_the_type_and_value_must_be_the_same')
  })

  it('camelCase function', () => {
    expect.hasAssertions();
    expect(lib.camelCase('the event loop handles all async callbacks')).toBe('theEventLoopHandlesAllAsyncCallbacks')
  })

  it('toTitleCase function', () => {
    expect.hasAssertions();
    expect(lib.toTitleCase('some-mixed_string with spaces_underscores-and-hyphens')).toBe('Some Mixed String With Spaces Underscores And Hyphens')
  })

})