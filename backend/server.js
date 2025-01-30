import express from 'express'
import connectDB from './config/db.js'
import 'dotenv/config'
const app = express()
const port = process.env.PORT || 3001
connectDB()

app.use(express.json())
// app.use(cors())


// app.use('/api/user', userRouter)
// app.use('/api/product', productRouter)
// app.use('/api/cart',cartRouter)
// app.use('/api/order',orderRouter)

app.get('/', (req, res) => {
  res.send('Api Working')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})