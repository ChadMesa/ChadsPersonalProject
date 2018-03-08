webpackJsonp([1],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var AboutPage = function AboutPage() {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, " This is about us page ");
};

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(18);


var Header = function Header() {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Link"], { to: "/about", className: "btn btn-default" }, "About"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Link"], { to: "/memberhome", className: "btn btn-default" }, "Home"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Link"], { to: "/login", className: "btn btn-default" }, "Login"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Link"], { to: "/register", className: "btn btn-default" }, "Register"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Link"], { to: "/dataDemo", className: "btn btn-default" }, "Data Demo"));
};

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__registerForm__ = __webpack_require__(110);


var RegisterPage = function RegisterPage(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__registerForm__["a" /* RegisterForm */], { onChange: props.onChange, onSave: props.onSave, registerEntity: props.registerEntity, buttonDisabled: props.buttonDisabled, emailErrorMessage: props.emailErrorMessage, passwordErrorMessage: props.passwordErrorMessage, firstNameErrorMessage: props.firstNameErrorMessage, lastNameErrorMessage: props.lastNameErrorMessage });
};

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_components_form__ = __webpack_require__(35);


var RegisterForm = function RegisterForm(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "panel panel-default" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "panel-header" }, "Register"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "panel-body" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_components_form__["b" /* Input */], { label: "First Name", name: "firstName", value: props.registerEntity.firstName, onChange: props.onChange, error: props.firstNameErrorMessage, placeholder: "First Name" }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_components_form__["b" /* Input */], { label: "Last Name", name: "lastName", value: props.registerEntity.lastName, onChange: props.onChange, error: props.lastNameErrorMessage, placeholder: "Last Name" }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_components_form__["b" /* Input */], { label: "Email", name: "email", value: props.registerEntity.email, onChange: props.onChange, error: props.emailErrorMessage, placeholder: "Email" }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_components_form__["c" /* Password */], { label: "Password", name: "password", value: props.registerEntity.password, onChange: props.onChange, error: props.passwordErrorMessage, placeholder: "Password" }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_components_form__["a" /* Button */], { className: "btn btn-default", onClick: props.onSave, label: "Register", disabled: false }))));
};

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var Button = function Button(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { type: "button", className: props.className, onClick: props.onClick, disabled: props.disabled }, props.label);
};

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Input; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var Input = function Input(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: formatWrapperClass(props) }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { htmlFor: props.name }, props.label), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "field" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { type: "text", name: props.name, className: "form-control", placeholder: props.placeholder, value: props.value, onChange: onChangeInput(props) })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "help-block" }, props.error));
};
var formatWrapperClass = function formatWrapperClass(props) {
    var wrapperClass = 'form-group';
    return props.error ? wrapperClass + " has-error" : wrapperClass;
};
var onChangeInput = function onChangeInput(props) {
    return function (e) {
        props.onChange(e.target.name, e.target.value);
    };
};

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Password; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var formatWrapperClass = function formatWrapperClass(props) {
    var wrapperClass = 'form-group';
    return props.error ? wrapperClass + " has-error" : wrapperClass;
};
var onChangeInput = function onChangeInput(props) {
    return function (e) {
        props.onChange(e.target.name, e.target.value);
    };
};
var Password = function Password(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: formatWrapperClass(props) }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { htmlFor: props.name }, props.label), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "field" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { type: "password", name: props.name, className: "form-control", placeholder: props.placeholder, value: props.value, onChange: onChangeInput(props) })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "help-block" }, props.error));
};

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DropDownList */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var formatWrapperClass = function formatWrapperClass(props) {
    var wrapperClass = 'form-group';
    return props.error ? wrapperClass + " has-error" : wrapperClass;
};
var onChangeInput = function onChangeInput(props) {
    return function (e) {
        props.onChange(e.target.name, e.target.value);
    };
};
var DropDownList = function DropDownList(props) {
    var options = props.options.map(function (option) {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", { key: option.key, value: option.key }, option.value);
    });
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: formatWrapperClass(props) }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { htmlFor: props.name }, props.label), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "field" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("select", { value: props.selectedValue, onChange: onChangeInput(props), id: props.name, className: "form-control" }, options)));
};

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loginForm__ = __webpack_require__(116);


var LoginPage = function LoginPage(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__loginForm__["a" /* LoginForm */], { onChange: props.onChange, onSave: props.onSave, loginEntity: props.loginEntity, buttonDisabled: props.buttonDisabled, emailErrorMessage: props.emailErrorMessage, passwordErrorMessage: props.passwordErrorMessage });
};

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_components_form__ = __webpack_require__(35);


var LoginForm = function LoginForm(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "panel panel-default" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "panel-header" }, "Login"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "panel-body" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_components_form__["b" /* Input */], { label: "Email", name: "email", value: props.loginEntity.email, onChange: props.onChange, placeholder: "Email", error: props.emailErrorMessage }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_components_form__["c" /* Password */], { label: "Password", name: "password", value: props.loginEntity.password, onChange: props.onChange, placeholder: "Password", error: props.passwordErrorMessage }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_components_form__["a" /* Button */], { className: "btn btn-default", onClick: props.onSave, label: "Login", disabled: false }))));
};

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_faqs__ = __webpack_require__(118);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var DataDemo = function (_React$Component) {
    _inherits(DataDemo, _React$Component);

    function DataDemo(props) {
        _classCallCheck(this, DataDemo);

        var _this = _possibleConstructorReturn(this, (DataDemo.__proto__ || Object.getPrototypeOf(DataDemo)).call(this, props));

        _this.state = { faqs: [] };
        return _this;
    }

    _createClass(DataDemo, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            __WEBPACK_IMPORTED_MODULE_1__api_faqs__["a" /* FaqApi */].getFakeData().then(function (response) {
                _this2.setState({ faqs: response });
            });
        }
    }, {
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, this.state.faqs.map(this.CreateRow));
        }
    }, {
        key: "CreateRow",
        value: function CreateRow(data) {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, data.category), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("strong", null, data.answer), data.answer));
        }
    }]);

    return DataDemo;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_mockData__ = __webpack_require__(119);

var getFakeData = function getFakeData() {
    return Promise.resolve(__WEBPACK_IMPORTED_MODULE_0__api_mockData__["a" /* fakeFaqs */]);
};
var FaqApi = {
    getFakeData: getFakeData
};

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fakeFaqs; });
var fakeFaqs = [{
    answer: "because",
    category: "Security Specialist",
    displayOrder: "2", faqCategoryId: 4, id: 16851, question: "why though"
}, {
    answer: "because its true",
    category: "General",
    displayOrder: "2",
    faqCategoryId: 1, id: 16851, question: "why though"
}, {
    answer: "because I said so", category: "Security Specialist",
    displayOrder: "2", faqCategoryId: 4,
    id: 16851, question: "why though"
}, {
    answer: "who cares", category: "General",
    displayOrder: "2", faqCategoryId: 1, id: 16851,
    question: "why though"
}];

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(57);


var App = function App(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "container" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__components__["c" /* Header */], null), props.children);
};

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPageContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_toastr__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_users__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router__ = __webpack_require__(18);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var FormErrors = function FormErrors(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "formErrors" }, Object.keys(props).map(function (fieldName, i) {
        if (props[fieldName].length > 0) return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { key: i }, fieldName, " ", props[fieldName], " ");
    }));
};
var LoginPageContainer = function (_React$Component) {
    _inherits(LoginPageContainer, _React$Component);

    //constructor is the starting point of your class
    //"extends" adds functionality to your class 
    function LoginPageContainer(props) {
        _classCallCheck(this, LoginPageContainer);

        var _this = _possibleConstructorReturn(this, (LoginPageContainer.__proto__ || Object.getPrototypeOf(LoginPageContainer)).call(this, props));

        _this.state = {
            loginEntity: {
                email: "",
                password: ""
            },
            isEmailValid: false,
            isFormValid: false,
            isPasswordValid: false,
            formErrors: { email: "", password: "" }
        };
        _this.onFieldChange = _this.onFieldChange.bind(_this);
        _this.onSave = _this.onSave.bind(_this);
        return _this;
    }

    _createClass(LoginPageContainer, [{
        key: "onFieldChange",
        value: function onFieldChange(fieldName, fieldValue) {
            var _this2 = this;

            var nextState = Object.assign({}, this.state, { loginEntity: Object.assign({}, this.state.loginEntity, _defineProperty({}, fieldName, fieldValue)) });
            this.setState(nextState, function () {
                _this2.validateField(fieldName, fieldValue);
            });
        }
    }, {
        key: "validateField",
        value: function validateField(fieldName, fieldValue) {
            var errorMessages = this.state.formErrors;
            var isEmailValid = this.state.isEmailValid;
            var isPasswordValid = this.state.isPasswordValid;
            switch (fieldName) {
                case "email":
                    console.log(isEmailValid);
                    isEmailValid = fieldValue.length > 6;
                    errorMessages.email = isEmailValid ? "" : "Email is too short";
                    break;
                case "password":
                    isPasswordValid = fieldValue.length > 6;
                    errorMessages.password = isPasswordValid ? "" : "Password is too short";
                    break;
                default:
                    break;
            }
            this.setState({ formErrors: errorMessages, isPasswordValid: isPasswordValid, isEmailValid: isEmailValid }, this.validateForm);
        }
    }, {
        key: "validateForm",
        value: function validateForm() {
            this.setState({ isFormValid: this.state.isEmailValid && this.state.isPasswordValid });
        }
    }, {
        key: "onSave",
        value: function onSave() {
            __WEBPACK_IMPORTED_MODULE_3__api_users__["b" /* UserApi */].loginUser(this.state.loginEntity).then(function (response) {
                __WEBPACK_IMPORTED_MODULE_2_toastr__["success"]("Login Success");
                __WEBPACK_IMPORTED_MODULE_4_react_router__["browserHistory"].push("/memberHome");
            }, function (err) {
                __WEBPACK_IMPORTED_MODULE_2_toastr__["error"]("Login Failed");
            }).catch(function (err) {
                __WEBPACK_IMPORTED_MODULE_2_toastr__["error"]("Login Failed");
            });
        }
    }, {
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1____["a" /* LoginPage */], { onChange: this.onFieldChange, onSave: this.onSave, buttonDisabled: !this.state.isFormValid, loginEntity: this.state.loginEntity, emailErrorMessage: this.state.formErrors.email, passwordErrorMessage: this.state.formErrors.password }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, " Not a member, ", __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#", onClick: function onClick() {
                    __WEBPACK_IMPORTED_MODULE_4_react_router__["browserHistory"].push("/register");
                } }, "Register Here")));
        }
    }]);

    return LoginPageContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return apiExecute; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);

__WEBPACK_IMPORTED_MODULE_0_axios___default.a.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
__WEBPACK_IMPORTED_MODULE_0_axios___default.a.defaults.transformRequest = [function (data, headers) {
    var str = [];
    for (var p in data) {
        if (data.hasOwnProperty(p) && data[p]) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(data[p]));
        }
    }return str.join("&");
}];
var apiExecute = function apiExecute(URL, action, data) {
    switch (action) {
        case "POST":
            return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post(URL, data, { withCredentials: true }).then(function (response) {
                return response.data;
            }, function (err) {
                return Promise.reject(err);
            }).catch(function (err) {
                console.log("catch err", err);
                return Promise.reject(err);
            });
        case "PUT":
            return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.put(URL, data, { withCredentials: true }).then(function (response) {
                return response.data;
            }, function (err) {
                return Promise.reject(err);
            }).catch(function (err) {
                console.log("catch err", err);
                return Promise.reject(err);
            });
        case "GET":
            return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get(URL, { withCredentials: true }).then(function (response) {
                return response.data;
            }, function (err) {
                return Promise.reject(err);
            }).catch(function (err) {
                console.log("catch err", err);
                return Promise.reject(err);
            });
        case "DELETE":
            return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.delete(URL, { withCredentials: true }).then(function (response) {
                return response.data;
            }, function (err) {
                return Promise.reject(err);
            }).catch(function (err) {
                console.log("catch err", err);
                return Promise.reject(err);
            });
    }
};

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPageContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_toastr__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_users__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_validation__ = __webpack_require__(143);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var FormErrors = function FormErrors(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "formErrors" }, Object.keys(props).map(function (fieldName, i) {
        if (props[fieldName].length > 0) return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { key: i }, " ", props[fieldName], " ");
    }));
};
var RegisterPageContainer = function (_React$Component) {
    _inherits(RegisterPageContainer, _React$Component);

    //constructor is the starting point of your class
    //"extends" adds functionality to your class 
    function RegisterPageContainer(props) {
        _classCallCheck(this, RegisterPageContainer);

        var _this = _possibleConstructorReturn(this, (RegisterPageContainer.__proto__ || Object.getPrototypeOf(RegisterPageContainer)).call(this, props));

        _this.state = {
            registerEntity: {
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            },
            isFirstNameValid: false,
            isLastNameValid: false,
            isEmailValid: false,
            isPasswordValid: false,
            isFormValid: false,
            formErrors: { firstName: "", lastName: "", email: "", password: "" }
        };
        _this.onFieldChange = _this.onFieldChange.bind(_this);
        _this.onSave = _this.onSave.bind(_this);
        return _this;
    }

    _createClass(RegisterPageContainer, [{
        key: "onFieldChange",
        value: function onFieldChange(fieldName, fieldValue) {
            var _this2 = this;

            var nextState = Object.assign({}, this.state, { registerEntity: Object.assign({}, this.state.registerEntity, _defineProperty({}, fieldName, fieldValue)) });
            this.setState(nextState, function () {
                _this2.validateField(fieldName, fieldValue);
            });
        }
    }, {
        key: "validateField",
        value: function validateField(fieldName, fieldValue) {
            var errorMessages = this.state.formErrors;
            var isFirstNameValid = this.state.isFirstNameValid;
            var isLastNameValid = this.state.isLastNameValid;
            var isEmailValid = this.state.isEmailValid;
            var isPasswordValid = this.state.isPasswordValid;
            switch (fieldName) {
                case "firstName":
                    console.log("isfirstname", isFirstNameValid);
                    isFirstNameValid = __WEBPACK_IMPORTED_MODULE_4__common_validation__["a" /* Validator */].MinLength(fieldValue, 2);
                    errorMessages.firstName = isFirstNameValid ? "First Name is too short" : "";
                    break;
                case "lastName":
                    isLastNameValid = __WEBPACK_IMPORTED_MODULE_4__common_validation__["a" /* Validator */].MinLength(fieldValue, 2);
                    errorMessages.lastName = isLastNameValid ? "Last Name is too short" : "";
                    break;
                case "email":
                    var emailErrorMessage = __WEBPACK_IMPORTED_MODULE_4__common_validation__["a" /* Validator */].emailValid(fieldValue, 6);
                    isEmailValid = __WEBPACK_IMPORTED_MODULE_4__common_validation__["a" /* Validator */].MinLength(fieldValue, 2);
                    errorMessages.email = emailErrorMessage.errorMsg;
                    break;
                case "password":
                    var passwordErrorMessage = __WEBPACK_IMPORTED_MODULE_4__common_validation__["a" /* Validator */].passwordValid(fieldValue, 6);
                    isPasswordValid = __WEBPACK_IMPORTED_MODULE_4__common_validation__["a" /* Validator */].MinLength(fieldValue, 6);
                    errorMessages.password = passwordErrorMessage.errorMsg;
                    break;
                default:
                    break;
            }
            this.setState({ formErrors: errorMessages, isFirstNameValid: isFirstNameValid, isLastNameValid: isLastNameValid, isEmailValid: isEmailValid, isPasswordValid: isPasswordValid });
        }
    }, {
        key: "validateForm",
        value: function validateForm() {
            this.setState({ isFormValid: this.state.isFirstNameValid && this.state.isLastNameValid && this.state.isEmailValid && this.state.isPasswordValid });
        }
    }, {
        key: "onSave",
        value: function onSave() {
            __WEBPACK_IMPORTED_MODULE_3__api_users__["a" /* NewUserApi */].registerUser(this.state.registerEntity).then(function (response) {
                __WEBPACK_IMPORTED_MODULE_2_toastr__["success"]("Register Success");
            }, function (err) {
                __WEBPACK_IMPORTED_MODULE_2_toastr__["error"]("Register Failed");
            }).catch(function (err) {
                __WEBPACK_IMPORTED_MODULE_2_toastr__["error"]("Register Failed");
            });
        }
        // <FormErrors
        //firstName={this.state.formErrors.firstName}
        //lastName={this.state.formErrors.lastName}
        //email={this.state.formErrors.email}
        //password={this.state.formErrors.password} />

    }, {
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1____["a" /* RegisterPage */], { onChange: this.onFieldChange, onSave: this.onSave, buttonDisabled: !this.state.isFormValid, registerEntity: this.state.registerEntity, firstNameErrorMessage: this.state.formErrors.firstName, lastNameErrorMessage: this.state.formErrors.lastName, emailErrorMessage: this.state.formErrors.email, passwordErrorMessage: this.state.formErrors.password }));
        }
    }]);

    return RegisterPageContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Validator; });
var MinLength = function MinLength(str, minChar) {
    return str.length < minChar;
};
var emailValid = function emailValid(str, minChar) {
    var validate = {
        isValid: false,
        errorMsg: ""
    };
    //chadmesa@gmail.com
    //if (str.length > minChar)
    //    validate.errorMsg = ""
    //else
    //    validate.isValid = false;
    str.length < minChar ? validate.errorMsg = "Please enter a valid email." : str.length > 50 ? validate.errorMsg = "Please enter a valid email." : !str.includes("@") ? validate.errorMsg = "Please enter a valid email." : !str.includes(".") ? validate.errorMsg = "Please enter a valid email." : validate.isValid = true;
    return validate;
};
var passwordValid = function passwordValid(str, minChar) {
    var validate = {
        isValid: false,
        errorMsg: ""
    };
    str.length < minChar ? validate.errorMsg = "Password must include 6 characters, one capital letter, and a special character (i.e. !@#$%^&*)" : str.length > 50 ? validate.errorMsg = "Password must include 6 characters, one capital letter, and a special character." : !str.includes("(?=.*[!@#\$%\^&\*])") ? validate.errorMsg = "Password must include 6 characters, one capital letter, and a special character." : validate.isValid = true;
    return validate;
};
var Validator = { MinLength: MinLength, emailValid: emailValid, passwordValid: passwordValid };

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_toastr__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_users__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_components_form__ = __webpack_require__(35);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var HomePageContainer = function (_React$Component) {
    _inherits(HomePageContainer, _React$Component);

    function HomePageContainer(props) {
        _classCallCheck(this, HomePageContainer);

        console.log("constructor");

        var _this = _possibleConstructorReturn(this, (HomePageContainer.__proto__ || Object.getPrototypeOf(HomePageContainer)).call(this, props));

        _this.state = {
            homePageEntity: {
                firstName: "",
                lastName: ""
            }
        };
        return _this;
    }

    _createClass(HomePageContainer, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            //call API
            __WEBPACK_IMPORTED_MODULE_2__api_users__["b" /* UserApi */].HomePage(this.state.homePageEntity).then(function (response) {
                console.log(response);
                _this2.setState({
                    homePageEntity: {
                        firstName: response.item.firstName,
                        lastName: response.item.lastName
                    }
                });
            });
        }
    }, {
        key: "onSave",
        value: function onSave() {
            __WEBPACK_IMPORTED_MODULE_2__api_users__["b" /* UserApi */].logoutUser().then(function (response) {
                __WEBPACK_IMPORTED_MODULE_1_toastr__["success"]("You have been logged out");
                __WEBPACK_IMPORTED_MODULE_3_react_router__["browserHistory"].push("/login");
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            //output
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, "Welcome ", this.state.homePageEntity.firstName, "!"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__common_components_form__["a" /* Button */], { className: "btn btn-danger", onClick: function onClick() {
                    _this3.onSave();
                }, label: "Logout", disabled: false }));
        }
    }]);

    return HomePageContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__button__ = __webpack_require__(111);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__button__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__input__ = __webpack_require__(112);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__input__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__password__ = __webpack_require__(113);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__password__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dropdownlist__ = __webpack_require__(114);
/* unused harmony namespace reexport */





/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewUserApi; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_users_apiExecute__ = __webpack_require__(123);

var baseURL = "https://pacoima-ypi.azurewebsites.net/";
//patch axios to use application/x-www-form-urlencoded
//https://github.com/axios/axios/issues/350#issuecomment-227270046
var loginUser = function loginUser(data) {
    var loginURL = baseURL + "api/users/login/force";
    return Object(__WEBPACK_IMPORTED_MODULE_0__api_users_apiExecute__["a" /* apiExecute */])(loginURL, "POST", data);
};
var registerUser = function registerUser(data) {
    var registerURL = baseURL + "api/users/register/employer";
    return Object(__WEBPACK_IMPORTED_MODULE_0__api_users_apiExecute__["a" /* apiExecute */])(registerURL, "POST", data);
};
var HomePage = function HomePage(data) {
    var loggedInUserURL = baseURL + "api/people/currentuser";
    return Object(__WEBPACK_IMPORTED_MODULE_0__api_users_apiExecute__["a" /* apiExecute */])(loggedInUserURL, "GET", null);
};
var logoutUser = function logoutUser() {
    var logoutUserURL = baseURL + "api/users/logout";
    return Object(__WEBPACK_IMPORTED_MODULE_0__api_users_apiExecute__["a" /* apiExecute */])(logoutUserURL, "GET", null);
};
var UserApi = {
    loginUser: loginUser, HomePage: HomePage, logoutUser: logoutUser
};
var NewUserApi = {
    registerUser: registerUser
};

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__about__ = __webpack_require__(107);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__about__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header__ = __webpack_require__(108);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__header__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(58);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(59);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dataDemo__ = __webpack_require__(117);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__dataDemo__["a"]; });






/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__registerPage__ = __webpack_require__(109);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__registerPage__["a"]; });


/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loginPage__ = __webpack_require__(115);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__loginPage__["a"]; });


/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(78);



__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"](__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__router__["a" /* AppRouter */], null), document.getElementById("root"));

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_login_loginPageContainer__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_register_registerPageContainer__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_homePage_index__ = __webpack_require__(144);







var AppRouter = function AppRouter() {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Router"], { history: __WEBPACK_IMPORTED_MODULE_1_react_router__["browserHistory"] }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/", component: __WEBPACK_IMPORTED_MODULE_3__app__["a" /* App */] }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["IndexRoute"], { component: __WEBPACK_IMPORTED_MODULE_5__components_register_registerPageContainer__["a" /* RegisterPageContainer */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/about", component: __WEBPACK_IMPORTED_MODULE_2__components__["a" /* AboutPage */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/memberhome", component: __WEBPACK_IMPORTED_MODULE_6__components_homePage_index__["a" /* HomePageContainer */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/login", component: __WEBPACK_IMPORTED_MODULE_4__components_login_loginPageContainer__["a" /* LoginPageContainer */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/register", component: __WEBPACK_IMPORTED_MODULE_5__components_register_registerPageContainer__["a" /* RegisterPageContainer */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/dataDemo", component: __WEBPACK_IMPORTED_MODULE_2__components__["b" /* DataDemo */] })));
};

/***/ })

},[67]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fib3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3RlclBhZ2UudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXJGb3JtLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21tb24vY29tcG9uZW50cy9mb3JtL2J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL2NvbXBvbmVudHMvZm9ybS9pbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL2NvbXBvbmVudHMvZm9ybS9wYXNzd29yZC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL2NvbXBvbmVudHMvZm9ybS9kcm9wZG93bmxpc3QudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbG9naW4vbG9naW5QYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvZ2luL2xvZ2luRm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9kYXRhRGVtby50c3giLCJ3ZWJwYWNrOi8vLy4vYXBpL2ZhcXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2FwaS9tb2NrRGF0YS50c3giLCJ3ZWJwYWNrOi8vLy4vYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvZ2luL2xvZ2luUGFnZUNvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vYXBpL3VzZXJzL2FwaUV4ZWN1dGUudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXJQYWdlQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21tb24vdmFsaWRhdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ob21lUGFnZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL2NvbXBvbmVudHMvZm9ybS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vYXBpL3VzZXJzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vcm91dGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBK0I7QUFFekIsSUFBZ0IsWUFBc0M7QUFDakQsV0FDSCxrRUFFUjtBQUFDLENBSk0sQzs7Ozs7Ozs7Ozs7O0FDRndCO0FBQ0s7QUFFOUIsSUFBYSxTQUFzQztBQUM5QyxXQUNILGtFQUFLLHFEQUFLLHNEQUFHLElBQVMsVUFBVSxXQUFrQixxQkFBYSxVQUMzRCxxREFBSyxzREFBRyxJQUFjLGVBQVUsV0FBa0IscUJBQVksU0FDOUQscURBQUssc0RBQUcsSUFBUyxVQUFVLFdBQWtCLHFCQUFhLFVBQzFELHFEQUFLLHNEQUFHLElBQVksYUFBVSxXQUFrQixxQkFBZ0IsYUFDaEUscURBQUssc0RBQUcsSUFBWSxhQUFVLFdBQWtCLHFCQUk1RDtBQUFDLENBVk0sQzs7Ozs7Ozs7Ozs7O0FDSHdCO0FBRWU7QUFFeEMsSUFBbUIsZUFBNEMsc0JBQXlCO0FBQ25GLFdBQ0gscURBQWEsdUVBQ0QsVUFBTyxNQUFTLFVBQ2xCLFFBQU8sTUFBTyxRQUNOLGdCQUFPLE1BQWUsZ0JBQ3RCLGdCQUFPLE1BQWUsZ0JBQ25CLG1CQUFPLE1BQWtCLG1CQUN0QixzQkFBTyxNQUFxQixzQkFDM0IsdUJBQU8sTUFBc0IsdUJBQzlCLHNCQUFPLE1BRXZDO0FBQUMsQ0FaTSxDOzs7Ozs7Ozs7Ozs7QUNKd0I7QUFFd0M7QUFFakUsSUFBbUIsZUFBNEMsc0JBQXlCO0FBQ25GLFdBQ0gsbUVBQ0ksOERBQWMsV0FBc0IseUJBQ2hDLDhEQUFjLFdBQWUsa0JBQWUsYUFDNUMsOERBQWMsV0FBYSxnQkFDdkIscURBQU0sMEVBQ0csT0FBYSxjQUNkLE1BQVksYUFDWCxPQUFPLE1BQWUsZUFBVSxXQUM3QixVQUFPLE1BQVMsVUFDbkIsT0FBTyxN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TztBQUNPO0FBQ0Q7QUFFN0IsaURBQU8sQ0FDWCxxREFBVSw0REFBRSxPQUNKLFNBQWUsZUFDekIsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQNkI7QUFDMEM7QUFDdkI7QUFDdEI7QUFDK0M7QUFDUztBQUNwQjtBQUUxRCxJQUFnQixZQUFzQztBQUVqRCxXQUNILHFEQUFPLHdEQUFRLFNBQWdCLGdFQUMzQixxREFBTSx1REFBSyxNQUFJLEtBQVUsV0FBSyxxREFDMUIscURBQVcsNERBQVUsV0FBMkIsOEdBQ2hELHFEQUFNLHVEQUFLLE1BQVMsVUFBVSxXQUFlLG1FQUM3QyxxREFBTSx1REFBSyxNQUFjLGVBQVUsV0FBdUIsMEZBQzFELHFEQUFNLHVEQUFLLE1BQVMsVUFBVSxXQUF3QixxR0FDdEQscURBQU0sdURBQUssTUFBWSxhQUFVLFdBQTJCLDhHQUM1RCxxREFBTSx1REFBSyxNQUFZLGFBQVUsV0FJakQ7QUFBQyxDQWRNLEMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgQWJvdXRQYWdlOiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8e30+ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PiBUaGlzIGlzIGFib3V0IHVzIHBhZ2UgPC9kaXY+XHJcbiAgICApO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9hYm91dC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjsgXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7IFxyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlcjogUmVhY3QuU3RhdGVsZXNzQ29tcG9uZW50PHt9PiA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj48TGluayB0bz1cIi9hYm91dFwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiPkFib3V0PC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayB0bz1cIi9tZW1iZXJob21lXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0XCI+SG9tZTwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgdG89XCIvbG9naW5cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIj5Mb2dpbjwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgdG89XCIvcmVnaXN0ZXJcIiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIj5SZWdpc3RlcjwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgdG89XCIvZGF0YURlbW9cIiBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHRcIj5EYXRhIERlbW88L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2hlYWRlci50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSVJlZ2lzdGVyRm9ybSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7IFJlZ2lzdGVyRm9ybSB9IGZyb20gXCIuL3JlZ2lzdGVyRm9ybVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlZ2lzdGVyUGFnZTogUmVhY3QuU3RhdGVsZXNzQ29tcG9uZW50PElSZWdpc3RlckZvcm0+ID0gKHByb3BzOiBJUmVnaXN0ZXJGb3JtKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWdpc3RlckZvcm1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICBvblNhdmU9e3Byb3BzLm9uU2F2ZX1cclxuICAgICAgICAgICAgcmVnaXN0ZXJFbnRpdHk9e3Byb3BzLnJlZ2lzdGVyRW50aXR5fVxyXG4gICAgICAgICAgICBidXR0b25EaXNhYmxlZD17cHJvcHMuYnV0dG9uRGlzYWJsZWR9XHJcbiAgICAgICAgICAgIGVtYWlsRXJyb3JNZXNzYWdlPXtwcm9wcy5lbWFpbEVycm9yTWVzc2FnZX1cclxuICAgICAgICAgICAgcGFzc3dvcmRFcnJvck1lc3NhZ2U9e3Byb3BzLnBhc3N3b3JkRXJyb3JNZXNzYWdlfVxyXG4gICAgICAgICAgICBmaXJzdE5hbWVFcnJvck1lc3NhZ2U9e3Byb3BzLmZpcnN0TmFtZUVycm9yTWVzc2FnZX1cclxuICAgICAgICAgICAgbGFzdE5hbWVFcnJvck1lc3NhZ2U9e3Byb3BzLmxhc3ROYW1lRXJyb3JNZXNzYWdlfSAvPlxyXG4gICAgKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyUGFnZS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSVJlZ2lzdGVyRW50aXR5LCBJUmVnaXN0ZXJGb3JtIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXNcIjtcclxuaW1wb3J0IHsgQnV0dG9uLCBJbnB1dCwgUGFzc3dvcmQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbXBvbmVudHMvZm9ybVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlZ2lzdGVyRm9ybTogUmVhY3QuU3RhdGVsZXNzQ29tcG9uZW50PElSZWdpc3RlckZvcm0+ID0gKHByb3BzOiBJUmVnaXN0ZXJGb3JtKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb3JtPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtaGVhZGVyXCI+UmVnaXN0ZXI8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkZpcnN0IE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnJlZ2lzdGVyRW50aXR5LmZpcnN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17cHJvcHMuZmlyc3ROYW1lRXJyb3JNZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZpcnN0IE5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYXN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5yZWdpc3RlckVudGl0eS5sYXN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17cHJvcHMubGFzdE5hbWVFcnJvck1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFzdCBOYW1lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5yZWdpc3RlckVudGl0eS5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17cHJvcHMuZW1haWxFcnJvck1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBhc3N3b3JkIGxhYmVsPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMucmVnaXN0ZXJFbnRpdHkucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e3Byb3BzLnBhc3N3b3JkRXJyb3JNZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uU2F2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSZWdpc3RlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3RlckZvcm0udHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IElCdXR0b25Qcm9wcyB9IGZyb20gXCIuLi8uLi8uLi9pbnRlcmZhY2VzXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEJ1dHRvbjogUmVhY3QuU3RhdGVsZXNzQ29tcG9uZW50PElCdXR0b25Qcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9XHJcbiAgICAgICAgICAgIGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtwcm9wcy5sYWJlbH1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICk7XHJcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tbW9uL2NvbXBvbmVudHMvZm9ybS9idXR0b24udHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IElJbnB1dFByb3BzIH0gZnJvbSBcIi4uLy4uLy4uL2ludGVyZmFjZXNcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgSW5wdXQ6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDxJSW5wdXRQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtmb3JtYXRXcmFwcGVyQ2xhc3MocHJvcHMpfT5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9e3Byb3BzLm5hbWV9Pntwcm9wcy5sYWJlbH08L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e3Byb3BzLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cHJvcHMucGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0KHByb3BzKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlbHAtYmxvY2tcIj57cHJvcHMuZXJyb3J9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxufVxyXG5cclxuY29uc3QgZm9ybWF0V3JhcHBlckNsYXNzID0gKHByb3BzOiBJSW5wdXRQcm9wcykgPT4ge1xyXG4gICAgY29uc3Qgd3JhcHBlckNsYXNzID0gJ2Zvcm0tZ3JvdXAnO1xyXG4gICAgcmV0dXJuIHByb3BzLmVycm9yID8gYCR7d3JhcHBlckNsYXNzfSBoYXMtZXJyb3JgIDogd3JhcHBlckNsYXNzO1xyXG59XHJcblxyXG5jb25zdCBvbkNoYW5nZUlucHV0ID0gKHByb3BzOiBJSW5wdXRQcm9wcykgPT4gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBwcm9wcy5vbkNoYW5nZShlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21tb24vY29tcG9uZW50cy9mb3JtL2lucHV0LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJSW5wdXRQcm9wcyB9IGZyb20gXCIuLi8uLi8uLi9pbnRlcmZhY2VzXCI7XHJcblxyXG5jb25zdCBmb3JtYXRXcmFwcGVyQ2xhc3MgPSAocHJvcHM6IElJbnB1dFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCB3cmFwcGVyQ2xhc3MgPSAnZm9ybS1ncm91cCc7XHJcbiAgICByZXR1cm4gcHJvcHMuZXJyb3IgPyBgJHt3cmFwcGVyQ2xhc3N9IGhhcy1lcnJvcmAgOiB3cmFwcGVyQ2xhc3M7XHJcbn1cclxuXHJcbmNvbnN0IG9uQ2hhbmdlSW5wdXQgPSAocHJvcHM6IElJbnB1dFByb3BzKSA9PiAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgIHByb3BzLm9uQ2hhbmdlKGUudGFyZ2V0Lm5hbWUsIGUudGFyZ2V0LnZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBhc3N3b3JkOiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8SUlucHV0UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Zm9ybWF0V3JhcHBlckNsYXNzKHByb3BzKX0+XHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtwcm9wcy5uYW1lfT57cHJvcHMubGFiZWx9PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT17cHJvcHMubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwcm9wcy5wbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvcHMudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXQocHJvcHMpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVscC1ibG9ja1wiPntwcm9wcy5lcnJvcn08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tbW9uL2NvbXBvbmVudHMvZm9ybS9wYXNzd29yZC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSUtleVZhbHVlLCBJRHJvcERvd25MaXN0UHJvcHMgfSBmcm9tIFwiLi4vLi4vLi4vaW50ZXJmYWNlc1wiO1xyXG5cclxuY29uc3QgZm9ybWF0V3JhcHBlckNsYXNzID0gKHByb3BzOiBJRHJvcERvd25MaXN0UHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHdyYXBwZXJDbGFzcyA9ICdmb3JtLWdyb3VwJztcclxuICAgIHJldHVybiBwcm9wcy5lcnJvciA/IGAke3dyYXBwZXJDbGFzc30gaGFzLWVycm9yYCA6IHdyYXBwZXJDbGFzcztcclxufVxyXG5cclxuY29uc3Qgb25DaGFuZ2VJbnB1dCA9IChwcm9wczogSURyb3BEb3duTGlzdFByb3BzKSA9PiAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBwcm9wcy5vbkNoYW5nZShlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEcm9wRG93bkxpc3Q6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDxJRHJvcERvd25MaXN0UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcblxyXG4gICAgdmFyIG9wdGlvbnMgPSBwcm9wcy5vcHRpb25zLm1hcCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e29wdGlvbi5rZXl9IHZhbHVlPXtvcHRpb24ua2V5fT57b3B0aW9uLnZhbHVlfTwvb3B0aW9uPlxyXG4gICAgICAgICk7XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Zvcm1hdFdyYXBwZXJDbGFzcyhwcm9wcyl9PlxyXG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17cHJvcHMubmFtZX0+e3Byb3BzLmxhYmVsfTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3Byb3BzLnNlbGVjdGVkVmFsdWV9IG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0KHByb3BzKX0gaWQ9e3Byb3BzLm5hbWV9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPntvcHRpb25zfTwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tbW9uL2NvbXBvbmVudHMvZm9ybS9kcm9wZG93bmxpc3QudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IElMb2dpbkZvcm0gfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgeyBMb2dpbkZvcm0gfSBmcm9tIFwiLi9sb2dpbkZvcm1cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMb2dpblBhZ2U6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDxJTG9naW5Gb3JtPiA9IChwcm9wczogSUxvZ2luRm9ybSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TG9naW5Gb3JtXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX1cclxuICAgICAgICAgICAgb25TYXZlPXtwcm9wcy5vblNhdmV9XHJcbiAgICAgICAgICAgIGxvZ2luRW50aXR5PXtwcm9wcy5sb2dpbkVudGl0eX1cclxuICAgICAgICAgICAgYnV0dG9uRGlzYWJsZWQ9e3Byb3BzLmJ1dHRvbkRpc2FibGVkfVxyXG4gICAgICAgICAgICBlbWFpbEVycm9yTWVzc2FnZT17cHJvcHMuZW1haWxFcnJvck1lc3NhZ2V9XHJcbiAgICAgICAgICAgIHBhc3N3b3JkRXJyb3JNZXNzYWdlPXtwcm9wcy5wYXNzd29yZEVycm9yTWVzc2FnZX1cclxuICAgICAgICAvPlxyXG4gICAgKTtcclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9sb2dpbi9sb2dpblBhZ2UudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IElMb2dpbkVudGl0eSwgSUxvZ2luRm9ybSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgSW5wdXQsIFBhc3N3b3JkIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9jb21wb25lbnRzL2Zvcm1cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMb2dpbkZvcm06IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDxJTG9naW5Gb3JtPiA9IChwcm9wczogSUxvZ2luRm9ybSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWhlYWRlclwiPkxvZ2luPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9wcy5sb2dpbkVudGl0eS5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3Byb3BzLm9uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e3Byb3BzLmVtYWlsRXJyb3JNZXNzYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb3BzLmxvZ2luRW50aXR5LnBhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17cHJvcHMucGFzc3dvcmRFcnJvck1lc3NhZ2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uU2F2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJMb2dpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtmYWxzZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApO1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbG9naW4vbG9naW5Gb3JtLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJRkFRRW50aXR5IH0gZnJvbSBcIi4uL2ludGVyZmFjZXNcIjtcclxuaW1wb3J0IHsgRmFxQXBpIH0gZnJvbSBcIi4uL2FwaS9mYXFzXCI7XHJcblxyXG5pbnRlcmZhY2UgSURhdGFEZW1vIHtcclxuICAgIGZhcXM6IElGQVFFbnRpdHlbXVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YURlbW8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIElEYXRhRGVtbz4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgZmFxczogW10gfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIEZhcUFwaS5nZXRGYWtlRGF0YSgpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZmFxczogcmVzcG9uc2UgfSlcclxuICAgICAgICAgICAgfSkpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuZmFxcy5tYXAodGhpcy5DcmVhdGVSb3cpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIENyZWF0ZVJvdyhkYXRhOiBJRkFRRW50aXR5KSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwPntkYXRhLmNhdGVnb3J5fTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e2RhdGEuYW5zd2VyfTwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLmFuc3dlcn1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvZGF0YURlbW8udHN4IiwiaW1wb3J0IHsgSUZBUUVudGl0eSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7IGZha2VGYXFzIH0gZnJvbSBcIi4uLy4uL2FwaS9tb2NrRGF0YVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBnZXRGYWtlRGF0YSA9ICgpOiBQcm9taXNlPElGQVFFbnRpdHlbXT4gPT4ge1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWtlRmFxcylcclxufSBcclxuXHJcbmV4cG9ydCBjb25zdCBGYXFBcGkgPSB7XHJcbiAgICBnZXRGYWtlRGF0YVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBpL2ZhcXMvaW5kZXgudHN4IiwiaW1wb3J0IHsgSUZBUUVudGl0eSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZmFrZUZhcXM6IElGQVFFbnRpdHlbXSA9IFtcclxuICAgIHtcbiAgICAgICAgYW5zd2VyOiBcImJlY2F1c2VcIixcbiAgICAgICAgY2F0ZWdvcnk6IFwiU2VjdXJpdHkgU3BlY2lhbGlzdFwiLFxuICAgICAgICBkaXNwbGF5T3JkZXI6IFwiMlwiLCBmYXFDYXRlZ29yeUlkOiA0LCBpZDogMTY4NTEsIHF1ZXN0aW9uOiBcIndoeSB0aG91Z2hcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBhbnN3ZXI6IFwiYmVjYXVzZSBpdHMgdHJ1ZVwiLFxuICAgICAgICBjYXRlZ29yeTogXCJHZW5lcmFsXCIsXG4gICAgICAgIGRpc3BsYXlPcmRlcjogXCIyXCIsXG4gICAgICAgIGZhcUNhdGVnb3J5SWQ6IDEsIGlkOiAxNjg1MSwgcXVlc3Rpb246IFwid2h5IHRob3VnaFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFuc3dlcjogXCJiZWNhdXNlIEkgc2FpZCBzb1wiLCBjYXRlZ29yeTogXCJTZWN1cml0eSBTcGVjaWFsaXN0XCIsXG4gICAgICAgIGRpc3BsYXlPcmRlcjogXCIyXCIsIGZhcUNhdGVnb3J5SWQ6IDQsXG4gICAgICAgIGlkOiAxNjg1MSwgcXVlc3Rpb246IFwid2h5IHRob3VnaFwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGFuc3dlcjogXCJ3aG8gY2FyZXNcIiwgY2F0ZWdvcnk6IFwiR2VuZXJhbFwiLFxuICAgICAgICBkaXNwbGF5T3JkZXI6IFwiMlwiLCBmYXFDYXRlZ29yeUlkOiAxLCBpZDogMTY4NTEsXG4gICAgICAgIHF1ZXN0aW9uOiBcIndoeSB0aG91Z2hcIlxuICAgIH1cclxuXTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcGkvbW9ja0RhdGEudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuL2NvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBcHA6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDx7fT4gPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExvZ2luUGFnZSB9IGZyb20gXCIuL1wiO1xyXG5pbXBvcnQgKiBhcyB0b2FzdHIgZnJvbSBcInRvYXN0clwiO1xyXG5pbXBvcnQgeyBVc2VyQXBpIH0gZnJvbSBcIi4uLy4uL2FwaS91c2Vyc1wiO1xyXG5pbXBvcnQgeyBJTG9naW5FbnRpdHkgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgeyBJUmVnaXN0ZXJFbnRpdHkgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcclxuXHJcbmludGVyZmFjZSBJRm9ybUVycm9ycyB7XHJcbiAgICBwYXNzd29yZDogc3RyaW5nO1xyXG4gICAgZW1haWw6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIElMb2dpblN0YXRlIHtcclxuICAgIGxvZ2luRW50aXR5OiBJTG9naW5FbnRpdHk7XHJcbiAgICBmb3JtRXJyb3JzOiBJRm9ybUVycm9ycztcclxuICAgIGlzRW1haWxWYWxpZDogYm9vbGVhbjtcclxuICAgIGlzUGFzc3dvcmRWYWxpZDogYm9vbGVhbjtcclxuICAgIGlzRm9ybVZhbGlkOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBGb3JtRXJyb3JzOiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8SUZvcm1FcnJvcnM+ID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybUVycm9yc1wiPlxyXG4gICAgICAgICAgICB7T2JqZWN0LmtleXMocHJvcHMpLm1hcCgoZmllbGROYW1lLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNbZmllbGROYW1lXS5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8cCBrZXk9e2l9PntmaWVsZE5hbWV9IHtwcm9wc1tmaWVsZE5hbWVdfSA8L3A+XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExvZ2luUGFnZUNvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7fSwgSUxvZ2luU3RhdGU+IHtcclxuICAgIC8vY29uc3RydWN0b3IgaXMgdGhlIHN0YXJ0aW5nIHBvaW50IG9mIHlvdXIgY2xhc3NcclxuICAgIC8vXCJleHRlbmRzXCIgYWRkcyBmdW5jdGlvbmFsaXR5IHRvIHlvdXIgY2xhc3MgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBsb2dpbkVudGl0eToge1xyXG4gICAgICAgICAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogXCJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpc0VtYWlsVmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBpc0Zvcm1WYWxpZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzUGFzc3dvcmRWYWxpZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGZvcm1FcnJvcnM6IHsgZW1haWw6IFwiXCIsIHBhc3N3b3JkOiBcIlwiIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMub25GaWVsZENoYW5nZSA9IHRoaXMub25GaWVsZENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMub25TYXZlID0gdGhpcy5vblNhdmUuYmluZCh0aGlzKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgb25GaWVsZENoYW5nZShmaWVsZE5hbWU6IHN0cmluZywgZmllbGRWYWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgbmV4dFN0YXRlID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRlLFxyXG4gICAgICAgICAgICBsb2dpbkVudGl0eToge1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5zdGF0ZS5sb2dpbkVudGl0eSxcclxuICAgICAgICAgICAgICAgIFtmaWVsZE5hbWVdOiBmaWVsZFZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShuZXh0U3RhdGUsICgpID0+IHsgdGhpcy52YWxpZGF0ZUZpZWxkKGZpZWxkTmFtZSwgZmllbGRWYWx1ZSkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB2YWxpZGF0ZUZpZWxkKGZpZWxkTmFtZTogc3RyaW5nLCBmaWVsZFZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgZXJyb3JNZXNzYWdlcyA9IHRoaXMuc3RhdGUuZm9ybUVycm9ycztcclxuICAgICAgICBsZXQgaXNFbWFpbFZhbGlkID0gdGhpcy5zdGF0ZS5pc0VtYWlsVmFsaWQ7XHJcbiAgICAgICAgbGV0IGlzUGFzc3dvcmRWYWxpZCA9IHRoaXMuc3RhdGUuaXNQYXNzd29yZFZhbGlkO1xyXG4gICAgICAgIHN3aXRjaCAoZmllbGROYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJlbWFpbFwiOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaXNFbWFpbFZhbGlkKTtcclxuICAgICAgICAgICAgICAgIGlzRW1haWxWYWxpZCA9IGZpZWxkVmFsdWUubGVuZ3RoID4gNjtcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZXMuZW1haWwgPSBpc0VtYWlsVmFsaWQgPyBcIlwiIDogXCJFbWFpbCBpcyB0b28gc2hvcnRcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicGFzc3dvcmRcIjpcclxuICAgICAgICAgICAgICAgIGlzUGFzc3dvcmRWYWxpZCA9IGZpZWxkVmFsdWUubGVuZ3RoID4gNjtcclxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZXMucGFzc3dvcmQgPSBpc1Bhc3N3b3JkVmFsaWQgPyBcIlwiIDogXCJQYXNzd29yZCBpcyB0b28gc2hvcnRcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb3JtRXJyb3JzOiBlcnJvck1lc3NhZ2VzLCBpc1Bhc3N3b3JkVmFsaWQ6IGlzUGFzc3dvcmRWYWxpZCwgaXNFbWFpbFZhbGlkOiBpc0VtYWlsVmFsaWQgfSwgdGhpcy52YWxpZGF0ZUZvcm0pO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSB2YWxpZGF0ZUZvcm0oKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRm9ybVZhbGlkOiB0aGlzLnN0YXRlLmlzRW1haWxWYWxpZCAmJiB0aGlzLnN0YXRlLmlzUGFzc3dvcmRWYWxpZCB9KVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBvblNhdmUoKSB7XHJcbiAgICAgICAgVXNlckFwaS5sb2dpblVzZXIodGhpcy5zdGF0ZS5sb2dpbkVudGl0eSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhcIkxvZ2luIFN1Y2Nlc3NcIik7XHJcbiAgICAgICAgICAgICAgICBicm93c2VySGlzdG9yeS5wdXNoKFwiL21lbWJlckhvbWVcIik7XHJcbiAgICAgICAgICAgIH0sIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkxvZ2luIEZhaWxlZFwiKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihcIkxvZ2luIEZhaWxlZFwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8TG9naW5QYWdlIG9uQ2hhbmdlPXt0aGlzLm9uRmllbGRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgb25TYXZlPXt0aGlzLm9uU2F2ZX1cclxuICAgICAgICAgICAgICAgICAgICBidXR0b25EaXNhYmxlZD17IXRoaXMuc3RhdGUuaXNGb3JtVmFsaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgbG9naW5FbnRpdHk9e3RoaXMuc3RhdGUubG9naW5FbnRpdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWxFcnJvck1lc3NhZ2U9e3RoaXMuc3RhdGUuZm9ybUVycm9ycy5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZEVycm9yTWVzc2FnZT17dGhpcy5zdGF0ZS5mb3JtRXJyb3JzLnBhc3N3b3JkfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxwPiBOb3QgYSBtZW1iZXIsIDxhIGhyZWY9XCIjXCIgb25DbGljaz17KCkgPT4geyBicm93c2VySGlzdG9yeS5wdXNoKFwiL3JlZ2lzdGVyXCIpIH19PlJlZ2lzdGVyIEhlcmU8L2E+PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9sb2dpbi9sb2dpblBhZ2VDb250YWluZXIudHN4IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5wb3N0WydDb250ZW50LVR5cGUnXSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnO1xuYXhpb3MuZGVmYXVsdHMudHJhbnNmb3JtUmVxdWVzdCA9IFtmdW5jdGlvbiAoZGF0YSwgaGVhZGVycykge1xuICAgIHZhciBzdHIgPSBbXTtcbiAgICBmb3IgKHZhciBwIGluIGRhdGEpXG4gICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KHApICYmIGRhdGFbcF0pIHtcbiAgICAgICAgICAgIHN0ci5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChwKSArIFwiPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFbcF0pKTtcbiAgICAgICAgfVxuICAgIHJldHVybiBzdHIuam9pbihcIiZcIik7XG59XTtcclxuZXhwb3J0IGNvbnN0IGFwaUV4ZWN1dGUgPSAoVVJMOiBzdHJpbmcsIGFjdGlvbjogc3RyaW5nLCBkYXRhOiBhbnkpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24pIHtcclxuICAgICAgICBjYXNlIFwiUE9TVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gYXhpb3MucG9zdChVUkwsIGRhdGEsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IChyZXNwb25zZS5kYXRhKSwgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoUHJvbWlzZS5yZWplY3QoZXJyKSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2F0Y2ggZXJyXCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICBjYXNlIFwiUFVUXCI6XHJcbiAgICAgICAgICAgIHJldHVybiBheGlvcy5wdXQoVVJMLCBkYXRhLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiAocmVzcG9uc2UuZGF0YSksIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFByb21pc2UucmVqZWN0KGVycikpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNhdGNoIGVyclwiLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgY2FzZSBcIkdFVFwiOlxyXG4gICAgICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KFVSTCwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gKHJlc3BvbnNlLmRhdGEpLCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChQcm9taXNlLnJlamVjdChlcnIpKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjYXRjaCBlcnJcIiwgZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNhc2UgXCJERUxFVEVcIjpcclxuICAgICAgICAgICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShVUkwsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IChyZXNwb25zZS5kYXRhKSwgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoUHJvbWlzZS5yZWplY3QoZXJyKSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2F0Y2ggZXJyXCIsIGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcGkvdXNlcnMvYXBpRXhlY3V0ZS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUmVnaXN0ZXJQYWdlIH0gZnJvbSBcIi4vXCI7XHJcbmltcG9ydCAqIGFzIHRvYXN0ciBmcm9tIFwidG9hc3RyXCI7XHJcbmltcG9ydCB7IE5ld1VzZXJBcGkgfSBmcm9tIFwiLi4vLi4vYXBpL3VzZXJzXCI7XHJcbmltcG9ydCB7IElSZWdpc3RlckVudGl0eSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7IGJyb3dzZXJIaXN0b3J5IH0gZnJvbSBcInJlYWN0LXJvdXRlclwiO1xyXG5pbXBvcnQgeyBWYWxpZGF0b3IgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3ZhbGlkYXRpb25cIjtcclxuaW1wb3J0IHsgSUVycm9yIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvSUVycm9yXCJcclxuXHJcbmludGVyZmFjZSBJRm9ybUVycm9ycyB7XHJcbiAgICBmaXJzdE5hbWU6IHN0cmluZztcclxuICAgIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIElSZWdpc3RlclN0YXRlIHtcclxuICAgIHJlZ2lzdGVyRW50aXR5OiBJUmVnaXN0ZXJFbnRpdHlcclxuICAgIGZvcm1FcnJvcnM6IElGb3JtRXJyb3JzO1xyXG4gICAgaXNGaXJzdE5hbWVWYWxpZDogYm9vbGVhbjtcclxuICAgIGlzTGFzdE5hbWVWYWxpZDogYm9vbGVhbjtcclxuICAgIGlzRW1haWxWYWxpZDogYm9vbGVhbjtcclxuICAgIGlzUGFzc3dvcmRWYWxpZDogYm9vbGVhbjtcclxuICAgIGlzRm9ybVZhbGlkOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBGb3JtRXJyb3JzOiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8SUZvcm1FcnJvcnM+ID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybUVycm9yc1wiPlxyXG4gICAgICAgICAgICB7T2JqZWN0LmtleXMocHJvcHMpLm1hcCgoZmllbGROYW1lLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNbZmllbGROYW1lXS5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8cCBrZXk9e2l9PiB7cHJvcHNbZmllbGROYW1lXX0gPC9wPlxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSZWdpc3RlclBhZ2VDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIElSZWdpc3RlclN0YXRlPiB7XHJcbiAgICAvL2NvbnN0cnVjdG9yIGlzIHRoZSBzdGFydGluZyBwb2ludCBvZiB5b3VyIGNsYXNzXHJcbiAgICAvL1wiZXh0ZW5kc1wiIGFkZHMgZnVuY3Rpb25hbGl0eSB0byB5b3VyIGNsYXNzIFxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgcmVnaXN0ZXJFbnRpdHk6IHtcclxuICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogXCJcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBpc0ZpcnN0TmFtZVZhbGlkOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNMYXN0TmFtZVZhbGlkOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNFbWFpbFZhbGlkOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNQYXNzd29yZFZhbGlkOiBmYWxzZSxcclxuICAgICAgICAgICAgaXNGb3JtVmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBmb3JtRXJyb3JzOiB7IGZpcnN0TmFtZTogXCJcIiwgbGFzdE5hbWU6IFwiXCIsIGVtYWlsOiBcIlwiLCBwYXNzd29yZDogXCJcIiB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm9uRmllbGRDaGFuZ2UgPSB0aGlzLm9uRmllbGRDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uU2F2ZSA9IHRoaXMub25TYXZlLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIG9uRmllbGRDaGFuZ2UoZmllbGROYW1lOiBzdHJpbmcsIGZpZWxkVmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IG5leHRTdGF0ZSA9IHtcclxuICAgICAgICAgICAgLi4udGhpcy5zdGF0ZSxcclxuICAgICAgICAgICAgcmVnaXN0ZXJFbnRpdHk6IHtcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUucmVnaXN0ZXJFbnRpdHksXHJcbiAgICAgICAgICAgICAgICBbZmllbGROYW1lXTogZmllbGRWYWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUobmV4dFN0YXRlLCAoKSA9PiB7IHRoaXMudmFsaWRhdGVGaWVsZChmaWVsZE5hbWUsIGZpZWxkVmFsdWUpIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdmFsaWRhdGVGaWVsZChmaWVsZE5hbWU6IHN0cmluZywgZmllbGRWYWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IGVycm9yTWVzc2FnZXMgPSB0aGlzLnN0YXRlLmZvcm1FcnJvcnM7XHJcbiAgICAgICAgbGV0IGlzRmlyc3ROYW1lVmFsaWQgPSB0aGlzLnN0YXRlLmlzRmlyc3ROYW1lVmFsaWQ7XHJcbiAgICAgICAgbGV0IGlzTGFzdE5hbWVWYWxpZCA9IHRoaXMuc3RhdGUuaXNMYXN0TmFtZVZhbGlkO1xyXG4gICAgICAgIGxldCBpc0VtYWlsVmFsaWQgPSB0aGlzLnN0YXRlLmlzRW1haWxWYWxpZDtcclxuICAgICAgICBsZXQgaXNQYXNzd29yZFZhbGlkID0gdGhpcy5zdGF0ZS5pc1Bhc3N3b3JkVmFsaWQ7XHJcbiAgICAgICAgc3dpdGNoIChmaWVsZE5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImZpcnN0TmFtZVwiOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpc2ZpcnN0bmFtZVwiLCBpc0ZpcnN0TmFtZVZhbGlkKTtcclxuICAgICAgICAgICAgICAgIGlzRmlyc3ROYW1lVmFsaWQgPSBWYWxpZGF0b3IuTWluTGVuZ3RoKGZpZWxkVmFsdWUsIDIpXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2VzLmZpcnN0TmFtZSA9IGlzRmlyc3ROYW1lVmFsaWQgPyBcIkZpcnN0IE5hbWUgaXMgdG9vIHNob3J0XCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImxhc3ROYW1lXCI6XHJcbiAgICAgICAgICAgICAgICBpc0xhc3ROYW1lVmFsaWQgPSBWYWxpZGF0b3IuTWluTGVuZ3RoKGZpZWxkVmFsdWUsIDIpXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2VzLmxhc3ROYW1lID0gaXNMYXN0TmFtZVZhbGlkID8gXCJMYXN0IE5hbWUgaXMgdG9vIHNob3J0XCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImVtYWlsXCI6XHJcbiAgICAgICAgICAgICAgICBsZXQgZW1haWxFcnJvck1lc3NhZ2U6IElFcnJvciA9IFZhbGlkYXRvci5lbWFpbFZhbGlkKGZpZWxkVmFsdWUsIDYpXHJcbiAgICAgICAgICAgICAgICBpc0VtYWlsVmFsaWQgPSBWYWxpZGF0b3IuTWluTGVuZ3RoKGZpZWxkVmFsdWUsIDIpO1xyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlcy5lbWFpbCA9IGVtYWlsRXJyb3JNZXNzYWdlLmVycm9yTXNnXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInBhc3N3b3JkXCI6XHJcbiAgICAgICAgICAgICAgICBsZXQgcGFzc3dvcmRFcnJvck1lc3NhZ2U6IElFcnJvciA9IFZhbGlkYXRvci5wYXNzd29yZFZhbGlkKGZpZWxkVmFsdWUsIDYpXHJcbiAgICAgICAgICAgICAgICBpc1Bhc3N3b3JkVmFsaWQgPSBWYWxpZGF0b3IuTWluTGVuZ3RoKGZpZWxkVmFsdWUsIDYpXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2VzLnBhc3N3b3JkID0gcGFzc3dvcmRFcnJvck1lc3NhZ2UuZXJyb3JNc2dcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb3JtRXJyb3JzOiBlcnJvck1lc3NhZ2VzLCBpc0ZpcnN0TmFtZVZhbGlkOiBpc0ZpcnN0TmFtZVZhbGlkLCBpc0xhc3ROYW1lVmFsaWQ6IGlzTGFzdE5hbWVWYWxpZCwgaXNFbWFpbFZhbGlkOiBpc0VtYWlsVmFsaWQsIGlzUGFzc3dvcmRWYWxpZDogaXNQYXNzd29yZFZhbGlkIH0pXHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHZhbGlkYXRlRm9ybSgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNGb3JtVmFsaWQ6IHRoaXMuc3RhdGUuaXNGaXJzdE5hbWVWYWxpZCAmJiB0aGlzLnN0YXRlLmlzTGFzdE5hbWVWYWxpZCAmJiB0aGlzLnN0YXRlLmlzRW1haWxWYWxpZCAmJiB0aGlzLnN0YXRlLmlzUGFzc3dvcmRWYWxpZCB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25TYXZlKCkge1xyXG4gICAgICAgIE5ld1VzZXJBcGkucmVnaXN0ZXJVc2VyKHRoaXMuc3RhdGUucmVnaXN0ZXJFbnRpdHkpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoXCJSZWdpc3RlciBTdWNjZXNzXCIpO1xyXG4gICAgICAgICAgICB9LCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJSZWdpc3RlciBGYWlsZWRcIik7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoXCJSZWdpc3RlciBGYWlsZWRcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIDxGb3JtRXJyb3JzXHJcbiAgICAvL2ZpcnN0TmFtZT17dGhpcy5zdGF0ZS5mb3JtRXJyb3JzLmZpcnN0TmFtZX1cclxuICAgIC8vbGFzdE5hbWU9e3RoaXMuc3RhdGUuZm9ybUVycm9ycy5sYXN0TmFtZX1cclxuICAgIC8vZW1haWw9e3RoaXMuc3RhdGUuZm9ybUVycm9ycy5lbWFpbH1cclxuICAgIC8vcGFzc3dvcmQ9e3RoaXMuc3RhdGUuZm9ybUVycm9ycy5wYXNzd29yZH0gLz5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8UmVnaXN0ZXJQYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25GaWVsZENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBvblNhdmU9e3RoaXMub25TYXZlfVxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbkRpc2FibGVkPXshdGhpcy5zdGF0ZS5pc0Zvcm1WYWxpZH1cclxuICAgICAgICAgICAgICAgICAgICByZWdpc3RlckVudGl0eT17dGhpcy5zdGF0ZS5yZWdpc3RlckVudGl0eX1cclxuICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWVFcnJvck1lc3NhZ2U9e3RoaXMuc3RhdGUuZm9ybUVycm9ycy5maXJzdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdE5hbWVFcnJvck1lc3NhZ2U9e3RoaXMuc3RhdGUuZm9ybUVycm9ycy5sYXN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBlbWFpbEVycm9yTWVzc2FnZT17dGhpcy5zdGF0ZS5mb3JtRXJyb3JzLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkRXJyb3JNZXNzYWdlPXt0aGlzLnN0YXRlLmZvcm1FcnJvcnMucGFzc3dvcmR9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyUGFnZUNvbnRhaW5lci50c3giLCJpbXBvcnQgeyBJRXJyb3IgfSBmcm9tIFwiLi4vaW50ZXJmYWNlc1wiXHJcblxyXG5jb25zdCBNaW5MZW5ndGggPSAoc3RyOiBzdHJpbmcsIG1pbkNoYXI6IG51bWJlcikgPT4ge1xyXG4gICAgcmV0dXJuIChzdHIubGVuZ3RoIDwgbWluQ2hhcilcclxufVxyXG5cclxuY29uc3QgZW1haWxWYWxpZCA9IChzdHI6IHN0cmluZywgbWluQ2hhcjogbnVtYmVyKTogSUVycm9yID0+IHtcclxuICAgIGxldCB2YWxpZGF0ZSA9IHtcclxuICAgICAgICBpc1ZhbGlkOiBmYWxzZSxcclxuICAgICAgICBlcnJvck1zZzogXCJcIlxyXG4gICAgfVxyXG4gICAgLy9jaGFkbWVzYUBnbWFpbC5jb21cclxuICAgIC8vaWYgKHN0ci5sZW5ndGggPiBtaW5DaGFyKVxyXG4gICAgLy8gICAgdmFsaWRhdGUuZXJyb3JNc2cgPSBcIlwiXHJcbiAgICAvL2Vsc2VcclxuICAgIC8vICAgIHZhbGlkYXRlLmlzVmFsaWQgPSBmYWxzZTtcclxuICAgIHN0ci5sZW5ndGggPCBtaW5DaGFyID8gdmFsaWRhdGUuZXJyb3JNc2cgPSBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsLlwiIDpcclxuICAgICAgICBzdHIubGVuZ3RoID4gNTAgPyB2YWxpZGF0ZS5lcnJvck1zZyA9IFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwuXCIgOlxyXG4gICAgICAgICAgICAhc3RyLmluY2x1ZGVzKFwiQFwiKSA/IHZhbGlkYXRlLmVycm9yTXNnID0gXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbC5cIiA6XHJcbiAgICAgICAgICAgICAgICAhc3RyLmluY2x1ZGVzKFwiLlwiKSA/IHZhbGlkYXRlLmVycm9yTXNnID0gXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbC5cIiA6XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUuaXNWYWxpZCA9IHRydWVcclxuICAgIHJldHVybiB2YWxpZGF0ZTtcclxufVxyXG5cclxuY29uc3QgcGFzc3dvcmRWYWxpZCA9IChzdHI6IHN0cmluZywgbWluQ2hhcjogbnVtYmVyKTogSUVycm9yID0+IHtcclxuICAgIGxldCB2YWxpZGF0ZSA9IHtcclxuICAgICAgICBpc1ZhbGlkOiBmYWxzZSxcclxuICAgICAgICBlcnJvck1zZzogXCJcIlxyXG4gICAgfVxyXG4gICAgc3RyLmxlbmd0aCA8IG1pbkNoYXIgPyB2YWxpZGF0ZS5lcnJvck1zZyA9IFwiUGFzc3dvcmQgbXVzdCBpbmNsdWRlIDYgY2hhcmFjdGVycywgb25lIGNhcGl0YWwgbGV0dGVyLCBhbmQgYSBzcGVjaWFsIGNoYXJhY3RlciAoaS5lLiAhQCMkJV4mKilcIiA6XHJcbiAgICAgICAgc3RyLmxlbmd0aCA+IDUwID8gdmFsaWRhdGUuZXJyb3JNc2cgPSBcIlBhc3N3b3JkIG11c3QgaW5jbHVkZSA2IGNoYXJhY3RlcnMsIG9uZSBjYXBpdGFsIGxldHRlciwgYW5kIGEgc3BlY2lhbCBjaGFyYWN0ZXIuXCIgOlxyXG4gICAgICAgICAgICAhc3RyLmluY2x1ZGVzKFwiKD89LipbIUAjXFwkJVxcXiZcXCpdKVwiKSA/IHZhbGlkYXRlLmVycm9yTXNnID0gXCJQYXNzd29yZCBtdXN0IGluY2x1ZGUgNiBjaGFyYWN0ZXJzLCBvbmUgY2FwaXRhbCBsZXR0ZXIsIGFuZCBhIHNwZWNpYWwgY2hhcmFjdGVyLlwiIDpcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRlLmlzVmFsaWQgPSB0cnVlXHJcbiAgICByZXR1cm4gdmFsaWRhdGVcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFZhbGlkYXRvciA9IHsgTWluTGVuZ3RoLCBlbWFpbFZhbGlkLCBwYXNzd29yZFZhbGlkIH1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21tb24vdmFsaWRhdGlvbi50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgSUhvbWVQYWdlRW50aXR5IH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXNcIjtcclxuaW1wb3J0ICogYXMgdG9hc3RyIGZyb20gXCJ0b2FzdHJcIjtcclxuaW1wb3J0IHsgVXNlckFwaSB9IGZyb20gXCIuLi8uLi9hcGkvdXNlcnNcIjtcclxuaW1wb3J0IHsgSUxvZ2luRW50aXR5IH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXNcIjtcclxuaW1wb3J0IHsgYnJvd3Nlckhpc3RvcnkgfSBmcm9tIFwicmVhY3Qtcm91dGVyXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuLi8uLi9jb21tb24vY29tcG9uZW50cy9mb3JtXCI7XHJcblxyXG5pbnRlcmZhY2UgSUhvbWVQYWdlU3RhdGUge1xyXG4gICAgaG9tZVBhZ2VFbnRpdHk6IElIb21lUGFnZUVudGl0eTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEhvbWVQYWdlQ29udGFpbmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCBJSG9tZVBhZ2VTdGF0ZT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjb25zdHJ1Y3RvclwiKTtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaG9tZVBhZ2VFbnRpdHk6IHtcclxuICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgLy9jYWxsIEFQSVxyXG4gICAgICAgIFVzZXJBcGkuSG9tZVBhZ2UodGhpcy5zdGF0ZS5ob21lUGFnZUVudGl0eSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGhvbWVQYWdlRW50aXR5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogcmVzcG9uc2UuaXRlbS5maXJzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3ROYW1lOiByZXNwb25zZS5pdGVtLmxhc3ROYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblNhdmUoKSB7XHJcbiAgICAgICAgVXNlckFwaS5sb2dvdXRVc2VyKClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhcIllvdSBoYXZlIGJlZW4gbG9nZ2VkIG91dFwiKVxyXG4gICAgICAgICAgICAgICAgYnJvd3Nlckhpc3RvcnkucHVzaChcIi9sb2dpblwiKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgLy9vdXRwdXRcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgxPldlbGNvbWUge3RoaXMuc3RhdGUuaG9tZVBhZ2VFbnRpdHkuZmlyc3ROYW1lfSE8L2gxPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFuZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHRoaXMub25TYXZlKCkgfX1cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkxvZ291dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2ZhbHNlfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaG9tZVBhZ2UvaW5kZXgudHN4IiwiZXhwb3J0ICogZnJvbSBcIi4vYnV0dG9uXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2lucHV0XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL3Bhc3N3b3JkXCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2Ryb3Bkb3dubGlzdFwiO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vaW5kZXgudHN4IiwiaW1wb3J0IHsgSUxvZ2luRW50aXR5IH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXNcIjtcclxuaW1wb3J0IHsgSVJlZ2lzdGVyRW50aXR5IH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXNcIjtcclxuaW1wb3J0IHsgYXBpRXhlY3V0ZSB9IGZyb20gXCIuLi8uLi9hcGkvdXNlcnMvYXBpRXhlY3V0ZVwiXHJcbmltcG9ydCB7IElIb21lUGFnZUVudGl0eSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzXCJcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgYmFzZVVSTCA9IFwiaHR0cHM6Ly9wYWNvaW1hLXlwaS5henVyZXdlYnNpdGVzLm5ldC9cIjtcclxuLy9wYXRjaCBheGlvcyB0byB1c2UgYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXG4vL2h0dHBzOi8vZ2l0aHViLmNvbS9heGlvcy9heGlvcy9pc3N1ZXMvMzUwI2lzc3VlY29tbWVudC0yMjcyNzAwNDZcclxuY29uc3QgbG9naW5Vc2VyID0gKGRhdGE6IElMb2dpbkVudGl0eSk6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgICBjb25zdCBsb2dpblVSTCA9IGAke2Jhc2VVUkx9YXBpL3VzZXJzL2xvZ2luL2ZvcmNlYDtcclxuICAgIHJldHVybiBhcGlFeGVjdXRlIChsb2dpblVSTCwgXCJQT1NUXCIsIGRhdGEpXHJcbn1cclxuY29uc3QgcmVnaXN0ZXJVc2VyID0gKGRhdGE6IElSZWdpc3RlckVudGl0eSk6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgICBjb25zdCByZWdpc3RlclVSTCA9IGAke2Jhc2VVUkx9YXBpL3VzZXJzL3JlZ2lzdGVyL2VtcGxveWVyYDtcclxuICAgIHJldHVybiBhcGlFeGVjdXRlIChyZWdpc3RlclVSTCwgXCJQT1NUXCIsIGRhdGEpXHJcbn1cclxuY29uc3QgSG9tZVBhZ2UgPSAoZGF0YTogSUhvbWVQYWdlRW50aXR5KTogUHJvbWlzZTxhbnk+ID0+IHtcclxuICAgIGNvbnN0IGxvZ2dlZEluVXNlclVSTCA9IGAke2Jhc2VVUkx9YXBpL3Blb3BsZS9jdXJyZW50dXNlcmA7XHJcbiAgICByZXR1cm4gYXBpRXhlY3V0ZShsb2dnZWRJblVzZXJVUkwsIFwiR0VUXCIsIG51bGwpXHJcbn1cclxuY29uc3QgbG9nb3V0VXNlciA9ICgpOiBQcm9taXNlPGFueT4gPT4ge1xyXG4gICAgY29uc3QgbG9nb3V0VXNlclVSTCA9IGAke2Jhc2VVUkx9YXBpL3VzZXJzL2xvZ291dGA7XHJcbiAgICByZXR1cm4gYXBpRXhlY3V0ZShsb2dvdXRVc2VyVVJMLCBcIkdFVFwiLCBudWxsKTtcclxufVxyXG5leHBvcnQgY29uc3QgVXNlckFwaSA9IHtcclxuICAgIGxvZ2luVXNlciwgSG9tZVBhZ2UsIGxvZ291dFVzZXJcclxufVxyXG5leHBvcnQgY29uc3QgTmV3VXNlckFwaSA9IHtcclxuICAgIHJlZ2lzdGVyVXNlclxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBpL3VzZXJzL2luZGV4LnRzeCIsImV4cG9ydCAqIGZyb20gXCIuL2Fib3V0XCI7XHJcbmV4cG9ydCAqIGZyb20gXCIuL2hlYWRlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9yZWdpc3RlclwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9sb2dpblwiO1xyXG5leHBvcnQgKiBmcm9tIFwiLi9kYXRhRGVtb1wiXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9pbmRleC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgeyBBcHBSb3V0ZXIgfSBmcm9tIFwiLi9yb3V0ZXJcIjtcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICAgIDxBcHBSb3V0ZXIvPixcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKVxyXG4pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2luZGV4LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlLCBicm93c2VySGlzdG9yeSwgSW5kZXhSb3V0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcclxuaW1wb3J0IHsgQWJvdXRQYWdlLCBEYXRhRGVtbyB9IGZyb20gXCIuL2NvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBBcHAgfSBmcm9tIFwiLi9hcHBcIjtcclxuaW1wb3J0IHsgTG9naW5QYWdlQ29udGFpbmVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9sb2dpbi9sb2dpblBhZ2VDb250YWluZXJcIjtcclxuaW1wb3J0IHsgUmVnaXN0ZXJQYWdlQ29udGFpbmVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3RlclBhZ2VDb250YWluZXJcIjtcclxuaW1wb3J0IHsgSG9tZVBhZ2VDb250YWluZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL2hvbWVQYWdlL2luZGV4XCI7XHJcblxyXG5leHBvcnQgY29uc3QgQXBwUm91dGVyOiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8e30+ID0gKCkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJvdXRlciBoaXN0b3J5PXticm93c2VySGlzdG9yeX0+XHJcbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGNvbXBvbmVudD17QXBwfT5cclxuICAgICAgICAgICAgICAgIDxJbmRleFJvdXRlIGNvbXBvbmVudD17UmVnaXN0ZXJQYWdlQ29udGFpbmVyfSAvPlxyXG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYWJvdXRcIiBjb21wb25lbnQ9e0Fib3V0UGFnZX0gLz5cclxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL21lbWJlcmhvbWVcIiBjb21wb25lbnQ9e0hvbWVQYWdlQ29udGFpbmVyfSAvPlxyXG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvbG9naW5cIiBjb21wb25lbnQ9e0xvZ2luUGFnZUNvbnRhaW5lcn0gLz5cclxuICAgICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3JlZ2lzdGVyXCIgY29tcG9uZW50PXtSZWdpc3RlclBhZ2VDb250YWluZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9kYXRhRGVtb1wiIGNvbXBvbmVudD17RGF0YURlbW99IC8+XHJcbiAgICAgICAgICAgIDwvUm91dGU+XHJcbiAgICAgICAgPC9Sb3V0ZXI+XHJcbiAgICApXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yb3V0ZXIudHN4Il0sInNvdXJjZVJvb3QiOiIifQ==