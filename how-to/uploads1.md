#### Firebase Storage Web: How to upload a file
#### https://stackoverflow.com/questions/41304405/firebase-storage-web-how-to-upload-a-file

##### EXCERPTS

1. First change security rules

        service firebase.storage {
          match /b/{bucket}/o {
            match /{allPaths=**} {
              allow read, write: if request.auth == null;
            }
          }
        }
