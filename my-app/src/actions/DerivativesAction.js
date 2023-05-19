import axios from "axios";

export const fetchDerivativeList = (id) => {
    return (dispatch) => {
        let url = `https://prototype.sbulltech.com/api/derivatives/${id}`;

        axios({
            method: "get",
            url,
        })
            .then((res) => {
                dispatch({
                    type: "FETCH_DERIVATIVE_LIST_FULFILLED",
                    payload: res.data,
                });
            })
            .catch((err) => {
                dispatch({
                    type: "FETCH_DERIVATIVE_LIST_REJECTED",
                    error: err.err_msg,
                });
            });

       
    };
};
