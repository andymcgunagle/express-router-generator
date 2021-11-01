import express from 'express';
import User from './user.js';

const usersRouter = express.Router();

// @route POST /api/users/add-new-user
// @desc 
// @access
usersRouter.post('/add-new-user', (req, res) => {
  const {
    // Add relevant user data
  } = req.body;

  try {
    let user = new User({
      // Add relevant user data
    });

    user.save();

    res.statusCode(200).send(user);
  } catch (error) {
    console.error(error);

    res.statusCode(400).send(error);
  };
});

// @route GET /api/users/get-user
// @desc 
// @access
usersRouter.get('/get-user', (req, res) => {
  const id = req.body.id;

  try {
    const user = await User.findById(id);

    res.statusCode(200).send(user);
  } catch (error) {
    console.error(error);

    res.statusCode(400).send(error);
  };
});

// @route PUT /api/users/update-user
// @desc 
// @access
usersRouter.put('/update-user', (req, res) => {
  const {
    id,
    // Add relevant user data
  } = req.body;

  try {
    const user = await User.findByIdAndUpdate(id, update, { new: true });

    res.statusCode(200).send(user);
  } catch (error) {
    console.error(error);

    res.statusCode(400).send(error);
  };
});

// @route DELETE /api/users/delete-user
// @desc 
// @access
usersRouter.delete('/delete-user', (req, res) => {
  const id = req.body.id;

  try {
    const user = await User.findByIdAndDelete(id);

    res.statusCode(200).send(user);
  } catch (error) {
    console.error(error);

    res.statusCode(400).send(error);
  };
});

export default usersRouter;