window.addEventListener('DOMContentLoaded', (event)=> {
    getvisitCount();
})

const functionApi='';

const getvisitCount=()=>{
    let count=30;
    fetch(functionApi)
    .then((response)=>{return response.json() })
    .then((data)=>{
        console.log("Website called function API");
        count=dataresponse.count;
        console.log(count);
        document.getElementById('counter').innerHTML=count;
    })
    .catch((error)=>{
        console.error('Error:', error);
        document.getElementById('counter').innerHTML=count;
    });
}

