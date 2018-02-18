import { Router } from 'express';
import { newPainting, getPaintingById, getPaintings, submitForm } from './functions/paintings';
import upload from './storage';

const router = Router();

router.post('/paintings', upload.single('file'), newPainting);
router.get('/paintings/:id', getPaintingById);
router.get('/paintings', getPaintings);
router.post('/paintings/check', submitForm);

export default router;
