import { apiExecute } from "../apiExecute";
const baseURL = "/";
export const postComment = (data) => {
    const URL = `${baseURL}api/comments`;
    return apiExecute(URL, "POST", data);
};
export const getComments = () => {
    const URL = `${baseURL}api/comments`;
    return apiExecute(URL, "GET", null);
};
export const editComment = (data) => {
    const URL = `${baseURL}api/comments`;
    return apiExecute(URL, "PUT", data);
};
export const deleteComment = (id) => {
    const URL = `${baseURL}api/comments/${id}`;
    return apiExecute(URL, "DELETE", null);
};
export const CommentsApi = {
    postComment, getComments, editComment, deleteComment
};
//# sourceMappingURL=index.js.map