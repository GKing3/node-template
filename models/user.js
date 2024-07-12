import query from '../config/db.js';

const createUserTable = async () => {
    try {
        await query(`
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER AUTO_INCREMENT,
                username VARCHAR(50) NOT NULL,
                password VARCHAR(128) NOT NULL,
                email VARCHAR(255) UNIQUE,
                PRIMARY KEY (id)
            );
            `);
        console.log('users table has been created');
    } catch (err) {
        console.log(err);
    }
};

export default createUserTable;
