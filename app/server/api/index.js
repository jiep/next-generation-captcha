import { Router } from 'express'

import paintings from './paintings'

const router = Router()

router.use(paintings)

export default router
