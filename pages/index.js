import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from "react";
import styles from '../styles/Home.module.css'
import Table from "../components/Table"
import { getAllCars, getSortedCars} from "../lib/data";

export async function getServerSideProps() {
  console.log("fetch"); 
  const data = await getAllCars();
  return {props:{
    data
  }};
}


export default function Home({data}) {
  const [cars, setCars] = useState(data);
  const clickButton = async () => {
    const data = await getSortedCars("length");
    setCars(data);
  }
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
      <button onClick={clickButton}>button</button>
      </div>
      <Link href="/filter/makers">
        <a>go</a>
      </Link>
      <Table cars={cars} setCars={setCars}/>
    </div>
  )
}
