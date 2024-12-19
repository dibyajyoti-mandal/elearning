import multer from "multer"
import {v4 as uuid} from "uuid"

const storage = multer.diskStorage({
    destination(res, file, cb){
        cb(null, "uploads")
    },
    filename(req, file, cb) {
        const id = uuid();
    
        const extName = file.originalname.split(".").pop();
    
        const fileName = `${id}.${extName}`;
    
        cb(null, fileName);
      },
})

export const uploadFiles = multer({ storage }).single("file");
