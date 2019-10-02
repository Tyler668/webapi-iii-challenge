module.exports = function gate (req, res, next) {
    const password = req.headers.password;

    if (password && password === 'hunter4') {
        next();
    }
    else {
        res.status(401).json({ Message: "Password required" })
        next();
    }
}