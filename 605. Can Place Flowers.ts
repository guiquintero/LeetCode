function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    
    let z=0, u=0, count = 0, t=flowerbed.length;

    for(let i=0;i<t;i++){
        if(flowerbed[i]==0){
            z+=1;
            if(u>=1 && i==t-1){
                count+=Math.floor(z/2);
            } else if(u==0 && i==t-1){
                count+=Math.ceil(z/2);
            }
        } else{
            u+=1;
            if(u==1){
                count+=Math.floor(z/2);
            }else{
                count+=Math.ceil((z-2)/2);
            }
            z=0;
        }
    }
    return count>=n;
};

console.log(canPlaceFlowers([1,0,1,0,1,0,1], 1));

// 1=0  1=0
// 2=0  2=1
// 3=1  3=1
// 4=1  4=2
// 5=2
// 6=2
// 7=3
// 8=3
// 9=4
// 10=4
// 11=5



function canPlaceFlowers1(flowerbed: number[], n: number): boolean {
    
    let t1 = -1, count = 0, m=0;

    for(let i=0;i<flowerbed.length;i++){
        if(flowerbed[i]==1){
            m=Math.floor((i-t1-2)/2)
            if(t1==-1){
                count+= Math.floor(i/2)
            }else{
                count += m;
            }
            t1 = i;  
            console.log(count)
        }
    }
    return count>=n;
};