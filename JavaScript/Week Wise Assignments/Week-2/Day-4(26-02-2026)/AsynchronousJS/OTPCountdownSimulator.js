console.log('OTP sent successfully')
let n=10
let timer=setInterval(()=>{
    console.log(`wait ${n} seconds to resend`)
    n--
    if(n<=0){
        clearInterval(timer)
    }
},1000)
setTimeout(()=>{
    console.log('Resend is available')
},11000)
