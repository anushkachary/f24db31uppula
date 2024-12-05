const mongoose = require("mongoose")
const artifactSchema = mongoose.Schema({
    artifactName: {
      type: String,
      required: [true, 'Artifact Name is required.'],
      minlength: [3, 'Artifact Name must be at least 3 characters long.'],
      maxlength: [50, 'Artifact Name cannot exceed 50 characters.'],
      validate: {
        validator: function (value) {
          // Allow letters, numbers, spaces, and some punctuation
          return /^[\w\s.,'-]+$/.test(value);
        },
        message: `Artifact Name contains invalid characters.`
      }
    },
    originYear: {
      type: String,
      required: [true, 'Origin Year is required.'],
      validate: {
        validator: function (value) {
          // Regex to match a year followed by BC or AD
          return /^(\d{1,4})\s?(BC|AD)$/.test(value);
        },
        message: `Origin Year is not a valid year format. Use formats like '1345 BC' or '2023 AD'.`
      }
    },
    culture: {
      type: String,
      required: [true, 'Culture is required.'],
      minlength: [3, 'Culture must be at least 3 characters long.'],
      maxlength: [30, 'Culture cannot exceed 30 characters.'],
      validate: {
        validator: function (value) {
          // Allow letters, spaces, and some punctuation
          return /^[a-zA-Z\s.,'-]+$/.test(value);
        },
        message: `Culture contains invalid characters.`
      }
    }
  });
  
module.exports = mongoose.model("Artifact", artifactSchema)