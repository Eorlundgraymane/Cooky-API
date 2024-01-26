import modelController from '../controllers/sequelizeController.js';
import Role from '../models/basic/role.js';

export default {
    // GET /api/users -> get all users
    get: {
        roleByID: async (roleID) => {
            return await modelController.findByPk(Role, roleID, true);
        }
    },
    post: {
        createRole: async (title, grade, level) => {
            let params = {
                title: title,
                grade: grade,
                level: level,
            }
            return await modelController.create(Role, params);
        }
    }
}