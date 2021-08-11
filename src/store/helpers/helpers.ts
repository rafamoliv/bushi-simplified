// creating my action types
export const ActionTypes = {
  ANIMES_LIST_FAIL: "ANIMES_LIST_FAIL",
  ANIMES_LIST_LOADING: "ANIMES_LIST_LOADING",
  ANIMES_LIST_SUCCESS: "ANIMES_LIST_SUCCESS",
};

// creating my action creators
export const ActionCreators = {
  animesListFail: (error: boolean) => ({type: ActionTypes.ANIMES_LIST_FAIL, error}),
  animesListLoading: (loading: boolean) => ({type: ActionTypes.ANIMES_LIST_LOADING, loading}),
  animesListSuccess: (animes: Array<object>) => ({type: ActionTypes.ANIMES_LIST_SUCCESS, animes})
}