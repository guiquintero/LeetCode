function reverseVowels(s: string): string {
    const v: string[] = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let n: number[]=[];
    let o: string='';
    let ns:string='';
    let a=0;
    for(let i=0; i<s.length;i++){
        if(v.includes(s[i])){
            n.push(i); //[0,2,5,6]
            o+=s[i]; //['I','e','e','A'] "IceCreAm"
        }
    }
    o=o.split("").reverse().join(""); //['A','e','e','I']
    for(let i=0; i<s.length;i++){
        if(n.includes(i)){
            ns+=o[a];
            a++;
        }else{
            ns+=s[i];
        }

    }

    return ns;
};

console.log(reverseVowels("IceCreAm"));
