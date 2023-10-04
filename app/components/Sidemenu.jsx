'use client'
import Link from 'next/link'
import { LiaTimesCircle } from 'react-icons/lia'
import {useEffect, useRef} from 'react'
import useMenu from '../(store)/store'
import { usePathname } from 'next/navigation'

const Sidemenu = () => {
    const { showSideMenu, setShowSideMenu } = useMenu()
    const pathname = usePathname()
    const initialRenderRef = useRef(true)

    useEffect(() => {
        if (initialRenderRef.current == true) {
            window.addEventListener('resize', () => {
                if (window.innerWidth > 1024 ) {
                    handleCloseSideMenu()
                }
            })
            initialRenderRef.current = false
        } else {
            handleCloseSideMenu()
        }
    }, [pathname])

    const handleCloseSideMenu = () => {
        setShowSideMenu(false)
        const body = document.body
        body.style.position= 'static'
        body.style.top= ''
    }

    return ( 
        <div className= {`${!showSideMenu ? 'hidden' : 'absolute top-0 inset-x-0 z-50 h-screen bg-black/80' }`}>
            <div className= 'animation-custom relative w-[90%] max-w-[500px] px-3 py-6 h-[100%] bg-white'>
                <LiaTimesCircle size={30} className='absolute right-1 hover:text-yellow-400' onClick={handleCloseSideMenu} />
                <ul className='mt-4'>
                    <Link href='/'>
                        <li className='p-3 border-b border-black/20 hover:text-yellow-400'>Home</li>
                    </Link>
                    <Link href='/genre'>
                        <li className='p-3 border-b border-black/20 hover:text-yellow-400'>Genre</li>
                    </Link>
                    <Link href='/country'>
                        <li className='p-3 border-b border-black/20 hover:text-yellow-400'>Country</li>
                    </Link>
                    <Link href='/#'>
                        <li className='p-3 border-b border-black/20 hover:text-yellow-400'>Movies</li>
                    </Link>
                    <Link href='#'>
                        <li className='p-3 border-b border-black/20 hover:text-yellow-400'>Tv shows</li>
                    </Link>
                    <Link href='#'>
                        <li className='p-3 hover:text-yellow-400'>Top IMDB</li>
                    </Link>
                </ul>
            </div>
        </div>
     );
}
 
export default Sidemenu;