import express from 'express';

const users = express.Router();

// @route POST /users/
// @desc
// @access
users.post('/', (req, res) => {
  try {

  } catch (error) {
    console.error(error);
  };
});

// @route GET /users/:Id
// @desc
// @access
users.get('/:Id', (req, res) => {
  try {

  } catch (error) {
    console.error(error);
  };
});

// @route PUT /users/:Id
// @desc
// @access
users.put('/:Id', (req, res) => {
  try {

  } catch (error) {
    console.error(error);
  };
});

// @route DELETE /users/:Id
// @desc
// @access
users.delete('/:Id', (req, res) => {
  try {

  } catch (error) {
    console.error(error);
  };
});

export default users;