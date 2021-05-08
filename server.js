const fetch = require("node-fetch");

const pingHeroku = setInterval(() => {
  fetch("https://fatwaarchive.herokuapp.com/")
    .then((res) => {
      console.log("pinged");
    })
    .catch((err) => {
      console.log("could not ping", err);
    });
}, 10000);
