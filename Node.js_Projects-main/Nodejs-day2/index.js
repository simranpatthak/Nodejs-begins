const otp=require('otp-generater')

function otpGenerator(){
    let otp=otpGenerator.generate(6,{digits:true,lowerCaseAlphabets:false,upperCaseAlphnabets,specialChars:false})
    console.log(otp)
}
otpGenerator()