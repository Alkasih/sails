# Fullstack - Sails & Angular

## Create main Backend and Frontend folders

```
mkdir backend frontend
```

## Add all default README.md files

```
touch README.md backend/README.md frontend/README.md
```

## Backend Component

[![How does the http protocol work](http://img.youtube.com/vi/1c9f8Duamq0/0.jpg)](https://www.youtube.com/watch?v=1c9f8Duamq0 "How does the http protocol work")

```
cd backend

sails new --no-frontend
```

## Launch Sails App

```
sails lift

chrome http://localhost:1337/
```

## Develop a User Web API

```
sails new api user
```

## Implement Json Web Tokens

[![Implement Json Web Tokens](http://img.youtube.com/vi/ls6Cfm50RgY/0.jpg)](https://www.youtube.com/watch?v=ls6Cfm50RgY "Implement Json Web Tokens")

### Create User API

```
sails generate api user
```

[![Create a restful json CRUD API](http://img.youtube.com/vi/Hr8axUV6NpM/0.jpg)](https://www.youtube.com/watch?v=Hr8axUV6NpM "Create a restful json CRUD API")

### Install Dependencies

```
npm install bcrypt jsonwebtoken --save

```

[![Store Users' Password Correctly](http://img.youtube.com/vi/Ba3s1h-spfE/0.jpg)](https://www.youtube.com/watch?v=Ba3s1h-spfE "Store Users' Password Correctly")

## Create Auth Controller

```
sails generate controller auth
```

## Create a User

```
http --form POST localhost:1337/user/create \
email='username@example.com' \
password='mysecret333' \
confirmPassword='mysecret333'


HTTP/1.1 200 OK
Access-Control-Allow-Credentials:
Access-Control-Allow-Headers:
Access-Control-Allow-Methods:
Access-Control-Allow-Origin:
Connection: keep-alive
Content-Length: 310
Content-Type: application/json; charset=utf-8
Date: Sun, 24 May 2015 14:13:27 GMT
Vary: X-HTTP-Method-Override
X-Powered-By: Sails <sailsjs.org>
set-cookie: sails.sid=s%3AhqEW9Ub0ax5L5zBUiKOF60fqjANpL2XZ.EjwSphvweRYAl4jjKfiTwZzBbwUGta6n092DFh7H5ZA; Path=/; HttpOnly

{
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6OCwiaWF0IjoxNDMyNDc2ODA3LCJleHAiOjE0MzI0ODc2MDd9.7LoQ67q887jG8CwCA2Xrqhq8miXt5nfDtn_N0xrcgEQ",
    "user": {
        "createdAt": "2015-05-24T14:13:27.311Z",
        "email": "username@example.com",
        "id": 8,
        "updatedAt": "2015-05-24T14:13:27.311Z"
    }
}
```

## Duplicate a User

```
http --form POST localhost:1337/user/create \
email='username@example.com' \
password='mysecret333' \
confirmPassword='mysecret333'


HTTP/1.1 400 Bad Request
Access-Control-Allow-Credentials:
Access-Control-Allow-Headers:
Access-Control-Allow-Methods:
Access-Control-Allow-Origin:
Connection: keep-alive
Content-Length: 347
Content-Type: application/json; charset=utf-8
Date: Sun, 24 May 2015 14:16:17 GMT
Vary: X-HTTP-Method-Override
X-Powered-By: Sails <sailsjs.org>
set-cookie: sails.sid=s%3AINclzkTQXeBISarZ4EaZQe939ixU4Qta.24rXxesSMEtDxeRRsCJdxuNTng%2BWerzfR3Wwhj0PqHQ; Path=/; HttpOnly

{
    "err": {
        "error": "E_VALIDATION",
        "invalidAttributes": {
            "email": [
                {
                    "message": "A record with that `email` already exists (`username@example.com`).",
                    "rule": "unique",
                    "value": "username@example.com"
                }
            ]
        },
        "status": 400,
        "summary": "1 attribute is invalid"
    }
}
```

## Frontend Workflow Automation

### Gulp JS

```
npm install gulp --save-dev
```

### Local Web Server with LiveReload

```
npm install gulp-webserver --save
```

### Bower - Package Manager for the Web

```
npm install bower --save-dev

bower init
```

### Packaged Angular

```
bower install angular
```

### Get Bower Packages

```
npm install main-bower-files --save-dev
```

### Inject JavaScripts, Stylesheets and Web Components

```
npm install gulp-inject --save-dev
```

### Delete Files/Folders

```
npm install del --save
```

### Run Gulp JS

```
gulp


Starting 'copyVendor'...
----- 'copyVendor' -----
Starting 'copyApp'...
----- 'copyApp' -----
Finished 'copyVendor' after 41 ms
Finished 'copyApp' after 28 ms
Starting 'scripts'...
----- 'scripts', ['copyApp'] -----
gulp-inject 3 files into index.html.
Finished 'scripts' after 10 ms
Starting 'vendors'...
----- 'vendors', ['copyVendor', 'scripts'] -----
gulp-inject 1 files into index.html.
Finished 'vendors' after 9.91 ms
Starting 'serve'...
----- 'serve', ['vendors'] -----
Webserver started at http://localhost:8000
Finished 'serve' after 18 ms
Starting 'watch'...
----- 'watch', ['serve'] -----
Finished 'watch' after 31 ms
Starting 'default'...
Finished 'default' after 7.5 μs
```

## Default Blueprints

```
ls -1 backend/node_modules/sails/lib/hooks/blueprints/actions
```

## Testing Backend JWT improvements

```
sails lift
```

```
http --form POST localhost:1337/signup \
username='username' \
email='username@example.com' \
password='mysecret333' \
confirmPassword='mysecret333'


HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 439
Content-Type: application/json; charset=utf-8
Date: Wed, 03 Jun 2015 20:46:25 GMT
Vary: X-HTTP-Method-Override
X-Powered-By: Sails <sailsjs.org>
set-cookie: sails.sid=s%3AuQbz5_GN6RewBwfV13xbaH0dQO-eF93s.prgjT1n2stXNgOajRLL9foTka0sVddtwcylV1bZc47Y; Path=/; HttpOnly

{
    "message": "All Goes Right. Please login to continue.",
    "status": "success",
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiaWF0IjoxNDMzMzY0Mzg1LCJleHAiOjE0MzMzODU5ODV9.dwHocugW_--b8tCJYoKMvTnvbo4Jr5pLzVsnt7nales",
    "user": {
        "active": true,
        "createdAt": "2015-06-03T20:46:25.078Z",
        "email": "username@example.com",
        "id": 1,
        "updatedAt": "2015-06-03T20:46:25.078Z",
        "username": "username"
    }
}
```

```
http --form POST localhost:1337/login \
email='username@example.com' \
password='mysecret333' \
confirmPassword='mysecret333'


HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 421
Content-Type: application/json; charset=utf-8
Date: Wed, 03 Jun 2015 20:46:49 GMT
Vary: X-HTTP-Method-Override
X-Powered-By: Sails <sailsjs.org>
set-cookie: sails.sid=s%3AMu-BL3rgQmY3b-hbiYu1Yyx1pa_EDQFA.TSfOeIkD%2FTn5gv6oC93DCFNO1pSVWLxjegkQ5rgTz0c; Path=/; HttpOnly

{
    "message": "Now you have logged in!",
    "status": "success",
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiaWF0IjoxNDMzMzY0NDA5LCJleHAiOjE0MzMzODYwMDl9.Pjz-rJFZgp5P_apVbgDQRacYhuZRybcR9c_e2Cd5JH8",
    "user": {
        "active": true,
        "createdAt": "2015-06-03T20:46:25.078Z",
        "email": "username@example.com",
        "id": 1,
        "updatedAt": "2015-06-03T20:46:25.078Z",
        "username": "username"
    }
}
```

## Start building with Ionic!

### Install cordova and ionic

```
npm install -g cordova ionic
```

[![Ionic and Angular Superpowers for Mobile App Development](http://img.youtube.com/vi/wvr11fvCeu4/0.jpg)](https://www.youtube.com/watch?v=wvr11fvCeu4 "Ionic and Angular Superpowers for Mobile App Development")

### Delete current frontend content

```
cd frontend

rm -fr *
```

### Start a project or "app"

- http://ionicframework.com/getting-started/

```
ionic start app tabs
```

### Develop in the browser with reload and watch

```
cd app

ionic serve --address 127.0.0.1
```

## Add a platform (iOS or Android)

Note: iOS development requires OS X currently.

See the Android Platform Guide for full Android installation instructions:

 - https://cordova.apache.org/docs/en/edge/guide_platforms_android_index.md.html

### Build your app

```
ionic build <PLATFORM>
```

### Simulate your app:

```
ionic emulate <PLATFORM>
```

### Run your app on a device

```
ionic run <PLATFORM>
```

### Package an app using Ionic package service

```
ionic package <MODE> <PLATFORM>
```

### For more help use

```
ionic --help
```

### Visit the Ionic docs

 - http://ionicframework.com/docs

### Create an Ionic account

 - http://app.ionic.io

 - https://www.youtube.com/watch?v=15daTaDQ6Yg

### Preview your apps on any device

 - http://view.ionic.io

### Invite anyone to preview and test your app

```
ionic share EMAIL
```

### Generate splash screens and icons

 - http://ionicframework.com/blog/automating-icons-and-splash-screens/

## Install AngularJS bindings for Sails

 - https://github.com/balderdashy/angularSails

 - http://balderdashy.github.io/angularSails/#/api/ngsails.$sailsSocket

```
bower install angularSails
```

[![Understanding websockets and socket.io](http://img.youtube.com/vi/StTqXEQ2l-Y/0.jpg)](https://www.youtube.com/watch?v=dkf3XKrsqAM "Understanding websockets and socket.io")


 - frontend/app/www/lib/angularSails

 - frontend/app/www/lib/sails.io.js

### Manually edit frontend/app/www/index.html filr

```
<!-- ionic/angularjs js -->
<script src="lib/ionic/js/ionic.bundle.js"></script>

<!-- Websockets/Socket.io Client - Browser SDK for communicating with Sails via sockets  -->
<script src="lib/sails.io.js/dist/sails.io.js"></script>

<script src="lib/angularSails/dist/ngsails.io.js"></script>
<script src="js/config/sails.io.js"></script>
```

### Create js/config/sails.io.js file

```
io.sails.url = 'http://localhost:1337';
```

### Add sails.io dependency in app.js file

```
angular.module('starter', [
  'ionic',

  'sails.io', // sails.io.js && ngsails.io.js

  'starter.controllers',
  'starter.services'
])
```

## Add authentication through WebSockets

### Work with JWTs on AngularJS

 - https://github.com/auth0/angular-jwt

```
bower install angular-jwt
```

### Make Web Storage working in the Angular Way

 - https://github.com/gsklee/ngStorage

```
bower install ngstorage
```

## Ensuring that app.js runs continuously

 - https://github.com/foreverjs/forever

 - https://github.com/foreverjs/forever-monitor

 - https://github.com/remy/nodemon

### Install forever CLI tool

```
npm install forever -g
```

### Run forever and watch for file changes

```
forever -w app.js
```

### Add a .foreverignore file

```
atom backend/.foreverignore

```

### Recommended .foreverignore for Sails

```
**/.git/**
**/.tmp/**

views/layout.ejs

```


sails generate api place


sails generate model place
