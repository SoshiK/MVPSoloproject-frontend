import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Table from "../components/Table"

export async function getServerSideProps() {
  console.log("fetch"); 
  const res = await fetch("https://mvp-solo-staging.herokuapp.com/api/cars");
  const data = await res.json()
  return {props:{
    data
  }};
}

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>MVP Solo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        Serarch Ur Vehicle
      </div>
      <div>
        navbar
      </div>
      <Table cars={data}/>
    </div>
  )
}
