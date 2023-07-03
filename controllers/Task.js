import { TaskModel } from "../models/Task.js";
export const newTask = async (req, res, next) => {
    try {
        const { title, description } = req.body;
        let task = await TaskModel.create({ title, description, user: req.user });

        res.status(201).json({
            success: true,
            message: "Task added successfully"
        })
    } catch (error) {
        console.log(error);
    }


}

export const getMyTask = async (req, res, next) => {

    try {
        const userId = req.user._id;
        const task = await TaskModel.find({ user: userId });
        res.status(201).json({
            success: true,
            task
        })
    } catch (error) {
        console.log(error);
    }

}


export const UpdateTask = async (req, res, next) => {
    try {
        const { id } = req.params;
        const task = await TaskModel.findById(id);
        if (!task) {
            return next(new Error("id not present"));
        }
        task.isCompleted = !task.isCompleted;
        await task.save();
        res.status(201).json({
            success: true,
            message: "Task  Updated",
            task
        });
    } catch (error) {
        console.log(error);
    }

}
export const deleteTask = async (req, res, next) => {
    try {
        const { id } = req.params;
        const task = await TaskModel.findById(id);
        if (!task) {
            return next(new Error("id not present"));
        }
        const deletedtask = task;
        await task.delete();
        res.status(201).json({
            success: true,
            message: "Task  deleted",
            deletedtask
        });
    } catch (error) {
        console.log(error);
    }

}