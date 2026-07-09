function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const m = Math.max(...candies);
    let b:boolean[]=[];
    for(let i=0;i<candies.length;i++){
        if(candies[i]+extraCandies>=m){
            b[i]= true;
        }else
            b[i]=false;
    }

    return b;
};