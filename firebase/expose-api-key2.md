#### How to restrict Firebase data modification?
#### https://stackoverflow.com/questions/35418143/how-to-restrict-firebase-data-modification

##### Excerpt:

Firebase provides database back-end so that developers can focus on the client side code.

So if someone takes my firebase uri (for example, https://firebaseinstance.firebaseio.com) then develop on it locally.

Then, would they be able to create another app off my Firebase instance, signup and authenticate themselves to read all data of my Firebase app?

Thanks to both of you for this discussion. However, I wanted to add a detail.

@Frank van Puffelen,

You mentioned the phishing attack. There actually is a way to secure for that.

If you login to your googleAPIs API Manager console, you have an option to lock down which HTTP referrer your app will accept request from.

visit https://console.developers.google.com/apis
Go to your firebase project
Go to credentials
Under API keys, select the Browser key associated with your firebase project (should have the same key as the API key you use to initialize your firebase app.)
Under "Accept requests from these HTTP referrers (web sites), simply add the URL of your app.
This should only allow the whitelisted domain to use your app.

This is also described here in the firebase launch-checklist here: https://firebase.google.com/support/guides/launch-checklist

Perhaps the firebase documentation could make this more visible or automatically lock down the domain by default and require users to allow access?

Again, thanks so much!
