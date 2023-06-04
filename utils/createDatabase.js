const queryProcessor = require("../utils/connection");

const agricultureData = [
  { value: "AgriCrop", id: 1, rating: 4, cost: 10, type: "agriculture" },
  { value: "AgriWorld", id: 2, rating: 5, cost: 31, type: "agriculture" },
  { value: "AgriTech", id: 3, rating: 2, cost: 67, type: "agriculture" },
  { value: "AgriWord", id: 4, rating: 1, cost: 900, type: "agriculture" },
  { value: "AgriCrop", id: 5, rating: 4, cost: 10, type: "agriculture" },
  { value: "AgriWorld", id: 6, rating: 5, cost: 31, type: "agriculture" },
  { value: "AgriTech", id: 7, rating: 2, cost: 67, type: "agriculture" },
  { value: "AgriWord", id: 8, rating: 1, cost: 900, type: "agriculture" },
  { value: "AgriCrop", id: 9, rating: 4, cost: 10, type: "agriculture" },
  { value: "AgriWorld", id: 10, rating: 5, cost: 31, type: "agriculture" },
  { value: "AgriTech", id: 11, rating: 2, cost: 67, type: "agriculture" },
  { value: "AgriWord", id: 12, rating: 1, cost: 900, type: "agriculture" },
  { value: "AgriCrop", id: 13, rating: 4, cost: 10, type: "agriculture" },
  { value: "AgriWorld", id: 14, rating: 5, cost: 31, type: "agriculture" },
  { value: "AgriTech", id: 15, rating: 2, cost: 67, type: "agriculture" },
  { value: "AgriWord", id: 16, rating: 1, cost: 900, type: "agriculture" },
];

const realEstateData = [
  { value: "AgriCrop", id: 1, rating: 4, cost: 10, type: "realEstate" },
  { value: "AgriWorld", id: 2, rating: 5, cost: 31, type: "realEstate" },
  { value: "AgriTech", id: 3, rating: 2, cost: 67, type: "realEstate" },
  { value: "AgriWord", id: 4, rating: 1, cost: 900, type: "realEstate" },
  { value: "AgriCrop", id: 5, rating: 4, cost: 10, type: "realEstate" },
  { value: "AgriWorld", id: 6, rating: 5, cost: 31, type: "realEstate" },
  { value: "AgriTech", id: 7, rating: 2, cost: 67, type: "realEstate" },
  { value: "AgriWord", id: 8, rating: 1, cost: 900, type: "realEstate" },
  { value: "AgriCrop", id: 9, rating: 4, cost: 10, type: "realEstate" },
  { value: "AgriWorld", id: 10, rating: 5, cost: 31, type: "realEstate" },
  { value: "AgriTech", id: 11, rating: 2, cost: 67, type: "realEstate" },
  { value: "AgriWord", id: 12, rating: 1, cost: 900, type: "realEstate" },
  { value: "AgriCrop", id: 13, rating: 4, cost: 10, type: "realEstate" },
  { value: "AgriWorld", id: 14, rating: 5, cost: 31, type: "realEstate" },
  { value: "AgriTech", id: 15, rating: 2, cost: 67, type: "realEstate" },
  { value: "AgriWord", id: 16, rating: 1, cost: 900, type: "realEstate" },
];

const stocksData = [
  { value: "AgriCrop", id: 1, rating: 4, cost: 10, type: "stocks" },
  { value: "AgriWorld", id: 2, rating: 5, cost: 31, type: "stocks" },
  { value: "AgriTech", id: 3, rating: 2, cost: 67, type: "stocks" },
  { value: "AgriWord", id: 4, rating: 1, cost: 900, type: "stocks" },
  { value: "AgriCrop", id: 5, rating: 4, cost: 10, type: "stocks" },
  { value: "AgriWorld", id: 6, rating: 5, cost: 31, type: "stocks" },
  { value: "AgriTech", id: 7, rating: 2, cost: 67, type: "stocks" },
  { value: "AgriWord", id: 8, rating: 1, cost: 900, type: "stocks" },
  { value: "AgriCrop", id: 9, rating: 4, cost: 10, type: "stocks" },
  { value: "AgriWorld", id: 10, rating: 5, cost: 31, type: "stocks" },
  { value: "AgriTech", id: 11, rating: 2, cost: 67, type: "stocks" },
  { value: "AgriWord", id: 12, rating: 1, cost: 900, type: "stocks" },
  { value: "AgriCrop", id: 13, rating: 4, cost: 10, type: "stocks" },
  { value: "AgriWorld", id: 14, rating: 5, cost: 31, type: "stocks" },
  { value: "AgriTech", id: 15, rating: 2, cost: 67, type: "stocks" },
  { value: "AgriWord", id: 16, rating: 1, cost: 900, type: "stocks" },
];

const commoditiesData = [
  { value: "AgriCrop", id: 1, rating: 4, cost: 10, type: "commodities" },
  { value: "AgriWorld", id: 2, rating: 5, cost: 31, type: "commodities" },
  { value: "AgriTech", id: 3, rating: 2, cost: 67, type: "commodities" },
  { value: "AgriWord", id: 4, rating: 1, cost: 900, type: "commodities" },
  { value: "AgriCrop", id: 5, rating: 4, cost: 10, type: "commodities" },
  { value: "AgriWorld", id: 6, rating: 5, cost: 31, type: "commodities" },
  { value: "AgriTech", id: 7, rating: 2, cost: 67, type: "commodities" },
  { value: "AgriWord", id: 8, rating: 1, cost: 900, type: "commodities" },
  { value: "AgriCrop", id: 9, rating: 4, cost: 10, type: "commodities" },
  { value: "AgriWorld", id: 10, rating: 5, cost: 31, type: "commodities" },
  { value: "AgriTech", id: 11, rating: 2, cost: 67, type: "commodities" },
  { value: "AgriWord", id: 12, rating: 1, cost: 900, type: "commodities" },
  { value: "AgriCrop", id: 13, rating: 4, cost: 10, type: "commodities" },
  { value: "AgriWorld", id: 14, rating: 5, cost: 31, type: "commodities" },
  { value: "AgriTech", id: 15, rating: 2, cost: 67, type: "commodities" },
  { value: "AgriWord", id: 16, rating: 1, cost: 900, type: "commodities" },
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
