import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem facilis ut qui obcaecati hic earum iste deserunt nihil nam omnis magni, molestiae inventore minus eligendi quasi vel praesentium. Perspiciatis, eveniet.</p>
    </Layout>
  )
}