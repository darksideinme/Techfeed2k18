const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

exports.getData = functions.https.onRequest(
    async (request, response) => {
        const classID = request.body.classID;
        admin.database().ref('/Timetable/'+classID+'/')
            .on("value", function (snapshot) {
                response.json(snapshot.val())
            }, function (error) {
                response.json({
                    'response': "error",
                })
            });

    }
) 