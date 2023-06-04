const queryProcessor = require("../utils/connection");

const agricultureData = [
  {
    value: "Cargill",
    id: 1,
    rating: 5,
    cost: 364,
    type: "agriculture",
  },
  {
    value: "Archer Daniels",
    id: 2,
    rating: 5,
    cost: 776,
    type: "agriculture",
  },
  {
    value: "FMC Corp",
    id: 3,
    rating: 1,
    cost: 803,
    type: "agriculture",
  },
  {
    value: "Corteva",
    id: 4,
    rating: 3,
    cost: 900,
    type: "agriculture",
  },
  {
    value: "UPL",
    id: 5,
    rating: 5,
    cost: 256,
    type: "agriculture",
  },
  {
    value: "Bunge",
    id: 6,
    rating: 5,
    cost: 649,
    type: "agriculture",
  },
  {
    value: "Deere & Co",
    id: 7,
    rating: 4,
    cost: 108,
    type: "agriculture",
  },
  {
    value: "AgFunder",
    id: 8,
    rating: 3,
    cost: 880,
    type: "agriculture",
  },
  {
    value: "Coromandel Int Ltd",
    id: 9,
    rating: 1,
    cost: 729,
    type: "agriculture",
  },
  {
    value: "Godrej Agrovet",
    id: 10,
    rating: 3,
    cost: 887,
    type: "agriculture",
  },
  {
    value: "Blume Venture",
    id: 11,
    rating: 4,
    cost: 209,
    type: "agriculture",
  },
  {
    value: "Omidyar Network",
    id: 12,
    rating: 1,
    cost: 569,
    type: "agriculture",
  },
  {
    value: "Wilmar Int",
    id: 13,
    rating: 1,
    cost: 430,
    type: "agriculture",
  },
  {
    value: "Aavishkaar Venture",
    id: 14,
    rating: 4,
    cost: 749,
    type: "agriculture",
  },
  {
    value: "Indigram Labs",
    id: 15,
    rating: 2,
    cost: 701,
    type: "agriculture",
  },

  {
    value: "Orios Venture",
    id: 16,
    rating: 1,
    cost: 828,
    type: "agriculture",
  },
];

const realEstateData = [
  {
    value: "Blackstone",
    id: 1,
    rating: 4,
    cost: 367,
    type: "realEstate",
  },
  {
    value: "Brookfield",
    id: 2,
    rating: 5,
    cost: 926,
    type: "realEstate",
  },
  {
    value: "Starwood Cap",
    id: 3,
    rating: 5,
    cost: 857,
    type: "realEstate",
  },
  {
    value: "ESR Group",
    id: 4,
    rating: 2,
    cost: 949,
    type: "realEstate",
  },
  {
    value: "GLP",
    id: 5,
    rating: 1,
    cost: 256,
    type: "realEstate",
  },
  {
    value: "Carlyle Group",
    id: 6,
    rating: 5,
    cost: 865,
    type: "realEstate",
  },
  {
    value: "BentallGreenOak",
    id: 7,
    rating: 5,
    cost: 686,
    type: "realEstate",
  },
  {
    value: "Gaw Capital",
    id: 8,
    rating: 1,
    cost: 594,
    type: "realEstate",
  },
  {
    value: "Rockpoint Group",
    id: 9,
    rating: 1,
    cost: 700,
    type: "realEstate",
  },
  {
    value: "KKR",
    id: 10,
    rating: 4,
    cost: 240,
    type: "realEstate",
  },
  {
    value: "Angelo Gordon",
    id: 11,
    rating: 3,
    cost: 203,
    type: "realEstate",
  },
  {
    value: "EQT Exeter",
    id: 12,
    rating: 3,
    cost: 637,
    type: "realEstate",
  },
  {
    value: "Bain Capital",
    id: 13,
    rating: 2,
    cost: 890,
    type: "realEstate",
  },
  {
    value: "Hines",
    id: 14,
    rating: 2,
    cost: 197,
    type: "realEstate",
  },
  {
    value: "TPG",
    id: 15,
    rating: 2,
    cost: 797,
    type: "realEstate",
  },
  {
    value: "Gaw Capital",
    id: 16,
    rating: 5,
    cost: 814,
    type: "realEstate",
  },
];

const stocksData = [
  {
    value: "Bajaj Finserv",
    id: 1,
    rating: 3,
    cost: 1456,
    type: "stocks",
  },
  {
    value: "HDFC AMC",
    id: 2,
    rating: 3,
    cost: 1961,
    type: "stocks",
  },
  {
    value: "AB Capital",
    id: 3,
    rating: 3,
    cost: 172,
    type: "stocks",
  },
  {
    value: "IIFL Finance",
    id: 4,
    rating: 2,
    cost: 473,
    type: "stocks",
  },
  {
    value: "Nippon",
    id: 5,
    rating: 2,
    cost: 247,
    type: "stocks",
  },
  {
    value: "Capri Global",
    id: 6,
    rating: 4,
    cost: 812,
    type: "stocks",
  },
  {
    value: "CAMS",
    id: 7,
    rating: 1,
    cost: 706,
    type: "stocks",
  },
  {
    value: "ABSL AMC",
    id: 8,
    rating: 4,
    cost: 900,
    type: "stocks",
  },
  {
    value: "UTI AMC",
    id: 9,
    rating: 3,
    cost: 2195,
    type: "stocks",
  },
  {
    value: "JM Financial",
    id: 10,
    rating: 5,
    cost: 358,
    type: "stocks",
  },
  {
    value: "Religare Enterp",
    id: 11,
    rating: 4,
    cost: 709,
    type: "stocks",
  },
  {
    value: "Authum Invest",
    id: 12,
    rating: 3,
    cost: 71,
    type: "stocks",
  },
  {
    value: "Anand Rathi",
    id: 13,
    rating: 3,
    cost: 165,
    type: "stocks",
  },
  {
    value: "ISL",
    id: 14,
    rating: 3,
    cost: 282,
    type: "stocks",
  },
  {
    value: "Capital India",
    id: 15,
    rating: 4,
    cost: 939,
    type: "stocks",
  },
  {
    value: "Max India",
    id: 16,
    rating: 4,
    cost: 650,
    type: "stocks",
  },
];

const commoditiesData = [
  {
    value: "Vitol",
    id: 1,
    rating: 4,
    cost: 1098,
    type: "commodities",
  },
  {
    value: "Glencore",
    id: 2,
    rating: 5,
    cost: 1653,
    type: "commodities",
  },
  {
    value: "Cargill",
    id: 3,
    rating: 2,
    cost: 937,
    type: "commodities",
  },
  {
    value: "Koch Indt",
    id: 4,
    rating: 1,
    cost: 1145,
    type: "commodities",
  },
  {
    value: "Trafigura",
    id: 5,
    rating: 4,
    cost: 993,
    type: "commodities",
  },
  {
    value: "Mercuria",
    id: 6,
    rating: 5,
    cost: 1743,
    type: "commodities",
  },
  {
    value: "Noble Group",
    id: 7,
    rating: 2,
    cost: 511,
    type: "commodities",
  },
  {
    value: "Louis Dreyfus",
    id: 8,
    rating: 1,
    cost: 449,
    type: "commodities",
  },
  {
    value: "Bunge",
    id: 9,
    rating: 4,
    cost: 1731,
    type: "commodities",
  },
  {
    value: "Wilmar",
    id: 10,
    rating: 5,
    cost: 1880,
    type: "commodities",
  },
  {
    value: "Acardia",
    id: 11,
    rating: 2,
    cost: 589,
    type: "commodities",
  },
  {
    value: "Mabanaft",
    id: 12,
    rating: 1,
    cost: 94,
    type: "commodities",
  },
  {
    value: "Olam",
    id: 13,
    rating: 4,
    cost: 601,
    type: "commodities",
  },
  {
    value: "Sime Darby",
    id: 14,
    rating: 5,
    cost: 601,
    type: "commodities",
  },
  {
    value: "STC Group",
    id: 15,
    rating: 2,
    cost: 1313,
    type: "commodities",
  },
  {
    value: "Chevron",
    id: 16,
    rating: 1,
    cost: 1282,
    type: "commodities",
  },
];

const initialSetup = async () => {
  const creationQuery = `
    CREATE TABLE IF NOT EXISTS items(
         id INT NOT NULL,
         name varchar(255) NOT NULL,
         price INT NOT NULL,
         rating INT NOT NULL,
         type varchar(255) NOT NULL,
         PRIMARY KEY(id, type)
    );`;

  const commaSeparatedList = [
    ...agricultureData,
    ...commoditiesData,
    ...stocksData,
    ...realEstateData,
  ]
    .map((item) => {
      return `(${item.id}, "${item.value}", ${item.cost}, ${item.rating}, "${item.type}")`;
    })
    .join(",");

  const insertionQuery = `
    INSERT INTO items (id, name, price, rating, type) VALUES
    ${commaSeparatedList};
  `;

  await queryProcessor(creationQuery);
  await queryProcessor(insertionQuery);

  console.log("\n\n*********successfully created database***********\n\n");
};

initialSetup();
