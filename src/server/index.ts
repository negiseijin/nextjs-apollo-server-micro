import express from 'express'

const PORT = 3000
const app: express.Express = express()

// CORSの許可
app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (_req, res) => {
  res.send('Hello Express!')
})

// APIサーバ起動
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Example app listening on port 3000!')
})

export default app
