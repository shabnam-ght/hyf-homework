const express = require("express");
const router = express.Router();

const reservations = require("./../data/reservations.json");

//Respond with the json for all the reservations
router.get("/", async (request, response) => {
    response.send(reservations);
 
});

//Respond with the json for the meal with the corresponding id
router.get("/:id", async (request, response) => {
  const id = parseInt(request.params.id);
let filterById = reservations
filterById = filterById.filter(obj => {return obj.id === id})
  
    if (isNaN(id)) {
      return response.status(400).send({ error: "IDs must be integer" });
    } else if (reservations[id - 1] === undefined) {
      return response.status(400).send("This ID No matching any reservation ids ");
    } else {
      
     return   response.send(filterById);
    }
});

module.exports = router;