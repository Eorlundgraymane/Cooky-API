import dbController from '../controllers/dbController.js';

export default {
    // GET /api/users -> get all users
    get: {
        dbReset: async () => {
            return await dbController.DB.reset();
        }
    }
}