class NewsController {
    
    // [GET => news/:slug]
    show(req, res) {
        res.send('NEW DETAIL');
    }
    
    // [GET => news]
    index(req, res) {
        res.render('news');
    }
}

module.exports = new NewsController();
