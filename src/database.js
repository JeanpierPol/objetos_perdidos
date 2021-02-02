const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/ObjetosPerdidos', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex:true
})

.then(db => console.log('database is connected'))
.catch(err => console.log(err));

module.exports=mongoose.connect