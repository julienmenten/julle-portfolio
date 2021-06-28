import Head from 'next/head'
import Layout from '../components/Layout/Layout';
import Landing from '../components/Landing/Landing';

export default function Home() {
  return (

    <Layout>
      <Head>
        <title>Julle // Web developer</title>
      </Head>
      
      <Landing />
    </Layout>
  )
}
