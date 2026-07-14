function productExceptSelf(nums: number[]): number[] {

    const n = nums.length;
    let p=1;
    let zero=0;
    const result: number[] = new Array(n).fill(1);
    for(let i=0;i<n;i++){
        if(nums[i]!=0){
            p*=nums[i];
        }else{
            result[i]=0;
            zero++;
        }

    }
    for(let i=0;i<n;i++){
        if(zero==n){
            break;
        }else if(zero==n-1){
            result[i]=0;
        }
        else if(zero>0){
            if(result[i]==0){
                result[i]=p;
            } else{
                result[i]=0;
            }
        } else{
            result[i]=p/nums[i];
        }
    }

    return result;
};

console.log(productExceptSelf([-1,1,0,-3,3]));
console.log(productExceptSelf([0,0]));
console.log(productExceptSelf([0,4,0]));










































function productExceptSelf1(nums: number[]): number[] {

    const n = nums.length;
    const result: number[] = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }

    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return result;
};

console.log(productExceptSelf1([-1,1,0,-3,3]));