const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.EventNewUser = functions.auth.user().onCreate((user) => {
  functions.logger.info("a new User: " + user.uid +
  " have been created", {structuredData: true});
});

exports.EventNewFile = functions.storage.object().onFinalize((object) => {
  functions.logger.info("a new File: " + object.name +
    " have been stored", {structuredData: true});
});

exports.EventMSG = functions.https.onCall((request, response) => {
  if (request.auth.uid == "l7JoCc5VAeTTXWlDgOMl" ||
    request.auth.uid == "FwsnAHEZnMf7AEibbJha" ||
    request.auth.uid == "6k2lusUTDxNVpzmJKmHSmqHspN72") {
    functions.logger.info("a New mesage have been sent",
        {structuredData: true});
  }
});
