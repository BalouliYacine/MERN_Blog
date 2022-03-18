const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/postes")
const catRoute = require("./routes/catergorys")
const multer = require('multer')

const app = express()
dotenv.config()
app.use(express.json())

mongoose.connect(process.env.MongoURl)
    .then(console.log('Connected to DB'))
    .catch((e) => { console.log(e) }
    );

// IMG Upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    }, filename: (req, file, cb) => {
        cb(null, 'req.jpg')
    }
})
const upload = multer({ storage: storage })
app.post('/api/upload', upload.single('file'), (req, res) => {
    res.status(200).json('IMG Uploaded')
})
//

app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/posts', postRoute)
app.use('/api/catergorys', catRoute)

app.get('/', (req, res) => {
    res.send('<h1>SERVER UP</h1>')
})

app.listen('5000', () => {
    console.log('SERVER UP => 5000');
})

