const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  let response = {
    data: null,
    error: null,
    status: false
  }
  
  if (req.body.username === "admin" && req.body.password === "admin") {
    response.data = {
      username: "admin",
      role: "admin"
    }
    response.status = true
  }
  return res.send(response);
});

module.exports = router;