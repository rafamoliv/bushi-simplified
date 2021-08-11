import { ActionTypes } from "~/store/helpers/helpers";

// reducer success data
export function animesListSuccess(state = [], action: any) {
  switch (action.type) {
    case ActionTypes.ANIMES_LIST_SUCCESS:
      return action.animes.data;

    default:
      return state;
  }
}

// reducer error data
export function animesListFail(state = false, action: any) {
  switch (action.type) {
    case ActionTypes.ANIMES_LIST_FAIL:
      return action.error;

    default:
      return state;
  }
}

// reducer loading data
export function animesListLoading(state = false, action: any) {
  switch (action.type) {
    case ActionTypes.ANIMES_LIST_LOADING:
      return action.loading;

    default:
      return state;
  }
}
