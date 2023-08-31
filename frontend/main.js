window.addEventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const getVisitCount =() => {
    let count =30;
    fetch(functionApi).then(response =>{
        return response.json()
    }).then(response =>{
        console.log("Website called Function API.");
        count = response.count;
        document.getElementByID("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}