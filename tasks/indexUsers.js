require("dotenv").config();
const MeiliSearch = require("meilisearch");
const knex = require("../database");

const client = new MeiliSearch({ host: process.env.MEILISEARCH_HOST });

(async () => {
  console.time();
  const index = await client.createIndex("users");
  const users = await knex("users");
  await index.addDocuments(users);
  console.timeEnd();
})();
