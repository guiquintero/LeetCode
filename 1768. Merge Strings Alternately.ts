function mergeAlternately(word1: string, word2: string): string {
    let word3:string ='';

        for(let i=0; i<word1.length || i<word2.length; i++){
            if(i<word1.length)
                word3 = word3 + word1[i];
            if(i<word2.length)
                word3 = word3 + word2[i]
        }


    return word3;
};