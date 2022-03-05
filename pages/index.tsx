import type { NextPage, NextPageContext } from "next";
import Head from "next/head";

import { Fragment, useEffect, useState } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

import { useTimeoutFn } from "react-use";

import styles from "../styles/index.module.css";

export async function getStaticProps(context: NextPageContext) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

function MainContent() {
  let [isShowing, setIsShowing] = useState(false);
  let [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 500);

  useEffect(() => setIsShowing(true), []);

  return (
    <Transition
      as={Fragment}
      show={isShowing}
      enter="transform transition duration-[400ms]"
      enterFrom="opacity-0 rotate-[-10deg] scale-50"
      enterTo="opacity-100 rotate-0 scale-100"
      leave="transform duration-200 transition ease-in-out"
      leaveFrom="opacity-100 rotate-0 scale-100 "
      leaveTo="opacity-0 scale-95 "
    >
      <div className="px-4 pt-8 w-full">
        <div
          className={`p-2 mx-auto w-full max-w-md  bg-white/75 rounded-2xl ${styles.shadow} mv-10 backdrop-blur-xl`}
        >
          <Disclosure defaultOpen={true}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between px-4 py-2 w-full text-sm font-medium text-left text-orange-900 bg-white rounded-lg hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75">
                  <span>When will Anime Server become available?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-orange-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-900">
                  When it is ready lol.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure defaultOpen={true} as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between px-4 py-2 w-full text-sm font-medium text-left text-orange-900 bg-white rounded-lg hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75">
                  <span>What kind of animes will be available?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-orange-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-900">
                  Mostly anime with waifus and kawaii anime girls.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </Transition>
  );
}

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-amber-300 to-orange-500 relative">
      <div className="py-12 h-screen overflow-y-scroll overflow-x-hidden relative z-10">
        <Head>
          <title>Anime Server</title>
          <meta name="description" content="The Waifu Lover's Anime Server" />
        </Head>
        <img
          className="absolute w-[50%] top-0 left-[-20px]"
          src="/waifu1.png"
        />
        <img
          className="absolute w-[20%] top-0 right-[0px] -rotate-12"
          src="/waifu3.png"
        />
        <main className="pl-2 pr-2">
          <div className="flex relative flex-col justify-center items-center mt-8 mb-12 rounded-xl">
            <h1
              className="text-5xl text-center text-white font-cursive
              text-transparent bg-clip-text bg-gradient-to-br from-white to-orange-200 drop-shadow-md"
            >
              The Anime Server{" "}
            </h1>
          </div>
          <div className="flex relative flex-col justify-center items-center">
            <button className="inline-flex justify-center px-4 py-2 text-lg font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              Access the Anime Server
            </button>
          </div>
          <div className="">
            <div className="flex relative flex-col justify-center items-center mt-8 mb-12 rounded-xl">
              <MainContent />
            </div>

            <div className="flex relative justify-center items-center gap-4 flex-wrap">
              <button className="inline-flex justify-center px-4 py-2 text-md text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                Sonarr
              </button>
              <button className="inline-flex justify-center px-4 py-2 text-md text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                Jackett
              </button>
              <button className="inline-flex justify-center px-4 py-2 text-md text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                Transmission
              </button>
              <button className="inline-flex justify-center px-4 py-2 text-md text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                Shana Project
              </button>
              <button className="inline-flex justify-center px-4 py-2 text-md text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                Nyaa.si
              </button>
            </div>

            <div className="w-full">
              <p className="font-md m-auto text-center text-white mt-10 drop-shadow-sm">
                <i> Um projeto da comunidade. </i>
                <br />
                🤝
              </p>
            </div>
          </div>
        </main>
      </div>
      <img
        className="absolute w-[200px] bottom-0 right-0 z-1"
        src="/waifu2.png"
      />
    </div>
  );
};

export default Home;
