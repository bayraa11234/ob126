function prepareCoffee(){
    const coffeePromise = new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve('prepared coffee');
        }, 10000);
    });
    return coffeePromise;
}

function fryEgg(){
    const eggPromise = new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve('Fried egg');
        }, 5000);
    });
    return eggPromise;
}

async function startMorning(){
    const coffee = await prepareCoffee();
    console.log(coffee)
}