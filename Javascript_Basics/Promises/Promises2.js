function download(url){

    //step 2 - promise object is created
    //step 3 - executor function runs immediatelyy
    return new Promise(function exec(res,rej){
        console.log("Started downloading data from:",url);   // step 4 - this runs first inside the promise
        setTimeout(function(){                               // step 5 - setTimeout is sent to web apis
            let data = "some data from" + url;               // step 9 - this callback executes after 3 seconds
            console.log("Downloaded data from ",url);        // step 10 - timer callback execution
            res(data);                                       // step 11 - promise is resolved
        },3000);

    });

}

// download("https.//www.example.com")               //step 1 download is called
// .then(function f(value){                          //step 6 then is registered (not executed now)
//                                                   //step 7 (internal) - promise remains pending
//                                                   //step 8 (internal) - Timer finishes - callback queued
// console.log("Downloaded data is",value);      //step 12 - then callback executed microtask
// })

function writeFile(data,fileName){
    return new Promise(function exec(res,rej){
        console.log("Writing" , data, " to file");
        setTimeout(() =>{
            console.log("Wrrting to file ", fileName , "is done");
            let status = "Success";
            res(status);
        },2000);
    })
}

function upload(fileName,url,callback){
    return new Promise(function exec(res,rej){
        console.log("Uploading" , fileName, " to " , url);
        setTimeout(() =>{
            console.log("Upload is done");
            let uploadStatus = "Success";
            res(uploadStatus);
        },3000);
    })
}


//sequential way

const p2 = download("https://www.example.com")
.then(function f(value){
    console.log("Downloaded data is ",value);
    return writeFile(value,"file.txt");
})

const p3 = p2.then(function g(value){
    console.log("file written",value);
    return upload(value,"https://www.example1.com");
});

p3.then(function h(value){
    console.log("File uploaded",value);
})
