import axios from "axios";

export const fetchUnderLyingList = () => {
    return (dispatch) => {
        let url = `https://prototype.sbulltech.com/api/underlyings`;

        axios({
            method: "get",
            url,
        })
            .then((res) => {
                dispatch({
                    type: "FETCH_UNDERLYING_LIST_FULFILLED",
                    payload: res.data,
                });
            })
            .catch((err) => {
                dispatch({
                    type: "FETCH_UNDERLYING_LIST_REJECTED",
                    error: err.err_msg,
                });
            });

       
    };
};
