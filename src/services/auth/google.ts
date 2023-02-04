import { FirebaseError } from "firebase/app";
import { signInWithPopup } from "firebase/auth";
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore/lite";
import { toast } from "react-toastify";
import { auth, firestore, googleProvider } from "../firebase";

export async function signInWithGoogle(closeModal?: () => void) {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    closeModal && closeModal();
    const user = res.user;
    const foundUsersQuery = query(
      collection(firestore, "users"),
      where("uid", "==", user.uid)
    );
    const docs = await getDocs(foundUsersQuery);
    if (docs.docs.length === 0) {
      await addDoc(collection(firestore, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    const error = err as FirebaseError;

    console.error(error);
    toast(error.message, {
      position: "top-right",
      theme: "dark",
      type: "error",
    });
    closeModal && closeModal();
  }
}
