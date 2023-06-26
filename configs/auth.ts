import { GoogleAuthProvider, browserLocalPersistence, getAuth, setPersistence, signInWithPopup, signOut } from "firebase/auth";
import { appFirebase } from "./firebase";

export const auth = getAuth(appFirebase());

export const login = () => {  
  const provider = new GoogleAuthProvider();
  
  setPersistence(auth, browserLocalPersistence)
    .then(() => signInWithPopup(auth, provider))
    .catch((error) => {
      const errorMessage = error.message;
      alert(`Erro ao realiza o Login. ${errorMessage}`);
    });

}

export const logout = () => {
  signOut(auth)
    .then(() => {
      location.reload();
    })
    .catch((error) => {
      alert(`Erro ao realizar o Logout.`);
    });
}