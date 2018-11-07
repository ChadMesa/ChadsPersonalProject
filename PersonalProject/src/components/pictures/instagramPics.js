import * as React from "react";
import { PicturesApi } from "../../../src/api/pictures/index";
import { PicturesList } from "../../components/pictures/picturesList";
export class InstagramPics extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pictures: []
        };
        this.loadPictures = this.loadPictures.bind(this);
    }
    loadPictures() {
        PicturesApi.getPics()
            .then((response) => {
            console.log(response.Items);
            this.setState({ pictures: response.Items });
        });
    }
    componentDidMount() {
        this.loadPictures();
    }
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement(PicturesList, { dataItems: this.state.pictures })));
    }
}
//# sourceMappingURL=instagramPics.js.map