/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('condos', (table) => {
      table.increments('id').primary();
      table.integer('github_id').notNullable();
      table.string('avatar_url').notNullable();
      table.string('username').notNullable();
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .createTable('residents', (table) => {
      table.increments('id').primary();
      table.integer('condo_id').unsigned().notNullable();
      table.string('title', 75 ).notNullable();
      table.text('content').notNullable();
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table
        .foreign('condo_id')
        .references('id')
        .inTable('residents')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('condos').dropTable('residents').dropTable('amenities').dropTable('bookings');
};
