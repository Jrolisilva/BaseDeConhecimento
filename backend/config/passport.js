const { authSecret } = require('../.env')
const passport = require('passport')
const passoportJwt = require('passport-jwt')
const { Strategy, ExtractJwt } = passoportJwt

module.exports = app => {
    const params  = {
        secretOrKey: authSecret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    }

    const strategy = new Strategy(params, (payload, done)=> {
        app.db('user')
            .where({id: payload})
            .first()
            .then(user => done(null, user ? {...payload}: false))
            .catch(err => done(err, false))
    })

    passport.use(strategy)
    return{
        authenticate: ()=> passport.authenticate('jwt', {session: false})
    }
}