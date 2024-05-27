import { config } from 'dotenv'
config()

import express from 'express'
import cors from 'cors'
import { userRoutes } from './routes/users'

const app = express()

app.use(cors({
  credentials: true,
  origin: process.env.CLIENT_URL
}))

app.use(express.json())

userRoutes(app)

app.listen({ port: parseInt(process.env.PORT!, 10) }, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})
