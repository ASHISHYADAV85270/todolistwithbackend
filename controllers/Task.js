import { TaskModel } from "../models/Task.js";
export const newTask = async (req, res, next) => {

    const { title, description } = req.body;
    let task = await TaskModel.create({ title, description, user: req.user });

    res.status(201).json({
        success: true,
        message: "Task added successfully"
    })
}

export const getMyTask = async (req, res, next) => {
    const userId = req.user._id;
    const task = await TaskModel.find({ user: userId });
    res.status(201).json({
        success: true,
        task
    })
}


export const UpdateTask = async (req, res, next) => {
    const { id } = req.params;
    let task = await TaskModel.findById(id);
    if (!task) {
        return res.status(404).json({
            success: false,
            message: "Task Not found with that id"
        })
    }
    task.isCompleted = !task.isCompleted;
    await task.save();
    res.status(201).json({
        success: true,
        message: "Task  Updated",
        task
    })
}
export const deleteTask = async (req, res, next) => {
    const { id } = req.params;
    const task = await TaskModel.findById(id);
    if (!task) {
        return res.status(404).json({
            success: false,
            message: "Task Not found with that id"
        })
    }
    const deletedtask = task;
    await task.remove();
    res.status(201).json({
        success: true,
        message: "Task  deleted",
        deletedtask
    });
}