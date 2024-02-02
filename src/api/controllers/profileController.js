import profileServices from '../../../backend/services/profileServices.js';

const errorHandler = (err, req, res) => {
    console.log(err);
    res.status(500).json(err);
}
export default {
    get: {
        profileByID: async (req, res) => {
            try {
                console.log(req.query);
                res.send(await profileServices.get.profileByID(req.query.id));
            }
            catch (err) {
                errorHandler(err, req, res);
            }

        },
        imageByProfileID: async (req, res) => {
            let profileID = req.body.profileID;
            res.send(await profileServices.get.imageByProfileID(profileID));
        }
    },
    post: {
        createProfile: async (req, res) => {
            try {
                console.log(req.body);
                let dob = new Date(req.body.dob);
                console.log(dob);
                let userID = req.body.userID;
                res.send(await profileServices.post.createProfile(dob, userID));
            }
            catch (err) {
                errorHandler(err, req, res);
            }
        },
        addProfileImage: async (req, res) => {
            let profileID = req.body.profileID;
            let imageID = req.body.imageID;
            let imageXrefID = await profileServices.post.addProfileImage(profileID, imageID);
            res.send(imageXrefID);
        }
    }
}