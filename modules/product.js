const express = require("express"),
  router = express();

var itemStore = [
  {
    id: 1,
    name: "Télévision 55 pouces",
    brand: "Samsung",
    quantity: 10,
  },
  {
    id: 2,
    name: "Télévision 60 pouces",
    brand: "Samsung",
    quantity: 90,
  },
  {
    id: 3,
    name: "Télévision 40 pouces",
    brand: "Sony",
    quantity: 4,
  },
];

router.get("/items", function (req, res) {
  res.json(itemStore);
});

router.get("/item/:id", function (req, res) {
  console.log(req);
  res.json(itemStore[req.params.id]);
});

// router.del

module.exports = router;
