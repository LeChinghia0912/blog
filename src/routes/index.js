const newRouter = require('./news');
const meRouter = require('./me');
const coursesRouter = require('./courses');
const siteRouter = require('./site');
const userRouter = require('./user');
const yteRouter = require('./csYte');

function route(app) {
    app.use('/cosoyte', yteRouter)
    app.use('/user', userRouter);
    app.use('/news', newRouter);
    app.use('/me', meRouter);
    app.use('/courses', coursesRouter);
    app.use('/', siteRouter);
}

module.exports = route;
