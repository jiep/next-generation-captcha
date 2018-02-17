import { Router } from 'express';
import { newPainting, getPaintingById, getPaintings } from './functions/paintings';
import upload from './storage';

const router = Router();

router.post('/paintings', upload.single('file'), newPainting);
router.get('/paintings/:id', getPaintingById);
router.get('/paintings', getPaintings);

export default router;
