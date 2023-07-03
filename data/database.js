import mongoose from 'mongoose';
mongoose.set('strictQuery', false);
export const connectDB = () => {
    mongoose
        .connect(process.env.MONGO_URL, { dbName: "TodoList", })
        .then(() => { console.log("data base connected") })
        .catch((err) => { console.log(err) });
}