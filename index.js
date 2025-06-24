require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app=express();


const port=process.env.PORT||3000;
app.use(cors());
app.use(express.json());
const uri = `mongodb+srv://${process.env.DB_User}:${process.env.DB_Pass}@cluster0.ybtne86.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
  
    let testCollection=client.db('testdb').collection('test');
    let hubbyCollection=client.db('hubbydb').collection('hubby')
    let userCollection=client.db('userdb').collection('user');
    let GroupCollection=client.db('groupdb').collection('group');
    app.post('/test',async(req,res)=>{
     let data=req.body;
     console.log(data)
     let result=await testCollection.insertOne(data);
     res.send(result);
     console.log(data);   
    })
    app.post('/user',async(req,res)=>{
        let data=req.body;
        let result=await userCollection.insertOne(data);
        res.send(result);
    }) 
    app.post('/group',async(req,res)=>{
      let data=req.body;
      let result=await GroupCollection.insertOne(data);
      res.send(result)
    })
     app.get('/group',async(req,res)=>{
        let data=await GroupCollection.find().toArray();
        res.send(data);
    })

    app.get('/group/:id',async(req,res)=>{
      let id=req.params.id;
      let quary={_id:new ObjectId(id)}
      let result=await GroupCollection.findOne(quary);
      res.send(result);
    })

    app.delete('/group/:id',async(req,res)=>{
       let id=req.params.id;
      let quary={_id:new ObjectId(id)}
      let result=await GroupCollection.deleteOne(quary);
      res.send(result);
    })
  
    app.get('/user',async(req,res)=>{
        let data=await userCollection.find().toArray();
        res.send(data);
    })
    app.post('/hubby',async(req,res)=>{
     let data=req.body;
     console.log(data)
     let result=await hubbyCollection.insertOne(data);
     res.send(result);
     console.log(data);   
    })
    app.put('/group/:id',async(req,res)=>{
      let id =req.params.id;
        let quary={_id:new ObjectId(id)}
        let UpdateData=req.body;
        let updateDoc={
          $set:UpdateData
        }
        let result=await GroupCollection.updateOne(quary,updateDoc)
        res.send(result)
    })
        app.patch('/group/:id',async(req,res)=>{
      let id =req.params.id;
        let quary={_id:new ObjectId(id)}
        let updateDoc={
          $set:{
          isCompleted:true,

          }
        }
        let result=await GroupCollection.updateOne(quary,updateDoc,{upsert:true})
        res.send(result)
    })
    app.get('/test',async(req,res)=>{
        let data=await testCollection.find().toArray()
        res.send(data)
    })
    // await client.db("admin").command({ ping: 1 });
    console.log(" Bhaia connected hoise mongodbConnect");
  } finally {
    
  }
}
run().catch(console.dir);

app.get('/',(req,res)=>{
    res.send("Assignment Server is Running on Ui");
})
app.listen(port,()=>{
    console.log(`Assignment Server is running on${port}`)
})