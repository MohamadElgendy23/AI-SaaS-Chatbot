import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";
connectToDatabase().then(() => {
    app.listen(5000, () => console.log("Server listening on port 5000"));
}).catch((err) => console.log(err));
//# sourceMappingURL=index.js.map