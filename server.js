const express = require('express')
const ejs = require('ejs')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const cron = require('node-cron')
const app = express()
require('dotenv').config();

//Controllers
const indexController = require('./controllers/indexController')
const storeDataController = require('./controllers/storeDataController')

//Mongodb Connection

//mongoose.connect('mongodb+srv://admin@cluster0.gexcq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
//mongoose.connect('mongodb://localhost:27017/')
mongoose.connect(process.env.MONGODB_URI_CONNECTION_STRING, { useNewUrlParser: true })
//mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });


// view engine setup
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.json()) 
app.use(express.urlencoded({extended:true}))
/*
app.get('/', (req,res) => {
    res.sendFile(__dirname+ '/views', '/index.html')})

*/
app.get('/', indexController);
app.post('/', storeDataController)


//Backup

//const { spawn } = require('child_process')

/*
const DB_NAME = "test"
const ARCHIVE_PATH = path.join(__dirname,'backup',`${DB_NAME}.gzip`)
*/

//mongodump mongodb+srv://admin:212546@cluster0.gexcq.mongodb.net/


//cron.schedule('*/1 * * * * ',() => backupMongoDB())
/*
function backupMongoDB() {
    
    const child = spawn('mongodump',
        ['mongodb+srv://admin@cluster0.gexcq.mongodb.net/test','--gzip'
    ])



    
    const child = spawn('mongodump', [
        `--db=${DB_NAME}`,
        `--archive=${ARCHIVE_PATH}`,
        '--gzip'
    ])
     

    child.stdin.write("212546\n");
    
    child.stdout.on('data',(data) => {
        console.log('stdout:\n', data)
    })
    child.stderr.on('data',(data) => {
        console.log('stderr:\n', Buffer.from(data).toString())
    })
    child.on('error', (error) => {
        console.log('error:\n', error)
    })
    child.on('exit', (code, signal) => {
        if (code) console.log('Process exit with code:', code)
        else if (signal) console.log ('Process killed with signal:', signal)
        else console.log('Backup is successful')
    })
        
}
*/

//Restore
//use 'restoreMongoDB()' to restore
//restoreMongoDB()

//mongorestore mongodb+srv://admin@cluster0.gexcq.mongodb.net/ --nsInclude test.datas

/*
function restoreMongoDB() {
    
    const child = spawn('mongorestore',
        ['mongodb+srv://admin:212546@cluster0.gexcq.mongodb.net/', 
            '--nsInclude',
            'test.datas',
            '--gzip'
        ])
    
    
        /*
    const child = spawn('mongorestore', [
        `--db=${DB_NAME}`,
        `--archive=${ARCHIVE_PATH}`,
        '--gzip'
    ])
    

    child.stdout.on('data',(data) => {
        console.log('stdout:\n', data)
    })
    child.stderr.on('data',(data) => {
        console.log('stderr:\n', Buffer.from(data).toString())
    })
    child.on('error', (error) => {
        console.log('error:\n', error)
    })
    child.on('exit', (code, signal) => {
        if (code) console.log('Process exit with code:', code)
        else if (signal) console.log ('Process killed with signal:', signal)
        else console.log('Restoring process is successful')
    })
}
*/



app.listen(8080,() => {

    console.log('server is running')
})