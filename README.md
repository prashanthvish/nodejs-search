# Nodejs-Search

A Simple search project implemented using nodejs and meilisearch.
<br>
<br>

## How to

- Clone the repo and `cd` into it
- Create an env file

```sh
cp env.example .env
```

- Run postgres and meilisearch servers using

```sh
docker-compose up -d
```

- Install all the packages using

```sh
npm install
```

- Run database migrations which creates a simple users table

```sh
npx knex migrate:latest
```

- Seed the users table with random 10k users

```sh
npx knex seed:run
```

- Index the users table for faster search

```sh
node tasks/indexUsers.js
```

- Run the nodejs app

```sh
npm run dev
```

<br>
<br>

### Using the Search API

<br>

Use postman, curl or axios. In the above example, I am using httpie

```sh
http :2020/search q==K
```

The response I got was

```json
{
  "success": true,
  "results": {
    "hits": [
      {
        "id": 4,
        "firstName": "Korey",
        "lastName": "Weimann",
        "age": 61,
        "worksAt": "MacGyver, Shanahan and Hoeger",
        "city": "East Mariahside",
        "country": "Virgin Islands, U.S."
      },
      {
        "id": 5,
        "firstName": "Kamron",
        "lastName": "Kohler",
        "age": 25,
        "worksAt": "Breitenberg - Schulist",
        "city": "Hintzhaven",
        "country": "Holy See (Vatican City State)"
      },
      {
        "id": 29,
        "firstName": "Kiera",
        "lastName": "O'Conner",
        "age": 93,
        "worksAt": "Hintz Inc",
        "city": "Murphymouth",
        "country": "Albania"
      },
      {
        "id": 33,
        "firstName": "Kara",
        "lastName": "Greenholt",
        "age": 22,
        "worksAt": "Runte Group",
        "city": "Carleehaven",
        "country": "Jamaica"
      },
      {
        "id": 59,
        "firstName": "Kristoffer",
        "lastName": "Nikolaus",
        "age": 55,
        "worksAt": "Kuhn Inc",
        "city": "Neldachester",
        "country": "Fiji"
      },
      {
        "id": 69,
        "firstName": "Keanu",
        "lastName": "Simonis",
        "age": 87,
        "worksAt": "Beatty - Blick",
        "city": "Janyberg",
        "country": "Barbados"
      },
      {
        "id": 70,
        "firstName": "Kaylee",
        "lastName": "Douglas",
        "age": 57,
        "worksAt": "Schimmel, Kovacek and Stoltenberg",
        "city": "Emardshire",
        "country": "Dominica"
      },
      {
        "id": 83,
        "firstName": "Kenya",
        "lastName": "Flatley",
        "age": 37,
        "worksAt": "Armstrong - Connelly",
        "city": "East Brooke",
        "country": "Andorra"
      },
      {
        "id": 94,
        "firstName": "Kale",
        "lastName": "O'Kon",
        "age": 63,
        "worksAt": "Lehner LLC",
        "city": "New Monaton",
        "country": "Virgin Islands, British"
      },
      {
        "id": 108,
        "firstName": "Kayla",
        "lastName": "Schultz",
        "age": 80,
        "worksAt": "Hoeger Inc",
        "city": "South Kavon",
        "country": "Taiwan"
      },
      {
        "id": 120,
        "firstName": "Kiana",
        "lastName": "Senger",
        "age": 83,
        "worksAt": "Gleichner and Sons",
        "city": "Sandyville",
        "country": "Fiji"
      },
      {
        "id": 127,
        "firstName": "Kristopher",
        "lastName": "Casper",
        "age": 12,
        "worksAt": "Rowe - Swift",
        "city": "Port Christyshire",
        "country": "Virgin Islands, British"
      },
      {
        "id": 177,
        "firstName": "Katelin",
        "lastName": "Blanda",
        "age": 30,
        "worksAt": "Muller, Ryan and Schroeder",
        "city": "East Efrain",
        "country": "Anguilla"
      },
      {
        "id": 181,
        "firstName": "Kelley",
        "lastName": "Deckow",
        "age": 18,
        "worksAt": "VonRueden, DuBuque and Metz",
        "city": "Lake Alvaview",
        "country": "Tanzania"
      },
      {
        "id": 220,
        "firstName": "Kacie",
        "lastName": "Oberbrunner",
        "age": 38,
        "worksAt": "Wyman - Ritchie",
        "city": "New Hassan",
        "country": "Bulgaria"
      },
      {
        "id": 265,
        "firstName": "Karine",
        "lastName": "Krajcik",
        "age": 62,
        "worksAt": "Monahan, Tillman and Barrows",
        "city": "New Guadalupeberg",
        "country": "Belgium"
      },
      {
        "id": 310,
        "firstName": "Kaelyn",
        "lastName": "Connelly",
        "age": 30,
        "worksAt": "Wolff Inc",
        "city": "Powlowskiside",
        "country": "Kazakhstan"
      },
      {
        "id": 330,
        "firstName": "Kaci",
        "lastName": "Homenick",
        "age": 44,
        "worksAt": "Schuster - Hansen",
        "city": "New Luluborough",
        "country": "Taiwan"
      },
      {
        "id": 352,
        "firstName": "Kylie",
        "lastName": "Toy",
        "age": 91,
        "worksAt": "McDermott - Watsica",
        "city": "West Terrance",
        "country": "Guam"
      },
      {
        "id": 365,
        "firstName": "Kaitlyn",
        "lastName": "Powlowski",
        "age": 82,
        "worksAt": "O'Connell, Olson and Ratke",
        "city": "New Evan",
        "country": "Palestinian Territory"
      }
    ],
    "offset": 0,
    "limit": 20,
    "nbHits": 3475,
    "exhaustiveNbHits": false,
    "processingTimeMs": 8,
    "query": "K"
  }
}
```
