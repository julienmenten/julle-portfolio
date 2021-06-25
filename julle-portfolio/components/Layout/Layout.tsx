import { FC } from "react";
import Head from 'next/head';

const Layout: FC = ({ children, }) => {
    return (
        <>
            <Head>
                {/* Add more metadata here */}
            </Head>
            <main>
                {children}
            </main>
           
        </>
    )
}

export default Layout;