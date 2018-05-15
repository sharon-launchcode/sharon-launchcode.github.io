#### WebRTC Video Chat in 20 Lines of JavaScript (Part 1)
#### https://www.pubnub.com/blog/2015-08-25-webrtc-video-chat-app-in-20-lines-of-javascript/
##### Excerpts:
###### Note: Uses Python 2.7  AND Python 3

        cd <project-dir>

        # Python 2
        python -m SimpleHTTPServer <portNo>

        # Python 3
        python -m http.server <portNo>
        
        
##### HTML Backbone
<div id="vid-box"></div>

<form name="loginForm" id="login" action="#" onsubmit="return login(this);">
    <input type="text" name="username" id="username" placeholder="Pick a username!" />
    <input type="submit" name="login_submit" value="Log In">
</form>

<form name="callForm" id="call" action="#" onsubmit="return makeCall(this);">
	<input type="text" name="number" placeholder="Enter user to dial!" />
	<input type="submit" value="Call"/>
</form>
