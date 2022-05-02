const express = require('express')
const {MongoClient} = require('mongodb')
const app = express()
const port = 8080

const uri = "mongodb+srv://wt-test-now:d780eeed-9662-4cba-9b5d-b455e782aa89@imagesearch.4smay.mongodb.net/imagesearch?retryWrites=true&w=majority";
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


/* 

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://wt-test-now:<password>@cluster0.4smay.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

*/