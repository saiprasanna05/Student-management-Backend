import { error } from "node:console";
import { createUser } from "../Models/userModels.js";
import { getUserDetails } from "../Models/userModels.js";
import { getSingleUserDetails } from "../Models/userModels.js";
import { deleteUserDetails } from "../Models/userModels.js";
import { editUserDetails } from "../Models/userModels.js";

export const addUser = (req, res) => {
    const { firstname, lastname, age, phnumber, location, mail } = req.body;

    if (!firstname || !lastname) {
        return res.status(400).json({ message: "Missing fields" });
    }

    createUser(req.body, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.status(201).json({
            message: "User created",
            id: result.insertId
        });
    });
};

export const getUser = (req, res) => {
    getUserDetails((err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Database error" });
        }
        res.status(200).json({ results, message: "Here is Your data" });
    })
}

export const getSingleUser = (req, res) => {
    const ids = req.params.ids;
    getSingleUserDetails(ids, (err, rows) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: err.message });
        }

        console.log(rows);
        res.json(rows[0]);
    })
}

export const deleteUser = (req, res) => {
    const id = req.params.id;
    // console.log(typeof (id));
    deleteUserDetails(id, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ success: true, message: "User deleted successfully", affectedRows: result.affectedRows });
    })
}

export const editUser = (req, res) => {
    const id_new = req.params.id;

    const {
        firstname,
        lastname,
        age,
        phnumber,
        location,
        mail
    } = req.body;

    if (!firstname || !lastname) {
        return res.status(400).json({ message: "Missing fields" });
    }

    editUserDetails(req.body, id_new, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: err.message })
        }

        res.status(200).json({
            message: "Student updated successfully",
            result
        });
    })
}

