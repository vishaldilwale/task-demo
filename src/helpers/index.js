import { regex } from "../constants";

const helpers = {
    validateEmail: (emailValue) => {
        return emailValue?.toLowerCase()
            .match(
                regex.email
            );
    }
};

export default helpers;