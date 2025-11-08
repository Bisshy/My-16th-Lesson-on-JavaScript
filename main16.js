//practice

// let Activties = [
//     {acts:["practice javascript", "Read God is here", "write my journal", "Use my Drugs"], "sick":false},
//     {acts:["cook soup", "play football","Read the bible"],"sick":false},
//     {acts:["sleep", "practice javascript", "Read God is here", "play football"], "sick":false},
//     {acts:["play football", "sleep in mosiquto infested room", "practice javascript"], "sick":true},
//     {acts:["sleep", "practice javascript"], "sick":false}
// ];

// let Activties = [];

// function addEntry(acts, sick){
//     Activties.push({acts, sick});
// };

// addEntry(["practice javascript", "Read God is here", "write my journal"], false);
// addEntry(["cook soup", "play football","Read the bible"],false);
// addEntry(["sleep", "practice javascript", "Read God is here", "play football"],false);
// addEntry(["play football", "sleep in mosiquto infested room", "practice javascript"], true);
// addEntry(["sleep", "practice javascript"], false);


// function phi(table){
//     return  (table[3] * table[0] - table[2] * table[1]) / Math.sqrt((table[2] + table[3]) * (table[0] + table[1]) * (table[1] + table[3]) * (table[0] + table[2]));
// }

// function tableFor(act, activities){
//     let table =[0,0,0,0];
//     for(let i=0; i<activities.length; i++){
//         let entry = activities[i], index =0;
//         if(entry.acts.includes(act)) index +=1;
//         if(entry.sick) index +=2;
//         table[index] +=1;
//     }
//     return table;
// }

// for(let entry of Activties){
//     console.log(`${entry.acts.length} acts`);
// }

// function activitiesActs(activities){
//     let acts = [];
//     for(let entry of activities){
//         for(let act of entry.acts){
//             if(!acts.includes(act)){
//                 acts.push(act);
//             }
//         }
//     }
//     return acts
// }
// console.log(activitiesActs(Activties));

// for(let act of activitiesActs(Activties)){
//     console.log(act + ":", phi(tableFor(act, Activties)));
// }

//Range

// function ranges(start,end, step=start<end? 1:-1){
//     let results = [];
//     if(step > 0){
//     for(let nums=start; nums<=end; nums++){
//             results.push(nums);
//     } 
// }else{
//     for(let nums=start; nums>=end; nums++){
//             results.push(nums);
//     }
// }
//     return results;
// }
// console.log(ranges(1, 10));
// ;



// function sumOf(results){
//     let sum=0;
//     for(let value of  results){
//         sum += value;
        
//     }
//     return sum;
// }

// console.log(sumOf(ranges(1,10)));

// function reverseArray(array){
//     let arrays=[]
//     for(let i =array.length-1; i>=0; i--){
//         arrays.push(array[i]);
//     }
//     return arrays;
// }

// console.log(reverseArray(["a", "b,", "c"]))

// function reverseArrayInPlace(myarray){
   
//     for(let i=0; i< Math.floor(myarray.length)/2; i++){
//         let old = myarray[i];
//         myarray[i]=myarray[myarray.length-1-i];
//         myarray[myarray.length-1-i]=old;
//     }
//     return myarray
// }
// let array = [1,2,3,4,5];
// reverseArrayInPlace(array);
// console.log(array);


// function arrayToList(myArray){

//          let list = null;
                    
//         for(let i=myArray.length-1; i>=0; i--){
//              list = {value:myArray[i], rest:list};
//             } 
      
//             return list;
//  }
//  console.log(arrayToList([10,"late"]));

// function listToArray(list){

//     let lists = [];

//     for(let node=list; node; node=node.rest){
//         lists.push(node.value);
//     }
//     return lists;
// }


// console.log(listToArray(arrayToList([10, 20, "late"])));

// function prepend(value, list){
//     return {value, rest:list};
// }

// console.log(prepend(10, prepend(20, null)));

// function nth(list,n){
//     if(!list) return undefined;
//     else if (n===0) return list.value;
//     else return nth(list.rest, n - 1);
// }
// console.log(nth(arrayToList([10, 20, 30]),1));

// function deepEqual(a,b){
//     if(a===b)
//         return true;
//     if(a== null || typeof  a != "object" ||
//         b== null || typeof b != "object") return false;
//     let keysA = Object.keys(a), keysB = Object.keys(b);
//     if (keysA.length != keysB.length)
//         return false;
        
//     for (let key of keysA){
//         if(!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
//     }
//     return true;
// };

// let obj= {here :{is:"an"}, object:2};
// console.log(deepEqual (obj, obj));

// console.log(deepEqual(obj, {here:1, object:2}));
// console.log(deepEqual(obj,{here:{is:"an"}, object:2}));