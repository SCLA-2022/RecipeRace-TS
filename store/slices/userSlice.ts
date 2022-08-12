import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ImageSourcePropType } from "react-native";
import { RootState } from "../store";

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  profileImage: ImageSourcePropType;
  exp: number;
  coins: number;
  username: string;
  beginnerXp: number;
  intermediate: number;
  advanced: number;
  color: string;
  badges: {
    id: number;
    image: ImageSourcePropType;
  }[];
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
    profileImage: require("../../assets/players/chef.png"),
    coins: 100,
    username: "HenryChef",
    exp: 1000,
    beginnerXp: 62,
    intermediate: 21,
    advanced: 0,
    color: "black",
    badges: [
      {
        id: 1,
        image: require("../../assets/badges/fifthBadge.png"),
      },

      {
        id: 2,
        image: require("../../assets/badges/fourthBadge.png"),
      },

      {
        id: 3,
        image: require("../../assets/badges/secondBadge.png"),
      },
    ],
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

    addBadge: (
      state: UserSessionState,
      action: PayloadAction<ImageSourcePropType>
    ) => {
      if (action.payload && state.user) {
        state.user.badges.push({
          id: state.user.badges.length + 4,
          image: action.payload,
        });
      }
    },
  },
});

export const { setUser, addCoins, addExp, addBadge } = userSessionSlice.actions;

// accessor for admin user
export const getUser = (state: RootState) => state.session.user;

export const getExp = (state: RootState) => state.session.user?.exp;

export const getCoins = (state: RootState) => state.session.user?.coins;

// get color theme
export const getColorTheme = (state: RootState) => state.session.theme;

export default userSessionSlice.reducer;
