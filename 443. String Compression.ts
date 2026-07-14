function compress(chars: string[]): number {
    let escrever = 0;  // onde vou escrever a resposta
    let ler = 0;       // onde estou lendo

    while (ler < chars.length) {
        const letra = chars[ler];
        let quantas = 0;

        // conta as letras iguais coladinhas
        while (ler < chars.length && chars[ler] === letra) {
            ler++;
            quantas++;
        }

        chars[escrever++] = letra;          // escreve a letra
        if (quantas > 1) {                  // só escreve o número se for mais de 1
            for (const digito of String(quantas)) {
                chars[escrever++] = digito;
            }
        }
    }

    return escrever;
}


console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]));
console.log(compress(["a","b","b","c","c","c"]));
console.log(compress(["a"]));


























function compress1(chars: string[]): number {
    let n = chars.length
    let a = '';
    let t=1;
    if(n==1){
            return 1;
        }
    for(let i = 1;i<n;i++){
        if(chars[i]==chars[i-1]){
            t++;
            if(i==n-1){
                a+=chars[i];
                if(t!=1){
                    a+=t;
                }
            }
        }else{
            a+=chars[i-1];
            if(t!=1){
                a+=t;
            }
            t=1;
        }
    }
    return a.length;
    
};
