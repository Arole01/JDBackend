const cloudinary = require("cloudinary").v2;

    
    cloudinary.config({ 
        cloud_name: 'de91sxsp3', 
        api_key: '125565454633852', 
        api_secret: 'yu8ece_wgO_xFTzYYFshYira0BQ' 
    });
    
    module.exports = cloudinary;