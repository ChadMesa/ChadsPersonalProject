import { apiExecute } from "../apiExecute";
const baseURL = "/";
export const getPics = () => {
    ;
    const URL = `${baseURL}api/webscrapedpics`;
    return apiExecute(URL, "GET", null);
};
export const PicturesApi = {
    getPics
};
//# sourceMappingURL=index.js.map