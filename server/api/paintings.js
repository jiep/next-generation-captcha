import { Router } from 'express';
import { newPainting } from './functions/paintings';

const router = Router();

router.post('/paintings', newPainting);

router.get('/paintings', (req, res, next) => {
  res.json([]);
});

router.get('/paintings/:id', (req, res, next) => {
  console.log(req.params.id);
  const id = parseInt(req.params.id);
  res.json({id: id});
});

export default router;
