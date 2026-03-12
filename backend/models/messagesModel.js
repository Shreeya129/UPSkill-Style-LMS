import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    messageID: {
      type: String,
      unique: true,
      required: true,
    },
    instructorID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    studentID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    name: String,

    email: String,

    message: String,

    deletedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Message", messageSchema);
