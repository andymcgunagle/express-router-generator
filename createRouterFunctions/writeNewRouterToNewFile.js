import fs from 'fs/promises';
import createRouterTemplate from './createRouterTemplate.js';
import formatNewFileName from './formatNewFileName.js';

/**
 * Creates a new file with an Express router. 
 * @param {Object} template - An object with the names of the routes in the new router.
 * @param {string} template.routerName - The name of the new router.
 * @param {string} [template.postRouteName] - The name of the post route in the new router.
 * @param {string} [template.additionalPostRouteName] - The name of an additional post route in the new router.
 * @param {string} [template.getRouteName] - The name of the get route in the new router.
 * @param {string} [template.additionalGetRouteName] - The name of an additional get route in the new router.
 * @param {string} [template.putRouteName] - The name of the put route in the new router.
 * @param {string} [template.additionalPutRouteName] - The name of an additional put route in the new router.
 * @param {string} [template.deleteRouteName] - The name of the delete route in the new router.
 * @param {string} [template.additionalDeleteRouteName] - The name of an additional delete route in the new router.
 * @param {string} [newFileName=newRouter.js] - Optional parameter for the name of the new file to be generated. 
 * @return {promise} A new file with the Express router will be written to the project's home directory. The promise returned by "await fs.writeFile" within this function is returned by this function and resolved with no arguments upon success.
 * @example
 * export const routerTemplate = {
 *   routerName: 'user',
 *   postRouteName: 'add-new-user',
 *   getRouteName: 'get-user',
 *   putRouteName: 'update-user',
 *   deleteRouteName: 'delete-user',
 * };
 * 
 * writeNewRouterToNewFile(routerTemplate, 'userRouter');
 */
export const writeNewRouterToNewFile = async (template, newFileName = 'newRouter.js') => {
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

export default writeNewRouterToNewFile;