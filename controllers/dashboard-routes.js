const router = require('express').Router();
const Post = require('../models/Post');
const withAuth = require('../utils/auth')
const User = require('../models/User');

// route to get all post
// Use withAuth middleware to prevent access to route
router.get('/', withAuth, async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username',],
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

// router.get('/', withAuth, async (req, res) => {
//     const postData = await Post.findAll().catch((err) => { 
//         res.json(err);
//       });
//         const posts = postData.map((post) => post.get({ plain: true }));
//         res.render('all-posts-admin', { posts });
//       });
  
  // to create a new post
  router.post('/', withAuth, async (req, res) => {
    try { 
      const postData = await Post.create({
       
      title: req.body.title,
      content: req.body.content,
      
    });
    res.status(200).json(postData)
  } catch (err) {
    res.status(400).json(err);
  }
  });


module.exports = router;