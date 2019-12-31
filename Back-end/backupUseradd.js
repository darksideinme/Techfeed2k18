const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)

exports.addUser = functions.https.onRequest(
    async (request, response) => {
        const rollNumber = request.body.rollNumber;
        const mobileNumber = request.body.mobileNumber;

        admin.database().ref('/Users/'+rollNumber+'/')
            .set({
                'MobileNumber': mobileNumber,
            })
            .then(
                () =>
                    response.json({
                        'response': "success",
                    })
            )
            .catch(
                () => {
                    response.json({
                        'response' : "error",
                    })
                }
            )
    }
) 