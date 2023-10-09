import { useState, useEffect } from "react";
import { auth } from "../Firebase/firebase.config";
import { createContext, useContext } from "react";
import axios from "axios";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    console.log("Error creating auth context.");
  }
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState("");
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    const subscribed = onAuthStateChanged(auth, async (currentUser) => {
      console.log(currentUser);
      if (!currentUser) {
        setUser("");
        setAuthReady(true);
        return;
      }

      try {
        const checkUserResponse = await axios.get(
          `http://localhost:3000/api/users/${currentUser.uid}`
        );

        if (checkUserResponse.status === 200) {
          setUser(currentUser);
          setAuthReady(true);
        }
      } catch (error) {
        const createUserResponse = await axios.post(
          "http://localhost:3000/api/users/signUp",
          {
            clientId: currentUser.uid,
            email: currentUser.email,
            photo: currentUser.photoURL,
            name: currentUser.displayName,
          }
        );

        if (createUserResponse.status === 200) {
          console.log("Successful Registration");
        }

        setUser(currentUser);
        setAuthReady(true);
      }
    });

    return () => subscribed();
  }, []);

  const register = async (email, password) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Successful registration:", response);
    } catch (error) {
      console.error("Error registering the account:", error.message);
    }
  };

  const login = async (email, password) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log("Successful login:", response);
    } catch (error) {
      console.error("Error logging in:", error.code, error.message);
    }
  };

  const loginWithGoogle = async () => {
    try {
      const responseGoogle = new GoogleAuthProvider();
      const response = await signInWithPopup(auth, responseGoogle);
      console.log("Successful login with Google:", response);
    } catch (error) {
      if (error.code === "auth/popup-closed-by-user") {
        console.log("The user closed the login pop-up window.");
      } else {
        console.error(
          "Error logging in with Google:",
          error.code,
          error.message
        );
      }
    }
  };

  const logout = async () => {
    try {
      const response = await signOut(auth);
      console.log("Successful logout:", response);
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <authContext.Provider
      value={{ register, login, loginWithGoogle, logout, user, authReady }}
    >
      {children}
    </authContext.Provider>
  );
}
