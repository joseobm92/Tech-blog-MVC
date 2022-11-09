const router = require('express').Router();
const Post = require('../../models/Post');

// route to create/add a post
router.post('/', async (req, res) => {
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

// TODO: According to MVC, what is the role of this action method?
router.put('/:id', async (req, res) => {
  // TODO: Where is this action method sending the data from the body of the fetch request? Why?
  try {
    const post = await Post.update(
    {
        title: req.body.title,
        content: req.body.content,
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
