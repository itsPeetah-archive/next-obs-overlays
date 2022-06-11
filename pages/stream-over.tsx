import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const StreamOver: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2 text-white">
      <Head>
        <title>Starting Soon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="fixed min-h-screen min-w-full bg-black -z-50" />
      <Image
        className=" -z-10 opacity-50"
        src="/images/background/celeste_farewell.png"
        layout="fill"
      />
      <h1 className="md:text-2xl lg:text-4xl font-extralight">
        stream ending soon...
      </h1>
      <h1 className="md:text-7xl lg:text-9xl animate-bounce-slow font-extralight italic mb-20 mt-12">
        thank you for watching
      </h1>
    </div>
  );
};

export default StreamOver;
