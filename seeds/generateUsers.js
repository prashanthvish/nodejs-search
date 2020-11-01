const faker = require("faker");
exports.seed = async function (knex) {
  console.time();
  for (let i = 0; i <= 10000; i++) {
    await knex("users").insert({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      age: faker.random.number(99),
      worksAt: faker.company.companyName(),
      city: faker.address.city(),
      country: faker.address.country(),
    });
    console.log(`Inserting User ${i}`);
  }
  console.timeEnd();
};
