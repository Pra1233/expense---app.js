const AWS=require('aws-sdk');
require("dotenv").config();

function uploadToS3(data,filename){
    try{
      const BUCKETNAME=process.env.BUCKET_NAME;
      const KEY=process.env.IAM_USER_KEY;
      const SECRET=process.env.IAM_USER_SECRET;
      
      let s3bucket=new AWS.S3({  
        accessKeyId:KEY,
        secretAccessKey:SECRET,
      })
        var params={
          Bucket:BUCKETNAME,
          Key:filename,  //where data save
          Body:data,
          ACL:'public-read' //Access control level
        }
        return new Promise((resolve,reject)=>{
          s3bucket.upload(params,(err,s3response)=>{
            if(err){
              console.log("Something went wrong");
              console.log(err);
              reject(err);
            }
            else{
              console.log("Success",s3response);
             resolve(s3response.Location);
            }
          })
        })
    }
  catch(e){
    console.log(e);
    res.status(500).json({message:e});
  }
  
  
  }

  module.exports={
    uploadToS3,
  }