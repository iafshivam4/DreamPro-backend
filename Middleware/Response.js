exports.success= function(req,res,msg,data){

    res.status(200).json({
        status:true,
        message:msg,
        data:data
    });

}

exports.failure= function(req,res,msg){

    res.status(400).json({
        status:false,
        message:msg,
    });

}