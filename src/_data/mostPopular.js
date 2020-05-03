const axios = require("axios");
require("dotenv").config();

module.exports = async function() {
  try {
    const response = await axios.get(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${process.env.API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
