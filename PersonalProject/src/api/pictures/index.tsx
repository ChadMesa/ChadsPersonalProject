import { IPicturesEntity } from "../../components/pictures/instagramPics";
import { apiExecute } from "../apiExecute"

const baseURL = "/";

export const getPics = (): Promise<any> => {;
    const URL = `${baseURL}api/webscrapedpics`;
    return apiExecute(URL, "GET", null)
}

export const PicturesApi = {
    getPics
}