import * as React from "react";
import { CommentsForm } from "../../components/comments/commentsForm";
import { CommentsApi } from "../../api/comments/index";
import { Validator } from "../../common/validation";
import { CommentsList } from "../../components/comments/";
export class CommentsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commentsEntity: {
                Id: 0,
                CommentText: "",
                Username: "",
                CreatedDate: new Date,
                ModifiedDate: new Date
            },
            comments: [],
            isCommentValid: false,
            isUsernameValid: false,
            formErrors: {
                commentText: "",
                username: ""
            }
        };
        this.onSave = this.onSave.bind(this);
        this.onFieldChange = this.onFieldChange.bind(this);
        this.editOrDelete = this.editOrDelete.bind(this);
        this.loadComments = this.loadComments.bind(this);
    }
    onFieldChange(fieldName, fieldValue) {
        const nextState = Object.assign({}, this.state, { commentsEntity: Object.assign({}, this.state.commentsEntity, { [fieldName]: fieldValue }) });
        this.setState(nextState, () => { this.validateField(fieldName, fieldValue); });
    }
    validateField(fieldName, fieldValue) {
        let errorMessage = this.state.formErrors;
        let isCommentValid = this.state.isCommentValid;
        let isUsernameValid = this.state.isUsernameValid;
        switch (fieldName) {
            case "commentText":
                let commentTextErrMsg = Validator.validateCommentText(fieldValue);
                isCommentValid = !commentTextErrMsg.isValid;
                errorMessage.commentText = commentTextErrMsg.errorMsg;
                break;
            case "username":
                let usernameErrMsg = Validator.validateUsername(fieldValue);
                isUsernameValid = !usernameErrMsg.isValid;
                errorMessage.username = usernameErrMsg.errorMsg;
            default: false;
        }
        this.setState({ formErrors: errorMessage, isCommentValid: isCommentValid });
    }
    componentDidMount() {
        this.loadComments();
    }
    onSave() {
        if (this.state.commentsEntity.Id === 0) {
            CommentsApi.postComment(this.state.commentsEntity)
                .then((response) => {
                this.setState({
                    commentsEntity: Object.assign({}, this.state.commentsEntity, { CommentText: "", Username: "", Id: 0 })
                }, () => { this.loadComments(); });
            });
        }
        CommentsApi.editComment(this.state.commentsEntity)
            .then((response) => {
            this.setState({
                commentsEntity: Object.assign({}, this.state.commentsEntity, { CommentText: "", Username: "", Id: 0 })
            }, () => { this.loadComments(); });
        });
    }
    editOrDelete(commentId, action) {
        let ndx = this.state.comments.findIndex(x => x.Id === commentId);
        if (action === "edit") {
            this.setState({ commentsEntity: this.state.comments[ndx] });
        }
        else if (action === "delete") {
            CommentsApi.deleteComment(commentId)
                .then((response) => {
                this.loadComments();
            }, (err) => {
            });
        }
    }
    loadComments() {
        CommentsApi.getComments()
            .then((response) => {
            console.log(response.Items);
            this.setState({ comments: response.Items }, () => {
                console.log(this.state.comments);
            });
        });
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(CommentsForm, { onChange: this.onFieldChange, onSave: this.onSave, commentsEntity: this.state.commentsEntity, commentsErrorMessage: this.state.formErrors.commentText, buttonDisabled: false }),
            React.createElement(CommentsList, { buttonDisabled: false, commentsEntity: this.state.commentsEntity, dataItems: this.state.comments, onButtonClick: this.editOrDelete, showDeleteButton: false, showEditButton: false })));
    }
}
//# sourceMappingURL=commentsContainer.js.map