// eslint-disable //

import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./secrets.config";

import { getFirestore, collection, getDocs } from "firebase/firestore";

// init app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// collection ref
const colRef = collection(db, "chores");

// get collection data
// getDocs returns a promise
getDocs(colRef).then((snapshot) => {
  let chores = [];
  snapshot.docs.forEach((doc) => {
    chores.push({ ...doc.data(), id: doc.id });
  });
  console.log(chores);
});

export { getDocs, colRef };
