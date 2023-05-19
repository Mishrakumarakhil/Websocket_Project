import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUnderLyingList } from "../actions/UnderLyingAction";
import { useNavigate } from "react-router-dom";

const UnderLying = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [underLyingListLoading, underLyingList, errorMessage] = useSelector((state) => {
        return [state.UnderLyingReducer.underLyingListLoading, state.UnderLyingReducer.underLyingList, state.UnderLyingReducer.errorMessage];
    });

    // console.log("firstlll", underLyingListLoading, underLyingList, errorMessage);

    useEffect(() => {
        dispatch(fetchUnderLyingList());
    }, []);

    const onClickHandler = (token) => {
        navigate(`/derivatives/${token}`);
    };

    return (
        <>
            {errorMessage
                ? errorMessage
                : !underLyingListLoading
                ? underLyingList.payload.map((val, index) => (
                      <div key={"underLying" + index}>
                          {val.underlying}: {val.token}
                          <button onClick={() => onClickHandler(val.token)}>{"show derivatives ->"}</button>
                      </div>
                  ))
                : "Loading Data..."}
        </>
    );
};

export default UnderLying;
