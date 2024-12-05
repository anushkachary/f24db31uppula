const mongoose = require("mongoose")
const artifactSchema = mongoose.Schema({
    artifactName: { type: String, required: true },
    originYear: { 
        type: String, 
        required: true,
        validate: {
            validator: function (value) {
                // Regex to match a year followed by BC or AD
                return /^(\d{1,4})\s?(BC|AD)$/.test(value);
            },
            message: `Origin Year is not a valid year format. Use formats like '1345 BC' or '2023 AD'.`
        }
    },
    culture: { type: String, required: true }
})
module.exports = mongoose.model("Artifact", artifactSchema)