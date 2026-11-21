import { resolve } from "node:dns";
import { db } from "../db/Connection.js";
import { rejects } from "node:assert";

export const createUser = (data, callback) => {
    const sql = `
        INSERT INTO current_students 
        (first_name, last_name, age, phonenumber, location, mail)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(sql, [
        data.firstname,
        data.lastname,
        data.age,
        data.phnumber,
        data.location,
        data.mail
    ], callback);
};

export const getUserDetails = () => {
    return new Promise((resolve, reject) => {
        const current_students_data = "SELECT * FROM current_students";

        db.query(current_students_data, (err, result) => {
            if (err) reject(err);
            else resolve(result)
        })

    })

    // const current_students_data = "SELECT * FROM current_students";
    // db.query(current_students_data, callback);
}

export const getSingleUserDetails = (id, callback) => {
    const featch_User_detaisl = "SELECT * FROM current_students WHERE id = ?";

    db.query(featch_User_detaisl, [id], callback);

}

export const deleteUserDetails = (id, callback) => {
    const user_details_to_delete = "DELETE FROM current_students WHERE id = ?";

    db.query(user_details_to_delete, [id], callback)
}

export const editUserDetails = (data, id, callback) => {
    const user_Details_edit = "UPDATE current_students SET first_name = ?,last_name = ?,age = ?,phonenumber = ?, location = ?, mail = ? WHERE id = ? ";

    db.query(user_Details_edit, [
        data.firstname,
        data.lastname,
        data.age,
        data.phnumber,
        data.location,
        data.mail,
        id
    ], callback);
}