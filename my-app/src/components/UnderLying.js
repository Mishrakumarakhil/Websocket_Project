import React, { useEffect } from "react";
import { fetchUnderLyingList } from "../actions/UnderLyingAction";
import { useDispatch } from "react-redux";

const UnderLying = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUnderLyingList());
    }, []);
    return (
        <>
            <div>UnderLying</div>
        </>
    );
};
export default UnderLying;
