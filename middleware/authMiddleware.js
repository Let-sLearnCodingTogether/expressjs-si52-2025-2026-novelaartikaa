import passport from "passport";

export const protect = (req, res, next) => {
  passport.authenticate(
    "jwt",
    {
      session: false,
    },
    (err, user, info) => {
      if (err || !user) {
        return res.status(401).json({
          mesage: info ? info.message : "Unauthorized",
          err: err || "Tidak Valid",
        });
      }

      req.user = user;

      return next(); //untuk mengizinkan user lewat
    }
  )(req, res, next);
};
