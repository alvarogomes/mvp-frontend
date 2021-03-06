import { rest } from 'msw';

export const handlers = [
    rest.post('http://localhost:3000/api/query', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                data,
            })
        );
    }),
];

const data = [
    {
        paymentId: '6149cf567833e57669e60455',
        amount: 2663.69,
        projectId: 'ERdPQ',
        gatewayId: 'i6ssp',
        userIds: ['rahej'],
        modified: '2021-09-20',
        created: '2021-04-11',
    },
    {
        paymentId: '6149cf56625a7464b7ec345a',
        amount: 327.72,
        projectId: 'bgYhx',
        gatewayId: 'GzFF8',
        userIds: ['rahej'],
        modified: '2021-04-17',
        created: '2021-04-21',
    },
    {
        paymentId: '6149cf565833d66717b7fd5e',
        amount: 403.08,
        projectId: 'bgYhx',
        gatewayId: 'GzFF8',
        userIds: ['rahej'],
        modified: '2021-04-13',
        created: '2021-07-18',
    },
    {
        paymentId: '6149cf56b561e56a5358f033',
        amount: 388.02,
        projectId: 'bgYhx',
        gatewayId: 'GzFF8',
        userIds: ['rahej'],
        modified: '2021-07-22',
        created: '2021-09-10',
    },
    {
        paymentId: '6149cf5632f0bb5b47d428e8',
        amount: 1779.41,
        projectId: 'ERdPQ',
        gatewayId: 'i6ssp',
        userIds: ['rahej'],
        modified: '2021-03-01',
        created: '2021-07-22',
    },
    {
        paymentId: '6149cf566b3eda010dffd335',
        amount: 3775.58,
        projectId: 'bgYhx',
        gatewayId: 'GzFF8',
        userIds: ['rahej'],
        modified: '2021-07-23',
        created: '2021-08-04',
    },
    {
        paymentId: '6149cf56f0a3177d405f8e71',
        amount: 3854.15,
        projectId: 'ERdPQ',
        gatewayId: 'i6ssp',
        userIds: ['rahej'],
        modified: '2021-03-17',
        created: '2021-06-04',
    },
    {
        paymentId: '6149cf56b33efe4c5a481c51',
        amount: 3320.85,
        projectId: 'ERdPQ',
        gatewayId: 'i6ssp',
        userIds: ['rahej'],
        modified: '2021-06-23',
        created: '2021-09-18',
    },
    {
        paymentId: '6149cf56c795c8b037e40265',
        amount: 3523.91,
        projectId: 'ERdPQ',
        gatewayId: 'GzFF8',
        userIds: ['rahej'],
        modified: '2021-02-22',
        created: '2021-08-06',
    },
    {
        paymentId: '6149cf567a4457fdb9c15e55',
        amount: 3312.42,
        projectId: 'ERdPQ',
        gatewayId: 'GzFF8',
        userIds: ['rahej'],
        modified: '2021-08-26',
        created: '2021-06-18',
    },
    {
        paymentId: '6149cf568b0a15b105ea1786',
        amount: 2493.1,
        projectId: 'bgYhx',
        gatewayId: 'i6ssp',
        userIds: ['rahej'],
        modified: '2021-06-22',
        created: '2021-07-29',
    },
    {
        paymentId: '6149cf569fe23c28730355f9',
        amount: 506.1,
        projectId: 'ERdPQ',
        gatewayId: 'i6ssp',
        userIds: ['rahej'],
        modified: '2021-04-10',
        created: '2021-05-11',
    },
    {
        paymentId: '6149cf568bfadcecbf2b40ec',
        amount: 1318.44,
        projectId: 'bgYhx',
        gatewayId: 'i6ssp',
        userIds: ['rahej'],
        modified: '2021-02-18',
        created: '2021-06-05',
    },
    {
        paymentId: '6149cf567a88de6c18edd672',
        amount: 146.94,
        projectId: 'ERdPQ',
        gatewayId: 'GzFF8',
        userIds: ['rahej'],
        modified: '2021-09-12',
        created: '2021-05-29',
    },
    {
        paymentId: '6149cf56c04649c6dde1057b',
        amount: 3398.51,
        projectId: 'bgYhx',
        gatewayId: 'i6ssp',
        userIds: ['rahej'],
        modified: '2021-05-23',
        created: '2021-06-06',
    },
    {
        paymentId: '6149cf56a6d7fb52c9514288',
        amount: 3986.93,
        projectId: 'bgYhx',
        gatewayId: 'GzFF8',
        userIds: ['rahej'],
        modified: '2021-05-28',
        created: '2021-05-29',
    },
    {
        paymentId: '6149cf56acab8c9214c328ba',
        amount: 138.21,
        projectId: 'bgYhx',
        gatewayId: 'GzFF8',
        userIds: ['rahej'],
        modified: '2021-08-09',
        created: '2021-05-06',
    },
    {
        paymentId: '6149cf569415fb40aca2caf1',
        amount: 2756.85,
        projectId: 'ERdPQ',
        gatewayId: 'GzFF8',
        userIds: ['rahej'],
        modified: '2021-04-01',
        created: '2021-07-26',
    },
    {
        paymentId: '6149cf56b4003e52519554ca',
        amount: 1585.04,
        projectId: 'bgYhx',
        gatewayId: 'GzFF8',
        userIds: ['rahej'],
        modified: '2021-07-07',
        created: '2021-06-07',
    },
    {
        paymentId: '6149cf5659eb162d700d9403',
        amount: 2204.65,
        projectId: 'bgYhx',
        gatewayId: 'i6ssp',
        userIds: ['rahej'],
        modified: '2021-04-30',
        created: '2021-04-20',
    },
    {
        paymentId: '6149cf5662c0c7820ca2fcb0',
        amount: 1757.61,
        projectId: 'bgYhx',
        gatewayId: 'GzFF8',
        userIds: ['rahej'],
        modified: '2021-06-05',
        created: '2021-07-19',
    },
    {
        paymentId: '6149cf56f50713a9ad71db63',
        amount: 1161.33,
        projectId: 'ERdPQ',
        gatewayId: 'i6ssp',
        userIds: ['rahej'],
        modified: '2021-07-25',
        created: '2021-06-09',
    },
    {
        paymentId: '6149cf56e850af64ff477a9f',
        amount: 2875.86,
        projectId: 'bgYhx',
        gatewayId: 'GzFF8',
        userIds: ['rahej'],
        modified: '2021-06-01',
        created: '2021-08-04',
    },
    {
        paymentId: '6149cf56e67d1768eea05ea4',
        amount: 2758.18,
        projectId: 'bgYhx',
        gatewayId: 'i6ssp',
        userIds: ['rahej'],
        modified: '2021-06-20',
        created: '2021-07-18',
    },
    {
        paymentId: '6149cf564334774f024da96e',
        amount: 304.3,
        projectId: 'bgYhx',
        gatewayId: 'i6ssp',
        userIds: ['rahej'],
        modified: '2021-03-07',
        created: '2021-09-16',
    },
    {
        paymentId: '6149cf56eb8ec0be21f1431f',
        amount: 841.99,
        projectId: 'bgYhx',
        gatewayId: 'i6ssp',
        userIds: ['rahej'],
        modified: '2021-03-26',
        created: '2021-08-24',
    },
    {
        paymentId: '6149cf565ffcba7981884b64',
        amount: 2599.56,
        projectId: 'bgYhx',
        gatewayId: 'i6ssp',
        userIds: ['rahej'],
        modified: '2021-07-10',
        created: '2021-08-09',
    },
    {
        paymentId: '6149cf561baa06ff20262b6f',
        amount: 2417.05,
        projectId: 'bgYhx',
        gatewayId: 'GzFF8',
        userIds: ['rahej'],
        modified: '2021-04-24',
        created: '2021-03-11',
    },
    {
        paymentId: '6149cf56d7ba96e40620e0cd',
        amount: 3347.65,
        projectId: 'bgYhx',
        gatewayId: 'GzFF8',
        userIds: ['rahej'],
        modified: '2021-03-21',
        created: '2021-09-12',
    },
    {
        paymentId: '6149cf562c4ed36dd2b057ba',
        amount: 2799.11,
        projectId: 'bgYhx',
        gatewayId: 'i6ssp',
        userIds: ['rahej'],
        modified: '2021-08-27',
        created: '2021-05-16',
    },
    {
        paymentId: '6149cf56ede5d0da98cd7ac5',
        amount: 3554.74,
        projectId: 'ERdPQ',
        gatewayId: 'GzFF8',
        userIds: ['rahej'],
        modified: '2021-08-09',
        created: '2021-07-16',
    },
    {
        paymentId: '6149cf56b171f01e5f5d138e',
        amount: 3251.61,
        projectId: 'ERdPQ',
        gatewayId: 'GzFF8',
        userIds: ['rahej'],
        modified: '2021-09-08',
        created: '2021-03-19',
    },
    {
        paymentId: '6149cf5652a987b45705e45d',
        amount: 2707.16,
        projectId: 'bgYhx',
        gatewayId: 'i6ssp',
        userIds: ['rahej'],
        modified: '2021-08-29',
        created: '2021-03-28',
    },
    {
        paymentId: '6149cf567362fec31c1df651',
        amount: 212.06,
        projectId: 'bgYhx',
        gatewayId: 'i6ssp',
        userIds: ['rahej'],
        modified: '2021-07-24',
        created: '2021-09-09',
    },
    {
        paymentId: '6149cf5636d7cbd8dcacd9d5',
        amount: 3473.02,
        projectId: 'bgYhx',
        gatewayId: 'i6ssp',
        userIds: ['rahej'],
        modified: '2021-03-31',
        created: '2021-03-09',
    },
    {
        paymentId: '6149cf5661d635da976a95ff',
        amount: 917.55,
        projectId: 'ERdPQ',
        gatewayId: 'GzFF8',
        userIds: ['rahej'],
        modified: '2021-03-09',
        created: '2021-06-26',
    },
    {
        paymentId: '6149cf56566380b22dcc9c71',
        amount: 502.03,
        projectId: 'ERdPQ',
        gatewayId: 'i6ssp',
        userIds: ['rahej'],
        modified: '2021-05-20',
        created: '2021-05-02',
    },
    {
        paymentId: '6149cf565c6b3a6eca9d420e',
        amount: 3339.14,
        projectId: 'bgYhx',
        gatewayId: 'i6ssp',
        userIds: ['rahej'],
        modified: '2021-08-03',
        created: '2021-07-07',
    },
    {
        paymentId: '6149cf56adf722884f0d339f',
        amount: 1990.45,
        projectId: 'bgYhx',
        gatewayId: 'i6ssp',
        userIds: ['rahej'],
        modified: '2021-08-21',
        created: '2021-09-20',
    },
    {
        paymentId: '6149cf564037d21d93abab58',
        amount: 3012.43,
        projectId: 'bgYhx',
        gatewayId: 'i6ssp',
        userIds: ['rahej'],
        modified: '2021-04-15',
        created: '2021-04-24',
    },
    {
        paymentId: '6149cf56dc3c2e1e8c16695c',
        amount: 110.89,
        projectId: 'ERdPQ',
        gatewayId: 'GzFF8',
        userIds: ['rahej'],
        modified: '2021-08-13',
        created: '2021-03-22',
    },
    {
        paymentId: '6149cf5612c35c49c663a15c',
        amount: 1659.95,
        projectId: 'bgYhx',
        gatewayId: 'i6ssp',
        userIds: ['rahej'],
        modified: '2021-03-21',
        created: '2021-07-24',
    },
    {
        paymentId: '6149cf566c4a1408972ee1c7',
        amount: 366.42,
        projectId: 'bgYhx',
        gatewayId: 'GzFF8',
        userIds: ['rahej'],
        modified: '2021-04-30',
        created: '2021-07-27',
    },
    {
        paymentId: '6149cf56e03df6b7945d53cb',
        amount: 729.89,
        projectId: 'ERdPQ',
        gatewayId: 'GzFF8',
        userIds: ['rahej'],
        modified: '2021-06-02',
        created: '2021-08-29',
    },
    {
        paymentId: '6149cf5604cb20e7c4668f75',
        amount: 1952.28,
        projectId: 'ERdPQ',
        gatewayId: 'i6ssp',
        userIds: ['rahej'],
        modified: '2021-06-29',
        created: '2021-07-17',
    },
    {
        paymentId: '6149cf56b315d0ed5eea704c',
        amount: 1507.91,
        projectId: 'ERdPQ',
        gatewayId: 'GzFF8',
        userIds: ['rahej'],
        modified: '2021-07-16',
        created: '2021-06-03',
    },
    {
        paymentId: '6149cf56e158210731a1fb89',
        amount: 132.93,
        projectId: 'bgYhx',
        gatewayId: 'GzFF8',
        userIds: ['rahej'],
        modified: '2021-06-01',
        created: '2021-06-06',
    },
    {
        paymentId: '6149cf56966f765a61682608',
        amount: 601.19,
        projectId: 'ERdPQ',
        gatewayId: 'i6ssp',
        userIds: ['rahej'],
        modified: '2021-05-25',
        created: '2021-06-20',
    },
    {
        paymentId: '6149cf56974e74f0867b0a9a',
        amount: 811.97,
        projectId: 'bgYhx',
        gatewayId: 'i6ssp',
        userIds: ['rahej'],
        modified: '2021-04-25',
        created: '2021-06-14',
    },
    {
        paymentId: '6149cf568fbdf0d9b3bc4bdf',
        amount: 2968.48,
        projectId: 'ERdPQ',
        gatewayId: 'i6ssp',
        userIds: ['rahej'],
        modified: '2021-07-21',
        created: '2021-02-12',
    },
    {
        paymentId: '6149cf56574465544b98a5b7',
        amount: 3862.75,
        projectId: 'bgYhx',
        gatewayId: 'i6ssp',
        userIds: ['rahej'],
        modified: '2021-03-17',
        created: '2021-05-27',
    },
    {
        paymentId: '6149cf5672c3b07e64c33f34',
        amount: 2759.67,
        projectId: 'bgYhx',
        gatewayId: 'GzFF8',
        userIds: ['rahej'],
        modified: '2021-02-20',
        created: '2021-07-02',
    },
    {
        paymentId: '6149cf56beea87a5cfc4aba8',
        amount: 2012.87,
        projectId: 'bgYhx',
        gatewayId: 'GzFF8',
        userIds: ['rahej'],
        modified: '2021-06-23',
        created: '2021-05-09',
    },
    {
        paymentId: '6149cf569a7ef3d54c669656',
        amount: 1597.89,
        projectId: 'ERdPQ',
        gatewayId: 'i6ssp',
        userIds: ['rahej'],
        modified: '2021-02-02',
        created: '2021-04-20',
    },
    {
        paymentId: '6149cf56edf983df119fe934',
        amount: 3741.61,
        projectId: 'ERdPQ',
        gatewayId: 'GzFF8',
        userIds: ['rahej'],
        modified: '2021-02-18',
        created: '2021-08-23',
    },
    {
        paymentId: '6149cf56f946d18a9be01e82',
        amount: 3964.78,
        projectId: 'ERdPQ',
        gatewayId: 'i6ssp',
        userIds: ['rahej'],
        modified: '2021-06-17',
        created: '2021-02-23',
    },
    {
        paymentId: '6149cf5683b45c0c55333c52',
        amount: 194.32,
        projectId: 'ERdPQ',
        gatewayId: 'GzFF8',
        userIds: ['rahej'],
        modified: '2021-04-10',
        created: '2021-08-01',
    },
    {
        paymentId: '6149cf565cc27e158499551a',
        amount: 2264.95,
        projectId: 'ERdPQ',
        gatewayId: 'i6ssp',
        userIds: ['rahej'],
        modified: '2021-03-23',
        created: '2021-06-22',
    },
    {
        paymentId: '6149cf56bc0b3e1f59666b20',
        amount: 328.53,
        projectId: 'bgYhx',
        gatewayId: 'i6ssp',
        userIds: ['rahej'],
        modified: '2021-08-09',
        created: '2021-06-09',
    },
    {
        paymentId: '6149cf567502f97466f71626',
        amount: 3901,
        projectId: 'ERdPQ',
        gatewayId: 'GzFF8',
        userIds: ['rahej'],
        modified: '2021-03-25',
        created: '2021-06-23',
    },
    {
        paymentId: '6149cf561a05b601a6643502',
        amount: 746.33,
        projectId: 'ERdPQ',
        gatewayId: 'i6ssp',
        userIds: ['rahej'],
        modified: '2021-02-22',
        created: '2021-09-11',
    },
    {
        paymentId: '6149cf56f8be8085708fbae7',
        amount: 56.19,
        projectId: 'bgYhx',
        gatewayId: 'i6ssp',
        userIds: ['rahej'],
        modified: '2021-08-01',
        created: '2021-08-16',
    },
    {
        paymentId: '6149cf56abb2db010fa1b47d',
        amount: 550.81,
        projectId: 'ERdPQ',
        gatewayId: 'i6ssp',
        userIds: ['rahej'],
        modified: '2021-02-20',
        created: '2021-08-11',
    },
    {
        paymentId: '6149cf563f4615429d909d79',
        amount: 846.98,
        projectId: 'ERdPQ',
        gatewayId: 'i6ssp',
        userIds: ['rahej'],
        modified: '2021-07-30',
        created: '2021-02-25',
    },
    {
        paymentId: '6149cf562766867cfcb9234d',
        amount: 3508.62,
        projectId: 'bgYhx',
        gatewayId: 'i6ssp',
        userIds: ['rahej'],
        modified: '2021-02-01',
        created: '2021-02-24',
    },
];
