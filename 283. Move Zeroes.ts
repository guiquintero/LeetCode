function moveZeroes(nums: number[]): void {
    let j=1, n=nums.length;
    for(let i=0;i+j<n;i++){
        if((nums[i]==0 && nums[i+j]!=0)){
            [nums[i],nums[i+j]]=[nums[i+j],nums[i]];
        }else if(nums[i]==0 && nums[i+j]==0){
            j++;
            i--;
        }
    }
};


moveZeroes([0,1,0,3,12]);
moveZeroes([0,0,1,0,3,12]);
moveZeroes([1,0,1]);
moveZeroes([0,1]);
moveZeroes([0]);
moveZeroes([0,0,1,0,3,0]);
moveZeroes([0,0]);
moveZeroes([0,0,0,0,0,0,0,0,0,0,0,0,1]);










function moveZeroes1(nums: number[]): void {
    let j=1, n=nums.length;
    for(let i=0;i<n;i++){
        while(1){
            if((nums[i]==0 && nums[i+j]!=0)||j<n){
                    [nums[i],nums[i+j]]=[nums[i+j],nums[i]];
                    break
            }
            j++;
        }        
    }
    
    console.log(nums);
    
};
