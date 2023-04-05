const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET => /]
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
                console.log(req.param)
            })
            .catch(next);
    }

    test(req, res, next) {
        res.send('Got your request')
    }

    // [GET => /search]
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
