// import api
import api from "~/services/api";

// import my Action Creators
import { ActionCreators } from "../helpers/helpers";

export const GetAnimesList = (item) => async (dispatch) => {
  try {
    dispatch(ActionCreators.animesListLoading());

    const { data } = await api.get(`?page[limit]=10&page[offset]=0`);

    dispatch(ActionCreators.animesListSuccess(data));
  } catch (error) {
    dispatch(ActionCreators.animesListFail());
  }
};
