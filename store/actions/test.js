
export const SET_TEST_LOADING = 'SET_TEST_LOADING';
export const setTestLoading = () => ({
    type: SET_TEST_LOADING
});

export const SET_TEST = 'SET_TEST';
export const setTest = test => ({
    type: SET_TEST,
    test
});

export const SET_TEST_ERROR = 'SET_TEST_ERROR';
export const setTestError = error => ({
    type: SET_TEST_ERROR,
    error
});

export const executeTest = data => dispatch => {
    dispatch(setTest(data));
};