import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import productRoutes from "./routes/products.js"

const app = express()

app.use(cors())
app.use(express.json())

// MongoDB connection
mongoose.connect(
  "mongodb+srv://craftco_admin:craftco123@craftco-lab.ycmedvl.mongodb.net/craftco?retryWrites=true&w=majority"
)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err))

// Test route
app.get("/", (req, res) => {
  res.send("API Running 🚀")
})

// Product routes
app.use("/api/products", productRoutes)

// Start server
const PORT = 3001

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`)
})