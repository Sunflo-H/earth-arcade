import { RootState } from "@/app/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type GameState = {
  isGameStart: boolean;
  time: number;
  category: string;
};

const initialState: GameState = {
  isGameStart: false,
  time: 3,
  category: "new",
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    chageGameStartState: (state) => {
      state.isGameStart = !state.isGameStart;
    },
    chageGameTime: (state, action: PayloadAction<number>) => {
      state.time = action.payload;
    },
  },
});

export const { chageGameStartState, chageGameTime } = gameSlice.actions;
export const selectGame = (state: RootState) => {
  return state.gameReducer;
  // return {
  //   isGameStart: state.gameReducer.isGameStart, // gameReducer === store에서 import 한 gameSlice.reducer
  //   time: state.gameReducer.time,
  //   category: state.gameReducer.category,
  // };
};
export default gameSlice.reducer;
