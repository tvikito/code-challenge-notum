import React from 'react'

const Footer: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <footer className='bg-slate-800 mt-auto'>
    <div className='px-5 py-6'>
      {children}

      <div className='flex flex-col items-center text-gray-400 '>
        Made by{' '}
        <a
          href='http://tomasvykoukal.com/'
          className='font-bold hover:underline no-arrow text-sm'
          target='_blank'
          rel='noreferrer'
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src='/assets/tomas_vykoukal.svg' alt='Tomáš Vykoukal' className='w-12 mt-2' />
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
