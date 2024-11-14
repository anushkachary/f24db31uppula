const mongoose = require("mongoose")
const artifactSchema = mongoose.Schema({
    artifactName: String,
    originYear: String,
    culture: String
})
module.exports = mongoose.model("Artifact", artifactSchema)