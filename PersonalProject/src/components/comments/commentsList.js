import * as React from "react";
import * as moment from "moment";
export const CommentsList = (props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "well", style: { background: '#edebe8' } }, props.dataItems.map(buildComment(props)))));
};
const buildComment = (props) => (itm, ndx) => {
    let fromNow = moment.utc(itm.CreatedDate).fromNow();
    return (React.createElement(React.Fragment, { key: ndx },
        React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col-md-3" },
                React.createElement("p", null,
                    React.createElement("strong", null, itm.Username),
                    " ",
                    React.createElement("span", { style: { color: '#A9A9A9' } }, fromNow))),
            React.createElement("div", { className: "pull-right" },
                React.createElement("div", { className: "col-md-3" },
                    React.createElement("a", { href: "javascript:;", onClick: buttonClick(props, itm.Id, "edit") }, "Edit")),
                React.createElement("div", { className: "col-md-3" },
                    React.createElement("a", { href: "javascript:;", onClick: buttonClick(props, itm.Id, "delete") }, "Delete")))),
        React.createElement("div", null, itm.CommentText),
        React.createElement("hr", null)));
};
const buttonClick = (props, id, action) => (e) => {
    props.onButtonClick(id, action);
};
//# sourceMappingURL=commentsList.js.map