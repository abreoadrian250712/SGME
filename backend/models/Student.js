const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let studentSchema = new Schema(
  {
    tdocumento: {
      type: String,
    },
    documento: {
      type: Number,
    },
    nombres: {
      type: String,
    },
    apellidos: {
      type: String,
    },
    pacademico: {
      type: Number,
    },
    sede: {
      type: String,
    },
    grado: {
      type: Number,
    },
    grupo: {
      type: Number,
    },
  },
  {
    collection: "students",
  }
);

module.exports = mongoose.model("Student", studentSchema);
