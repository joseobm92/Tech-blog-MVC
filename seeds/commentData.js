const { Comment } = require('../models');

const commentData = [
  {
    description: 'This is awesome!',
    created_date: 'April 20, 2022 07:00:00',
    // user_id: 1,
    
  },
  {
    description: 'What a great post!',
    created_date: 'June 27, 2022 07:00:00',
    // user_id: 0,
    
  },{
    description: 'WOOOW thats very smart!',
    created_date: 'January 09, 2022 07:00:00',
    // user_id: 3,
    
  },{
    description: 'Who said that?',
    created_date: 'December 12, 2022 07:00:00',
    // user_id: 2,
    
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
