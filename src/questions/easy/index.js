import appleImg from "../../assets/apple.jpg";
import pepsiImg from "../../assets/pepsi.jpg";
import mcdonaldsImg from "../../assets/mcdonalds.jpg";
import lacosteImg from "../../assets/lacoste.jpg";
import dcImg from "../../assets/dc.jpg";
import mercedesImg from "../../assets/mercedes.jpg";
import carrefourImg from "../../assets/carrefour.jpg";
import audiImg from "../../assets/audi.jpg";

export const questions = [
  {
    id: 0,
    img: appleImg,
    options: [
      { optionOne: "MacBook", isCorrect: false },
      { optionTwo: "Apple", isCorrect: true },
      { optionThree: "Nike", isCorrect: false },
    ],
  },
  {
    id: 1,
    img: pepsiImg,
    options: [
      { optionOne: "Pepsi", isCorrect: true },
      { optionOne: "Sprite", isCorrect: false },
      { optionOne: "Coca Cola", isCorrect: false },
    ],
  },
  {
    id: 2,
    img: mcdonaldsImg,
    options: [
      { optionOne: "Mc Donaltz", isCorrect: false },
      { optionTwo: "Burger King", isCorrect: false },
      { optionThree: "Mc Donalds", isCorrect: true },
    ],
  },
  {
    id: 3,
    img: lacosteImg,
    options: [
      { optionOne: "Lacoste", isCorrect: true },
      { optionTwo: "Jacaré", isCorrect: false },
      { optionThree: "Lacuste", isCorrect: false },
    ],
  },
  {
    id: 4,
    img: dcImg,
    options: [
      { optionOne: "DC", isCorrect: false },
      { optionTwo: "DC Comics", isCorrect: false },
      { optionThree: "DC Shoes", isCorrect: true },
    ],
  },
  {
    id: 5,
    img: mercedesImg,
    options: [
      { optionOne: "Mercedes", isCorrect: true },
      { optionTwo: "Mercedez", isCorrect: false },
      { optionThree: "Mercado", isCorrect: false },
    ],
  },
  {
    id: 6,
    img: carrefourImg,
    options: [
      { optionOne: "Atacadão", isCorrect: false },
      { optionTwo: "Carrefour", isCorrect: true },
      { optionThree: "Tenda", isCorrect: false },
    ],
  },
  {
    id: 7,
    img: audiImg,
    options: [
      { optionOne: "Olímpiadas", isCorrect: false },
      { optionTwo: "Olympikus", isCorrect: false },
      { optionThree: "Audi", isCorrect: true },
    ],
  },
];
