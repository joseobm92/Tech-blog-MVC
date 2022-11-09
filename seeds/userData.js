const { User } = require('../models');

const userData = [
  {
    username: 'joseobm92',
    email: 'joseito@gmail.com',
    password: 'wejfowejfo14',
    // user_id: 3,
    // comment_id: 3
    
  },
  {
    username: 'marion2022',
    email: 'marion@gmail.com',
    password: 'jfiaofawioj1',
    // user_id: 0,
    // comment_id: 0
    
  },{
    username: 'nanano',
    email: 'nanano@gmail.com',
    password: 'foiajfoiwja',
    // user_id: 2,
    // comment_id: 2
    
  },{
    username: 'laito',
    email: 'laulau@gmail.com',
    password: 'hgurehugier',
    // user_id: 1,
    // comment_id: 1
    
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
