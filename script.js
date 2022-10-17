let name1 = "Jerry Rice";
let name2 = "Deion Sanders";
let name3 = "Patrick Willis";

if(name1.length > name2.length && name1.length > name3.length){
    console.log(`${name1} has the longest name`);
} 


else if(name2.length > name1.length && name2.length > name3.length){
    console.log(`${name2} has the longest name`);
}



else if(name3.length > name1.length && name3.length > name2.length){
    console.log(`${name3} has the longest name`)
}



else{
    console.log(`All three names, ${name1}, ${name2}, ${name3} are the same length`)
}