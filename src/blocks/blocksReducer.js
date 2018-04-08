const initialState = {
  latest: null,
};

const blocksReducer = (state = initialState, action) => {
  /*
   * Tracks latest block and blockheaders
   */

  switch (action.type) {
    case "BLOCK_RECEIVED":
      return {
        ...state,
        latest: action.blockHeader.number,
        [action.blockHeader.number]: action.blockHeader,
      };
  }

  return state;
};

export default blocksReducer;
