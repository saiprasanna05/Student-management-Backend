import express from "express";
import cors from "cors";
const app = express();
app.use(cors())
app.use(express.json());


class user {
    #firstName
    #lastName
    #age
    #phnumber
    #location
    #mail
    constructor(firstName, lastName, age, phnumber, location, mail) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#age = age;
        this.#phnumber = phnumber;
        this.#location = location;
        this.#mail = mail;
    }

    set firstName(val) {
        if (typeof (val) == "string") {
            this.#firstName = val;
        }

    }
    set lastName(val) {
        if (typeof (val) == "string") {
            this.#lastName = val;
        }

    }
    set age(val) {
        if (typeof (val) == "number") {
            this.#age = val;
        }

    }
    set phnumber(val) {
        if (typeof (val) == "number") {
            this.#phnumber = val;
        }

    }
    set location(val) {
        if (typeof (val) == "string") {
            this.#location = val;
        }

    }
    set mail(val) {
        if (typeof (val) == "string") {
            this.#mail = val;
        }

    }

    get firstName() {
        return this.#firstName
    }
    get lastName() {
        return this.#lastName
    }
    get age() {
        return this.#age
    }
    get phnumber() {
        return this.#phnumber
    }
    get location() {
        return this.#location
    }
    get mail() {
        return this.#mail
    }

    getuserdetails() {
        return {
            firstname: this.#firstName,
            lastname: this.#lastName,
            age: this.#age,
            phnumber: this.#phnumber,
            location: this.#location,
            mail: this.#mail

        }
    }

}
let users = []

app.post("/data", (req, res) => {

    const { firstname, lastname, age, phnumber, location, mail } = req.body;

    const newuser = new user(firstname, lastname, age, phnumber, location, mail);
    users.push(newuser.getuserdetails())
    console.log(users)
    // console.log(newuser.lastName)
    res.status(201).json({ message: "User added successfully!", user: newuser.getuserdetails() });
})
console.log(users)

app.get('/disdata', (req, res) => {
    res.json(users);
});

app.post("/editdata", (req, res) => {

    const index = req.body.number;
    console.log(index)
    // console.log(parseInt(index))
    // console.log(newuser.lastName)
    let obj = users[index];

    res.json(obj);

})
app.delete("/deletedata", (req, res) => {

    const index = req.body.number;
    console.log(index)
    // console.log(parseInt(index))
    // console.log(newuser.lastName)
    users.splice(index, 1)[0]; // Remove the object from the array
    res.json({ success: true, message: "User deleted successfully" });

})

app.patch("/updata", (req, res) => {

    const index = req.body.index;
    const data = req.body.data
    console.log(index)
    // console.log(parseInt(index))
    // console.log(newuser.lastName)
    users[index] = { ...users[index], ...data }; // Update object
    res.json({ success: true, user: users[index] });

})

app.listen(3000, () => console.log("Server running on port 5000"))