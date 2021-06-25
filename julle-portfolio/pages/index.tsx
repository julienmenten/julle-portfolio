import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import ParticlesBackground from '../components/Particles/ParticlesBackground'
export default function Home() {
  return (

    <Layout>
      <Head>
        <title>Julle - Web developer</title>
      </Head>
      <ParticlesBackground></ParticlesBackground>
    </Layout>
  )
}
