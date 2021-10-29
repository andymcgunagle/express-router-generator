import routeTypeExtractor from '../routeTypeExtractor.js';

test('extracts the ', () => {
  expect(routeTypeExtractor('postRouteName')).toBe('post');
});

test('extracts the ', () => {
  expect(routeTypeExtractor('additionalGetRouteName')).toBe('get');
});