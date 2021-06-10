const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    eventTitle : String,
    eventLocation : String,
    eventDate : String,
    eventDuration : String,
    eventEmail : String,
    blogAuthorId : String,
    blogAuthor : String,
    blogAuthorName : String,
    blogAuthorThumbnil : String
}, {
    writeConcern: {
      w: 'majority',
      j: true,
      wtimeout: 1000
    }
  });

const NewEvent = mongoose.model('newevent', eventSchema);

module.exports = NewEvent;
