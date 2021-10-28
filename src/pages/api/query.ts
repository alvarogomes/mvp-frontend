import http from '@services/http.client';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const query = req.body;

        Object.keys(query).forEach(
            key => query[key].length < 1 && delete query[key]
        );

        console.log(query);

        const response = await http.getReports(query);
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(400).end('error');
    }
};
