/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema
    .createTable('condos', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('address').notNullable();
      table.string('phone').notNullable();
      table.string('email').notNullable();
      table.string('username').notNullable();
      table.string('admin').notNullable();
      table.string('password').notNullable();
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .createTable('residents', (table) => {
      table.increments('id').primary();
      table
        .integer('condo_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('condos')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.string('unit').notNullable();
      table.string('name').notNullable();
      table.string('phone').notNullable();
      table.string('email').notNullable();
      table.string('password').notNullable();
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .createTable('amenities', (table) => {
      table.increments('id').primary();
      table
        .integer('condo_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('condos')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.string('name').notNullable();
      table.string('image_url').notNullable();
      table.integer('max_bookings').notNullable().defaultTo(1);
      table.time('start_time').notNullable();
      table.time('end_time').notNullable();
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .createTable('bookings', (table) => {
      table.increments('id').primary();
      table
        .integer('condo_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('condos')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table
        .integer('resident_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('residents')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table
        .integer('amenity_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('amenities')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.date('date').notNullable();
      table.time('start_time').notNullable();
      table.time('end_time').notNullable();
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('bookings').dropTable('amenities').dropTable('residents').dropTable('condos');
};
