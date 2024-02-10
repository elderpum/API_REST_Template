const validateJWT = require('./validate-jwt');
const validateAtributes = require('./validate-attributes'); 


module.exports = {
    validateAtributes,
    ...validateJWT,
}