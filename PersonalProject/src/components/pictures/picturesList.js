import * as React from "react";
export const PicturesList = (props) => {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "container" },
            React.createElement("div", { className: "row top-line animate-box" },
                React.createElement("div", { className: "col-md-6 text-center animate-box pull-left" },
                    React.createElement("a", { className: "work", href: "portfolio_detail.html" },
                        React.createElement("img", { style: { height: '360px', width: '360px' }, src: "/content/images/instagram-logo1.png" }))),
                React.createElement("div", { className: "col-md-6 text-left fh5co-heading pull-right" },
                    React.createElement("h2", null, "Photos"),
                    React.createElement("h3", null, "by Chad Mesa"))),
            React.createElement("div", { className: "row" }, props.dataItems.map(buildPic(props))))));
};
const buildPic = (props) => (itm, ndx) => {
    const workGrid = {
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        height: '300px',
        marginBottom: '20px'
    };
    return (React.createElement("div", { key: ndx },
        React.createElement("div", { className: "col-md-4 text-center" },
            React.createElement("img", { className: "work-grid", src: itm.PictureUrl, style: workGrid }))));
};
//# sourceMappingURL=picturesList.js.map