const carBrands = [
  "Toyota",
  "Honda",
  "Nissan",
  "Mazda",
  "Mitsubishi",
  "Suzuki",
  "Isuzu",
  "Subaru",
  "BMW",
  "Mercedes-Benz",
  "Audi",
  "Volkswagen",
  "Volvo",
  "Lexus",
  "BYD",
  "MG",
  "GWM",
  "Tesla",
  "Hyundai",
  "Kia",
  "Ford",
  "Chevrolet",
  "Jeep",
  "Porsche",
  "Ferrari",
  "Lamborghini",
  "Mini",
  "Peugeot",
  "Changan",
  "Chery",
  "ORA",
  "AION",
  "Geely",
  "XPENG",
  "Zeekr",
];

const carModels = {
  Toyota: [
    "Yaris",
    "Yaris Ativ",
    "Vios",
    "Corolla Altis",
    "Corolla Cross",
    "Camry",
    "Hilux Revo",
    "Fortuner",
    "Innova Zenix",
    "Land Cruiser",
    "bZ4X",
  ],

  Honda: [
    "City",
    "City Hatchback",
    "Civic",
    "Accord",
    "HR-V",
    "CR-V",
    "WR-V",
    "BR-V",
    "Jazz",
    "Prelude",
  ],

  Nissan: ["Almera", "Kicks", "X-Trail", "Navara", "Terra", "Leaf", "Sylphy"],

  Mazda: [
    "Mazda 2",
    "Mazda 3",
    "CX-3",
    "CX-30",
    "CX-5",
    "CX-8",
    "CX-9",
    "CX-60",
    "MX-5",
  ],

  Mitsubishi: [
    "Attrage",
    "Mirage",
    "Xpander",
    "Xforce",
    "Outlander",
    "Triton",
    "Pajero Sport",
  ],

  Suzuki: ["Swift", "Celerio", "Carry", "XL7", "Jimny", "Ertiga"],

  Isuzu: ["D-Max", "MU-X"],

  Subaru: ["BRZ", "WRX", "Forester", "Outback", "XV"],

  BMW: [
    "Series 1",
    "Series 2",
    "Series 3",
    "Series 4",
    "Series 5",
    "Series 7",
    "X1",
    "X3",
    "X5",
    "X6",
    "X7",
    "iX",
    "i4",
  ],

  "Mercedes-Benz": [
    "A-Class",
    "C-Class",
    "E-Class",
    "S-Class",
    "GLA",
    "GLB",
    "GLC",
    "GLE",
    "GLS",
    "CLA",
    "CLS",
    "EQE",
    "EQS",
  ],

  Audi: [
    "A3",
    "A4",
    "A5",
    "A6",
    "A8",
    "Q3",
    "Q5",
    "Q7",
    "Q8",
    "e-tron",
    "Q4 e-tron",
  ],

  Volkswagen: [
    "Golf",
    "Polo",
    "Passat",
    "Tiguan",
    "Touareg",
    "ID.3",
    "ID.4",
    "ID. Buzz",
  ],

  Volvo: ["XC40", "XC60", "XC90", "S60", "S90", "EX30", "EX40", "EX90"],

  Lexus: ["IS", "ES", "LS", "UX", "NX", "RX", "GX", "LX", "RZ"],

  BYD: [
    "Dolphin",
    "Atto 3",
    "Atto 2",
    "Seal",
    "Sealion 6",
    "Sealion 7",
    "M6",
    "Tang",
  ],

  MG: ["MG3", "MG4", "MG5", "ZS", "HS", "Extender", "Maxus 9", "Cyberster"],

  GWM: [
    "Haval H6",
    "Haval Jolion",
    "Tank 300",
    "Tank 500",
    "Ora Good Cat",
    "Ora 07",
  ],

  Tesla: ["Model 3", "Model Y", "Model S", "Model X", "Cybertruck"],

  Hyundai: [
    "Accent",
    "Elantra",
    "Sonata",
    "Tucson",
    "Santa Fe",
    "Staria",
    "IONIQ 5",
    "IONIQ 6",
  ],

  Kia: ["Picanto", "K3", "K5", "Sportage", "Sorento", "Carnival", "EV6", "EV9"],

  Ford: ["Fiesta", "Focus", "Everest", "Ranger", "Mustang", "Mustang Mach-E"],

  Chevrolet: ["Colorado", "Trailblazer", "Captiva", "Camaro", "Corvette"],

  Jeep: ["Wrangler", "Cherokee", "Grand Cherokee", "Compass", "Gladiator"],

  Porsche: [
    "911",
    "718 Cayman",
    "718 Boxster",
    "Panamera",
    "Macan",
    "Cayenne",
    "Taycan",
  ],

  Ferrari: [
    "296 GTB",
    "Roma",
    "Portofino",
    "F8 Tributo",
    "SF90 Stradale",
    "Purosangue",
  ],

  Lamborghini: ["Huracan", "Revuelto", "Urus", "Aventador"],

  Mini: ["Cooper", "Countryman", "Clubman"],

  Peugeot: ["208", "2008", "3008", "5008", "408"],

  Changan: ["Lumin", "Deepal S07", "Deepal L07", "Deepal S05"],

  Chery: ["Tiggo 4", "Tiggo 7", "Tiggo 8", "Omoda C5", "Jaecoo 6", "Jaecoo 7"],

  ORA: ["Good Cat", "Good Cat GT", "07"],

  AION: ["Y Plus", "V", "S", "ES"],

  Geely: ["EX5", "Galaxy E5", "Coolray", "Monjaro"],

  XPENG: ["G6", "G9", "X9", "P7"],

  Zeekr: ["001", "X", "009", "7X"],
};

const carColors = {
  White: "#FFFFFF",
  Black: "#000000",
  Silver: "#C0C0C0",
  Gray: "#808080",
  DarkGray: "#4A4A4A",
  LightGray: "#D3D3D3",
  Red: "#FF0000",
  DarkRed: "#8B0000",
  Blue: "#0000FF",
  DarkBlue: "#00008B",
  LightBlue: "#ADD8E6",
  NavyBlue: "#000080",
  Brown: "#8B4513",
  DarkBrown: "#5C4033",
  Beige: "#F5F5DC",
  Cream: "#FFFDD0",
  Gold: "#FFD700",
  Green: "#008000",
  DarkGreen: "#006400",
  LightGreen: "#90EE90",
  Yellow: "#FFFF00",
  Orange: "#FFA500",
  Purple: "#800080",
  Pink: "#FFC0CB",
  Bronze: "#CD7F32",
  Champagne: "#F7E7CE",
  PearlWhite: "#F8F6F0",
  MetallicSilver: "#A8A9AD",
  MetallicGray: "#717171",
  MetallicBlue: "#4682B4",
  MatteBlack: "#282828",
  MatteGray: "#6E6E6E",
  MatteWhite: "#E8E8E8",
  TwoTone: "#808080",
  Other: "#CCCCCC",
};

module.exports = {
  carBrands,
  carModels,
  carColors,
};
