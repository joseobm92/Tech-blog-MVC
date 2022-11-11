const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth')

router.get('/', async (req, res) => {
  try {
    // Get all POST and JOIN with USER data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username', 'id',],
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('all-posts', {
      posts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/post/:id', withAuth, async (req, res) => { //add withAuth to block user from Clicking a single Post and redirect them to login!
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username', 'id',],
        },
      ],
    });

    const post = postData.get({ plain: true });

    res.render('single-post', { //render single post handlebar
      ...post,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  
  res.render('signup');
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard'); //telling it to get /dashboard URL not the handlebar
    return;
  }

  res.render('login');
});




module.exports = router;
