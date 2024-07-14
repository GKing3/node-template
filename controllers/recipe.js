import query from '../config/db.js';

const recipeControllers = {
    getAllRecipes: async (req, res) => {
        try {
            const { output } = await query('SELECT * FROM recipes');
            res.status(200).json(output);
        } catch (error) {
            res.status(500).json({error: 'Failed to retrieve recipes'});
        }
    },
    getOneRecipe: async (req, res) => {
        const { id } = req.params;
        try {
            const output = await query('SELECT * FROM recipes WHERE id = $1');
            res.status(200).json(output);
        } catch (error) {
            res.status(500).json({error: 'Failed to retrieve the recipe'});
        }
    },
    postRecipe: async (req, res) => {
        const { title, totalYield, ingredients, instructions } = req.body;
        try {
            
        } catch (error) {
            res.status(500).json({error: 'Failed to create a new recipe'});
        }
    },
    updateRecipe: async (req, res) => {
        const { id } = req.params;
        try {
            
        } catch (error) {
            res.status(500).json({error: 'Failed to update the recipe'});
        }
    },
    deleteRecipe: async (req, res) => {
        const { id } = req.params;
        try {
            
        } catch (error) {
            res.status(500).json({error: 'Failed to delete recipe'});
        }
    },
};

export default recipeControllers;
