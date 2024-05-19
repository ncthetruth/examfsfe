import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react';
import nProgress from 'nprogress';
import Link from 'next/link';
import Image from 'next/image';
import { Title } from '../../components/Title';
import Navbar from '@/components/NavBar';
import Footer from '@/components/Footer';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { data: session } = useSession();

  if (session) {
    router.push('/');
    return null;
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/be/api/v1/Auth/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
          phone: 0,
        })
      });

      if (response.ok) {
        router.push('/');
      } else {
        console.error('Login failed:', response.statusText);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleOidcSignIn = () => {
    nProgress.start();
    signIn('oidc');
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Title>Login</Title>
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
          <div className="flex justify-center">
            <Link href="/" legacyBehavior>
              <a>
                <Image 
                  src="https://cdn.cgv.id/assets/mobile/web/images/cgv_logo.png" 
                  alt="CGV Logo"
                  width={100}
                  height={50}
                  layout="fixed"
                />
              </a>
            </Link>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-red-300 focus:border-red-500"
              />
            </div>
            
            
            <button
              type="submit"
              className="w-full px-4 py-2 text-red-500 bg-white rounded-md border border-red-500 hover:bg-red-500 hover:text-white focus:outline-none focus:ring focus:ring-red-500"
            >
              Submit
            </button>
          </form>
          <p className="text-sm text-center text-gray-600">
            Don't have an account yet?{' '}
            <Link href="/register" legacyBehavior>
              <a className="font-medium text-red-500 hover:underline">Register Now</a>
            </Link>
          </p>
          <div className="flex items-center justify-center">
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
