# Online-Shop (backend framework project)

:coffee:

**Node.js, Mongo DB(Atlas), Mongoose, RESTful API, Postman, Express.js, Nodemon, Body-Parser, Morgan, Multer, Bcrypt, JSON web token**

:coffee:

Rebuilding-backend is a project depicting the system framework for product data-tracking and also ability to store user accounts into Mongo DB while using Node.js to set-up the framework for routes.  A RESTful API was created for GET, POST, DELETE, PATCH requests containing 'id, name, price, quantity, description, images and link' for each product/order stored in the DB. APIs were tested using Postman, NPM Multer was used to allow images to be uploaded into the DB as well as getting back image and NPM Bcrypt was used to encrypt user passwords (hash and salt) into the DB.  JWT (jsonwebtoken) was used so the client can access protected data without the server having to store any information connected to clients (stateless authentication implemented by json web token).  Controllers are added to clean up the routes files.

The following definitions in quotes below are provided from [npm.js](https://www.npmjs.com/) :

:coffee:

**-Nodemon** - "nodemon will watch the files in the directory in which nodemon was started, and if any files change, nodemon will automatically restart your node application."

**-Body-Parser** - "Parse incoming request bodies in a middleware before your handlers, available under the req.body property."

**-Morgan** - "HTTP request logger middleware for node.js."

**-Express.js** - Node web framework used for APIs and server connections.

**-Mongoose.js** - "Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box (courtesy of [mongoose.js](www.mongoose.js.com))."

**-Multer** - Used to store images into Mongo DB and also to get images

**-Bcrypt** - NPM package used to encrypt passwords in DB using hash and salt variations.

**-JSON web token** - NPM package used to send client encoded data in order to identify login with the server.
