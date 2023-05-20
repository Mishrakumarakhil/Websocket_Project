export const unSubscribe = (list, func) => {
    let tokens = list.map((val) => val.token);
    let unSubscribeMessage = {
        msg_command: "unsubscribe",
        data_type: "quote",
        tokens,
    };
    func(unSubscribeMessage);
};

export const subscribe = (list, func) => {
    let tokens = list.map((val) => val.token);
    const subscribeMessage = {
        msg_command: "subscribe",
        data_type: "quote",
        tokens,
    };
    func(subscribeMessage);
};
