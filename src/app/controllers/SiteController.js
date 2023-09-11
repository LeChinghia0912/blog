const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    index(req, res, next) {
       Course.find({})
            .then(courses => {
                res.render('home', { 
                    courses: mutipleMongooseToObject(courses)
                });
            })
            .catch(next);
    }

    search(req, res) {
        res.send('search');
    }
}

module.exports = new SiteController();
