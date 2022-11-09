const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
  
});

// Post.belongsTo(User, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE',
// });

// User.hasMany(Comment, {
//    foreignKey: ' post_id',
//    onDelete: 'CASCADE'
// });

// Comment.belongsTo(User, {
//     foreignKey: 'post_id',
//     onDelete: 'CASCADE',
//   });
  Comment.belongsTo(Post, {
    foreignKey: 'post_id'
  })

//   Post.hasMany(Comment, {
//     foreignKey: 'comment_id',
//     onDelete: 'CASCADE'
//   });

//Post belongs to User
Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});


// Post has many Comments
Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});


module.exports = { Comment, Post, User };