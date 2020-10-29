const {
    sequelize,
    User,
} = require('../src/models')

const Promise = require('bluebird')

const users = require('./User/users.json')

sequelize.sync({ force: true })
    .then(async function() {

        /* ####################################################################### */
        /* USER */
        await Promise.all(
            users.map(user => {
                User.create(user)
            })
        )
    })