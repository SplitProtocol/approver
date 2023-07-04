import fs from "fs";
import fetch from "node-fetch";

const TOKENS_URL = "https://api.1inch.io/v4.0/42161/tokens";

fetch(TOKENS_URL)
  .then((res) => res.json())
  .then(async ({ tokens: data }) => {
    const tokens = Object.values(data);

    fs.writeFile(`42161.json`, JSON.stringify(tokens), () => {
      console.log("file saved!", tokens.length);
    });
  });
