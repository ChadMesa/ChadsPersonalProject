import { ICommentsEntity } from "../../components/comments/commentsForm";
import { apiExecute } from "../apiExecute"

const baseURL = "/";

export const postComment = (data: ICommentsEntity): Promise<any> => {
    const URL = `${baseURL}api/comments`;
    return apiExecute(URL, "POST", data)
}

export const getComments = (): Promise<any> => {
    const URL = `${baseURL}api/comments`;
    return apiExecute(URL, "GET", null)
}

export const editComment = (data: ICommentsEntity): Promise<any> => {
    const URL = `${baseURL}api/comments`;
    return apiExecute(URL, "PUT", data)
}

export const deleteComment = (id: number): Promise<any> => {
    const URL = `${baseURL}api/comments/${id}`;
    return apiExecute(URL, "DELETE", null)
}

export const CommentsApi = {
    postComment, getComments, editComment, deleteComment
}