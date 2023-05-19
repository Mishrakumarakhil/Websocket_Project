import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDerivativeList } from "../actions/DerivativesAction";

const Derivatives = () => {
    const param = useParams(); //  Get the param Id param from the URL.
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDerivativeList(param.id));
    }, []);
    return (
        <>
            <div>Derivatives</div>
        </>
    );
};
export default Derivatives;
