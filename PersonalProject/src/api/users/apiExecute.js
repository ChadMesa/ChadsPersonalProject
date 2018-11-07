import axios from "axios";
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = [function (data, headers) {
        var str = [];
        for (var p in data)
            if (data.hasOwnProperty(p) && data[p]) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(data[p]));
            }
        return str.join("&");
    }];
export const apiExecute = (URL, action, data) => {
    switch (action) {
        case "POST":
            return axios.post(URL, data, { withCredentials: true })
                .then((response) => (response.data), (err) => {
                return (Promise.reject(err));
            })
                .catch((err) => {
                console.log("catch err", err);
                return Promise.reject(err);
            });
        case "PUT":
            return axios.put(URL, data, { withCredentials: true })
                .then((response) => (response.data), (err) => {
                return (Promise.reject(err));
            })
                .catch((err) => {
                console.log("catch err", err);
                return Promise.reject(err);
            });
        case "GET":
            return axios.get(URL, { withCredentials: true })
                .then((response) => (response.data), (err) => {
                return (Promise.reject(err));
            })
                .catch((err) => {
                console.log("catch err", err);
                return Promise.reject(err);
            });
        case "DELETE":
            return axios.delete(URL, { withCredentials: true })
                .then((response) => (response.data), (err) => {
                return (Promise.reject(err));
            })
                .catch((err) => {
                console.log("catch err", err);
                return Promise.reject(err);
            });
    }
};
//# sourceMappingURL=apiExecute.js.map