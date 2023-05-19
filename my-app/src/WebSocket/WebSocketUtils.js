export const unSubscribe = (list) => {
    let tokens = list.map((val) => val.token);
    let unSubscribeMessage = {
        msg_command: "unsubscribe",
        data_type: "quote",
        tokens,
    };
};

export const subscribe = (list) => {
    let tokens = list.map((val) => val.token);
    const subscribeMessage = {
        msg_command: "subscribe",
        data_type: "quote",
        tokens,
    };
};
