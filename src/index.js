const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverconfig"); //curly braces is important in importing
const ApiRoutes = require("./routes/index");

const db=require('./models/index');
// const {City,Airport}=require('./models/index');
const {airplanes}=require('./models/index');


const setupAndStartServer = async () => {
  const app = express();
  // const PORT=3000;        //we don't want other people to know our port that's whywe use environment variables. one such package is dotenv

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use("/api", ApiRoutes);

  app.listen(PORT, async () => {
    console.log(`Server started at ${PORT}`);
    if(process.env.SYNC_DB){
      db.sequelize.sync({alter:true});      //only one time after every association
    }

    


  });
  // console.log(process.env);
};

setupAndStartServer();
