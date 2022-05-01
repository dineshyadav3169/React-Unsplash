const express = require('express')
const {MongoClient} = require('mongodb')
const app = express()
const port = 8080

const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>";
const client = new MongoClient(uri);

app.get('/log', async (req, res) => {

  const searchQuery = req.query.searchQuery;
  await client.connect();
  await client.collection("search").insert({query: searchQuery, time: new Date().toISOString()})

  res.status(200).send({
    done: "ok"
  })

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})