import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

// Abuur `__dirname`
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadPath = path.join(__dirname, "uploads");
        fs.mkdirSync(uploadPath, { recursive: true }); // Abuur galka haddii uusan jirin
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname.replace(/\s/g, "_")); // Magac fayl cusub
    }
});

const upload = multer({ storage: storage });

export default upload;
