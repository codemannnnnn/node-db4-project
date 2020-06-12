exports.seed = function (knex, Promise) {
  return knex("recipes").insert([
    { recipe_name: "Chicken Fried Steak" },
    { recipe_name: "Steak and Broccolli" },
  ]);
};
