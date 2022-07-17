import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
const createdUser = ({ email, password }) =>
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });

export { createdUser };
