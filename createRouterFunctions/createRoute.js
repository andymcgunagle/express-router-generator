import routeTypeExtractor from './routeTypeExtractor.js';
import convertToCamelCase from './convertToCamelCase.js';

const createRoute = (routerName, routeNameKey, routeName) => {
  const routeType = routeTypeExtractor(routeNameKey);

  const camelCasedRouterName = convertToCamelCase(routerName);

  return (
    `// @route ${routeType.toUpperCase()} /api/${routerName}/${routeName}
// @desc 
// @access
${camelCasedRouterName}Router.${routeType}('/${routeName}', (req, res) => {
  try {

  } catch (error) {
    console.error(error);
  };
});`
  );
};

export default createRoute;