import writeNewRouterToNewFile from "./createRouterFunctions/writeNewRouterToNewFile.js";

export const routerTemplate = {
  routerName: 'user',
  postRouteName: 'add-new-user',
  // additionalPostRouteName: 'my-additional-post-route',
  getRouteName: 'get-user',
  // additionalGetRouteName: 'my-additional-get-route',
  putRouteName: 'update-user',
  // additionalPutRouteName: 'my-additional-put-route',
  deleteRouteName: 'delete-user',
  // additionalDeleteRouteName: 'my-additional-delete-route',
};

writeNewRouterToNewFile(routerTemplate, 'userRouter');