import express from 'express';
import verifyToken from '../middleware/verifyToken.js';
import recipeControllers from '../controllers/recipe.js';

const router = express.Router();

// routes

// Retrieves all recipes
router.get('/recipes', recipeControllers.getAllRecipes);

// Creates a new recipe (authenticated users only)
router.post('/recipes', verifyToken, recipeControllers.postRecipe);

// Retrieves a single recipe by ID 
router.get('/recipes/:id', recipeControllers.getOneRecipe);

// Updates a recipe by ID (authenticated users only)
router.put('/recipes/:id', verifyToken, recipeControllers.updateRecipe);

// Deletes a recipe by ID (authenticated users only)
router.delete('/recipes/:id', verifyToken, recipeControllers.deleteRecipe);

export default router;
