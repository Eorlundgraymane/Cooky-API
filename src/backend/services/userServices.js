import modelController from '../controllers/sequelizeController.js';
import User from '../models/basic/user.js';
import Role from '../models/basic/role.js';

const roles = { Admin: 1, User: 2 }

export default {
    // GET /api/users -> get all users
    get: {
        userByID: async (userID) => {
            let user = await modelController.findByPk(User, userID, true, true);
            return user;
        }
    },
    post: {
        createUser: async (email, username, password) => {
            let params = {
                email: email,
                username: username,
                password: password
            }
            let newUser = await modelController.create(User, params);
            let role = await modelController.findByPk(Role, roles.User);
            await newUser.addRole(role);
            newUser = await modelController.findByPk(User, newUser.ID, true, true);
            return newUser;
        },
        createPost: async (userID, profileID, text) => {
            let params = {
                text: text
            }
            let user = await modelController.findByPk(User, userID, true, true);
            let profile = await user.getProfile({ where: { ID: profileID } });
            let newPost = await profile.createPost(params);
            return newPost;
        }
    }
}