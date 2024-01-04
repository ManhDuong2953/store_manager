// controllers/userController.js
import { User } from "../../models/users/user.model";


export async function createUser(req, res) {
    const userData = req.body;
    console.log("Data add employee: " + userData);
    const user = new User(userData);
    const newUser = await user.save();
    if (newUser) {
        res.status(200).json(newUser);
    } else {
        res.status(404).json({ "message": "Error creating User" });
    }
}





