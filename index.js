import writeRouterTemplateToFile from "./createRouterFunctions/writeRouterTemplateToFile.js";

export const routerTemplate = {
  routerName: 'users',
  postRouteName: 'add-new-user',
  // additionalPostRouteName: 'my-additional-post-route',
  getRouteName: 'get-user',
  // additionalGetRouteName: 'my-additional-get-route',
  putRouteName: 'update-user',
  // additionalPutRouteName: 'my-additional-put-route',
  deleteRouteName: 'delete-user',
  // additionalDeleteRouteName: 'my-additional-delete-route',
};

writeRouterTemplateToFile(routerTemplate, 'usersRouter');
