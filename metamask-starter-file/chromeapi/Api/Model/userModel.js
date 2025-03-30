const mongoose=require("mongoose");

const bcrypt = require("bcrypt");   

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please all us your name!"]
    },
    email:{
        type:String,
        required:[true,"please all us your email!"],
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:[true,"please all us your password!"]
    },
 passwordConfirm:{
        type:String,
        required:[true,"please all us your password!"],
        validate:{
            validator:function(el){
                return el===this.password;
            },
            massage:"passwords are not the same! "
        },
    },


address:String,
private_key:String,
mnemonic:String,
});

userSchema.pre("save",async function(next){

    //0nly run this function if password was actually modified
    if(!this.isModified("password")) return next();

    //Hash the password with cost of 12
    this.passsword=await bcrypt.hash(this.password,12);

//delet passwordConfirm dield
this.passwordConfirm=undefined;
next();
});

userSchema.pre("save",function(next){
    if(!this.isModified("password")|| this.isNew)return next();

    this.passwordChangedAt=Date.now()-1000;
    next();
});


userSchema.pre(/^find/,function(next){
    //this points to the current qurey 
    this.find({active:{$ne:false}});
    next();
    
});


userSchema.methode.correctPassword=async function(candidatePassword,userPassword){
    return await bcrypt.compare(candidatePassword,userPassword);
};

userSchema.methode.changedPasswordAfter=function(JWTTimestamp){
    if(this.passswordChangedAt){
        const changedTimestamp=parseInt(this.passswordChangedAt.getTime()/1000,10)

        return JWTTimestamp<changedTimestamp;
    }
    return false;
};

const User=mongoose.model("User",userSchema);

module.exports=User;


    
