const initialState = {
    underLyingList: [],
    underLyingListLoading: true,
    errorMessage: "",
};

const UnderLyingReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_UNDERLYING_LIST_REJECTED": {
            return (state = {
                ...state,
                underLyingListLoading: false,
                underLyingList: {},
                errorMessage: action.error,
            });
        }
        case "FETCH_UNDERLYING_LIST_FULFILLED": {
            return (state = {
                ...state,
                underLyingListLoading: false,
                underLyingList: action.payload.payload,
            });
        }

        default:
            return state;
    }
};
export default UnderLyingReducer;
