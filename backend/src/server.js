import { app } from "./app.js";
import { fileURLToPath } from 'url'
import path from 'path'
import dotenv from 'dotenv'

const __filename = fileURLToPath(import.meta.url);
const currentDir = path.dirname(__filename);

dotenv.config({
  path: path.join(currentDir, '../.env')
})

const PORT = process.env.APP_PORT
app.listen(PORT, () => {
  console.log(`App is running at http://localhost:${PORT}`);
});