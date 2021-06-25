import { FC } from "react";
import Head from 'next/head';
import ParticlesBackground from "../Particles/ParticlesBackground";

const Layout: FC = ({ children, }) => {
    return (
        <>
            <Head>
                {/* Add more metadata here */}
            </Head>
            <main>
                {children}
            </main>
            <ParticlesBackground></ParticlesBackground>
        </>
    )
}

export default Layout;