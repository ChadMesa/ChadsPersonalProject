import { IError } from "../interfaces"

const MinLength = (str: string, minChar: number) => {
    return (str.length < minChar)
}

const emailValid = (str: string, minChar: number): IError => {
    let validate = {
        isValid: false,
        errorMsg: ""
    }
    //chadmesa@gmail.com
    //if (str.length > minChar)
    //    validate.errorMsg = ""
    //else
    //    validate.isValid = false;
    str.length < minChar ? validate.errorMsg = "Please enter a valid email." :
        str.length > 50 ? validate.errorMsg = "Please enter a valid email." :
            !str.includes("@") ? validate.errorMsg = "Please enter a valid email." :
                !str.includes(".") ? validate.errorMsg = "Please enter a valid email." :
                    validate.isValid = true
    return validate;
}

const passwordValid = (str: string, minChar: number): IError => {
    let validate = {
        isValid: false,
        errorMsg: ""
    }
    str.length < minChar ? validate.errorMsg = "Password must include 6 characters, one capital letter, and a special character." :
        str.length > 50 ? validate.errorMsg = "Password must include 6 characters, one capital letter, and a special character." :
            validate.isValid = true
    return validate
}

const validateUsername = (username: string): IError => {
    if (username.length < 1) {
        return { isValid: true, errorMsg: "Please enter a username" };
    }
    if (username.length > 50) {
        return { isValid: true, errorMsg: "Username too long" };
    }
    return { isValid: false, errorMsg: "" }
}

const validateCommentText = (commentText: string): IError => {
    if (commentText.length < 1) {
        return { isValid: true, errorMsg: "Please enter a comment" };
    }
    if (commentText.length > 50) {
        return { isValid: true, errorMsg: "Comment too long" };
    }
    return { isValid: false, errorMsg: "" }
}

export const Validator = { MinLength, emailValid, passwordValid, validateUsername, validateCommentText }