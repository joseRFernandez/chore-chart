import { addDoc } from "firebase/firestore";

import { membersRef } from "../";

// Add a new document with a generated id.
const docRef = (userObj) =>
  addDoc(
    membersRef,
    {
      userObj,
    },
    {
      merge: true, // this will prevent user from adding a duplicate document
    }
  ).then((ref) => {
    return ref.id;
  });

export { docRef };
