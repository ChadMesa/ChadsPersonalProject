import * as React from "react";
import * as toastr from "toastr";
import { UserApi } from "../../api/users";
import { browserHistory } from "react-router";
import { Button } from "../../common/components/form";
export class HomePageContainer extends React.Component {
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
    componentDidMount() {
        //call API
        UserApi.HomePage(this.state.homePageEntity)
            .then((response) => {
            console.log(response);
            this.setState({
                homePageEntity: {
                    firstName: response.item.firstName,
                    lastName: response.item.lastName
                }
            });
        });
    }
    onSave() {
        UserApi.logoutUser()
            .then((response) => {
            toastr.success("You have been logged out");
            browserHistory.push("/login");
        });
    }
    render() {
        //output
        return (React.createElement("div", null,
            React.createElement("h1", null,
                "Welcome ",
                this.state.homePageEntity.firstName,
                "!"),
            React.createElement(Button, { className: "btn btn-danger", onClick: () => { this.onSave(); }, label: "Logout", disabled: false })));
    }
}
//# sourceMappingURL=index.js.map