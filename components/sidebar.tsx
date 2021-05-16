import React from "react";
import { HomeIcon } from "@heroicons/react/solid";
import { Button } from "./button";
import firebase from "firebase/app";
import "firebase/auth";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  function redirectToRoot() {
    window.location.replace("/");
  }
  function handleSignOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("signed out");
        redirectToRoot();
      })
      .catch((error) => {
        console.log("error signing out: ", error);
      });
  }
  function SignOutButton() {
    return (
      <button
        className="py-2 px-4 bg-emerald-400 hover:bg-emerald-500 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
        onClick={handleSignOut}
      >
        Sign out
      </button>
    );
  }
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <HomeIcon className="h-5 w-5 text-blue-500" />
          </button>
          {/* Brand */}
          <a
            href="/"
            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
          >
            Finanzeel
          </a>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <a
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    href="/"
                  >
                    Finanzeel
                  </a>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <HomeIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>
            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none h-full">
              <li className="items-center">
                <a
                  className="text-emerald-400 hover:text-emerald-500 text-xs uppercase py-3 font-bold block"
                  href="/dashboard"
                >
                  <HomeIcon className="h-4 w-4 mr-1 inline" />
                  Dashboard
                </a>
              </li>
              {/* Empty item filling the space to push the SignOutButton at the bottom */}
              <li className="items-center flex-grow"></li>
              <li>
                <SignOutButton />
              </li>
            </ul>
            {/* Divider */}
            {/* <hr className="my-4 md:min-w-full" /> */}
            {/* Heading */}
            {/* <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Documentation
            </h6> */}
          </div>
        </div>
      </nav>
    </>
  );
}
