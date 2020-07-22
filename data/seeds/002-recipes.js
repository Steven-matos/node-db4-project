exports.seed = async function(knex) {
  const testData = [{ name: "Dominican Dumplings" }];

  // Deletes ALL existing entries
  await knex("recipes").truncate();

  // Inserts seed entries
  return knex("recipes").insert(testData);
};
