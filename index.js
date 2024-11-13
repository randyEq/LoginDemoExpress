const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  express.json({
    limit: "5mb",
  })
);
app.use(
  express.urlencoded({
    extended: true,
    limit: "5mb",
  })
);

let corsOptions = {
    origin: "http://localhost:4200",
  };
  app.use(cors(corsOptions));
  app.use("/public", express.static(__dirname + "/public"));
  
  const login = require("./routes/login");
  app.use("/login", login);
  
  const port = 3000;
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
  });