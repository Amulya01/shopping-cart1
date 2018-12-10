import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCB7xeUEp_dp_ksaMRZj58OCO2vAs9dXvo",
  authDomain: "shopping-cart-be4d2.firebaseapp.com",
  databaseURL: "https://shopping-cart-be4d2.firebaseio.com"
};

firebase.initializeApp(config);

export function firebaseListener(func) {
  firebase.auth().onAuthStateChanged(
    function(user) {
      if (user) {
        // console.log("User log in success", user);
        func(true, user);
      } else {
        // console.log("User log in failed", user);
        func(false);
      }
    },
    function(error) {
      console.log(error);
    }
  );
}

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
