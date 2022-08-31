import express from 'express'
import cors from 'cors'

import routes from './routes'

const app = express();

app.use(express.json())

app.use(cors)

app.disable('x-powered-by')

app.use(routes)

app.listen(3333, () => 'server running on port 3333')