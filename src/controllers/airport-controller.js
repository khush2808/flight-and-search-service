const {AirportService}=require('../services/index');

const airportService=new AirportService();

const create= async (req,res)=>{
    try {
        const response = await airportService.create(req.body);
        return res.status(201).json({
        data: response,
        success: true,
        message: "Successfully created a airport",
    });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
        success: false,
        data: {},
        err: error,
        message: "Not able to create a airport",
    });
    }
}

module.exports={
    create,
}