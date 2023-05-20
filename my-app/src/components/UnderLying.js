import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUnderLyingList } from "../actions/UnderLyingAction";
import { useNavigate } from "react-router-dom";
import useWebSocket from "react-use-websocket";
import { subscribe, unSubscribe } from "../WebSocket/WebSocketUtils";

const UnderLying = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // Reducer state for UnderLying
    const [underLyingListLoading, underLyingList, errorMessage] = useSelector((state) => {
        return [state.UnderLyingReducer.underLyingListLoading, state.UnderLyingReducer.underLyingList, state.UnderLyingReducer.errorMessage];
    });

    // console.log("firstlll", underLyingListLoading, underLyingList, errorMessage);

    let socketURL = `wss://prototype.sbulltech.com/api/ws`;
    const { sendJsonMessage, getWebSocket } = useWebSocket(socketURL, {
        onOpen: () => console.log("Socket connection open."),
        onClose: () => console.log("Socket connection close."),
        shouldReconnect: (closeEvent) => true,
        onMessage: (event) => {
            const response = JSON.parse(event.data);
            if (response.data_type === "quote") {
                const listObj = underLyingList.find((val) => val.token === response.payload.token);
                if (listObj) {
                    listObj.price = response.payload.price;
                }
            }
        },
    });

    useEffect(() => {
        console.log("firsthello")
        dispatch(fetchUnderLyingList());

        //Poll UnderLying api every 10 minutes.
        let dataPolling = setInterval(() => {
            console.log("firsthello")
            unSubscribe(underLyingList, sendJsonMessage);
            dispatch(fetchUnderLyingList());
        }, 600000);

        //Unmount Interval & close socket connection
        return () => {
            clearInterval(dataPolling);
            getWebSocket()?.close();
        };
    }, []);

    useEffect(() => {
        if (underLyingList.length) {
            unSubscribe(underLyingList, sendJsonMessage);
            subscribe(underLyingList, sendJsonMessage);
        }
    }, [underLyingList]);

    const onClickHandler = (token) => {
        navigate(`/derivatives/${token}`);
    };

    return (
        <>
            {errorMessage
                ? errorMessage
                : !underLyingListLoading
                ? underLyingList.map((val, index) => (
                      <div key={"underLying" + index}>
                          {val.underlying}: {val.price ? val.price.toFixed(2) : "Loading..."}
                          <button onClick={() => onClickHandler(val.token)}>{"show derivatives ->"}</button>
                      </div>
                  ))
                : "Loading Data..."}
        </>
    );
};

export default UnderLying;
