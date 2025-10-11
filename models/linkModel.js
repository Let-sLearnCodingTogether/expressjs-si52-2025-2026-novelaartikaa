import mongoose from "mongoose";

const LinkSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title wajib di isi"],
      unique: true,
      trim: true,
    },
    icon: {
      type: String,
      required: [true, "Icon wajib di isi"],
      trim: true,
    },
    url: {
      type: String,
      minLength: [10, "URL minimal 10 karakter"],
      maxLength: [255, "URL maksimal 255 karakter"],
      required: [true, "URL wajib di isi"],
      trim: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User wajib di isi"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Link", LinkSchema);
