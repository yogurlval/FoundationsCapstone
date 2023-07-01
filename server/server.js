const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('public'))

const {
    saveStory,
    displayStory,
    deleteStory
} = require('./controller')


app.post('/api/stories', saveStory)
app.get('/api/stories', displayStory)
app.delete('/api/stories/:id', deleteStory)


app.listen(4040, console.log('Over here on 4040!'))