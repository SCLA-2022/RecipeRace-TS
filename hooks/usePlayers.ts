import React from "react";
import { User } from "../store/slices/userSlice";

const hoyt = require("../assets/players/Hoyt.jpeg");
const ivy = require("../assets/players/Ivy.jpeg");
const kory = require("../assets/players/Kory.jpeg");
const moshe = require("../assets/players/Moshe.jpeg");
const arnaldo = require("../assets/players/armando.png");

export default function usePlayers() {
  const [players, setPlayers] = React.useState<User[]>([
    {
      email: '', username: '', beginnerXp: 100, intermediate: 100, advanced:100,
      firstName: "Hector",
      lastName: "Cena",
      exp: 1260,
      coins: 120,
      profileImage: require("../assets/players/logan.jpeg"),
      color: "#FEAD62",
      badges: [
        {
          id: 1,
          image: require("../assets/badges/fifthBadge.png"),
        },

        {
          id: 2,
          image: require("../assets/badges/fourthBadge.png"),
        },
        {
          id: 3,
          image: require("../assets/badges/thirdBadge.png"),
        },
        {
          id: 4,
          image: require("../assets/badges/secondBadge.png"),
        },
        {
          id: 5,
          image: require("../assets/badges/sixthBadge.png"),
        },
        {
          id: 6,
          image: require("../assets/badges/firstBadge.png"),
        },
      ],
    },
    {
      email: '', username: '', beginnerXp: 100, intermediate: 100, advanced:100,
      firstName: "Armando",
      lastName: "Hane",
      exp: 950,
      coins: 90,
      profileImage: arnaldo,
      color: "black",
      badges: [
        {
          id: 1,
          image: require("../assets/badges/fifthBadge.png"),
        },

        {
          id: 2,
          image: require("../assets/badges/fourthBadge.png"),
        },
      ],
    },
    {
      email: '', username: '', beginnerXp: 100, intermediate: 100, advanced:100,
      firstName: "Jason",
      lastName: "Johnson",
      exp: 990,
      coins: 89,
      profileImage: hoyt,
      color: "black",
      badges: [
        {
          id: 1,
          image: require("../assets/badges/fifthBadge.png"),
        },

        {
          id: 2,
          image: require("../assets/badges/fourthBadge.png"),
        },
      ],
    },
    {
      email: '', username: '', beginnerXp: 100, intermediate: 100, advanced:100,
      firstName: "Drew",
      lastName: "Botsford",
      exp: 950,
      coins: 85,
      profileImage: kory,
      color: "black",
      badges: [
        {
          id: 1,
          image: require("../assets/badges/fifthBadge.png"),
        },

        {
          id: 2,
          image: require("../assets/badges/fourthBadge.png"),
        },
      ],
    },
    {
      email: '', username: '', beginnerXp: 100, intermediate: 100, advanced:100,
      firstName: "Stephanie",
      lastName: "Gerhold",
      exp: 760,
      coins: 65,
      profileImage: ivy,
      color: "black",
      badges: [
        {
          id: 1,
          image: require("../assets/badges/fifthBadge.png"),
        },
      ],
    },
    {
      email: '', username: '', beginnerXp: 100, intermediate: 100, advanced:100,
      firstName: "Ricardo",
      lastName: "Baumbach",
      exp: 580,
      coins: 55,
      profileImage: moshe,
      color: "black",
      badges: [
        {
          id: 1,
          image: require("../assets/badges/fifthBadge.png"),
        },
      ],
    },
  ]);

  return { players };
}
