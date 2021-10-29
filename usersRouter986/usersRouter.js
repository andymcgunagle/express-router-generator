import express from 'express';

const usersRouter = express.Router();

// @route POST /api/users/add-new-user
// @desc 
// @access
usersRouter.post('/add-new-user', (req, res) => {
  try {

  } catch (error) {
    console.error(error);
  };
});

// @route GET /api/users/get-user
// @desc 
// @access
usersRouter.get('/get-user', (req, res) => {
  try {

  } catch (error) {
    console.error(error);
  };
});

// @route PUT /api/users/update-user
// @desc 
// @access
usersRouter.put('/update-user', (req, res) => {
  try {

  } catch (error) {
    console.error(error);
  };
});

// @route DELETE /api/users/delete-user
// @desc 
// @access
usersRouter.delete('/delete-user', (req, res) => {
  try {

  } catch (error) {
    console.error(error);
  };
});

export default usersRouter;