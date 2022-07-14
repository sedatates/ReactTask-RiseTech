import React, { ReactEventHandler } from "react";
import Head from "next/head";

type Props = {
  title: string;
  subtitle: string;
};

const RiseTechHeader: React.FC<Props> = ({ title, subtitle }) => {

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={subtitle} />
    </Head>
  );

};

export default RiseTechHeader;
