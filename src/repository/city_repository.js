const { City } = require("../models/index");
const { Op } = require("sequelize");

class CityRepository {
  async createCity({ name }) {
    //ek object milega aur humko name chahiye to whi destructure kar liya
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log("Something went wrong at repository level");
      throw error;
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      throw error;
    }
  }

  async updateCity(cityId, data) {
    //data is some kind of object
    try {
      // const city=await City.update(data,{         //data contains key value pair
      //     where:{
      //         id:cityId
      //     }
      // });
      // return city;
      //for getting updated data we use below method
      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
      return city;
    } catch (error) {
      console.log("Something went wrong at repository level");
      throw error;
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong at repository level");
      console.log(error);
      throw error;
    }
  }

  async getAllCities(filter){
    try {
      if(filter.name){
        const cities=await City.findAll({
          where:{
            name:{
              [Op.startsWith]:filter.name
            }
          }
        });
        return cities;
      }
      const cities=await City.findAll();
      return cities;
    } catch (error) {
      console.log("Something went wrong at repository level");
      console.log(error);
      throw error;
    }
  }
}

module.exports = CityRepository; //ye class hai to jha import karoge wha object banana padega pehle
