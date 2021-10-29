import createRoute from './createRoute.js';

const createAllRoutes = (template) => {
  const routerName = `${template['routerName']}`;

  for (const property in template) {
    if (property !== 'routerName' && template[property] !== undefined) {
      const routeNameKey = `${property}`;
      const routeName = `${template[property]}`;

      const route = createRoute(routerName, routeNameKey, routeName);

      template[property] = route;
    };
  };

  return template;
};

export default createAllRoutes;