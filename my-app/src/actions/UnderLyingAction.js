import axios from "axios";
export const fetchUnderLyingList = () => {
    let url = `https://prototype.sbulltech.com/api/underlyings`;
    let res = axios({
        method: "get",
        url,
    })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            return err;
        });
    return {
        type: "FETCH_UNDERLYING_LIST",
        payload: res,
    };
};
