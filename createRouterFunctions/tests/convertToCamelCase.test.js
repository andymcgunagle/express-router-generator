import convertToCamelCase from '../convertToCamelCase.js';

test('converts to camel case', () => {
  expect(convertToCamelCase('my-router')).toBe('myRouter');
  expect(convertToCamelCase('my-amazing-post-route')).toBe('myAmazingPostRoute');
});