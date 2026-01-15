const products = [
  // STRAIGHT HAIR (5 products)
  {
    id: 1,
    name: "Brazilian Straight Hair",
    price: 120,
    description: "100% Brazilian virgin hair, 3 bundles + closure",
    image: require("../asset/images/straight1.jpeg").default|| require("../asset/images/straight1.jpeg"),
    category: "straight",
    length: "18-22 inches",
    rating: 4.8,
    stock: 15
  },
  {
    id: 2,
    name: "Peruvian Straight Hair",
    price: 140,
    description: "Premium Peruvian straight hair, silky smooth texture",
    image: require("../asset/images/straight2.jpeg").default || require("../asset/images/straight2.jpeg"),
    category: "straight",
    length: "20-24 inches",
    rating: 4.9,
    stock: 12
  },
  {
    id: 3,
    name: "Malaysian Straight Hair",
    price: 135,
    description: "Luxury Malaysian straight extensions with natural shine",
    image: require("../asset/images/straight3.jpeg").default || require("../asset/images/straight3.jpeg"),
    category: "straight",
    length: "18-26 inches",
    rating: 4.7,
    stock: 18
  },
  {
    id: 4,
    name: "Indian Straight Hair",
    price: 125,
    description: "Soft Indian straight hair, perfect for daily wear",
    image: require("../asset/images/straight4.jpeg").default || require("../asset/images/straight4.jpeg"),
    category: "straight",
    length: "16-20 inches",
    rating: 4.6,
    stock: 20
  },
  {
    id: 5,
    name: "Mongolian Straight Hair",
    price: 155,
    description: "Thick Mongolian straight bundles, great volume",
    image: require("../asset/images/straight5.jpeg").default || require("../asset/images/straight5.jpeg"),
    category: "straight",
    length: "22-26 inches",
    rating: 4.9,
    stock: 10
  },

  // BODY WAVE (4 products)
  {
    id: 6,
    name: "Brazilian Body Wave",
    price: 130,
    description: "Natural Brazilian body wave, beautiful loose waves",
    image: require("../asset/images/bodyWave1.jpeg").default || require("../asset/images/bodyWave1.jpeg"),
    category: "body-wave",
    length: "18-22 inches",
    rating: 4.7,
    stock: 14
  },
  {
    id: 7,
    name: "Peruvian Body Wave",
    price: 145,
    description: "Premium Peruvian body wave, natural black color",
    image: require("../asset/images/bodyWave2.jpeg").default || require("../asset/images/bodyWave2.jpeg"),
    category: "body-wave",
    length: "20-24 inches",
    rating: 4.8,
    stock: 16
  },
  {
    id: 8,
    name: "Malaysian Body Wave",
    price: 150,
    description: "Luxury Malaysian body wave blend",
    image: require("../asset/images/bodyWave3.jpeg").default || require("../asset/images/bodyWave3.jpeg"),
    category: "body-wave",
    length: "18-26 inches",
    rating: 4.9,
    stock: 11
  },
  {
    id: 9,
    name: "Indian Body Wave",
    price: 128,
    description: "Soft Indian body wave with closure",
    image: require("../asset/images/bodyWave4.jpeg").default || require("../asset/images/bodyWave4.jpeg"),
    category: "body-wave",
    length: "16-20 inches",
    rating: 4.6,
    stock: 19
  },

  // CURLY HAIR (4 products)
  {
    id: 10,
    name: "Brazilian Curly Hair",
    price: 160,
    description: "100% Brazilian curly hair, tight natural curls",
    image: require("../asset/images/curly1.jpeg").default || require("../asset/images/curly1.jpeg"),
    category: "curly",
    length: "18-22 inches",
    rating: 4.9,
    stock: 13
  },
  {
    id: 11,
    name: "Peruvian Curly Hair",
    price: 165,
    description: "Premium Peruvian curly extensions",
    image: require("../asset/images/curly2.jpeg").default || require("../asset/images/curly2.jpeg"),
    category: "curly",
    length: "20-24 inches",
    rating: 4.8,
    stock: 15
  },
  {
    id: 12,
    name: "Malaysian Curly Hair",
    price: 170,
    description: "Luxury Malaysian curly blend",
    image: require("../asset/images/curly3.jpeg").default   || require("../asset/images/curly3.jpeg"),
    category: "curly",
    length: "18-26 inches",
    rating: 4.7,
    stock: 12
  },
  {
    id: 13,
    name: "Indian Curly Hair",
    price: 155,
    description: "Soft Indian curly hair with natural texture",
    image: require("../asset/images/curly4.jpeg").default  || require("../asset/images/curly4.jpeg"),
    category: "curly",
    length: "16-20 inches",
    rating: 4.6,
    stock: 17
  },

  // DEEP WAVE (2 products)
  {
    id: 14,
    name: "Brazilian Deep Wave",
    price: 140,
    description: "Brazilian deep wave hair, defined wave pattern",
    image: require("../asset/images/deepWave1.jpeg").default || require("../asset/images/deepWave1.jpeg"),
    category: "deep-wave",
    length: "18-22 inches",
    rating: 4.8,
    stock: 14
  },
  {
    id: 15,
    name: "Peruvian Deep Wave",
    price: 150,
    description: "Premium Peruvian deep wave extensions",
    image: require("../asset/images/deepWave2.jpeg").default || require("../asset/images/deepWave2.jpeg"),
    category: "deep-wave",
    length: "20-24 inches",
    rating: 4.7,
    stock: 16
  },

  // KINKY STRAIGHT (2 products)
  {
    id: 16,
    name: "Brazilian Kinky Straight",
    price: 150,
    description: "Brazilian kinky straight bundles, natural texture",
    image: require("../asset/images/kinky1.jpeg").default || require("../asset/images/kinky1.jpeg"),
    category: "kinky-straight",
    length: "18-22 inches",
    rating: 4.8,
    stock: 15
  },
  {
    id: 17,
    name: "Peruvian Kinky Straight",
    price: 160,
    description: "Premium Peruvian kinky straight hair",
    image: require("../asset/images/kinky2.jpeg").default || require("../asset/images/kinky2.jpeg"),
    category: "kinky-straight",
    length: "20-24 inches",
    rating: 4.9,
    stock: 11
  }
];

export default products;