import multer from 'multer';
import crypto from 'crypto';
import path from 'path';
import { UPLOAD_DESTINATION } from '../../config';

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOAD_DESTINATION),
  filename: (req, file, cb) => {
    let filename = `${+new Date()}${file.originalname}`;
    let hash_filename = crypto.createHash('sha256').update(filename).digest('hex');
    cb(null, hash_filename + path.extname(file.originalname));
  }
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if(!file.originalname.match(/\.(jpg|jpeg|png)$/))
      return cb(new Error('Only images are allow'));

    cb(null, true);
  }
});

export default upload;
