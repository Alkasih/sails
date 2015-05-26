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

### Create User API

```
sails generate api user
```

### Install Dependencies

```
npm install bcrypt jsonwebtoken --save
```

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
bower install angular --save
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
