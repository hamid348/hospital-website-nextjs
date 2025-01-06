import { title } from 'process'
import React from 'react'

function Footer() {
  return (
    <div className='z-51'>
        

        <footer class="bg-white dark:bg-gray-900">
    <div class="flex justify-between items-center mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
           
           <div>
            <img
            src='/img/logo.webp'
            alt='logo'
            />
           </div>
           <div>
           <ul className='flex flex-col gap-4 justify-between'>

            <h2>Hamid Raza</h2>

            <li>
    Home
            </li>

            <li>
    Betalingbevestiging
            </li>

            <li>
    Privacyverklaring
            </li>

            <li>
    Algemene voorwaarden
            </li>

</ul>
           </div>
           <div>
           <ul className='flex flex-col gap-4 justify-between'>

<li>
    Home
</li>

<li>
    Betalingbevestiging
</li>

<li>
    Privacyverklaring
</li>

<li>
    Algemene voorwaarden
</li>

</ul>
           </div>
    </div>

        </footer>
        <div className='text-center'>
        © {new Date().getFullYear()} Zorgvervoer Regio Rotterdam. All rights reserved.
        </div>


    </div>
  )
}

export default Footer