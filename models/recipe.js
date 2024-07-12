import query from '../config/db.js';

const createRecipeTable = async () => {
    try {
        await query(`
            CREATE TABLE IF NOT EXISTS recipes (
                id INTEGER AUTO_INCREMENT,
                title VARCHAR(255) NOT NULL,
                totalYield INTEGER CHECK totalYield > 0,
                ingredients VARCHAR(100) NOT NULL,
                instructions VARCHAR(100) NOT NULL,
                PRIMARY KEY (id)
            );
            `);
        console.log('recipes table has been created');
    } catch (err) {
        console.log(err);
    }
};

export default createRecipeTable;