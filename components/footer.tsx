import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <footer id='#footer' className="w-full py-4 pb-8 border-t">
      <div className="mx-auto grid grid-cols-2 max-w-5xl ">
        <div className="space-y-2 mx-auto w-fit py-4">
          <span className="underline">Built with FastAPI and NextJS.</span>
          <div>
            <span className="font-semibold text-lg">Resources</span>
            <Link href="https://www.kaggle.com/code/classikh/student-performance">
              <p className='hover:underline'>Kaggle</p>
            </Link>
            <Link href="https://github.com/charankamal20/dma-student-app-frontend">
              <p className='hover:underline'>Frontend Code(NextJS)</p>
            </Link>
            <Link href="https://github.com/charankamal20/dma-student-app">
              <p className='hover:underline'>Backend Code(Python/FastApi)</p>
            </Link>
          </div>
        </div>
        <div className="max-w-5xl mx-auto flex text-gray-800">
          <div className="flex flex-col gap-y-2 ">
            <div>
              <p>This is project submission by:</p>
              <p>Charan Kamal Singh</p>
              <p>CO21314</p>
            </div>
            <Link href="https://github.com/charankamal20/dma-student-app">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="text-black size-5 lucide lucide-github"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;