import vieuxPort from "../Assets/activites/4_small/reno-laithienne-QUgJhdY5Fyk-unsplash.jpg";
import fort from "../Assets/activites/4_small/paul-hermann-QFTrLdQIRhI-unsplash.jpg";
import iles from "../Assets/activites/4_small/kevin-hikari-rV_Qd1l-VXg-unsplash.jpg";
import calanques from "../Assets/activites/4_small/kilyan-sockalingum-NR8-cBCN3aI-unsplash.jpg";
import notreDame from "../Assets/activites/4_small/florian-wehde-xW9e8gdotxI-unsplash.jpg";
import parc from "../Assets/activites/4_small/lena-paulin-wH2-EJoDcV0-unsplash.jpg";

export const activities = [
  {
    name: "Vieux port",
    picture: vieuxPort,
    gridSize: "row-span-6",
    id: 1,
  },

  {
    name: "Fort de Pomègues",
    picture: fort,
    gridSize: "row-span-4",
    id: 2,
  },

  {
    name: "Îles du Frioul",
    picture: iles,
    gridSize: "row-span-2",
    id: 3,
  },

  {
    name: "Parc national des Calanques",
    picture: calanques,
    gridSize: "row-span-6",
    id: 4,
  },

  {
    name: "Notre-Dame-de-la-Garde",
    picture: notreDame,
    gridSize: "row-span-3",
    id: 5,
  },

  {
    name: "Parc Longchamp",
    picture: parc,
    gridSize: "row-span-3",
    id: 6,
  },
];
