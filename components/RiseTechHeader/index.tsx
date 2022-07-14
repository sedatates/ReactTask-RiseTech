import React from "react";
import Image from "next/image";
import Logo from "../../public/logo.svg";

import styles from "../RiseTechHeader/styles.module.scss";

type Props = {
  title: string;
  subtitle: string;
};

const RiseTechHeader: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <div className={styles.header}>
      <Image src={Logo} width={50} height={50} alt="risetechlogo" />
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
    </div>
  );
};

export default RiseTechHeader;
