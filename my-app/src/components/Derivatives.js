import React, { useEffect } from "react";
import { fetchDerivativeList } from "../actions/DerivativesAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useWebSocket from "react-use-websocket";
import { subscribe, unSubscribe } from "../WebSocket/WebSocketUtils";

const Derivatives = () => {
    const param = useParams(); //  Get the param Id param from the URL.
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [derivativeList, errorMessage, derivativeListLoading] = useSelector((state) => [
        state.DerivativeReducer.derivativeList,
        state.DerivativeReducer.errorMessage,
        state.DerivativeReducer.derivativeListLoading,
    ]);

    let socketURL = `wss://prototype.sbulltech.com/api/ws`;
    const { sendJsonMessage, getWebSocket } = useWebSocket(socketURL, {
        onOpen: () => console.log("WebSocket connection opened."),
        onClose: () => console.log("WebSocket connection closed."),
        shouldReconnect: (closeEvent) => true,
        onMessage: (event) => {
            console.log("first", event);
            const response = JSON.parse(event.data);
            if (response.data_type === "quote") {
                let findObj = derivativeList.find((val) => val.token === response.payload.token);
                if (findObj) {
                    findObj.price = response.payload.price;
                }
            }
        },
    });

    useEffect(() => {
        dispatch(fetchDerivativeList(param.id));

        //Poll Derivatives api every 30 seconds.
        let dataPolling = setInterval(() => {
            dispatch(fetchDerivativeList(param.id));
        }, 30000);

        //Unmount Interval & close socket connection
        return () => {
            clearInterval(dataPolling);
            getWebSocket()?.close();
        };
    }, []);

    useEffect(() => {
        if (derivativeList.length) {
            unSubscribe(derivativeList, sendJsonMessage);
            subscribe(derivativeList, sendJsonMessage);
        }
    }, [derivativeList]);

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
