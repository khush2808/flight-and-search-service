const {airplanes}=require('../models/index');

class AirplaneRepository{
    async getAirplane(id){
        try {
            const airplane=await airplanes.findByPk(id);
            return airplane;
        } catch (error) {
            console.log("Something went wrong at repository level");
            throw error;
        }
        
    }
}

module.exports=AirplaneRepository;