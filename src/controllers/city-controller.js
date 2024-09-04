const { CityService } = require("../services/index");

const cityService = new CityService();

const create = async (req, res) => {
  try {
    const city = await cityService.createCity(req.body);
    return res.status(201).json({
      data: city,
      success: true,
      message: "Successfully created a city",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      data: {},
      err: error,
      message: "Not able to create a city",
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully deleted a city",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      data: {},
      err: error,
      message: "Not able to delete a city",
    });
  }
};

const update = async (req, res) => {
  try {
    const city = await cityService.updateCity(req.params.id, req.body);
    return res.status(200).json({
      data: city,
      success: true,
      message: "Successfully updated a city",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      data: {},
      err: error,
      message: "Not able to update a city",
    });
  }
};

const get = async (req, res) => {
  try {
    const response = await cityService.getCity(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully fetched a city",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      data: {},
      err: error,
      message: "Not able to fetched the city",
    });
  }
};

const getAll=async (req,res)=>{
  try {
    const cities=await cityService.getAllCities(req.query);   //becoz data is coming from query parameter
    return res.status(200).json({
      data: cities,
      success: true,
      message: "Successfully fetched a city",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      data: {},
      err: error,
      message: "Not able to fetch the cities",
    });
  }
}

module.exports = {
  create,
  destroy,
  update,
  get,
  getAll
};
