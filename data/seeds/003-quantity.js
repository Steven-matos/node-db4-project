exports.seed = async function(knex) {
  const testData = [
    { ingr_id: 1, quantity: "4 cups" },
    { ingr_id: 3, quantity: "6 Tbsp" },
    { ingr_id: 2, quantity: "2/3 cups" },
    { ingr_id: 4, quantity: "1 Tbsp" }
  ];

  // Deletes ALL existing entries
  await knex("ingr_quantity").truncate();

  // Inserts seed entries
  return knex("ingr_quantity").insert(testData);
};
