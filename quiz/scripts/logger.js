// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 
const logger = {
    logMsg: function(){
        if (this.errMsg){
            console.log(`Error Message from : ${this.errMsg}`);
        }

    }
}

const obj1 ={
    errMsg : "Err in obj 1"
}


logger.logMsg.call(obj1)