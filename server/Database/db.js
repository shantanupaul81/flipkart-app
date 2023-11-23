import mongoose from "mongoose";

const Connection = async(username,Password)=>{

// Password : flipkart123
// Username : flipkart

    const URL =`mongodb+srv://${username}:${Password}@flipkart.xwhz7gl.mongodb.net/?retryWrites=true&w=majority`
    try {
        
        await mongoose.connect(URL,{ useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database Connected Successfully');
    } catch (error) {
        console.log('Error while connecting db', error.message);
        
    }
}

export default Connection;