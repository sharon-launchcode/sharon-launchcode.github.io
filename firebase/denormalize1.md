#### Denormalizing Your Data is Normal
#### https://firebase.googleblog.com/2013/04/denormalizing-your-data-is-normal.html
### NOTE OLD BUT WORTH READING

Firebase essentially has two ways to query for data: by path and by priority. This is more limited than SQL, and there's a very good reason for that — our API is carefully designed to only allow operations we can guarantee to be fast. Firebase is a real-time and scalable backend, and we want to enable you to build great apps that can serve millions of users without compromising on responsiveness.
