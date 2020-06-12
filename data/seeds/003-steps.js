exports.seed = function (knex, Promise) {
  return knex("steps").insert([
    { recipe_id: 1, step_number: 1, step_description: "first step" },
    { recipe_id: 1, step_number: 2, step_description: "second step" },
    { recipe_id: 1, step_number: 3, step_description: "third step" },
    { recipe_id: 1, step_number: 4, step_description: "fourth step" },
  ]);
};
