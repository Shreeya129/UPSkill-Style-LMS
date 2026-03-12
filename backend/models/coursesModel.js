import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    courseID: {
      type: String,
      unique: true,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    description: String,

    outcome: String,
    
    image: String,

    status: {
      type: String,
      enum: ["Published", "Pending"],
      default: "Pending",
    },

    instructorID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    deletedAt: {
      type: Date,
      default: null,
    },  
  },
  { timestamps: true },
);

export default mongoose.model("Course", courseSchema);
