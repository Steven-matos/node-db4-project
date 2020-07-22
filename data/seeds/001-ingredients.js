exports.seed = async function(knex) {
  const testData = [
    { name: "flour" },
    { name: "water" },
    { name: "butter" },
    { name: "salt"}
  ];

  // Deletes ALL existing entries
  await knex("ingr").truncate();

  // Inserts seed entries
  return knex("ingr").insert(testData);
};
