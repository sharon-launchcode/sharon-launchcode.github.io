#### https://stackoverflow.com/questions/37482366/is-it-safe-to-expose-firebase-apikey-to-the-public
#### Is it safe to expose Firebase apiKey to the public?

##### Excerpt: 

The apiKey essentially just identifies your Firebase project on the Google servers. It is not a security risk for someone to know it. In fact, it is necessary for them to know it, in order for them to interact with your Firebase project.

In that sense it is very similar to the database URL that Firebase has historically been used to identify the back-end: https://<app-id>.firebaseio.com. See this question on why this is not a security risk: How to restrict Firebase data modification?, including the use of Firebase's server side security rules to ensure only authorized users can access the backend services.
