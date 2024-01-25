import database from '../database/sequelizeServer.js';
import relation from '../models/relation.js';

export default {
    DB: {
        reset: async () => {
            try {
                await database.drop();
                await database.sync({ force: true });
                return 'DB Reset Successful';
            }
            catch (err) {
                console.log(err);
                return (err);
            }

        }
    }
}