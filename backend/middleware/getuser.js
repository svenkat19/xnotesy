let jwt = import("jsonwebtoken");
const JWT_SECRET = "Shashankisagood$boy";

let getuser = (req, res, next) => {
  // get the user from jwt token and add id to the req object
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Auth using valid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: error });
  }
};

module.exports = getuser;
