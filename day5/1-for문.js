//for문 역순으로도 가능
for(let i=10;i>0;i--){
    //이것도 가능
}

//for문 안 break와 continue
const nums=[1,2,3,4,5];
for(let i=0;i<nums.length;i++){
    // if(nums[i]!==3) console.log(nums[i]);
    if(nums[i]===3) continue;
    console.log(nums[i]);
}

let result = [];
for(let i=0;i<nums.length;i++){
    if(!(nums[i]%2)) continue;
    result.push(nums[i]);
}
console.log(result);