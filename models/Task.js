
import mongoose from 'mongoose';
const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserData",  // y us collection kaa reference hoga too user ka hoga
        required: true,
    }
})
export const TaskModel = mongoose.model("TaskData", TaskSchema);
