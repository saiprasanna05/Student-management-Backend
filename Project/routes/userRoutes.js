import express from "express";
import { addUser } from "../Controllers/userControllers.js";
import { getUser } from "../Controllers/userControllers.js";
import { getSingleUser } from "../Controllers/userControllers.js";
import { deleteUser } from "../Controllers/userControllers.js";
import { editUser } from "../Controllers/userControllers.js";


const router = express.Router();

router.post("/data", addUser);
router.get("/disdata", getUser);
router.get("/dis_stu_data/:ids", getSingleUser);
router.delete("/deletedata/:id", deleteUser);
router.patch("/students/:id", editUser);


export default router;