import * as React from "react";
import { FaqApi } from "../api/faqs";
export class DataDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { faqs: [] };
    }
    componentDidMount() {
        FaqApi.getFakeData()
            .then((response => {
            this.setState({ faqs: response });
        }));
    }
    render() {
        return (React.createElement("div", null, this.state.faqs.map(this.CreateRow)));
    }
    CreateRow(data) {
        return (React.createElement("div", null,
            React.createElement("p", null, data.category),
            React.createElement("p", null,
                React.createElement("strong", null, data.answer),
                data.answer)));
    }
}
//# sourceMappingURL=dataDemo.js.map