import React from "react";

const henry = require("../assets/players/Henry.jpeg")
const hoyt = require("../assets/players/Hoyt.jpeg")
const ivy =require("../assets/players/Ivy.jpeg")
const kory =require("../assets/players/Kory.jpeg")
const logan =require("../assets/players/logan.jpeg")
const moshe =require("../assets/players/Moshe.jpeg")
const arnaldo =require("../assets/players/Arnaldo.jpeg")

export default function usePlayers() {
  const [players, setPlayers] = React.useState([
    {
      firstName: "Logan",
      lastName: "Cena",
      exp: 1260,
      image: logan,
      color: "#349D22",
    },
    {
      firstName: "Henry",
      lastName: "Martinez",
      exp: 1110,
      image: henry,
      color: "#FFE28B",
    },
    {
      firstName: "Arnaldo",
      lastName: "Hane",
      exp: 1050,
      image: arnaldo,
      color: "#D30101",
    },
    {
      firstName: "Hoyt",
      lastName: "Johnson",
      exp: 990,
      image: hoyt,
      color: "black",
    },
    {
      firstName: "Kory",
      lastName: "Botsford",
      exp: 950,
      image: kory,
      color: "black",
    },
    {
      firstName: "Ivy",
      lastName: "Gerhold",
      exp: 760,
      image: ivy,
      color: "black",
    },
    {
      firstName: "Moshe",
      lastName: "Baumbach",
      exp: 580,
      image: moshe,
      color: "black",
    },
  ]);

  return { players };
}
