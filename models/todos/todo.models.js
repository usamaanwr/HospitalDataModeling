import { Timestamp } from "bson"
import mongoose from mongoose
import { SubTodo } from "../todos/sub_Todo.models.js"

const todoSchema = new mongoose.Schema({
  content :{
    type:String,
    required : true,
  },
  complete:{
type :Boolean,
default : false
  },
  createdBY:{
    type:mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  SubTodo: [
    {
      type:mongoose.Schema.Types.ObjectId,
      ref : "SubTodo"
    }
    //array of  subtodos
  ]
},{Timestamp: true})
export const Todo = mongoose.model("Todo" , todoSchema) 