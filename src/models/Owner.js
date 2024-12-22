import { Schema, model } from "mongoose";

const ownerCollection = "owners";

const ownerSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    pet: {
        type: Schema.Types.ObjectId,
        ref: "pets"
    }
}, {
    versionKey: false,
    timestamps: false
})

const ownerModel = model(ownerCollection, ownerSchema);

export default ownerModel
