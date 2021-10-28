import { useEffect } from 'react';
import { useAppDispatch } from '@store/hooks';
import Head from 'next/head';
import http from '@services/http.client';
import DashboardLayout from '@features/dashboard/_Dashboard.layout';
import { setProjects } from '@features/project/project.slice';
import { setGateways } from '@features/gateway/gateway.slice';
import { setUsers } from '@features/user/user.slice';

export default function Home({ data }) {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setProjects({ projects: data.projects.data }));
        dispatch(setGateways({ gateways: data.gateways.data }));
        dispatch(setUsers({ users: data.users.data }));
    }, []);

    return (
        <>
            <Head>
                <title>Reports App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <DashboardLayout />
        </>
    );
}

export async function getServerSideProps<GetServerSideProps>(context) {
    try {
        const response = await Promise.all([
            http.get('/users'),
            http.get('/projects'),
            http.get('/gateways'),
        ]);

        const [users, projects, gateways] = response;

        const data = { users, projects, gateways };

        return {
            props: { data },
        };
    } catch (error) {
        console.log(error);
        return {
            props: { data: {} },
        };
    }
}
