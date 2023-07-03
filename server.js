import { app } from './app.js';
import { connectDB } from './data/database.js';
connectDB();

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: "this is a backend server"
    })
})
app.listen(process.env.PORT, () => {
    console.log("server created");
});