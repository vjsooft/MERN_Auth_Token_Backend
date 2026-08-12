const authMiddleware  = async (req, res, next)=>{
 console.log("HEADERS:", req.headers);
    next();
}

module.exports = authMiddleware;