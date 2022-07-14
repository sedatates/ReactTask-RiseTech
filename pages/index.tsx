import type { NextPage } from "next";

import Image from "next/image";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import styles from "../styles/Home.module.css";

import Logo from "../public/logo.svg";
import RiseTechHeader from "../components";

const Home: NextPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {}, []);

  const { services, categoriesState } = useAppSelector((reducer: any) => ({
    services: reducer.service.items,
    categoriesState: reducer.category.items,
  }));
  return (
    <div className={styles.container}>
      <RiseTechHeader title="RiseTech" subtitle="React Task" />
      <Image src={Logo} width={50} height={50} alt="risetechlogo" />
    </div>
  );
};

export default Home;
