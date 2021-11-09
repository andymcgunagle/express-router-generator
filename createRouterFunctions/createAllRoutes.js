import createRoute from './createRoute.js';

const createAllRoutes = (template) => {
  const routerName = `${template['routerName']}`;
  const useGenericNames = `${template['useGenericNames']}`;
  const useIdParams = `${template['useIdParams']}`;

  const genericNames = {
    routerName,
    postRouteName: `post-${routerName}`,
    getRouteName: `get-${routerName}`,
    putRouteName: `update-${routerName}`,
    deleteRouteName: `delete-${routerName}`,
  };

  const routesWithIdParams = {
    routerName,
    postRouteName: ``,
    getRouteName: `:Id`,
    putRouteName: `:Id`,
    deleteRouteName: `:Id`,
  };

  // Setting 'enumerable: false' ensures this property does not show up during enumeration of the properties on the corresponding object
  Object.defineProperty(template, 'routerName', {
    enumerable: false,
  });

  // Setting 'enumerable: false' ensures this property does not show up during enumeration of the properties on the corresponding object
  Object.defineProperty(genericNames, 'routerName', {
    enumerable: false,
  });

  // Setting 'enumerable: false' ensures this property does not show up during enumeration of the properties on the corresponding object
  Object.defineProperty(routesWithIdParams, 'routerName', {
    enumerable: false,
  });

  if (useGenericNames && template['useGenericNames'] !== undefined) {
    for (const name in genericNames) {
      const routeNameKey = `${name}`;
      const routeName = `${genericNames[name]}`;

      const route = createRoute(routerName, routeNameKey, routeName);

      genericNames[name] = route;
    };

    return genericNames;
  };

  if (useIdParams && template['useIdParams'] !== undefined) {
    for (const name in routesWithIdParams) {
      const routeNameKey = `${name}`;
      const routeName = `${routesWithIdParams[name]}`;

      const route = createRoute(routerName, routeNameKey, routeName);

      routesWithIdParams[name] = route;
    };

    return routesWithIdParams;
  };

  if (!useGenericNames || template['useGenericNames'] === undefined) {
    for (const property in template) {
      const routeNameKey = `${property}`;
      const routeName = `${template[property]}`;

      const route = createRoute(routerName, routeNameKey, routeName);

      template[property] = route;
    };

    return template;
  };
};

export default createAllRoutes;