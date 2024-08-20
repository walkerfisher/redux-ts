import { combineReducers } from "redux";
import reducer from "./repositoriesReducer";

const reducers = combineReducers({
  repositories: reducer,
});

export default reducers;

//Assign state type for components to access via useSelector()
export type RootState = ReturnType<typeof reducers>;