 -src/
    -index.js //main server file
    -modals/
    -controllers/
    -middlewares/
    -services/
    -utils/
    -config/            mostly database configurations
    -repository/
 -tests/  [will be added later]

 It is role/task based folder pattern not feautre based.



1) sabse pehle npm init, express, nodemon, body-parser ye teen basic depencdencies
2) express mein server start hum function mein karenge 
3) humne dotenv use karna seekha hai  
4) git mein push kar dena ek baar pehle hi
5) setting basic body parser 
6) Now we are setting sequelize(ORM), sequelize-CLI(It will do some cofig by itself), mysql2 to connect sequelize with mysql database
7) npm i sequelize sequelize-cli mysql2
8) npx sequelize init . It will give us extra files like config models seeders migrations.
9) write your own password in config.json for mysql
10) npx sequelize db:create = this will create database (you can found in npm sequelize-cli). write this under src becoz config is in src
11) We are using lucid  app to write our table format. Each server should have their own database
12) Then we will be making table by sequelize cli syntax(in documentation)
13) It will automatically create id , created_At ,updated_At in migration folder . Becoz these things are common in every table.
14) These migration files will help us to make incremental changes.Made changes in city.init in city.js and allownull in migration under name. We can make more changes before syncing.
15) But when you will check table in mysql it will not show you anything. we have to associate/sync it to it.
16) we can do npx sequelize db:migrate
17) Now when we have models , its time for repository . city_repository.js file 
18) WE can insert and syntax is in documentation if sequelize insert.
19) You can find all syntax of sequelize in documentation
20) Now we have make models,repository, now service layer. make a city-service.js
21) From city-service.js we will make function call to city repository.
22) Now we have done module, then repository, then service, now its time for controller.We can a file in controller. city-controller.js
23) You don't need to use body parser in controller because at last everything will be called from index.js
24) Now we are making a folder routes so that we can systematically direct the urls. You can see the diagram in copy.
25) Now call will be initiated from main index.js so api/v1/ so api will logic will be there
26) Check that on Postman
27) We have make getAllCity . if you dont pass any parameter then it will fetch all city but if you pass query param it will filter.
28) We have created another model Airport . 
29) We have to associate the both that's why we have written in associate functions in models.
30) We have also updated migration file of airport .
31) We have make a seeder file with command npx sequelize seed:generate --name add-airports. It helps us to fill database without and request. We can do hardcode.
32) To do the below things we should first import City and Airport from models
const city=await City.findOne({
      where:{
        id:7
      }
    });
    const airport=await city.getAirports();
    console.log(city,airport);         This we can do in main index.js file to get all the airports associated with that city.

33) We have to do db.sequelize.sync to sync the two tables instead of JOIN which we do in Sql . But we dont need to do it everytime . That's why we written in .env and we need we will uncomment it.
34) Now we are making Airplane model.
35) await airplanes.create({
      modelName:"Bombardier CRJ-200",

    }) we can do this to add manually it is as easy as that.
36) We have made Flights model.
37) We need total seats that we will get from airplane. so make airplane repository also.
38) We will write bussiness logic in utils folder like comparing dates etc.
39) We are making CRUD API for flights because flights has very much data.
40) agar minPrice maxPrice dono set karoge to uske beech ka nhi aayega kyunki price ko hi assign kar rhe ho .
ek baar minprice assign hua aur agle hi baar tum uska maxprice assign kar diye . isliye between use karo ya and. syntax Op ka dekh lena documentation se.
41) We have made a crud repository and we will call it . IT will make everything very easy. We have made a airport repository to demonstrate the same.
42) It was very cool to make a crud repository and just extends it.
43) Now we are making middlewares.
44) 