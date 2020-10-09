import Validator from "is_js";
import { isEmpty } from "lodash";

function validateInput(data) {
    let errors = {};

    if (Validator.empty(data.email)) {
        errors.email = "Email is required";
    }

    if (!Validator.empty(data.email) && !Validator.email(data.email)) {
        errors.email = "Invalid email";
    }

    if (!data.password) {
        if (Validator.empty(data.password)) {
            errors.password = "Password is required";
        }
    }

    if (
        !Validator.empty(data.password) &&
        data.password &&
        data.password.length < 6
    ) {
        errors.password = "Your password must be atleast 6 characters long";
    }

    return {
        isValid: isEmpty(errors),
        errors
    };
}

export default validateInput;
