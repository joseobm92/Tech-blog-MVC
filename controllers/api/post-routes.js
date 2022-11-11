const router = require('express').Router();
const Post = require('../../models/Post');
const withAuth = require('../../utils/auth')

// route to create/add a post
router.post('/', async (req, res) => { //this is always requested from the new.js which is grabbing data from all-posts and all-posts-admin handlebars
  try { 
    const postData = await Post.create({ //creates a new post by using Post Modal!!
     
    title: req.body.title,
    content: req.body.content,
    user_id: req.session.user_id,
    
  });
  res.status(200).json(postData)
} catch (err) {
  res.status(400).json(err);
}
});


router.put('/:id', async (req, res) => { // this is requested with edit.js which grabs data from single-post handlebar
  
  try {
    const post = await Post.update(
    {
        title: req.body.title,
        content: req.body.content,
        user_id: req.session.user_id,
    },
    {
      where: {
        id: req.params.id,
      },
    });
    // TODO: If the database is updated successfully, what happens to the updated data below?
    res.status(200).json(post);
  } catch (err) {
      res.status(500).json(err);
    };
});



module.exports = router;
