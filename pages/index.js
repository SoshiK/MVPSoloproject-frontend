import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from "react";
import styles from '../styles/Home.module.css';
import Table from "../components/Table";
import FilterMaker from "../components/FilterMaker";
import { getAllCars, getMakers, getSortedCars} from "../lib/data";

export async function getServerSideProps() {
  console.log("fetch"); 
  const data = await getAllCars();
  const makers = await getMakers();
  return {props:{
    data,
    makers
  }};
}


export default function Home({data, makers}) {
  const [cars, setCars] = useState(data);
  const [isSelected, setIsSelected] = useState(false);
  const searchBar = () => {
    setIsSelected(!isSelected);
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
      <button onClick={searchBar}>Select Maker</button>
      </div>
      {(() => {
        if(isSelected) {
          return (
      <div>
        <FilterMaker makers={makers} setCars={setCars} setIsSelected={setIsSelected}/>
      </div>
          );
        } else {
          return null;
        }
      })()}
      <Table cars={cars} setCars={setCars}/>
    </div>
  )
}
