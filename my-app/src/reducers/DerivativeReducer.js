const initialState = {
    derivativeList: [],
    derivativeListLoading: true,
    errorMessage: "",
};

const DerivativeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_DERIVATIVE_LIST_REJECTED": {
            return (state = {
                ...state,
                derivativeListLoading: false,
                derivativeList: {},
                errorMessage: action.error,
            });
        }
        case "FETCH_DERIVATIVE_LIST_FULFILLED": {
            return (state = {
                ...state,
                derivativeListLoading: false,
                derivativeList: action.payload,
            });
        }

        default:
            return state;
    }
};
export default DerivativeReducer;
