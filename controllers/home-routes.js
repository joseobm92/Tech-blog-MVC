const router = require('express').Router();
const { Post, User } = require('../models');

// route to get all post
// router.get('/', async (req, res) => {
//   const postData = await Post.findAll().catch((err) => {
//     res.json(err);
//   });
//   const posts = postData.map((post) => post.get({ plain: true }));
//   res.render('all-posts', { posts });
// });

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    console.log(posts)
    res.render('all-posts', {
      posts,
      // logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// route to get one post
// router.get('/post/:id', async (req, res) => {
//   try {
//     const postData = await Post.findByPk(req.params.id);
//     if (!postData) {
//       res.status(404).json({ message: 'No Post found with this id!' });
//       return;
//     }
//     const post = postData.get({ plain: true });
//     res.render('single-post', post);
//   } catch (err) {
//     res.status(500).json(err);
//   };
// });

router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const post = postData.get({ plain: true });

    res.render('single-post', {
      ...post,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
