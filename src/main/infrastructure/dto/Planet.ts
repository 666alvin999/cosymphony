import mongoose, {Schema} from "mongoose";

const PlanetSchema = new Schema(
	{
		name: {
			type: String,
			required: true
		},
		type: {
			type: String,
			required: true
		},
		mass: {
			type: {
				value: {type: Number, required: true},
				exponent: {type: Number, required: true}
			},
			required: true
		},
		revolutionSpeedInDays: {
			type: Number,
			required: true
		}
	},
	{
		timestamps: true
	}
);

export const Planet = mongoose.model('Planets', PlanetSchema);
