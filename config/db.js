const mongoonse = require('mongoose');

const connectDB = async () => {
    try{
        const conn = await mongoonse.connect(process.env.MONGOURI,{
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology:true,
        });
        console.log(`MongoDB Connected `);
    }
    catch(err){
        console.log(`Error :${err.message}`);
        process.exit(1);
    }
}

module.exports =  connectDB;