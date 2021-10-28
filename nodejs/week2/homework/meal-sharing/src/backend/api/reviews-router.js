const express = require("express");
const router = express.Router();

const reviews = require("./../data/reviews.json");

//Respond with the json for all the reviews
router.get("/", async (request, response) => {

    response.send(reviews);

  
});

//Respond with the json for the review with the corresponding id
router.get("/:id", async (request, response) => {
  const id = parseInt(request.params.id);
  let filterById = reviews
  filterById = filterById.filter(obj => {return obj.id === id})
    
      if (isNaN(id)) {
        return response.status(400).send({ error: "IDs must be integer" });
      } else if (reviews[id - 1] === undefined) {
        return response.status(400).send("This ID No matching any review ids ");
      } else {
        
       return   response.send(filterById);
      }
  

});

module.exports = router;