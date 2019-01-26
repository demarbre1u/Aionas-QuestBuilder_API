import config from '../config.json'

import User from '../models/User'

module.exports = (router, middleware) => {
    router.route('/login').post( (req, res) => {
        if(!req.body.username || !req.body.password)
        {
            res.status(500).send('No username or password specified')
            return
        }
    
        const md5 = require('js-md5')
        let hashPasswd = md5(req.body.password + config.secret)
    
        User.findOne({username: req.body.username, password: hashPasswd}, (err, user) => {
            if(err)
                console.log(err)
            else
            {
                let data = {}
                data.username = user.username
                data.token = user.token
    
                res.json(data)
            }
        })
    })
}