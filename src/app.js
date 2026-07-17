import express from "express"
import cors from "cors"

const app = express()

// basic configuration
app.use(express.json({ limit: "16kb" })) // to accept json data (body) and limit so that nothing excess can be shared

app.use(express.urlencoded({extended: true, limit: "16kb"})) // to accept data from url

app.use(express.static("public")) // so that public folder will be accessible to all


// cors configuration
app.use(cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    credentials: true,
    methods: ["GET","POST","PUT","PATCH","DELETE","OPTIONS"],
    allowedHeaders: ["Content-Type","Authorization"]
}))

// import the routes
import healthCheckRouter from "./routes/healthCheck.routes.js"

app.use("/api/v1/healthcheck", healthCheckRouter)

app.get("/", (req, res) => {
    res.send("Welcome to base camp")
})

export default app