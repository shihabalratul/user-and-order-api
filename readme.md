# How to run the project

Run the followiung commands in your terminal to use the project

### Install dependencies

`$ npm install`

### Cofigure environment variable

Before running the project we first need to configure our environment variables.

```
PORT=
MONGODB_CONNECTION_URL=
BCRYPT_SALT_ROUNDS=
```

Here we can see we have three variable. Create a .env file in the root folder and paste this. Then assign value to the variable according to this:
<br />

`PORT`: Assign the port number on which you want to run the project.
<br />
`MONGODB_CONNECTION_URL`: Assign mongodb connection url which you will get from the database with proper username and password.
<br />
`BCRYPT_SALT_ROUNDS` : Assign the number of salt round for password hashing.

### Build project

`$ npm run build`

### Run developement server

`$ npm run start:dev`

### Run production server

**Notes:** You first need build the project to run in developement server
<br />

`$ npm run start`

Now we are ready to use our api.

For local machine our api link will be `http://localhost:5000`.
We can run our api operations on this.

API Endpoints:

### 1. Create a new user:

`POST /api/users`

Request Body:

```
{
    "userId": "number",
    "username": "string",
    "password": "string",
    "fullName": {
        "firstName": "string",
        "lastName": "string"
    },
    "age": "number",
    "email": "string",
    "isActive": "boolean",
    "hobbies": [
        "string",
        "string"
    ],
    "address": {
        "street": "string",
        "city": "string",
        "country": "string"
    }
}
```
