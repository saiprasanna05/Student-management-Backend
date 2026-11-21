export const validateUserData = (req, res, next) => {

    const { firstname, lastname, age, phnumber, location, mail } = req.body;

    const errors = [];

    if (Object.entries(req.body).length == 0) {
        errors.push("body is required");
    }

    if (!firstname) {
        errors.push("First name is required");
    }

    if (!lastname) {
        errors.push("Last name is required");
    }

    if (!age || age < 1 || age.length > 2) {
        errors.push("Not a Valid Age");
    }

    if (phnumber == "" || phnumber < 1 || phnumber?.length < 10 || phnumber?.length > 10) {
        errors.push("Not a Valid Phone Number");
    }

    if (location == "") {
        errors.push("Enter valid location");

    }
    if (mail == "" || !mail?.includes("@")) {
        errors.push("Enter valid mail");

    }

    if (errors.length > 0) {
        return res.status(400).json({
            errors
        });
    }


    next();

}