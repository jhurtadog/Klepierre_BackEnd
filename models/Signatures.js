import mongoose from "mongoose";

const SignaturesSchema = mongoose.Schema(
    {
        communicationTypeId: {
            type: Number,
            required: true,
        },
        signerTitle: {
            type: String,
            trim: true,
        },
        signerText: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

const Signature = mongoose.model("Signature", SignaturesSchema);
export default Signature;