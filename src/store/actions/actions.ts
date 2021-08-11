import api from "~/services/api";
import { ActionCreators } from "~/store/helpers/helpers";
import { action } from "~/types/redux";

// get api data
export const GetAnimesData = (url: string) => async (dispatch: action) => {
        try {
            dispatch(ActionCreators.animesListLoading(false));
        
            const response = await api.get(url);
        
            dispatch(ActionCreators.animesListSuccess(response.data));
          } catch (error) {
            dispatch(ActionCreators.animesListFail(true));
          }
    };
