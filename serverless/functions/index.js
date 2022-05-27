const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.EventNewUser = functions.auth.user().onCreate((user) => {
  functions.logger.info("a new User: " + user.uid +
  " have been created", {structuredData: true});
});

exports.EventNewUser = functions.auth.user().onDelete((user) => {
  functions.logger.info("the User: " + user.uid +
    " have been deleted", {structuredData: true});
});

exports.EventNewFile = functions.storage.object().onFinalize((object) => {
  functions.logger.info("a new File: " + object.name +
    " have been stored", {structuredData: true});
});

exports.EventNewMSG = functions.https.onRequest((request, response) => {
  functions.logger.info("a New mesage have been sent",
      {structuredData: true});
});

exports.simpleDbFunction = functions.database.ref("/rooms")
    .onCreate((snap, context) => {
      functions.logger.info("a New room have been created",
          {structuredData: true});
    });
