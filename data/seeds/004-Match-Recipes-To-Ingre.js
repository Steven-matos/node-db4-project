exports.seed = async function(knex) {
  const testData = [
    { recipe_id: 1, ingr_quantity_id: 1 },
    { recipe_id: 1, ingr_quantity_id: 2 },
    { recipe_id: 1, ingr_quantity_id: 3 },
    { recipe_id: 1, ingr_quantity_id: 4 }
  ];

  // Deletes ALL existing entries
  await knex("recipes_ingr").truncate();

  // Inserts seed entries
  return knex("recipes_ingr").insert(testData);
};
