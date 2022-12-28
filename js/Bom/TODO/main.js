const todoTarget = document.querySelector('#todoTarget');
const testTarget = document.querySelector('#testTarget');
const inputTarget = document.querySelector('#inputTarget');

console.log(todoTarget.childNodes);
const firstLi = todoTarget.querySelectorAll("li")[0];
console.log(firstLi);
// parentNode.removeChild(childNode);
// firstLi.parentNode.removeChild(firstLi);

inputTarget.addEventListener("keypress",function(e){
    if(e.key === "Enter"){
        testTarget.innerHTML = e.target.value;

            let n = 25;
        if(Number(e.target.value) === Number(n)){
            console.log("zov taalaa");
        }
        if(Number(e.target.value)){
            if(Number(e.target.value) > Number(n)){
                console.log("ih baina");
            }
            if(Number(e.target.value) < Number(n)){
                console.log("baga baina");
            }
        }
        else{
            console.log("too bich");
        }
    }
    
});