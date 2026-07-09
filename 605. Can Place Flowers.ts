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

