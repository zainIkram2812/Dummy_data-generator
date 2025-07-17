import express from "express";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import { EmployeeData } from "./models/employee.js";
import { faker } from "@faker-js/faker";

const app = express();
const port = 3000;
// connecting the database
mongoose
  .connect("mongodb://localhost:27017/")
  .then(() => {
    console.log("MongoDb connected");
  })
  .catch((error) => {
    console.log("MongoDb is not connected", error);
  });
//   determining the statci files
app.use(express.static("public"));
app.use(express.json());
// Defining the languages
const languages = [
  "Python",
  "Java",
  "JavaScript",
  "C",
  "C++",
  "Rust",
  "Go",
  "Ruby",
  "TypeScript",
];
// adding the dummy data to the dataBase
app.post("/generate-data", async (req, res) => {
  // deleting the data if exited before
  try {
    await EmployeeData.deleteMany({});
    const employees = Array.from({ length: 10 }, () => ({
      name: faker.person.fullName(),
      language: languages[Math.floor(Math.random() * languages.length)],
      salary: faker.number.int({ min: 500000, max: 800000 }),
      city: faker.location.city(),
      isManager: Math.random() < 0.5,
    }));
    //   adding the new dummy data
    await EmployeeData.insertMany(employees);
    res.status(200).json({ message: "Dummy data is generated successfully" });
  } catch (error) {
    console.log("Dummy data is not generated successfully", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
// adding the employee route
app.get("/employee", async (req, res) => {
  try {
    const employees = await EmployeeData.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: "Error fetching employees" });
  }
});
// getting the port
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
