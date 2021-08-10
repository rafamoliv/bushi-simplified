export const ActionTypes = {
  ANIMES_LIST_FAIL: "ANIMES_LIST_FAIL",
  ANIMES_LIST_LOADING: "ANIMES_LIST_LOADING",
  ANIMES_LIST_SUCCESS: "ANIMES_LIST_SUCCESS",
};

export const ActionCreators = {
  animesListFail: (payload) => ({ type: ActionTypes.ANIMES_LIST_FAIL, payload }),
  animesListLoading: (payload) => ({ type: ActionTypes.ANIMES_LIST_LOADING, payload }),
  animesListSuccess: (payload) => ({ type: ActionTypes.ANIMES_LIST_SUCCESS, payload }),
};
