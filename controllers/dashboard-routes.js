const router = require('express').Router();
const Post = require('../models/Post');

// route to get all post
router.get('/', async (req, res) => {
    const postData = await Post.findAll().catch((err) => { 
        res.json(err);
      });
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('all-posts-admin', { posts });
      });
  
  // route to get one post
  router.post('/', async (req, res) => {
    try { 
      const postData = await Post.create({
       
      title: req.body.title,
      content: req.body.title,
      
    });
    res.status(200).json(postData)
  } catch (err) {
    res.status(400).json(err);
  }
  });


module.exports = router;