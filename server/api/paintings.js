import { Router } from 'express';
import { newPainting, getPaintingById } from './functions/paintings';
import upload from './storage';

const router = Router();

router.post('/paintings', upload.single('file'), newPainting);

router.get('/paintings/:id', getPaintingById);


router.get('/paintings', (req, res, next) => {
  res.json([]);
});

export default router;
