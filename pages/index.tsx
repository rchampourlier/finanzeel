import React, { useState } from "react";
import firebase from "firebase/app";
import { useAuthUser, withAuthUser } from "next-firebase-auth";
import { LoginDialog } from "../components/login-dialog";
import { Button } from "../components/button";

// On "Go to app":
// - if logged in, redirect to /app
// - otherwise, display login modal
const Index = () => {
  const authUser = useAuthUser();
  const [showLogin, setShowLogin] = useState<boolean>(false);

  function redirectToApp() {
    window.location.replace("/app");
  }

  function auth(email: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        redirectToApp();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <div className="bg-indigo-900 relative overflow-hidden h-screen">
        <img
          src="/images/landscape.svg"
          alt="A countryside background image"
          className="absolute h-full w-full object-cover"
        />
        <div className="inset-0 bg-black opacity-25 absolute"></div>
        <header className="absolute top-0 left-0 right-0 z-20">
          <nav className="container mx-auto px-6 md:px-12 py-4">
            <div className="md:flex justify-between items-center">
              <div className="flex justify-between items-center">
                <a href="/" className="text-white">
                  <svg
                    className="w-8 mr-2 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Capa 1"
                    viewBox="0 0 16.16 12.57"
                  >
                    <defs></defs>
                    <path d="M14.02 4.77v7.8H9.33V8.8h-2.5v3.77H2.14v-7.8h11.88z"></path>
                    <path d="M16.16 5.82H0L8.08 0l8.08 5.82z"></path>
                  </svg>
                </a>
                <div className="md:hidden">
                  <button className="text-white focus:outline-none">
                    <svg
                      className="h-12 w-12"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6H20M4 12H20M4 18H20"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="hidden md:flex items-center">
                <Button
                  label="Go to app"
                  onClick={() => {
                    if (authUser.id) {
                      redirectToApp();
                    } else {
                      setShowLogin(true);
                    }
                  }}
                />
              </div>
            </div>
          </nav>
        </header>
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
          <div className="lg:w-3/5 xl:w-2/5 flex flex-col items-start relative z-10">
            <span className="font-bold uppercase text-yellow-400">
              Finanzeel
            </span>
            <h1 className="font-bold text-6xl sm:text-7xl text-white leading-tight mt-4">
              Feeling alone managing
              <br />
              your savings?
            </h1>
            <a
              href="/discover"
              className="block bg-white hover:bg-gray-100 py-3 px-4 rounded-lg text-lg text-gray-800 font-bold uppercase mt-10"
            >
              Discover
            </a>
          </div>
        </div>
      </div>
      {showLogin && (
        <LoginDialog
          handleEmailLogin={auth}
          onClose={() => {
            setShowLogin(false);
          }}
        />
      )}
    </div>
  );
};

export default withAuthUser()(Index);
