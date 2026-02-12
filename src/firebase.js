import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// NEW PROJECT CONFIG (habit-tracker-live-11405)
const firebaseConfig = {
    apiKey: "AIzaSyD2ersdQ6Itbf29wY6M40--vbjhyr3-_s8",
    authDomain: "habit-tracker-live-11405.firebaseapp.com",
    projectId: "habit-tracker-live-11405",
    storageBucket: "habit-tracker-live-11405.firebasestorage.app",
    messagingSenderId: "1077952110107",
    appId: "1:1077952110107:web:857e160ae8afbd9f7362be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Initialize Firestore with Force Long Polling (Best for stability)
const db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
});

const analytics = getAnalytics(app);

console.log('✅ Firebase switch to NEW project:', firebaseConfig.projectId);

export { auth, db, analytics };
