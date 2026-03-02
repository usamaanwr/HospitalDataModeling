import mongoose from "mongoose";

const patientSchema = new mongoose.Scehma({

    name:{
        type : String,
        required: true
    },
    diagnosedWith : {
        type: String,
        required : true
    },
    adress : {
        type: String,
        required : true
    },
    age : {
        type: Number,
        required : true
    },
    bloodGroup : {
        type: Number,
        required : true
    },
    gender : {
        type: Number,
        enum : ["M", "F" , "O"]
    },
    admittedIn : {
        type: mongoose.Scehma.Types.ObjectId,
        ref : "Hospital",
       
    },
}, {timestamps: true})

export const Patient = mongoose.model.apply("Patient" , patientSchema)
