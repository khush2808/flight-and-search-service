const {Flights}=require('../models/index');
const {Op, where}=require('sequelize');

class FlightRepository{

    #createFilter(data){
        let filter={};

        if(data.arrivalAirportId){
            filter.arrivalAirportId=data.arrivalAirportId;
        }
        if(data.departureAirportId){
            filter.departureAirportId=data.departureAirportId;
        }

        // if(data.minPrice){
        //     Object.assign(filter,{price:{[Op.gte]:data.minPrice}});
        // }

        // if(data.maxPrice){
        //     Object.assign(filter,{price:{[Op.lte]:data.maxPrice}});
        // }
        Object.assign(filter,{price:{[Op.between]:[data.minPrice,data.maxPrice]}});
        return filter;
    }

    async createFlight(data){
        try {
            const flight=await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong at repository level");
            throw error;
        }
    }

    async getFlight(flightId){
        try {
            const flight=await Flights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong at repository level");
            throw error;
        }
    }

    async getAllFlights(filter){
        try {
            const filterObject=this.#createFilter(filter);
            const flight=await Flights.findAll({
                where:filterObject
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong at repository level");
            throw error;
        }
    }

    async updateFlight(flightId,data){
        try {
            await Flights.update(data,{
                where:{
                    id:flightId
                }
            })
            return true;
        } catch (error) {
            console.log("Something went wrong at repository level");
            throw error;
        }
    }

}

module.exports=FlightRepository;