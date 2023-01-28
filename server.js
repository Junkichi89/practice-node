const express = require("express");
const app  = express();
const port = 3000;

// POSTのクエリーを良い感じに処理する
app.use(express.urlencoded({extended: true}));

// ルーティングの設定
// app.get("/", (req, res) =>{
//   const name = req.query.name;
// res.send(`君の名は ${name}`)
//   res.sendFile(`${__dirname}/public/index.html`);
//   console.log("/ へアクセスがありました");
// });
app.get("/", (req, res) =>{
  const data = {
    "message": "Hello world",
    "date": "2020-06-29"
  };
  res.json(data)
  console.log("/ へアクセスがありました");
});

// app.post("/", (req, res) =>{
//   const name = req.body.name;
//   res.send(`君の名は ${name}`)
//   console.log("/ へアクセスがありました");
// });

app.get("/a", (req, res) =>{
  res.sendFile(`${__dirname}/public/a.html`);
  console.log("/a へアクセスがありました");
});
app.get("/b", (req, res) =>{
  res.sendFile(`${__dirname}/public/b.html`);
  console.log("/b へアクセスがありました");
});
app.get("/c", (req, res) =>{
  res.sendFile(`${__dirname}/public/c.html`);
  console.log("/c へアクセスがありました");
});

app.get("/images/:file", (req, res) =>{
  const file = req.params.file;

  res.sendFile(`${__dirname}/images/${file}`);
  console.log(`/images/${file} へアクセスがありました`);
});

// HTTPサーバを起動する
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});