
# MyCondo

BrainStation Capstone Assignment.

https://github.com/varun-jacob/mycondo



## Problem Space

Do you live in a condo or building with amenities? Do you still call in to your concierge to book your appointment? Frustrated, your booking was not processed?


## Solution
Welcome to MyCondo! A reservation app that allows condos to add their residents and amenities to create a seamless booking process.
## Authors

- [@varunjacob](https://www.github.com/varun-jacob)


## 🛠 Skills

### Foundations

Javascript, HTML, CSS, SASS Git, Terminal (Bash), Postman

### Front-end
React (Class Components + Hooks)

### Back-end
Node, Express, Knex, MySQL


## Tech Stack

**Client:** HTML, CSS, SASS, React, React Hooks

**Server:** Node, Express, Knex, MySQL


## API Reference

### mycondo database

Stored in mySQL and built via Knex

#### Condos Table
- SELECT `id`, `name`, `address`, `phone`, `email`, `username`, `admin`, `password`, `updated_at` FROM `mycondo`.`condos`;

#### Residents Table
- SELECT `id`, `condo_id`, `unit`, `name`, `phone`, `email`, `password`, `updated_at` FROM `mycondo`.`residents`;

#### Amenities Table
- SELECT `id`, `condo_id`, `name`, `image_url`, `max_bookings`, `start_time`, `end_time`, `updated_at` FROM `mycondo`.`amenities`;

#### Bookings Table
- SELECT `id`, `condo_id`, `resident_id`, `amenity_id`, `date`, `start_time`, `end_time`, `updated_at` FROM `mycondo`.`bookings`;

### Condos

#### GET CONDOS

```http
  GET /condos
```

#### Get full list of all condos and associated details from the database.

#### POST CONDOS

```http
  POST /condos
```

#### Add a condo and required details to the database. Requires all fields for an addition.


#### INDIVIDUAL CONDO INFORMATION

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


```http
  GET /condos/${id}
```
#### Fetches information specific to one condo based on the id

```http
  PUT /condos/${id}
```
#### Edits / modifies information specific to one condo based on the id

```http
  DELETE /condos/${id}
```
#### Deletes individual condo based on the id


```http
  GET /condos/${id}/residents
```
#### Fetches residents table information specific to one condo based on the id


```http
  GET /condos/${id}/amenities
```
#### Fetches amenities table information specific to one condo based on the id


```http
  GET /condos/${id}/bookings
```
#### Fetches bookings table information specific to one condo based on the id

### Residents

#### GET Residents

```http
  GET /residents
```

#### Get full list of all residents and associated details from the database.

#### POST RESIDENTS

```http
  POST /residents
```

#### Add a resident and required details to the database. Requires all fields for an addition.


#### INDIVIDUAL RESIDENT INFORMATION

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


```http
  GET /residents/${id}
```
#### Fetches information specific to one resident based on the id

```http
  PUT /residents/${id}
```
#### Edits / modifies information specific to one resident based on the id

```http
  DELETE /residents/${id}
```
#### Deletes individual resident based on the id


```http
  GET /residents/${id}/amenities
```
#### Fetches amenities table information specific to one resident based on the id


```http
  GET /residents/${id}/bookings
```
#### Fetches bookings table information specific to one resident based on the id

```http
  GET /residents/${id}/login
```
#### Processes login information for resident -- To be updated in the future

### Amenities

#### GET Amenities

```http
  GET /amenities
```

#### Get full list of all amenities for all condos and associated details from the database.

### Bookings

#### GET Bookings

```http
  GET /bookings
```

#### Get full list of all bookings and associated details from the database.

#### POST BOOKINGS

```http
  POST /bookings
```

#### Add a booking and required details to the database. Requires all fields for an addition.


#### INDIVIDUAL BOOKING INFORMATION

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


```http
  GET /bookings/${id}
```
#### Fetches information specific to one booking based on the id

```http
  PUT /bookings/${id}
```
#### Edits / modifies information specific to one booking based on the id

```http
  DELETE /bookings/${id}
```
#### Deletes individual booking based on the id

## Acknowledgements

 - BrainStation Educators (Daniil, Michael, Ryan, Phoebe)
## Features

- Mobile App
- Create, Read, Update, Delete (CRUD) functionality
- Form to book amenities
- Pages to view amenities
- Pages to view booked amenities

### Future Features
- Add user authentication and authorization for residents and condos
- Create following pages for condos
    - CRUD to add, get, update, delete residents and amenities
    - Display bookings for the day, to be shared with the concierge
    - Develop desktop site as the condos page will be used by the property management team and staff
    - Add images to server for condo amenities
- Add logic to restrict number of bookings per time slot and add increments (30 mins, 1 hr) for bookings
## Installation

Install myCondo with npm.  Separate installation required for client and server side.

This project was built using node, react, express, knex, mySQL and you will need to install these applications and/or dependencies.


```bash
  cd client
  npm install
```

```bash
  cd server
  npm install
```

For the server, a database needs to be created in mySQL called myCondo.  After you need to run knex migrate:latest
    
## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them?

- Code early on.  Tutorials can take a lot of time and may not be in line with tech stack you are using.
- Understand basics of Figma to create mock-ups.  This helps separate components, which can reduce the amount of time spent refactoring code for components and styling
- File and Calendar libraries were difficult to implement given other new concepts applied
- Believe in your ability to learn. I learned or applied the following concepts for the first time:
    - Built a database using Knex, MySQL
    - Structured back end using Module View Controller (MVC)
    - Used React Hooks to set states
    - Built a full CRUD application
## Run Locally

Clone the project

```bash
  git clone git@github.com:varun-jacob/mycondo.git
```

Go to the project directory for client and server separately

```bash
  cd client
```

Install dependencies

```bash
  npm install
```

Start the client server

```bash
  npm run start
```

Start the back-end server

```bash
  npm install
```

```bash
  npx nodemon index
```

