import { apiExecute } from "../../api/users/apiExecute";
const baseURL = "https://pacoima-ypi.azurewebsites.net/";
//patch axios to use application/x-www-form-urlencoded
//https://github.com/axios/axios/issues/350#issuecomment-227270046
const loginUser = (data) => {
    const loginURL = `${baseURL}api/users/login/force`;
    return apiExecute(loginURL, "POST", data);
};
const registerUser = (data) => {
    const registerURL = `${baseURL}api/users/register/employer`;
    return apiExecute(registerURL, "POST", data);
};
const HomePage = (data) => {
    const loggedInUserURL = `${baseURL}api/people/currentuser`;
    return apiExecute(loggedInUserURL, "GET", null);
};
const logoutUser = () => {
    const logoutUserURL = `${baseURL}api/users/logout`;
    return apiExecute(logoutUserURL, "GET", null);
};
const FaqCategories = () => {
    const categoriesURL = `${baseURL}api/faqcategories`;
    return apiExecute(categoriesURL, "GET", null);
};
const FaqCreate = (data) => {
    const FaqCreate = `${baseURL}api/faqs`;
    return apiExecute(FaqCreate, "POST", data);
};
export const UserApi = {
    loginUser, HomePage, logoutUser, FaqCategories, FaqCreate
};
export const NewUserApi = {
    registerUser
};
//# sourceMappingURL=index.js.map