import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "User name wajib di isi"],
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email wajib di isi"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "password wajib di isi"],
    },
  },

  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
