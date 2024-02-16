# recipeSharing-api
GROUP NAME: "Group for fun"

GROUP MEMBERS:
Ma. Angela Sanzchez
Collene Jane Loto Mangcoy
John Mark Zoleta
Jerome Lingon


**Overview:**

The provided code is a simple RESTful API built using Node.js and Express.js for managing recipes. It allows users to perform CRUD (Create, Read, Update, Delete) operations on recipes, as well as retrieve specific details of a recipe by its ID. The API accepts JSON data for creating and updating recipes and responds with JSON data containing recipe information.

**Purpose:**

The purpose of this API is to provide a backend server for a recipe management application. It allows users to store, retrieve, update, and delete recipes, facilitating the management of cooking instructions, ingredients, and tags associated with each recipe.

**Features:**

- Create new recipes with titles, ingredients, instructions, and optional tags.
- Retrieve all recipes stored in the system.
- Retrieve a specific recipe by its ID.
- Update an existing recipe by its ID.
- Delete a recipe by its ID.
- Retrieve specific details (title, ingredients, and instructions) of a recipe by its ID.
- Error handling for invalid requests and server errors.

**Setting Up Locally:**

To set up and run the API locally, follow these steps:

1. **Install Node.js:**
   If you haven't already, install Node.js from the official website: [Node.js Downloads](https://nodejs.org/en/download/).

2. **Clone the Repository:**
   Clone the repository containing the API code to your local machine.

3. **Install Dependencies:**
   Navigate to the project directory in your terminal and run `npm install` to install the required dependencies (`express` and `body-parser`).

4. **Run the Server:**
   After installing dependencies, run the command `node app.js` to start the server. The server will start running on `http://localhost:3000` by default, unless a different port is specified in the `PORT` environment variable.

5. **Testing Endpoints:**
   You can now use tools like Postman or curl to test the API endpoints. Use the provided endpoints (`POST /api/recipes`, `GET /api/recipes`, etc.) to interact with the API and perform CRUD operations on recipes.

**API Endpoints:**

- **POST /api/recipes**: Create a new recipe. Send a JSON object containing `title`, `ingredients`, `instructions`, and optional `tags`.
- **GET /api/recipes**: Retrieve all recipes stored in the system.
- **GET /api/recipes/:id**: Retrieve a specific recipe by its ID.
- **PUT /api/recipes/:id**: Update an existing recipe by its ID. Send a JSON object containing updated `title`, `ingredients`, `instructions`, and optional `tags`.
- **DELETE /api/recipes/:id**: Delete a recipe by its ID.
- **GET /api/recipes/:id/details**: Retrieve specific details (title, ingredients, and instructions) of a recipe by its ID.

**Dependencies:**

- **Express.js**: A web application framework for Node.js that simplifies the process of building APIs and web applications.
- **Body-Parser**: Middleware for parsing JSON data in request bodies.

This API provides a straightforward way to manage recipes, making it easy to integrate recipe management functionality into various applications or services.
