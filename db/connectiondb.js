import dotenv from 'dotenv';
dotenv.config()




import { MongoClient } from "mongodb";
const url = process.env.URI
const client = new MongoClient(url)
client.connect().then(()=>{
    console.log('successfully connected')
}).catch(err => console.log('error connecting'));


const db = client.db('summit');

export default db