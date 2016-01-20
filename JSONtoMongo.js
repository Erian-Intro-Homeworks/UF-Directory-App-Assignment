'use strict';
/*
  Import modules/files you may need to correctly run the script.
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config.js');

/* Connect to your database */
mongoose.connect(config.db.uri);

/*
  Instantiate a mongoose model for each listing object in the JSON file,
  and then save it to your Mongo database
 */
fs.readfile('listings.json', 'utf8', function(err, data) {

  for(int i = 0; i < data.entries.length; i++){
    if (err) throw err;
    obj = JSON.parse(data.entries[i]); //need be in loop? or outside

    var listing;

    if(obj.coordinates != undefined && obj.address != undefined){
      listing = ListingSchema({

        code: obj.code,
        name: obj.name,
        coordinates: {

          latitude: obj.latitude,
          longitude: obj.longitude,

        },
        address: obj.address
      });
    } else {
      listing = ListingSchema({
        code: obj.code,
        name: obj.name
      });
    }

    listing.save(function (err) {
      if(err) throw err;
    });
  }

});


/*
  Once you've written + run the script, check out your MongoLab database to ensure that
  it saved everything correctly.
 */
