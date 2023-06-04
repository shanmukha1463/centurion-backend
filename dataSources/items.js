const queryProcessor = require("../utils/connection");

const getItems = async (itemType) => {
  const query = `
    SELECT
        *
    FROM
        items
    WHERE
        type = "${itemType}"
  `;

  const output = await queryProcessor(query);
  return output;
};

module.exports = getItems;
