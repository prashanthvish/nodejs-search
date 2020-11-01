exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments();
    table.string("firstName");
    table.string("lastName");
    table.integer("age");
    table.string("worksAt");
    table.string("city");
    table.string("country");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
