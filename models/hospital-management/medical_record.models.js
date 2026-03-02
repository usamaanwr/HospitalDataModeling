import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Scehma({

}, {timestamps: true})

export const MedicalRecord = mongoose.model.apply("MedicalRecord" , medicalRecordSchema)
