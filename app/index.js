require("dotenv").config();
const express = require("express");
const MeiliSearch = require("meilisearch");

const app = express();
const searchClient = new MeiliSearch({ host: process.env.MEILISEARCH_HOST });

app.get("/search", async (req, res) => {
  const { q } = req.query;
  const results = await searchClient.getIndex("users").search(q);
  res.json({
    success: true,
    results,
  });
});

app.listen(process.env.APP_PORT, () => {
  console.log(`Server started running at port ${process.env.APP_PORT}`);
});
