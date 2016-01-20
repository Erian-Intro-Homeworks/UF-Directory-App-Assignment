var mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');


/* Fill out these functions using Mongoose queries*/

var findLibraryWest = function() {

  Listing.find({ name: 'Library West' }, function(err, listingInfo) {
   if (err) throw err;

  // object of the user
  console.log(listingInfo);
  
  });


};


var removeCable = function() {

  // get the user starlord55
  Listing.find({ code: 'CABL' }, function(err, listingInfo) {
   if (err) throw err;

   // delete him
   listingInfo.remove(function(err) {
      if (err) throw err;

      console.log('Document successfully deleted!');
   });

  });
  
};
var updatePhelpsMemorial = function() {

Listing.findOneAndUpdate({ name: 'Phelps Laboratory' }, { adress: 'Gainesville, FL 32611' }, function(err, listingInfo) {
  if (err) throw err;

  // we have the updated user returned to us
  console.log(listingInfo);
});

};
var retrieveAllListings = function() {

// get all the users
Listing.find({}, function(err, listingInfo) {
  if (err) throw err;

  // object of all the users
  console.log(listingInfo);
});


};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();
