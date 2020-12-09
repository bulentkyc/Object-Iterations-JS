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

for (let index = 0; index < dataSet.data.length; index++) {
    console.log(dataSet.data[index].name);
}
/* 
console.log(dataSet.data[0].name);
console.log(dataSet.data[1].name);
console.log(dataSet.data[2].name);
console.log(dataSet.data[3].name);
console.log(dataSet.data[4].name);
console.log(dataSet.data[5].name);
 */
console.log('----- for in -------');
/* for-in
Syntax: for(variable in array||object){
    Code
}

variable will have key of the current one

For-in assigns key or index into the variable that you create inside for-in parentheses
If you wish to get value you should write a js command with the key like: line 61
*/


for (const keys in dataSet) {
    console.log(keys);
    console.log(dataSet[keys]);
}


for (const key in dataSet.data) {
    console.log(key);
    console.log(dataSet.data[key].name)
}


console.log('---------for of ---------');

/* for-of
Syntax: for(variable of array){
    Code
}

variable will have value of current element

For-of assigns the value of the array into the variable that you create inside for-of parentheses
HRADS-UP: This does not work with objects
*/

for (const el of dataSet.data) {
    console.log(el.name);
}

for (let index = 0; index < dataSet.data.length; index++) {
    console.log(dataSet.data[index].name);
}

console.log('-----||||ERROR||||------');
//HRADS-UP: This does not work with objects
for (const el of dataSet) {
    console.log(el);
}