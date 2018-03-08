import { IFAQEntity } from "../../interfaces";
import { fakeFaqs } from "../../api/mockData";
import axios from "axios";

const getFakeData = (): Promise<IFAQEntity[]> => {
    return Promise.resolve(fakeFaqs)
} 

export const FaqApi = {
    getFakeData
}