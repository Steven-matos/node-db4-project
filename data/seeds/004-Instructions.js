exports.seed = async function(knex) {
  const testData = [
    { steps: 1, desc: "pour flour into mixer", recipe_id: 1 },
    { steps: 2, desc: "add butter into mixer", recipe_id: 1 },
    { steps: 3, desc: "add salt to warm water", recipe_id: 1 },
    { steps: 4, desc: "add salt water into mixer", recipe_id: 1 },
    { steps: 5, desc: "mix until dough is formed", recipe_id: 1 },
    { steps: 6, desc: "cut into small balls and put in boiling water for 20 min", recipe_id: 1 }
  ];

  // Deletes ALL existing entries
  await knex("instructions").truncate();

  // Inserts seed entries
  return knex("instructions").insert(testData);
};
