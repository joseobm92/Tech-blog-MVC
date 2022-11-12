const router = require('express').Router();

// create neccesary routes
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require ('./dashboard-routes')

//assign a URL to every route
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes)

//always includs module.export
module.exports = router;