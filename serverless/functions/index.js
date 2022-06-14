const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

const today = new Date();
const date = today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate();

exports.EventNewUser = functions.auth.user().onCreate((user) => {
  functions.logger.info("a new User: " + user.uid +
  " have been created", {structuredData: true});
});

exports.EventNewFile = functions.storage.object().onFinalize((object) => {
  functions.logger.info("a new File: " + object.name +
    " have been stored", {structuredData: true});
});

exports.initialData = functions.https.onRequest(async (request, response)=> {
  const writeAdmins = admin.firestore().collection("Admins").add({createdAt: date, firstName: "Baptiste", imageUrl: "https://i.pravatar.cc/300?u=baptiste.nouailhac@gmail.com", lastName: "Nouailhac", role: "admin"});
  const writeManager1 = admin.firestore().collection("Managers").add({createdAt: date, firstName: "Baptiste", imageUrl: "https://i.pravatar.cc/300?u=baptiste.nouailhac@epitech.eu", lastName: "Nouailhac", role: "manager"});
  const writeManager2 = admin.firestore().collection("Managers").add({createdAt: date, firstName: "Romain", imageUrl: "https://i.pravatar.cc/300?u=romain.pigal@epitech.eu", lastName: "Pigal", role: "manager"});
  const writeUser1 = admin.firestore().collection("users").add({createdAt: date, firstName: "Trever", imageUrl: "https://i.pravatar.cc/300?u=trever.hermann@mitchell.com", lastName: "Hermann", role: "user"});
  const writeUser2 = admin.firestore().collection("users").add({createdAt: date, firstName: "Baptiste", imageUrl: "https://i.pravatar.cc/300?u=baptiste.nouailhac@gmail.com", lastName: "Nouailhac", role: "admin"});
  const writeUser3 = admin.firestore().collection("users").add({createdAt: date, firstName: "Santa", imageUrl: "https://i.pravatar.cc/300?u=santa.koepp@sporer.info", lastName: "Koepp", role: "user"});
  const writeuser4 = admin.firestore().collection("users").add({createdAt: date, firstName: "Romain", imageUrl: "https://i.pravatar.cc/300?u=romain.pigal@epitech.eu", lastName: "Pigal", role: "manager"});
  response.json({result: "All data have been added to the project."});
});
