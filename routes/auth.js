const router = require('express').Router();
const User = require('../models/User');

// REGISTER
router.get('/register', async (req, res) => {
  try {
    // const user = await User.create({
    //   username: 'emmy',
    //   email: 'emmy@gmail.com',
    //   password: '123456',
    // });

    const users = await User.find();

    res.send('Ok', users);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
