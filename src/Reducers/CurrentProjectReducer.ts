import { AnyAction } from "redux";
import { GET_PROJECT } from "../Actions/Constants";
import { ProjectType } from "../Store/ProjectTypes";

const initialState: ProjectType = {
    id: -1,
    title: "",
    started: new Date()
}
const currentProjectReducer = (state = initialState, action: AnyAction) => {
    
    switch(action.type){
        case GET_PROJECT:
            return action.payload;
        default:
             return state;
    }
}
export default currentProjectReducer;