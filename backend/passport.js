const passport = require("passport");

const GoogleStrategy = require('passport-google-oauth20').Strategy;

const GOOGLE_CLIENT_ID= "627302196522-svk4ehphoqak3okldi1i6aogiveqs0bk.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET= "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"

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
        done(null, profile);
  }
));

passport.serializeUser((user, done) =>{
    done(null, user);
})


passport.deserializeUser((user, done) =>{
    done(null, user);
})

module.exports = passport


