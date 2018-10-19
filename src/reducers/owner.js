import { OWNER_NAME } from "../actions";

const defaultStateOwner = {
  ownerName: ""
};

const ownerNameReducer = (state = defaultStateOwner, action) => {
  switch (action.type) {
    case OWNER_NAME:
      return {
        ...state,
        ownerName: action.payload.ownerName
      };
    default:
      return state;
  }
};

export default ownerNameReducer;
