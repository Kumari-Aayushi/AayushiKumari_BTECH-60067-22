import jwt from "jsonwebtoken";

// The require Auth middleware
const requireAuth = (req, res, next) =>{
  let token;

  // I am expecting Authorization and Bearer <token>
  if (req.headers.authorization) {
    const parts = req.headers.authorization.split(" ");

    if (parts.length === 2) {
      token = parts[1];
    } }

  if (!token){
    return res.status(401).json({
      message: "Token is missing"
    });
  }

  try {
  const payload = jwt.verify(token, process.env.JWT_SECRET);

    // I am attaching user id to request
    req.userId = payload.id;

    next();
  }catch (err) {
    // Token is expired
    return res.status(401).json({
      message: "Token is invalid"
    });
  }
};

export default requireAuth;
