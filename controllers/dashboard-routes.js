const router = require('express').Router();
const Post = require('../models/Post');
const withAuth = require('../utils/auth')
const User = require('../models/User');

// route to get all post and render thru all-post-admin handlebar
// Use withAuth middleware to prevent access to route
router.get('/', withAuth, async (req, res) => {
  try {
    // Get all POST and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username','id',],
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    console.log(posts)
    res.render('all-posts-admin', {
      posts,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//route to get a single post thru single-post handlebar
// router.get('/post/:id', withAuth, async (req, res) => { //add withAuth to block user from Clicking a single Post and redirect them to login!
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
//   }
// });

// export the route
module.exports = router;