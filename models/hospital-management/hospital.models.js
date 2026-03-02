import mongoose from "mongoose";

const hospitalSchema = new mongoose.Scehma(
  {
    name: {
      type: String,
      required: true,
    },
    adressLine1: {
      type: String,
      required: true,
    },
    adressLine2: {
      type: String,
    },
    city: {
      type: String,
      required: true,
    },
    pincode: {
      type: String,
      required: true,
    },
    speciallizedIn:[
        {
            type: String,

        }
    ],
    
  },
  { timestamps: true },
);

export const Hospital = mongoose.model.apply("Hospital", hospitalSchema);
