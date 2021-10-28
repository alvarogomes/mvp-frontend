export function calcPercent(arr: number[]) {
    const total = arr.reduce((acc, el) => (acc += el));

    const percents = arr.map(item => ((item * 100) / total).toFixed(1));

    return { total, percents };
}
