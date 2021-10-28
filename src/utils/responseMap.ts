/**
 *  map backend response to
 *  All projects | All gateways format
 *
 */
export function mapResponseToAll(allValues) {
    const uniqueIDs = new Set(allValues.map(({ projectId }) => projectId));

    const filteredValues = Array.from(uniqueIDs).map(id => {
        return allValues.filter(({ projectId }) => {
            return projectId === id;
        });
    });

    return filteredValues;
}

export function mapResponseToAllByGateway(allValues) {
    const uniqueIDs = new Set(allValues.map(({ gatewayId }) => gatewayId));

    const filteredValues = Array.from(uniqueIDs).map(id => {
        return allValues.filter(({ gatewayId }) => {
            return gatewayId === id;
        });
    });

    return filteredValues;
}

/**
 * gets the total sum of all array amounts
 */
export function getResponseTotalAmount(arr: any[]): number {
    return arr.reduce((acc, el) => acc + Number(el.amount), 0);
}
// find index name all.map(item => item[0].projectId)
