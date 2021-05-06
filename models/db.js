const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/StudentDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
err => {
    if(!err) {
        console.log('connection succesful');
    }
    else {
        console.log('Error in mongo connection' +err);
    }
});

require('./student.model');