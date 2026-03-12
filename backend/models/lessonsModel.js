import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema(
  {
    lessonID: {
      type: String,
      unique: true,
      required: true,
    },
    courseID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    description: String,

    videoURL: {
      type: String,
      required: true,
    },

    order: Number,

    deletedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true },
);

export default mongoose.model("Lesson", lessonSchema);
