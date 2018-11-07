import { IFaqEntity } from "../../interfaces";
import { fakeFaqs } from "../../api/mockData";
import axios from "axios";

const getFakeData = (): Promise<IFaqEntity[]> => {
    return Promise.resolve(fakeFaqs)
} 

export const FaqApi = {
    getFakeData
}