import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-red-950 text-white py-8 px-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between mx-10">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://vietguys.biz/storage/case_study/pVLqwuM1fUAsly6tYNbJZ0gdhowi70RuHxeHJpz9.png" className="h-8" alt="CGV Logo" />
        </Link>
            <p className="text-gray-400 mt-4">CGV Cinemas Indonesia (CJ CGV Cinemas Indonesia)</p>
          </div>
          
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul>
              <li className="mb-1"><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li className="mb-1"><Link href="/movies" className="text-gray-400 hover:text-white">Movies</Link></li>
              <li className="mb-1"><Link href="#" className="text-gray-400 hover:text-white">Cinemas</Link></li>
              <li className="mb-1"><Link href="#" className="text-gray-400 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://twitter.com/CGV_ID" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42c.01.16.01.32.01.48 0 4.9-3.72 10.56-10.56 10.56-2.1 0-4.07-.61-5.72-1.67.29.03.59.04.88.04 1.75 0 3.36-.6 4.64-1.61a3.73 3.73 0 01-3.48-2.59c.25.05.5.08.77.08.37 0 .72-.05 1.06-.14a3.72 3.72 0 01-2.98-3.65v-.05c.5.28 1.07.45 1.67.47a3.72 3.72 0 01-1.66-3.09c0-.68.18-1.31.5-1.86a10.56 10.56 0 007.67 3.88c-.06-.27-.09-.55-.09-.84a3.72 3.72 0 016.44-2.55 7.43 7.43 0 002.36-.9 3.74 3.74 0 01-1.63 2.05 7.45 7.45 0 002.13-.58 7.94 7.94 0 01-1.86 1.94z"/></svg>
              </a>
              <a href="https://www.facebook.com/CGV.ID" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.39 2.01H4.61A2.6 2.6 0 002 4.61v14.78c0 1.43 1.18 2.6 2.61 2.6h7.93v-6.41h-2.14v-2.5h2.14v-1.84c0-2.11 1.29-3.27 3.19-3.27.91 0 1.68.07 1.91.1v2.21h-1.31c-1.02 0-1.22.49-1.22 1.2v1.59h2.44l-.32 2.5h-2.12V22h4.16c1.43 0 2.61-1.17 2.61-2.6V4.61c0-1.43-1.18-2.6-2.61-2.6z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500">
          <p>&copy; 2024 CGV Cinema. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
