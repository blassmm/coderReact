const products = [
  {
    id: "Df2121",
    name: "Remera Roja",
    description: "",
    stock: 10,
    price: 2000,
    image: "/img/remera.png",
    category: "remeras",
  },
  {
    id: "Df2233",
    name: "Gorra Nike",
    description: "",
    stock: 2,
    price: 1000,
    image: "/img/gorra.jpg",
    category: "gorras",
  },
  {
    id: "Mn2521",
    name: "Zapatillas",
    description: "",
    stock: 5,
    price: 5000,
    image: "/img/zapas.png",
    category: "zapatillas",
  },
];

const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export { getProducts }