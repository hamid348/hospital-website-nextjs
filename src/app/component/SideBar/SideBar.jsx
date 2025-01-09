import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

function SideBar() {
  return (
    <div className='flex justify-around items-center w-full bg-slate-300 p-5 z-50'>
        <div><Image src="/img/logo.webp" alt="logo" width={150} height={150} /></div>
        <div>
            <ul className='flex gap-4 justify-between'>

                <li>
                    <Link href='/'>
                    Home
                    </Link>
                </li>
                
                <li>
                    <Link href='/Betalingbevestiging'>
                    <p>
                        Betalingbevestiging
                    </p>
                    </Link>
                </li>
                
                <li>
                    <Link href='/Privacyverklaring'>
                    <p>
                        Privacyverklaring
                    </p>
                    </Link>
                </li>

                <li>
                    Algemene voorwaarden
                </li>

            </ul>
        </div>
        <div>
            <button className='bg-blue-700 rounded-full text-white p-5' >
                click me
            </button>
        </div>
    </div>
  )
}

export default SideBar