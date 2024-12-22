import { Schema, model } from "mongoose";

const petCollection = "pets";

const petSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    specie: {
        type: String,
        required: true
    },
    age: String,
    birthday: Date,
    owner: {
        type: Schema.Types.ObjectId,
        ref: "owners"
    },
    vaccines: {
        type: Boolean,
        default: false
    }
}, {
    versionKey: false,
    timestamps: false
})

const petModel = model(petCollection, petSchema);

export default petModel