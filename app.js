// Importing required modules
const express = require('express');
const bodyParser = require('body-parser');

// Creating an instance of the Express application
const app = express();

// Setting up the port number to use for the server
const PORT = process.env.PORT || 3000;

// Sample data for initial recipes
let recipes = [];

// Adding middleware to parse JSON data in requests
app.use(bodyParser.json());

// Endpoint for creating a new recipe
app.post('/api/recipes', (req, res) => {
    // Extracting data from the request body
    const { title, ingredients, instructions, tags } = req.body;

    // Validation: Checking if required fields are provided
    if (!title || !ingredients || !instructions) {
        return res.status(400).json({ error: 'Please provide title, ingredients, and instructions for the recipe.' });
    }

    // Creating a new recipe object
    const newRecipe = {
        id: recipes.length + 1, // Generating a unique ID for the recipe
        title,
        ingredients,
        instructions,
        tags: tags || [] // Setting tags to an empty array if not provided
    };

    // Adding the new recipe to the recipes array
    recipes.push(newRecipe);

    // Sending a success response with the newly created recipe
    res.status(201).json(newRecipe);
});

// Endpoint for getting all recipes
app.get('/api/recipes', (req, res) => {
    // Sending the list of recipes as a JSON response
    res.json(recipes);
});

// Endpoint for getting a specific recipe by ID
app.get('/api/recipes/:id', (req, res) => {
    // Finding the recipe with the specified ID
    const recipe = recipes.find(r => r.id === parseInt(req.params.id));

    // If recipe not found, sending a 404 error response
    if (!recipe) return res.status(404).json({ error: 'Recipe not found.' });

    // Sending the found recipe as a JSON response
    res.json(recipe);
});

// Endpoint for updating a recipe by ID
app.put('/api/recipes/:id', (req, res) => {
    // Finding the recipe with the specified ID
    const recipe = recipes.find(r => r.id === parseInt(req.params.id));

    // If recipe not found, sending a 404 error response
    if (!recipe) return res.status(404).json({ error: 'Recipe not found.' });

    // Extracting updated data from the request body
    const { title, ingredients, instructions, tags } = req.body;

    // Validation: Checking if required fields are provided
    if (!title || !ingredients || !instructions) {
        return res.status(400).json({ error: 'Please provide title, ingredients, and instructions for the recipe.' });
    }

    // Updating the recipe object with the new data
    recipe.title = title;
    recipe.ingredients = ingredients;
    recipe.instructions = instructions;
    recipe.tags = tags || []; // Setting tags to an empty array if not provided

    // Sending the updated recipe as a JSON response
    res.json(recipe);
});

// Endpoint for deleting a recipe by ID
app.delete('/api/recipes/:id', (req, res) => {
    // Finding the index of the recipe with the specified ID
    const recipeIndex = recipes.findIndex(r => r.id === parseInt(req.params.id));

    // If recipe not found, sending a 404 error response
    if (recipeIndex === -1) return res.status(404).json({ error: 'Recipe not found.' });

    // Removing the recipe from the recipes array
    recipes.splice(recipeIndex, 1);

    // Sending a success response with no content
    res.sendStatus(204);
});

// Endpoint for getting details of a recipe by ID
app.get('/api/recipes/:id/details', (req, res) => {
    // Finding the recipe with the specified ID
    const recipe = recipes.find(r => r.id === parseInt(req.params.id));

    // If recipe not found, sending a 404 error response
    if (!recipe) return res.status(404).json({ error: 'Recipe not found.' });

    // Sending only the title, ingredients, and instructions of the recipe as a JSON response
    res.json({ title: recipe.title, ingredients: recipe.ingredients, instructions: recipe.instructions });
});

// Error Handling Middleware: Catch-all error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Starting the server and listening on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
