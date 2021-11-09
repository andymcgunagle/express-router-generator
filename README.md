# Express Router Generator by amcgunagle

One method to help you quickly create new files containing templates for Express routers.

## Installation

npm i express-router-generator --save-dev

## createNewRouter method

Creates a new file with an Express router including the routes you specify

### createNewRouter method parameters

1. #### template

An object with the names of the routes you'd like to include in the new router. Additional details regarding the template parameter's properties can be found below in the [template parameter properties](#template-parameter-properties) section.

```javascript
export const template = {
  routerName: 'users',
  postRouteName: 'add-new-user',
  // additionalPostRouteName:
  getRouteName: 'get-user',
  // additionalGetRouteName:
  putRouteName: 'update-user',
  // additionalPutRouteName:
  deleteRouteName: 'delete-user',
  // additionalDeleteRouteName:
};

createNewRouter(template, 'usersRouter');
```

Optionally, instead of writing the name of each route you'd like to include, you can set `template.useIdParams: true` to create a router with a POST route of `/`, plus GET, PUT, and DELETE routes with routes of `/:Id`:

```javascript
export const template = {
  routerName: 'users',
  useIdParams: true,
};

createNewRouter(template, 'userRouter');
```

Or, instead of writing the name of each route you'd like to include inside the template parameter object, you can set `template.useGenericNames: true` to create a router with POST, GET, PUT, and DELETE routes that use generic route names: `/post-${routerName}`, `/get-${routerName}`, `/update-${routerName}`, and `/delete-${routerName}`:

```javascript
export const template = {
  routerName: 'users',
  useGenericNames: true,
};

createNewRouter(template, 'usersRouter');
```

2. #### newFileName

Optional parameter for the name of the new file to be generated. If no argument is given, the new file will have the name `newRouter(a random number between 1 and 10,000).js`.

### createNewRouter method return value

The `createNewRouter` method generates a new file with the Express router and specified routes. It will be written to the directory you're currently running the `createNewRouter` method from.

Also, the promise returned by `await fs.writeFile` within this method is returned by the method and resolved with no arguments upon success. You're not required to do anything with the promise that's returned.

## template parameter properties

- `template.routerName`: The name of the new router.

- `template.useIdParams`: Instead of writing route names, you can set this property to true to create a router with a POST route of `/`, plus GET, PUT, and DELETE routes with routes of `/:Id`. This cannot be used in conjunction with `template.useGenericNames`, custom route names, or additional routes.

- `template.useGenericNames`: Instead of writing route names, you can set this property to true to create a router with POST, GET, PUT, and DELETE routes that use generic route names: `/post-${routerName}`, `/get-${routerName}`, `/update-${routerName}`, and `/delete-${routerName}`. If this is set to true, any route property names you define in this template object will be ignored.

- `template.postRouteName`: The name of the POST route in the new router.

- `template.additionalPostRouteName`: The name of an additional POST route in the new router.

- `template.getRouteName`: The name of the GET route in the new router.

- `template.additionalGetRouteName`: The name of an additional GET route in the new router.

- `template.putRouteName`: The name of the PUT route in the new router.

- `template.additionalPutRouteName`: The name of an additional PUT route in the new router.

- `template.deleteRouteName`: The name of the DELETE route in the new router.

- `template.additionalDeleteRouteName`: The name of an additional DELETE route in the new router.

## Example output

Let's say we have the following in **createNewRouters.js**:

```javascript
import expressRouterGenerator from 'express-router-generator';

export const template = {
  routerName: 'my-router',
  postRouteName: 'my-post-route',
  additionalPostRouteName: 'my-additional-post-route',
  getRouteName: 'my-get-route',
  additionalGetRouteName: 'my-additional-get-route',
  putRouteName: 'my-put-route',
  additionalPutRouteName: 'my-additional-put-route',
  deleteRouteName: 'my-delete-route',
  additionalDeleteRouteName: 'my-additional-delete-route',
};

expressRouterGenerator.createNewRouter(template, 'myNewRouter');
```

Running `node createNewRouters.js` would create a new file called **myNewRouter.js** containing the following:

```javascript
import express from 'express';

const myRouter = express.Router();

// @route POST /my-router/my-post-route
// @desc
// @access
myRouter.post('/my-post-route', (req, res) => {
  try {
  } catch (error) {
    console.error(error);
  }
});

// @route POST /my-router/my-additional-post-route
// @desc
// @access
myRouter.post('/my-additional-post-route', (req, res) => {
  try {
  } catch (error) {
    console.error(error);
  }
});

// @route GET /my-router/my-get-route
// @desc
// @access
myRouter.get('/my-get-route', (req, res) => {
  try {
  } catch (error) {
    console.error(error);
  }
});

// @route GET /my-router/my-additional-get-route
// @desc
// @access
myRouter.get('/my-additional-get-route', (req, res) => {
  try {
  } catch (error) {
    console.error(error);
  }
});

// @route PUT /my-router/my-put-route
// @desc
// @access
myRouter.put('/my-put-route', (req, res) => {
  try {
  } catch (error) {
    console.error(error);
  }
});

// @route PUT /my-router/my-additional-put-route
// @desc
// @access
myRouter.put('/my-additional-put-route', (req, res) => {
  try {
  } catch (error) {
    console.error(error);
  }
});

// @route DELETE /my-router/my-delete-route
// @desc
// @access
myRouter.delete('/my-delete-route', (req, res) => {
  try {
  } catch (error) {
    console.error(error);
  }
});

// @route DELETE /my-router/my-additional-delete-route
// @desc
// @access
myRouter.delete('/my-additional-delete-route', (req, res) => {
  try {
  } catch (error) {
    console.error(error);
  }
});

export default myRouter;
```

## ES modules

If you get an error using the import-export syntax for ES modules in the examples above, add the following to your package.json file:

```json
{
  "type": "module"
}
```
