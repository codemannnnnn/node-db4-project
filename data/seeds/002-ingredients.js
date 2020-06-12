exports.seed = function (knex, Promise) {
  return knex("ingredients").insert([
    { ingredient_name: "butter" },
    { ingredient_name: "salt" },
    { ingredient_name: "pepper" },
    { ingredient_name: "seasoning" },
    { ingredient_name: "flour" },
    { ingredient_name: "corn" },
  ]);
};
