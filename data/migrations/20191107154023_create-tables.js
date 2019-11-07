
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('mealName', 150)
            .notNullable();
    })
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('ingredientName', 100)
            .unique()
            .notNullable();
    })
    .createTable('recipesIngredients', tbl => {
        tbl.increments();
        tbl.integer('recipesId')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.integer('ingredientsId')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.decimal('ingredientQuantity')
            .unsigned();
    })
    .createTable('steps', tbl => {
        tbl.increments();
        tbl.text('step')
            .notNullable();
        tbl.integer('recipesId')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.integer('stepsNumber')
            .unsigned()
            .notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('steps')
    .dropTableIfExists('recipesIngredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
