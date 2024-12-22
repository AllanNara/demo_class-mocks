import app from "./src/app.js";
import { connectDatabase } from "./src/mongoose.js";
import displayRoutes from "express-routemap";

const PORT = 8080;
await connectDatabase();

app.listen(PORT, () => {
    displayRoutes(app);
    console.log(`server running on port ${PORT}`)
})