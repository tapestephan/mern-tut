let User = require('../models/user.model');

module.exports = function (app) {

    app.route('/users').get((req, res) => {
        User.find()
            .then(users => res.json(users))
            .catch(err => res.status(400).json('Error: ' + err));
    });

    app.route('/users/add').post((req, res) => {
        const username = req.body.username;

        const newUser = new User({username});

        newUser.save()
            .then(() => res.json('User added!'))
            .catch(err => res.status(400).json('Error: ' + err));
    });
}
