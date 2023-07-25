import PostMessage from '../models/postMessage.js';


export const getPosts= async (req,res) => {
    try
    {
        const postsMessages = await PostMessage.find();
        console.log(postsMessages);
        res.status(200).json(postsMessages);
    }
    catch(err)
    {
        res.status(500).json({message:err.message});
        console.log(err)
    }
}

export const createPost= async (req,res) => {
   var postDat=req.body;
   var newPost=new PostMessage(postDat);
   try{
    newPost.save();
    res.status(201).json(newPost);
   }
   catch(err)
   {
       res.status(500).json({message:err.message});
       console.log(err)
   }
}