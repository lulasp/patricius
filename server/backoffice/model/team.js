// Dependências
let mongoose = require("mongoose")
let Schema = mongoose.Schema

//Model
const TeamSchema = new Schema(
	{
		name: { 
			type: String, 
			index: { 
				unique: true 
			}
		}, 
		imgs: 
		[
			{
				src: String,
				order: Number
			}
		]
	}, 
	{	// Opções
		collection: "teams",
		timestamps: true
	}
)

let Team = mongoose.model("teams", TeamSchema)

module.exports = Team