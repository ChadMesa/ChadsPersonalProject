import * as React from "react";
import { IFaqEntity } from "../interfaces";
import { FaqApi } from "../api/faqs";

interface IDataDemo {
    faqs: IFaqEntity[]
}

export class DataDemo extends React.Component<{}, IDataDemo> {
    constructor(props) {
        super(props);
        this.state = { faqs: [] }
    }
    public componentDidMount() {
        FaqApi.getFakeData()
            .then((response => {
                this.setState({ faqs: response })
            }))
    }

    public render() {
        return (
            <div>
                {this.state.faqs.map(this.CreateRow)} 
            </div>
        );
    }
    public CreateRow(data: IFaqEntity) {
        return (
            <div>
                <p>{data.category}</p>
                <p>
                    <strong>{data.answer}</strong>
                    {data.answer}
                </p>
            </div>
        )
    }
}
