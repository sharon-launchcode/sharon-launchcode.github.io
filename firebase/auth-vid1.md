#### https://www.youtube.com/watch?v=-OKrloDzGpU
##### Getting started with Firebase Auth on the Web - Firecasts

##### Excerpt from Comments 1:
Kobus Coetzee
1 year ago
Can someone please explain to me how the process would work if you have multiple html pages. Should firebase be initialized every time a new page is loaded or how does this work :/﻿

8


Ron Royston
Ron Royston
1 year ago
.onAuthStateChanged observer is how it's done.  This event fires independent of (and after) DOMContentLoaded/pageload event. So, for an instant when you first open a new page/path the user is not logged in.  An instant after the page loads, the .onAuthStateChanged event will fire.  You then have credentials to use to pull in data for your view.﻿

1


