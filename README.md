
# Express + TypeScript + MongoDB Application

This is a basic web application built with **Express** and **TypeScript**, using **MongoDB** as the database. It supports basic CRUD operations for users and leverages **Nodemon** for automatic server restarts during development.

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [npm](https://www.npmjs.com/) (version 6.x or higher)
- A MongoDB Atlas account or a local MongoDB instance

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/express-ts-app.git
   cd express-ts-app
   ```

2. Install all necessary dependencies:

   ```bash
   npm install
   ```

3. Set up your environment variables:

   Create a `.env` file in the root of the project and provide the following:

   ```bash
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority
   PORT=3000
   ```

   Replace `<username>`, `<password>`, and `myDatabase` with your MongoDB credentials.

## Running the Application

### Development Mode

To run the application in development mode with **Nodemon** (for automatic server restarts on file changes):

```bash
npm run dev
```

The server will be running at [http://localhost:3000](http://localhost:3000).

### Production Mode

To compile the TypeScript code and run the application in production mode:

1. Build the project:

   ```bash
   npm run build
   ```

2. Start the application:

   ```bash
   npm start
   ```

The production build will be compiled into the `dist` folder.

## Available Endpoints

### Users API

#### 1. Get All Users

- **Endpoint:** `GET /users`
- **Description:** Fetches all the users from the database.

#### 2. Add a New User

- **Endpoint:** `POST /users`
- **Description:** Adds a new user to the database.
- **Body Example:**

```json
{
  "name": "John Doe",
  "email": "john.doe@example.com"
}
```

#### 3. Get User by ID

- **Endpoint:** `GET /users/:id`
- **Description:** Fetches a single user by their ID.

#### 4. Delete a User

- **Endpoint:** `DELETE /users/:id`
- **Description:** Deletes a user by their ID.

## Project Structure

```
/express-ts-app
  ├── /src
  │   ├── /models             # Mongoose models
  │   │   └── user.ts         # User model
  │   ├── /routes             # Express routes
  │   │   └── userRoutes.ts   # User routes
  │   └── server.ts           # Main server file
  ├── /dist                   # Compiled TypeScript files
  ├── .env                    # Environment variables (ignored in version control)
  ├── .gitignore              # Files to ignore in Git
  ├── nodemon.json            # Nodemon configuration
  ├── package.json            # Project metadata and dependencies
  ├── tsconfig.json           # TypeScript configuration
  └── README.md               # Project documentation
```

### Key Files

1. **`server.ts`:** Main entry point of the application.
2. **`user.ts`:** Mongoose model representing the user schema.
3. **`userRoutes.ts`:** Express routes for handling user-related requests.
4. **`.env`:** Contains sensitive data such as the MongoDB URI and the application port.
5. **`nodemon.json`:** Configuration for Nodemon, enabling automatic restarts during development.

## Environment Variables

The application uses environment variables for configuration. These variables are stored in a `.env` file.

- `MONGODB_URI`: MongoDB connection string.
- `PORT`: The port on which the server runs (default is 3000).

## Technologies Used

- **Node.js**: JavaScript runtime
- **Express**: Web framework for Node.js
- **TypeScript**: A statically-typed superset of JavaScript
- **MongoDB**: NoSQL database
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js
- **Nodemon**: Utility for automatically restarting the server during development

## Scripts

- `npm run dev`: Runs the application in development mode with Nodemon.
- `npm run build`: Compiles the TypeScript code into JavaScript (output in `dist` folder).
- `npm start`: Starts the application in production mode using the compiled JavaScript files.

## License

This project is licensed under the ISC License. See the `LICENSE` file for more information.
