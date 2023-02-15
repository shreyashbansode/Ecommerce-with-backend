
const model = require('../models/cart');




exports. createCart = async(req,res)=>{
  try{
      const savedData = await new model(req.body).save();
      res.json(savedData);
  }
  catch(err){
  res.json(err);
  }
}
exports. getallCart =async (req,res)=>{
  try{
      const savedData = await model.find();
      res.json(savedData);
  }
  catch(err){
      res.json(err);
  }
}
exports. deleteCart =async (req,res)=>{
  try{
      const savedData = await model.findOneAndDelete({_id:req.params.id});
      res.json(savedData);
  }
  catch(err){
      res.json(err);
  }
}


exports.update = (req,res)=>{

  model.findOneAndUpdate({_id:req.params.id},req.body,{new:true},(err ,data)=>{
   if(err){
     res.json({err});
   }else{
     res.json(data);
   }
  })
 }

