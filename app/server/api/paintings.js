import { Router } from 'express'

const router = Router()

router.get('/paintings', (req, res, next) => {
  res.json([])
})

router.get('/paintings/:id', (req, res, next) => {
  const id = parseInt(req.params.id)
  res.json({});
})

export default router
