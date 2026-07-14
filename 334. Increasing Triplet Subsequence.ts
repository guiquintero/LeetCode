function increasingTriplet(nums: number[]): boolean {
    let first = Infinity;
    let second = Infinity;
    
    for(let i of nums){
        if(i<=first){
            first = i;
        }else if(i<=second){
            second=i;
        }else{
            return true;
        }
    }

    return false;
}


console.log(increasingTriplet([1,2,3,4,5]))
console.log(increasingTriplet([5,4,3,2,1]))
console.log(increasingTriplet([2,1,5,0,4,6]))

console.log(increasingTriplet([0,4,2,1,0,-1,-3]))