import * as React from "react";
import { IHomePageEntity } from "../../interfaces";
import * as toastr from "toastr";
import { UserApi } from "../../api/users";
import { ILoginEntity } from "../../interfaces";
import { browserHistory } from "react-router";
import { Button } from "../../common/components/form";

interface IHomePageState {
    homePageEntity: IHomePageEntity;
}

export class HomePageContainer extends React.Component<{}, IHomePageState> {

    constructor(props) {
        console.log("constructor");
        super(props);
        this.state = {
            homePageEntity: {
                firstName: "",
                lastName: "",
            }
        };
    }

    public componentDidMount() {
        //call API
        UserApi.HomePage(this.state.homePageEntity)
            .then((response) => {
                console.log(response)
                this.setState({
                    homePageEntity: {
                        firstName: response.item.firstName,
                        lastName: response.item.lastName
                    }
                })
            });
    }

    private onSave() {
        UserApi.logoutUser()
            .then((response) => {
                toastr.success("You have been logged out")
                browserHistory.push("/login")
            })
    }

    public render() {
        //output
        return (
            <div>
                <h1>Welcome {this.state.homePageEntity.firstName}!</h1>
                <Button
                    className="btn btn-danger"
                    onClick={() => { this.onSave() }}
                    label="Logout"
                    disabled={false} />
            </div>
        );
    }

}