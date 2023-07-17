export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: import.meta.env.VITE_FIREBASE_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGIN_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const actionCodeSettingsVerification = {
  url: process.env.NODE_ENV === "development" ? "http://localhost:3000" : "",
};

export const actionCodeSettingsForgotPassword = {
  url:
    process.env.NODE_ENV === "development" ? "http://localhost:3000/login" : "",
};
