const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth')

// get all posts and render them thru all-post handlebar
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

//get a single post by pk and render thru single-post handlebar
router.get('/post/:id',withAuth, async (req, res) => {
  try {
      const commentData = await Comment.findAll({
          where: {
              post_id: req.params.id 
          },
          include: [ { model: User }, { model: Post }]
      });

      const postData = await Post.findByPk(req.params.id, {
          include: [ { model: User } ],
      });
      
      const post = postData.get({ plain: true });

      const comments = commentData.map((comment) => comment.get({ plain: true }));

      res.render('single-post', {
          ...post,
          comments,
          logged_in: req.session.logged_in
      });
  } catch (err) {
      res.status(500).json(err);
  }
});




// router.get('/post/comment/:id', withAuth, async (req, res) => { //add withAuth to block user from Clicking a single Post and redirect them to login!
//   try {
//     const postData = await Post.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['username', 'id',],
//         },
//       ],
//     });

//     const post = postData.get({ plain: true });

//     res.render('single-post', { //render single post handlebar
//       ...post,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   };
  
//   try {
//     const commentData = await Comment.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['username', 'id',],
//         },
//       ],
//     });

//     const comment = commentData.get({ plain: true });

//     res.render('single-post', { //render single post handlebar
//       ...comment,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });


//signup  route to render signup handlebars
router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  
  res.render('signup');
});

//login route to render login handlebar
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/dashboard'); //telling it to get /dashboard URL not the handlebar
    return;
  }

  res.render('login');
});



//make sure all routes always have the module.export
module.exports = router;
