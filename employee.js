import mongoose from "mongoose";
const EmployeeSchema = new mongoose.Schema({
  name: String,
  language: String,
  salary: Number,
  city: String,
  isManager: Boolean,
});

export const EmployeeData = mongoose.model("EmployeeData", EmployeeSchema);
