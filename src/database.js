const mongoose = require('mongoose')
    

const { RECYTECH_APP_MONGODB_HOST, RECYTECH_APP_MONGODB_DATABASE } = process.env
const MONGODB_URI = `mongodb://${RECYTECH_APP_MONGODB_HOST}/${RECYTECH_APP_MONGODB_DATABASE}`

mongoose.connect(MONGODB_URI, {
    useUnifieldTopology: true,
    useNewUrlParser: true,
    useCreateIndex:true
})
    .then(db => console.log('Database is connected' + MONGODB_URI))
    .catch(err => console.log(err))