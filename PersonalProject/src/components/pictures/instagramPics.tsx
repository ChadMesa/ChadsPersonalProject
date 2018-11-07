import * as React from "react";
import { PicturesApi } from "../../../src/api/pictures/index"
import { PicturesList } from "../../components/pictures/picturesList";

export interface IPicturesEntity {
    PictureUrl: string
}

interface PicturesState {
    pictures: IPicturesEntity[];
}

export class InstagramPics extends React.Component<{}, PicturesState> {
    constructor(props) {
        super(props);
        this.state = {
            pictures: []
        }
        this.loadPictures = this.loadPictures.bind(this);
    }

    private loadPictures() {
        PicturesApi.getPics()
            .then((response) => {
                console.log(response.Items)
                this.setState({ pictures: response.Items })

            })
    }

    public componentDidMount() {
        this.loadPictures();
    }

    public render() {
        return (
            <React.Fragment>
                <PicturesList
                    dataItems={this.state.pictures}
                />
            </React.Fragment>
        )
    }
}
