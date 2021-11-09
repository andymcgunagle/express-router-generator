import fs from 'fs/promises';
import createRouterTemplate from './createRouterTemplate.js';
import formatNewFileName from './formatNewFileName.js';

/**
 * Creates a new file with an Express router including the routes you specify. 
 * @param {Object} template - An object with the names of the routes you'd like to include in the new router.
 *  
 * Optionally, instead of adding the name of each route you'd like to include, you can set `template.useIdParams: true` to create a router with a POST route of `/`, plus GET, PUT, and DELETE routes with routes of `/:Id`.
 *  
 * Or, you can set `template.useGenericNames: true` to create a router with POST, GET, PUT, and DELETE routes that use generic route names: `post-${routerName}`, `get-${routerName}`, `update-${routerName}`, and `delete-${routerName}`. 
 * @param {string} template.routerName - The name of the new router.
 * @param {boolean} [template.useIdParams] - Instead of writing route names, you can set this property to true to create a router with a POST route of `/`, plus GET, PUT, and DELETE routes with routes of `/:Id`. This cannot be used in conjunction with useGenericNames or custom route names.
 * @param {boolean} [template.useGenericNames] - Instead of writing route names, you can set this property to true to create a router with POST, GET, PUT, and DELETE routes that use generic route names: post-${routerName}, `get-${routerName}`, `update-${routerName}`, and `delete-${routerName}`. This cannot be used in conjunction with useIdParams or custom route names.
 * @param {string} [template.postRouteName] - The name of the POST route in the new router.
 * @param {string} [template.additionalPostRouteName] - The name of an additional POST route in the new router.
 * @param {string} [template.getRouteName] - The name of the GET route in the new router.
 * @param {string} [template.additionalGetRouteName] - The name of an additional GET route in the new router.
 * @param {string} [template.putRouteName] - The name of the PUT route in the new router.
 * @param {string} [template.additionalPutRouteName] - The name of an additional PUT route in the new router.
 * @param {string} [template.deleteRouteName] - The name of the DELETE route in the new router.
 * @param {string} [template.additionalDeleteRouteName] - The name of an additional DELETE route in the new router.
 * @param {string} [newFileName=newRouter.js] - Optional parameter for the name of the new file to be generated. If no argument is given, the new file will have the name 'newRouter(a random number between 1 and 10,000).js'.
 * @returns {promise} A new file with the Express router and specified routes will be written to the project's home directory. The promise returned by "await fs.writeFile" within this function is returned by this function and resolved with no arguments upon success.
 * @example
 * export const routerTemplate = {
 *   routerName: 'users',
 *   postRouteName: 'add-new-user',
 *   getRouteName: 'get-user',
 *   putRouteName: 'update-user',
 *   deleteRouteName: 'delete-user',
 * };
 * 
 * createNewRouter(routerTemplate, 'usersRouter');
 * 
 * @example
 * export const routerTemplate = {
 *   routerName: 'users',
 *   useGenericNames: true,
 * };
 * 
 * createNewRouter(routerTemplate, 'usersRouter');
 */
export const createNewRouter = async (template, newFileName = 'newRouter.js') => {
  newFileName = formatNewFileName(newFileName);

  // Create template text
  const fileText = createRouterTemplate(template);

  try {
    // Write text to file, return promise
    const promise = await fs.writeFile(`${newFileName}`, fileText);

    return promise;
  } catch (error) {
    console.error(error);
  };
};

export default createNewRouter;