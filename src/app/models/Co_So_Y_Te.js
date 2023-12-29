const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Yte = new Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: Number, required: true },
    time: { type: String, required: true },
    typeHospital: { type: String, required: true },
    desc: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// Tạo text index cho trường name và desc
Yte.index({ name: "text", desc: "text" });

module.exports = mongoose.model("Yte", Yte);
