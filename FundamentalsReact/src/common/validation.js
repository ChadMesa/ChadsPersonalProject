const MinLength = (str, minChar) => {
    return (str.length < minChar);
};
const emailValid = (str, minChar) => {
    let validate = {
        isValid: false,
        errorMsg: ""
    };
    //chadmesa@gmail.com
    //if (str.length > minChar)
    //    validate.errorMsg = ""
    //else
    //    validate.isValid = false;
    str.length < minChar ? validate.errorMsg = "Please enter a valid email." :
        str.length > 50 ? validate.errorMsg = "Please enter a valid email." :
            !str.includes("@") ? validate.errorMsg = "Please enter a valid email." :
                !str.includes(".") ? validate.errorMsg = "Please enter a valid email." :
                    validate.isValid = true;
    return validate;
};
const passwordValid = (str, minChar) => {
    let validate = {
        isValid: false,
        errorMsg: ""
    };
    str.length < minChar ? validate.errorMsg = "Password must include 6 characters, one capital letter, and a special character (i.e. !@#$%^&*)" :
        str.length > 50 ? validate.errorMsg = "Password must include 6 characters, one capital letter, and a special character." :
            !str.includes("(?=.*[!@#\$%\^&\*])") ? validate.errorMsg = "Password must include 6 characters, one capital letter, and a special character." :
                validate.isValid = true;
    return validate;
};
export const Validator = { MinLength, emailValid, passwordValid };
//# sourceMappingURL=validation.js.map