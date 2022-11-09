const router = require('express').Router();
const Comment = require('../../models/Comment');

// route to create/add a dish
router.post('/', async (req, res) => {
  try { 
    const commentData = await Comment.create({
     
    description: req.body.description,
    
  });
  res.status(200).json(commentData)
} catch (err) {
  res.status(400).json(err);
}
});

// TODO: According to MVC, what is the role of this action method?
router.put('/:id', async (req, res) => {
  // TODO: Where is this action method sending the data from the body of the fetch request? Why?
  try {
    const comment = await Comment.update(
    {
      description: req.body.description,
    },
    {
      where: {
        id: req.params.id,
      },
    });
    // TODO: If the database is updated successfully, what happens to the updated data below?
    res.status(200).json(comment);
  } catch (err) {
      res.status(500).json(err);
    };
});

module.exports = router;
