import Head from 'next/head';
import { useState } from "react";
import Table from "../components/Table";
import FilterMaker from "../components/FilterMaker";
import Navbar from "../components/Navbar";
import NavItem from "../components/NavItem";
import Insert from "../components/Insert"
import { getAllCars, getMakers} from "../lib/data";

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
  const [isInsert, setIsInsert] = useState(false);
  const searchBar = () => {
    setIsSelected(!isSelected);
  }
  const insertBar = () => {
    setIsInsert(!isInsert);
  }
  const showAll = () => {
    setCars(data);
  }
  return (
    <div className="min-h-full px-2 flex flex-col items-center">
      <Head>
        <title>SearchUrVehicle</title>
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <div className="bg-black w-full">
        <img
          src="/logo.jpg" 
          className="w-24 block mx-auto"
        />
      </div>
      <Navbar>
        <NavItem click={searchBar}>Search</NavItem>
        <NavItem click={showAll}>ShowAll</NavItem>
        <NavItem click={insertBar}>Insert</NavItem>
      </Navbar>
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
      {(() => {
        if(isInsert) {
          return(
            <div>
              <Insert makers={makers}/>
            </div>
          )
        }
      })()}
      <Table cars={cars} setCars={setCars}/>
    <div className="text-xs font-thin my-5">ロゴは <a href="https://www.designevo.com/jp/logo-maker/" title="無料オンラインロゴメーカー">DesignEvo</a> ロゴメーカーさんに作られる</div>
    </div>
  )
}
