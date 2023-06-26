import { getAuth } from "firebase/auth";
import { appFirebase } from "./firebase";

export const auth = getAuth(appFirebase());