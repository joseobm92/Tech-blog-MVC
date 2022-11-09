const { Post } = require('../models');

const postData = [
  {
    title: 'Sequalize is fantastic',
    content: 'Im enjoying sequelize very much',
    created_date: 'April 19, 2022 07:00:00',
    // user_id: 3,
    // comment_id: 3
    
  },
  {
    title: 'the MVC folder structure is great',
    content: 'building models and routes is very simple',
    created_date: 'June 28, 2022 07:00:00',
    // user_id: 0,
    // comment_id: 0
    
  },{
    title: 'This is a great blog',
    content: 'you can learn so much about coding',
    created_date: 'December 09, 2022 07:00:00',
    // user_id: 2,
    // comment_id: 2
    
  },{
    title: 'Amazing things can be built with sequealize and express',
    content: 'you just need to know what are you doing',
    created_date: 'October 12, 2022 07:00:00',
    // user_id: 1,
    // comment_id: 1
    
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
