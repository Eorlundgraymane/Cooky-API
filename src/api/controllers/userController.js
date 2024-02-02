import userServices from "../../backend/services/userServices";

const errorHandler = (err, req, res) => {
    console.log(err);
    res.status(500).json(err);
}

export default {
    get: {
        userByID: async (req, res) => {
            try {
                console.log(req.query);
                res.send(await userServices.get.userByID(req.query.id));
            }
            catch (err) {
                errorHandler(err, req, res);
            }

        }
    },
    post: {
        createUser: async (req, res) => {
            try {
                console.log(req.body);
                let email = req.body.email;
                let username = req.body.username;
                let password = req.body.password;
                res.send(await userServices.post.createUser(email, username, password));
            }
            catch (err) {
                errorHandler(err, req, res);
            }

        }
    }
};