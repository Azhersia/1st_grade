// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, get, increment, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA_ivERWfpk_cuS1jSjnRICKYhQBvpdfDg",
  authDomain: "lunch-menu-910f9.firebaseapp.com",
  databaseURL: "https://lunch-menu-910f9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "lunch-menu-910f9",
  storageBucket: "lunch-menu-910f9.appspot.com",
  messagingSenderId: "974000388420",
  appId: "1:974000388420:web:e718191e619c8c62417f11",
  measurementId: "G-GW6HMVJ0TQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app)


export async function getMenu() {
  const snapshot = await get(ref(db, '/'));
  return snapshot.val()

}
// Listen to DB changes and update data
onValue(ref(db, "/"), (snapshot) => {
  const data = snapshot.val();

  document.querySelector("#monday").innerText = data.monday.text;
  document.querySelector("#tuesday").innerText = data.tuesday.text;
  document.querySelector("#wednesday").innerText = data.wednesday.text;
  document.querySelector("#thursday").innerText = data.thursday.text;
  document.querySelector("#friday").innerText = data.friday.text;

  document.querySelector("#monday-count").innerText = data.monday.count;
  document.querySelector("#tuesday-count").innerText = data.tuesday.count;
  document.querySelector("#wednesday-count").innerText = data.wednesday.count;
  document.querySelector("#thursday-count").innerText = data.thursday.count;
  document.querySelector("#friday-count").innerText = data.friday.count;
});

export async function upVote(index) {
  let day;

  if (index === 0) {
    day = "monday";
  } else if (index === 1) {
    day = "tuesday";
  } else if (index === 2) {
    day = "wednesday";
  } else if (index === 3) {
    day = "thursday";
  } else {
    day = "friday";
  }

  update(ref(db, `/${day}`), { count: increment(1) });
}