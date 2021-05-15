import { init } from "next-firebase-auth";

const initAuth = () => {
  init({
    authPageURL: "/",
    appPageURL: "/app",
    loginAPIEndpoint: "/api/login", // required
    logoutAPIEndpoint: "/api/logout", // required
    firebaseAuthEmulatorHost: "localhost:9099",
    // Required in most cases.
    firebaseAdminInitConfig: {
      credential: {
        projectId: "finanzeel",
        clientEmail:
          "firebase-adminsdk-d03ls@finanzeel.iam.gserviceaccount.com",
        // The private key must not be accesssible on the client side.
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
      },
    },
    firebaseClientInitConfig: {
      apiKey: "AIzaSyArLOjnbj7Ow9IVt5w_bcETlLIaWMdZESE", // required
      authDomain: "finanzeel.firebaseapp.com",
      projectId: "finanzeel",
    },
    cookies: {
      name: "Finanzeel", // required
      // Keys are required unless you set `signed` to `false`.
      // The keys cannot be accessible on the client side.
      keys: [
        process.env.COOKIE_SECRET_CURRENT,
        process.env.COOKIE_SECRET_PREVIOUS,
      ],
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
      overwrite: true,
      path: "/",
      sameSite: "strict",
      secure: true, // set this to false in local (non-HTTPS) development
      signed: true,
    },
  });
};

export default initAuth;
