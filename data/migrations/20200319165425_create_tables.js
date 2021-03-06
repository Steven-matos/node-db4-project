exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();

      tbl.string("name", 255).notNullable();
    })
    .createTable("instructions", tbl => {
      tbl.increments();

      tbl.string("Steps", 255).notNullable();

      tbl.string("Desc", 255).notNullable();

      tbl
        .integer("recipe_id")
        .unsigned()
        .references("id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("ingr", tbl => {
      tbl.increments();

      tbl
        .string("name", 255)
        .notNullable()
        .unique();
    })
    .createTable("ingr_quantity", tbl => {
      tbl.increments();

      tbl
        .integer("ingr_id")
        .unsigned()
        .references("id")
        .inTable("ingr")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");

      tbl.string("quantity", 255);
    })
    .createTable("recipes_ingr", tbl => {
      tbl.primary(["recipe_id", "ingr_quantity_id"]);

      tbl
        .integer("recipe_id")
        .unsigned()
        .references("id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");

      tbl
        .integer("ingr_quantity_id")
        .unsigned()
        .references("id")
        .inTable("ingr_quantity")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipes_ingr")
    .dropTableIfExists("ingr_quantity")
    .dropTableIfExists("ingr")
    .dropTableIfExists("instructions")
    .dropTableIfExists("recipes");
};
