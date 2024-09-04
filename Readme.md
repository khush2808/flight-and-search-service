# Welcome to flight services

## Project setup


1) clone the project on your local
2) Execute `npm install` on the same path as of your root directory of the downloaded project.
3) Create a `.env file` in the root directory and add the following environment variable- `PORT =3000`.
4) Inside the src/config/folder create a new file config.json and then add the following piece of json.


```
{
  "development": {
    "username": <Your DB LOGIN NAME>,
    "password": <YOUR DB PASSWORD>,
    "database": "Flights_And_Search_DB",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
}


```

- Once you have added your db config , go to the src folder from your terminal and execute `npx sequelize db:create`
and then execute 
`npx sequelize db:migrate`


## DB Design
   1) Table
   2) Flight 
   3) Airport 
   4) City

   -A flight belongs to an airplane but one airplane can be used in multiple flights
   -A city has many airports but one airport belongs to one city
   -One Airport can have multiple flights, but a flight belongs to one Airport

## Tables

### City- id , name , created_At, updated_At
### Airport- id , name , address, city_id, created_At, updated_At
      1) Relationship -> City has many Airports and Airports belong to a city(one to many).

```
npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer

```