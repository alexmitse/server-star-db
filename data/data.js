const axios = require("axios");

async function datas() {
  const res = await axios
    .get("https://swapi.co/api/people/")
    .then(responce => responce);

  let peopleRequest = [];
  for (let i = 1; i <= Math.ceil(res.data.count / 10); i++) {
    peopleRequest.push(i);
  }

  let arrResult = [];
  let arr;
  try {
    arr = Promise.all(
      peopleRequest.map(async item => {
        const result = await axios.get(
          `https://swapi.co/api/people/?page=${item}`
        );
        return result.data.results.map(item => {
          return item;
        });
      })
    );
  } catch {
    console.log("error in promise.all", Math.ceil(res.data.count / 10));
  }
  return arr.then(res => {
    return res;
  });
}
module.exports = datas;
