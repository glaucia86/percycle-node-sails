module.exports = function(req, res, next) {

    res.locals.flash = {};

    if(!req.session.flash)
        return next();

    res.locals.flash = _.clone(req.session.flash);

    //Aqui irá limpar a session do flash:
    req.session.flash = {};

    next();
};