const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://superuser:jvPh60sb@allyoucanbuy.n703n.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if(err) console.log(JSON.stringify(err));
    else console.log('Mongo connected successfully');
});