// import api
import api from "~/services/api";

// import my Action Creators
import { ActionCreators } from "../helpers/helpers";

export const GetAnimesList = (item) => async (dispatch) => {
  try {
    dispatch(ActionCreators.animesListLoading());

    const { data } = await api.get(`anime`);

    dispatch(ActionCreators.animesListSuccess(data));
  } catch (error) {
    dispatch(ActionCreators.animesListFail());
  }
};
