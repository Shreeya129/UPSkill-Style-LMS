import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema(
  {
    enrollmentID: {
      type: String,
      unique: true,
      required: true,
    },
    studentID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true, 
    },

    courseID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },

    progress: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: ["Pending", "Done"],
      default: "Pending",
    },

    enrolledAt: {
      type: Date,
      default: Date.now,
    },

    deletedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Enrollment", enrollmentSchema);
