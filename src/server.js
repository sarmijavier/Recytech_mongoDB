const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const morgan = require('morgan')
const methodOverride = require('method-override')
const flash = require('connect-flash')
const session = require('express-session')

//Initializations
const app = express()


//settings 
app.set('port', process.env.PORT || 4000)
app.set('views', path.join(__dirname,'views'))
app.engine('hbs', exphbs({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials')    
}))
app.set('view engine', 'hbs')

//middleswares peticiones cuando llega un usuario
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))
app.use(flash())

//Global Variabels
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    next()
})

//routes
app.use(require('./routes/index_routes'))
app.use(require('./routes/place_routes'))
app.use(require('./routes/collector_routes'))

//Static files
app.use(express.static(path.join(__dirname, 'public')))



module.exports = app