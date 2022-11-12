const router = require('express').Router();
const Comment = require('../../models/Comment');
const User = require('../../models/User');
const Post = require('../../models/Post')
const withAuth = require('../../utils/auth')

// route to create/add a COMMENT
router.post('/', withAuth, async (req, res) => {
  try {
      const newComment = await Comment.create({
          ...req.body,
          user_id: req.session.user_id,
      });
      res.json(newComment);
  } catch (err) {
      res.status(500).json(err);
  }
});

// router.get('/', async (req, res) => {

  
//   try {
//     // Get all projects and JOIN with user data
//     const commentData = await Comment.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['username',],
//         },
//       ],
//     });

//     // Serialize data so the template can read it
//     const comments = commentData.map((comment) => comment.get({ plain: true }));

//     // Pass serialized data and session flag into template
    
//     res.render('single-post', {
//       comments,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }

  
// });



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
