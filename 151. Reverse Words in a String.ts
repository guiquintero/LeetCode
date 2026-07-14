function reverseWords(s: string): string {
    let f:string;
    let p:string[]=[];
    let j=0;
    for(let i=0;i<s.length;i++){
        if(s[i]!=' '){
            p[j] = (p[j] ?? '') + s[i];
        } else if(s[i]==' '&&s[i+1]!=' '&&p[0]!=undefined){
            j++;
        }
    }
    for(let i=0;i<p.length/2;i++){
        [p[i], p[p.length-i-1]] = [ p[p.length-i-1], p[i]]
    }

    f = p.join(' ')
    return f;
};


console.log("'"+reverseWords('  the sky  is blue  ')+"'");