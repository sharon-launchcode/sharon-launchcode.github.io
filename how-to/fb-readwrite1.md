### Read and Write Data on the Web
#### https://firebase.google.com/docs/database/web/read-and-write

##### To read or write data from the database, you need an instance of firebase.database.Reference:

        // Get a reference to the database service
        var database = firebase.database();

##### Reading and writing data

###### Firebase data is retrieved by attaching an asynchronous listener to a firebase.database.Reference. The listener is triggered once for the initial state of the data and again anytime the data changes.
                                function writeUserData(userId, name, email, imageUrl) {
                                  firebase.database().ref('users/' + userId).set({
                                    username: name,
                                    email: email,
                                    profile_picture : imageUrl
                                  });
                                }
                                
                                
