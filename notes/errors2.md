#### Uncaught TypeError: Failed to execute 'addEventListener' on 'EventTarget': The callback provided as parameter 2 is not an object.

#### https://stackoverflow.com/questions/20835768/addeventlistener-on-custom-object
##### EXCERPT ONE:
 ###### If you want to listen a javascript object you have three ways:

1. Use sub/pub pattern which has a lot of implementations in javascript
1. Or use native implementation via Object get/set operators, Object.defineProperty, Object.prototype.watch or Proxy API
1. Use Object.observe. Works Chrome 25+(Jan 2014). But became deprecated in 2016

##### EXCERPT TWO: 

###### There are two problems.

###### First, the iSubmit.addEventListener() method is actually a method on the EventTarget DOM interface:

###### EventTarget
###### EventTarget # addEventListener()
###### These are inteded for use only on DOM elements. By adding it to the iSubmit object as a method, you're calling it on an object that is not an EventTarget. This is why Chrome throws an Uncaught TypeError: Illegal invocation JavaScript error.
