const { response } = require("express");
const { dbConnection } = require('../Config/database');

const checkHealth = async (req, res = response) => {
    try {
        // Vamos a revisar si la API está funcionando
        res.json({
            status: "OK",
            message: "API is working"
        })
    } catch (error) {
        res.status(500).json({
            status: "ERROR",
            message: "API is not working"
        })
    }
}

module.exports = {
    checkHealth
}