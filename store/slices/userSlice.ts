import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  profileImage: string;
  exp: number;
  coins: number;
};

export type UserSessionState = {
  user: null | User;
  theme: string; // add theme to our model - we specify the only two valid values
};

// initial state for current user session
const initialState: UserSessionState = {
  user: {
    firstName: "Henry",
    lastName: "Martinez",
    email: "henry@gmail.com",
    profileImage: require("../../assets/players/Henry.jpeg"),
    exp: 100,
    coins: 10,
  }, // user profile
  theme: "", // get local storage value for theme
};

export const userSessionSlice = createSlice({
  name: "session",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // updates user session data
    setUser: (state: UserSessionState, action: PayloadAction<User>) => {
      if (action.payload) {
        state.user = action.payload;
      }
    },

    addCoins: (state: UserSessionState, action: PayloadAction<number>) => {
      if (action.payload && state.user) {
        state.user.coins += action.payload;
      }
    },

    addExp: (state: UserSessionState, action: PayloadAction<number>) => {
      if (action.payload && state.user) {
        state.user.exp += action.payload;
      }
    },
  },
});

export const { setUser, addCoins, addExp } = userSessionSlice.actions;

// accessor for admin user
export const getUser = (state: RootState) => state.session.user;

export const getExp = (state: RootState) => state.session.user?.exp;

export const getCoins = (state: RootState) => state.session.user?.coins;

// get color theme
export const getColorTheme = (state: RootState) => state.session.theme;

export default userSessionSlice.reducer;
