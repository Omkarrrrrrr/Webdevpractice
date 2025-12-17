function fetchNext(arr){                                       //This is mannually writtern iterator - interviewer asks to create our own iterator
    let idx = 0;
    function next(){
        if(idx >= arr.length){
            return {value:undefined , done:true};
        }
        const newElement = arr[idx];
        idx++;
        return {value:newElement , done: false};
    }

    return {next};
}

const autoFetcher = fetchNext([1,2,3,4,5]);
console.log(autoFetcher.next());
console.log(autoFetcher.next());
console.log(autoFetcher.next());
console.log(autoFetcher.next());
console.log(autoFetcher.next());
console.log(autoFetcher.next());

