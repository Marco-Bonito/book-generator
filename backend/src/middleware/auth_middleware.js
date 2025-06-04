export const authenticate = (req, res, next) => {
  console.log("Authenticating user...");
  next();
};
