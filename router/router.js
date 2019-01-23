const router = require('express').Router();
const Image = require('../model/image');
router.get('/images',(req,res)=>{
    Image.find((err,images)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(images);
        }
    }).sort("-_id");
});


router.post("/image",(req,res)=>{
    let newImage = new Image({
        title : req.body.title,
        imageName : req.body.imageName,
        description : req.body.description
    });
    newImage.save((err,image)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json({status:true,msg:'Successfully inserted'});
        }
    })
})

router.delete("/image/:id",(req,res)=>{
    Image.deleteOne({_id:req.params.id},(err)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json({status:true,msg:"succesfully Deleted"})
        }
    })
});

module.exports = router;