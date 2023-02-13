const mongoose = require("mongoose");

mongoose.set("strictQuery" , true);

mongoose.connect('mongodb+srv://ashutosh18:bhallajatt@cluster0.6kcnwii.mongodb.net/?retryWrites=true&w=majority', { tls: true, ssl: true })
.then(() => {
    console.log("Connection Successful!");
}).catch((err) => {
    console.log(err);
}); 