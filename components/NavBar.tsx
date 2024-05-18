import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import Head from 'next/head';

const Navbar: React.FC = () => {
  const { data: session } = useSession();
  const isLoggedIn = !!session?.user;
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = async () => {
    await signOut();
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!event.target.closest('#user-menu-button') && !event.target.closest('#user-dropdown')) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [showDropdown]);

  return (
    <nav className="bg-white border-gray-200 shadow-md fixed w-full z-50">
      <Head>
        <link rel="icon" href="https://www.cgv.id/favicon.ico" />
      </Head>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://cdn.cgv.id/assets/mobile/web/images/cgv_logo.png" className="h-8" alt="CGV Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </Link>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {!isLoggedIn && (
            <Link href="/login" legacyBehavior>
              <a className="text-white text-xl bg-red-500 border border-red-500 rounded-lg px-4 py-1 hover:bg-white hover:text-red-500">Login</a>
            </Link>
          )}
          {isLoggedIn && (
            <>
              <button
                type="button"
                className="flex text-sm bg-red-500 rounded-full md:me-0 focus:ring-4 focus:ring-red-500 "
                id="user-menu-button"
                aria-expanded={showDropdown ? "true" : "false"}
                onClick={toggleDropdown}
              >
                <span className="sr-only">Open user menu</span>
                <img className="w-8 h-8 rounded-full" src={session.user.image} alt="user photo" />
              </button>
              {showDropdown && (
                <div className="z-60 absolute right-12 mt-48 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-lg" id="user-dropdown">
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900">{session.user.name}</span>
                    <span className="block text-sm text-gray-500 truncate">{session.user.email}</span>
                  </div>
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <button onClick={handleLogout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 mx-auto">Sign out</button>
                    </li>
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-black rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link href="/" className="block py-2 px-3 text-red-500 text-xl" aria-current="page">Home</Link>
            </li>
            <li>
              <Link href="/movies" className="block py-2 px-3 text-red-500 text-xl">Movies</Link>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-red-500 text-xl">Cinemas</a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-red-500 text-xl">Features</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
