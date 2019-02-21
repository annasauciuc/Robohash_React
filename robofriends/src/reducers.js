import { CHANGE_SEARCH_FIELD } from "./constants.js";
const initialStateSearch = {
  searchField: ""
};

export const searchRobots = (state = initialStateSearch, action = {}) => {
    console.log('action.type :', action.type);
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};
