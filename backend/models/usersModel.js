import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userID: {
      type: String,
      unique: true,
      required: true,
    },

    name: {
      type: String,
      required: true,
    }, 

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    organizationName: {
      type: String,
    },

    role: {
      type: String,
      enum: ["STUDENT", "INSTRUCTOR"],
      required: true,
    },

    deletedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true },
);

export default mongoose.model("User", userSchema);
