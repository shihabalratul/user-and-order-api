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

## Build project

`$ npm run build`

## Run developement server

`$ npm run start:dev`

## Run production server

**Notes:** You first need build the project to run in developement server
<br />

`$ npm run start`

Now we are ready to use our api.

For local machine our api link will be `http://localhost:5000`.
We can run our api operations on this.
<br />
<br />
<br />

# API Endpoints:

## Create a new user:

**Endpoint:** `POST /api/users`

**Request Body:**

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

**Response Body:**

```
{
    "success": true,
    "message": "Users fetched successfully!",
    "data": [
        {
            "username": "string",
            "fullName": {
                "firstName": "string",
                "lastName": "string"
            },
            "age": "number",
            "email": "string",
            "address": {
                "street": "string",
                "city": "string",
                "country": "string"
            }
        },
        // more objects...
    ]
}
```

## Retrieve a list of all users

**Endpoint:** `GET /api/users`

**Response Body:**

```
{
    "success": true,
    "message": "Users fetched successfully!",
    "data": [
        {
            "username": "string",
            "fullName": {
                "firstName": "string",
                "lastName": "string"
            },
            "age": "number",
            "email": "string",
            "address": {
                "street": "string",
                "city": "string",
                "country": "string"
            }
        },
        // more objects...
    ]
}
```

## Retrieve a specific user by ID

**Endpoint:** `GET /api/users/:userId`

**Response Body:**

```
{
    "success": true,
    "message": "User fetched successfully!",
    "data": {
        "userId": "number",
        "username": "string",
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
}
```

## Update user information

**Endpoint:** `PUT /api/users/:userId`

**Request Body:**
<br />
**Notes**: All the field here is optional.

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

**Response Body:**

```
{
    "success": true,
    "message": "User updated successfully!",
    "data": {
        "userId": "number",
        "username": "string",
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
}
```

## Delete a user

**Endpoint:** `GET /api/users/:userId`

**Response Body:**

```
{
	"success": true,
	"message": "User deleted successfully!",
	"data" : null
}
```

## Add New Product in Order

**Endpoint:** `PUT /api/users/:userId/orders`

**Request Body:**

```
{
    "productName": "string",
    "price": "number",
    "quantity": "number"
}
```

**Response Body:**

```
{
    "success": true,
    "message": "Order created successfully!",
    "data": null
}
```

## Retrieve all orders for a specific user

**Endpoint:** `PUT /api/users/:userId/orders`

**Response Body:**

```
{
    "success": true,
    "message": "Order fetched successfully!",
    "data": {
        "orders": [
            {
                "productName": "Product 1",
                "price": 23.56,
                "quantity": 2
            },
            {
                "productName": "Product 2",
                "price": 23.56,
                "quantity": 5
            }
        ]
    }
}
```

## Calculate Total Price of Orders for a Specific User

**Endpoint:** `GET /api/users/:userId/orders/total-price`

**Response Body:**

```
{
    "success": true,
    "message": "Total price calculated successfully!",
    "data": {
        "totalPrice": 454.32
    }
}
```

## Sample Error Response

```{
    "success": false,
    "message": "User not found",
    "error": {
        "code": 404,
        "description": "User not found!"
    }
}

```
