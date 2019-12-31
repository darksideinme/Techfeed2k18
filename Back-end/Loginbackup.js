const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

exports.checkUser = functions.https.onRequest(
    async (request, response) => {
        const rollNumber = request.body.rollNumber;
        const mobileNumber = request.body.mobileNumber;
        var trueMobileNumber;
        admin.database().ref('/Users/' + rollNumber + '/')
            .on("value", function (snapshot) {
                trueMobileNumber = snapshot.val().MobileNumber;
                if (mobileNumber === trueMobileNumber) {
                    response.json({
                        'response': "success",
                    })
                }
                else {
                    response.json({
                        'response': "failed",
                    })
                }
            }, function (error) {
                response.json({
                    'response': error,
                })
            });

    }
) 