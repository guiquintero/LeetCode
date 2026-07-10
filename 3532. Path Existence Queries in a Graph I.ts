function pathExistenceQueries(n: number, nums: number[], maxDiff: number, queries: number[][]): boolean[] {
    const componentId: number[] = new Array(n);
    componentId[0] = 0;

    for (let i = 1; i < n; i++) {
        if (nums[i] - nums[i - 1] <= maxDiff) {
            componentId[i] = componentId[i - 1];
        } else {
            componentId[i] = componentId[i - 1] + 1;
        }
    }

    const answer: boolean[] = [];
    for (const [u, v] of queries) {
        answer.push(componentId[u] === componentId[v]);
    }

    return answer;
};