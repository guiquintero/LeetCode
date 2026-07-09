function gcdOfStrings(str1: string, str2: string): string {
    function gcd(a: number, b: number): number {
        return b === 0 ? a : gcd(b, a % b);
    }

    const n1 = str1.length;
    const n2 = str2.length;
    const g = gcd(n1, n2);
    const candidate = str1.slice(0, g);

    const divides = (s: string, t: string): boolean =>
        t.repeat(s.length / t.length) === s;

    if (divides(str1, candidate) && divides(str2, candidate)) {
        return candidate;
    }
    return '';
};