import { FirebaseApp, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCHj8aAcp0z2pvZxoFL5KkPYj-zFLcQjE8",
  authDomain: "giro-18.firebaseapp.com",
  databaseURL: "https://giro-18-default-rtdb.firebaseio.com",
  projectId: "giro-18",
  storageBucket: "giro-18.appspot.com",
  messagingSenderId: "476492577758",
  appId: "1:476492577758:web:38e86c0fb52fd4c595fb4f"
};

let app: FirebaseApp | null = null;

export const appFirebase = () => {
  if (!app) {
    app = initializeApp(firebaseConfig);
  }

  return app;
}