// //  Promises :~

// const jokes = document.querySelector('.jokes');
// const jokebtn = document.querySelector('.btn');

// const generateJokes = () => {
//     const setHeader = {
//         headers :{
//             Accept : "application/json"
//         }
//     }
//     fetch('https://icanhazdadjoke.com', setHeader)
//     .then( (res) =>  res.json() )
//     .then((data) => {
//         jokes.innerHTML = data.joke;
//     })
//     .catch((error) => {
//         console.log(error);
//     })
// }
// jokebtn.addEventListener('click', generateJokes);
// generateJokes();








// //  Async Await  & Error handling :~  


const jokes = document.querySelector('.jokes');
const jokebtn = document.querySelector('.btn');

const generateJokes = async () => {
    try{
        const setHeader = {
            headers: {
                Accept: "application/json"
            }
        }
        const respon = await fetch('https://icanhazdadjoke.com', setHeader)
        const data = await respon.json();
        jokes.innerHTML = data.joke;
    }catch(err){
        console.log(`The error is ${err}`);
    }
}
jokebtn.addEventListener('click', generateJokes);
generateJokes();
















