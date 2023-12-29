const User = require('../models/User');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class UserController {

    show(req, res, next) {
        User.find({ UserID: req.params._id})
             .then(users => {
                 res.render('user/showUser', { 
                     users: mutipleMongooseToObject(users)
                 });
             })
             .catch(next);
     }

    create(req, res, next) {
        res.render('user/createUser')
    }
    
    newUser(req, res, next) {
        const userData = req.body;
        const user = new User(userData);
        user.save()
            .then(() => res.redirect('/user/showUser'))
            .catch(error => {
            });
    }
}

module.exports = new UserController();
    