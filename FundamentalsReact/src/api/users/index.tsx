import { ILoginEntity } from "../../interfaces";
import { IRegisterEntity } from "../../interfaces";
import { apiExecute } from "../../api/users/apiExecute"
import { IHomePageEntity } from "../../interfaces"
import axios from "axios";

const baseURL = "https://pacoima-ypi.azurewebsites.net/";
//patch axios to use application/x-www-form-urlencoded
//https://github.com/axios/axios/issues/350#issuecomment-227270046
const loginUser = (data: ILoginEntity): Promise<any> => {
    const loginURL = `${baseURL}api/users/login/force`;
    return apiExecute (loginURL, "POST", data)
}
const registerUser = (data: IRegisterEntity): Promise<any> => {
    const registerURL = `${baseURL}api/users/register/employer`;
    return apiExecute (registerURL, "POST", data)
}
const HomePage = (data: IHomePageEntity): Promise<any> => {
    const loggedInUserURL = `${baseURL}api/people/currentuser`;
    return apiExecute(loggedInUserURL, "GET", null)
}
const logoutUser = (): Promise<any> => {
    const logoutUserURL = `${baseURL}api/users/logout`;
    return apiExecute(logoutUserURL, "GET", null);
}
export const UserApi = {
    loginUser, HomePage, logoutUser
}
export const NewUserApi = {
    registerUser
}