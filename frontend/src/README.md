Step1: Create one root level project folder
i.e.
db-sinup-login-react-mysql

Step2: Change directory as

$ cd db-sinup-login-react-mysql


Step3: Create react project in this directory

db-sinup-login-react-mysql$ npx create-react-app frontend


Step4: Create backend folder in db-sinup-login-react-mysql folder


Step5: Go to backend folder and install following

db-sinup-login-react-mysql$ cd backend

db-sinup-login-react-mysql/backend$

1. Create package.json file in backend

$ npm init -y

Now open package.json and add following in it

a.
"start": "nodemon server.js"

b.
"type": "module",

Filename: package.json

{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "module",
  "dependencies": {
    "cors": "^2.8.6",
    "express": "^5.2.1",
    "mysql2": "^3.22.5",
    "nodemon": "^3.1.14"
  }
}

2. Install following packages in backend

a. mysql2     : To store data in MySQL DB

b. express   : To write server-side code

c. cors      : To access backend API in frontend using ReactJS

d. nodemon   : Automatic restarting or refreshing server

backend$ npm i mysql2 express cors nodemon


Step6: Go to frontend

1. Create Components folder inside src folder and add
   Login.js or Login.jsx file in it.

2. Install following packages

a. bootstrap

b. react-router-dom

c. axios

frontend$ npm i bootstrap react-router-dom axios

Step7: Go to backend folder and run following command to start server

$ npm start


Step8: Go to frontend folder and run following command to start server

$ npm start