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
            
        } catch (error) {
            res.status(500).json({error: 'Failed to retrieve the recipe'});
        }
    },
    postRecipe: async (req, res) => {},
    updateRecipe: async (req, res) => {},
    deleteRecipe: async (req, res) => {},
};

export default recipeControllers;
