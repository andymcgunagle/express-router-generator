import createAllRoutes from './createAllRoutes.js';
import convertToCamelCase from './convertToCamelCase.js';
import { template1, template2 } from './templates.js';

export const createRouterTemplate = (template) => {
  const {
    routerName,
    postRouteName,
    additionalPostRouteName,
    getRouteName,
    additionalGetRouteName,
    putRouteName,
    additionalPutRouteName,
    deleteRouteName,
    additionalDeleteRouteName,
  } = createAllRoutes(template);

  const camelCasedRouterName = convertToCamelCase(routerName);

  return (
    `import express from 'express';\n\n` +
    `const ${camelCasedRouterName}Router = express.Router();\n\n` +
    `${postRouteName !== undefined ? postRouteName : ''}\n\n` +
    `${additionalPostRouteName !== undefined ? `${additionalPostRouteName}\n\n` : ''}` +
    `${getRouteName !== undefined ? getRouteName : ''}\n\n` +
    `${additionalGetRouteName !== undefined ? `${additionalGetRouteName}\n\n` : ''}` +
    `${putRouteName !== undefined ? putRouteName : ''}\n\n` +
    `${additionalPutRouteName !== undefined ? `${additionalPutRouteName}\n\n` : ''}` +
    `${deleteRouteName !== undefined ? deleteRouteName : ''}\n\n` +
    `${additionalDeleteRouteName !== undefined ? `${additionalDeleteRouteName}\n\n` : ''}` +
    `export default ${camelCasedRouterName}Router;`
  );
};

// TESTS
// console.log(createRouterTemplate(template1));
// console.log(createRouterTemplate(template2));

export default createRouterTemplate;