import routeTypeExtractor from '../routeTypeExtractor.js';

test('extracts the type of route', () => {
  expect(routeTypeExtractor('postRouteName')).toBe('post');
  expect(routeTypeExtractor('additionalGetRouteName')).toBe('get');
});