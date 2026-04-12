import exp from 'express'
import { connect } from 'mongoose'
import { employeeApp } from './APis/EmployeeAPI.js'
import cors from 'cors'
const app = exp()

//add cord middleware
app.use(
  cors({
    origin: ['http://localhost:5173']
  })
)

//body parser middleware
app.use(exp.json())

//path level middleware
app.use('/employee-api', employeeApp)

//Connect to DB
const connectDB = async () => {
  try {
    await connect('mongodb://localhost:27017/febe')
    console.log('DB Connected')
    const port = 4000
    app.listen(port, () => console.log(`server listening on ${port}`))
  } catch (err) {
    console.log('Error in DB Connect', err)
  }
}
connectDB()

//to handle invalid path
app.use((req, res, next) => {
  console.log(req.url)
  res.status(404).json({ message: `path ${req.url} is invalid` })
})

//To handle errors
app.use((err, req, res, next) => {
  console.log(err.name)
  console.log(err)
  //ValidationError
  if (err.name === 'ValidationError') {
    return res
      .status(400)
      .json({ message: 'Error occured', error: err.message })
  }
  //CastError
  if (err.name === 'CastError') {
    return res
      .status(400)
      .json({ message: 'Error occured', error: err.message })
  }
  //Send server side errors
  res.status(500).json({ message: 'Error occured', error: err.message })
})
