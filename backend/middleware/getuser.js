const jwt = require("jsonwebtoken"); // Use require instead of import
const JWT_SECRET = "Shashankisagood$boy";

let getuser = (req, res, next) => {
    // Get the token from the header
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).send({ error: "Please authenticate using a valid token" });
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ error: "Invalid token" });
        console.error(error);
    }
    
};

module.exports = getuser;
