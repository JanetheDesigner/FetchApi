
// .then((res) => console.log(res))
// .catch((err) => console.log(err))
     
       
        // .then(data => console.log(data))
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then((res) => {
    //         return res.json()
    //     })
    //     .then( data => {
    //        const someData = data.map(selection => {
    //         console.log(selection.title)
    //     })
    // })
    //     .catch((err) => console.log(err, 'ERROR'))  
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((res) => {
//         return res.json()
//     })
//     .then((data => console.log(data))
//  .catch((err) => console.log(err, 'ERROR')) 
fetch('https://jsonplaceholder.typicode.com/posts',{
    method: 'POST',
    body: JSON.stringify({
        body: 'This is aweson',
        id: 100,
        title: 'whatever I want',
        userId: 123
    }),
headers: {
    "Content-type": "application/json"
}

})
.then(
    res => res.json()
)
.then(data => {
    console.log (data);
})
.catch((err) => {
    console.log(err);
});

