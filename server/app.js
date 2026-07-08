const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const { PORT, DB_URL } = require("./config/conf")
const goalRouter = require("./routes/goalRouter")

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/goals', goalRouter)

const main = async () => {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => {
            console.log(`Server is running on ${PORT} port`)
        })
    } catch (err) {
        console.log(err)
    }
}

main()

process.on("SIGINT", async () => {
    await mongoose.disconnect()
    process.exit()
})