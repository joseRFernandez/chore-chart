import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./secrets.config";

import { getFirestore, collection } from "firebase/firestore";

// init app
const app = initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// store collection references here for now
const membersRef = collection(db, "members");

export { app, db, membersRef };
