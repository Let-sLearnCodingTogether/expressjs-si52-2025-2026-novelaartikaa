import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema(
  {
    displayName: {
      type: String,
      required: [true, "User name wajib di isi"],
      unique: true,
      trim: true,
    },
    profilePicture: {
      type: String,
      required: [true, "Profile picture wajib di isi"],
      trim: true,
    },
    bio: {
      type: String,
      minLength: [10, "minimal 10 karakter"],
      mixlength: [15, "minimal 10 karakter"],
      required: [true, "Bio wajib di isi"],
      trim: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Profile", ProfileSchema);
