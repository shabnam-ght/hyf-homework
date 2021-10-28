const express = require("express");
const app = express();

// import data here
const meals = require("./data/meals");
const reservations = require("./data/reservations");
const reviews = require("./data/reviews");

// this is where you will be adding your routes
app.get("/", async (request, response) => {
  response.send("Meal Sharing Web App");
});

const mealsWithReviews = meals.map((meal) => {
  mealWithReview = meal;
  mealWithReview.reviews = reviews.filter(
    (review) => review.mealId === meal.id
  );
  return mealWithReview;
});


app.get("/meals", async (request, response) => {
  response.send(mealsWithReviews);
});


app.get("/meal", async (request, response) => {
  const randomMeal = mealsWithReviews[Math.floor(Math.random() * mealsWithReviews.length)];
  response.send(randomMeal);
});


app.get("/cheap-meals", async (request, response) => {
  const cheapMeals = mealsWithReviews.filter(
    (cheapmeal) => cheapmeal.price < 70
  );
  response.send(cheapMeals);
});


app.get("/large-meals", async (request, response) => {
  const largeMeals = mealsWithReviews.filter(
    (largemeal) => largemeal.price > 70
  );
  response.send(largeMeals);
});


app.get("/reservations", async (request, response) => {
  response.send(reservations);
});


app.get("/reservation", async (request, response) => {
  const reservation=reservations[Math.floor(Math.random() * reservations.length)]
  response.send(reservation);
});


module.exports = app;
