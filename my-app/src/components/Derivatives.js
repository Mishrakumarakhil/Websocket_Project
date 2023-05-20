import React, { useEffect } from "react";
import { fetchDerivativeList } from "../actions/DerivativesAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Derivatives = () => {
    const param = useParams(); //  Get the param Id param from the URL.
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [derivativeList, errorMessage, derivativeListLoading] = useSelector((state) => [
        state.DerivativeReducer.derivativeList,
        state.DerivativeReducer.errorMessage,
        state.DerivativeReducer.derivativeListLoading,
    ]);

    useEffect(() => {
        dispatch(fetchDerivativeList(param.id));

        //Poll Derivatives api every 30 seconds.
        let dataPolling = setInterval(() => {
            dispatch(fetchDerivativeList(param.id));
        }, 30000);

        //Unmount Interval
        return () => {
            clearInterval(dataPolling);
        };
    }, []);

    return (
        <>
            <div>
                <span className="back" onClick={() => navigate(-1)}>
                    {"<- back"}
                </span>
            </div>
            {errorMessage
                ? errorMessage
                : !derivativeListLoading
                ? derivativeList.map((val, index) => (
                      <div key={"derivative" + index}>
                          {val.symbol}:{val.price ? val.price.toFixed(2) : "Loading..."}
                      </div>
                  ))
                : "Loading Data..."}
        </>
    );
};

export default Derivatives;
