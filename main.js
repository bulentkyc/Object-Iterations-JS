console.log('Hello Iterations with Objects');


let dataSet = {
    status: 'success',
    data: [
        {
            name:'Burhanovic',
            lName: 'Aljoundi',
            age: 24
        },
        {
            name:'Daria',
            lName: 'Muracheva',
            age: 31
        }, 
        {
            name:'Mihály',
            lName: 'Podobni',
            age: 29
        }, 
        {
            name:'Pio',
            lName: 'Saija',
            age: 47
        }, 
        {
            name:'Ward',
            lName: 'Toame',
            age: 24
        }
    ]
}

/* 
console.log(dataSet.data[0].name);
console.log(dataSet.data[1].name);
console.log(dataSet.data[2].name);
console.log(dataSet.data[3].name);
console.log(dataSet.data[4].name);
console.log(dataSet.data[5].name);
 */
for (let index = 0; index < dataSet.data.length; index++) {
    console.log(dataSet.data[index].name);
}

