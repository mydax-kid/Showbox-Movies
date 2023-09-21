"use client"
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { CgProfile } from 'react-icons/cg'
import { PiFilmReelFill } from 'react-icons/pi'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import Link from 'next/link'
import Submenu from './Submenu'
import useMenu from '../(store)/store'

const Header = () => {
    const [searchValue, setSearchValue] = useState('')
    const { openSubmenu, setOpenSubMenu, 
            setMenuPosition, setShowForm, setShowSideMenu } = useMenu()

    const pathname = usePathname()

    const handleSubmenu = (e) => {
        const page = e.target.innerText
        const btn = e.target.getBoundingClientRect()
        const center = (btn.left + btn.right) / 2;
        const menuInfo = {page, center}
        setMenuPosition({menuInfo})
        setOpenSubMenu(true) 
    }

    const closeSubMenu = (e) => {
        if (!e.target.classList.contains('menu-show')) {
            setOpenSubMenu(false)
        }
    }

    const handleMenuOpen = () => {
        setShowSideMenu(true)
        const body = document.body
        body.style.position= 'fixed'
        body.style.top= '0'
    }

    const handleShowForm = () => {
        setShowForm(true)
        const body = document.body
        body.style.position= 'fixed'
        body.style.top= '0'
    }

    return(
        <div className={ `${pathname == '/' ? ' h-[120px] lg:min-h-[250px]' : 'items-center' } flex justify-between lg:justify-center md:gap-[200px] items-start p-6  bg-yellow-400 relative md:text-sm` }
             onMouseOver={closeSubMenu}>
            <h1><GiHamburgerMenu size={30} className='text-xs lg:hidden cursor-pointer' onClick= { handleMenuOpen }/></h1>
            <h1><PiFilmReelFill size={50} className='hidden sm:block text-sm p-0 mt-[-10px]'/></h1>

            <div className= { `${pathname == '/' ? 'absolute w-full inset-x-0 p-2 px-6 bottom-1 flex items-center justify-center text-xs lg:hidden' : 'hidden'}` }>
                <input type= 'text' 
                    placeholder= 'Search movies...' 
                    className='p-2 rounded-sm grow outline-0 border-0'
                    value= {searchValue}
                    onChange= {(e) => setSearchValue(e.target.value)}
                />
                <Link href= {`/movie-search?search_term=${searchValue}`} >
                    <button className='ml-2 p-2 bg-white rounded-sm hover:bg-gray-50'>GO</button>
                </Link>
            </div>

            <ul className='hidden align-center justify-between space-x-12 text-bold lg:flex'>
                <Link href= '/'>
                    <li className=' relative bar-custom h-full'>HOME</li>
                </Link>
                <Link href= '/genre' >
                    <li 
                    className=' menu-show relative bar-custom h-full' 
                    onMouseOver={handleSubmenu}
                    >GENRE</li>
                </Link>
                <Link href= '/country'>
                    <li 
                    className='menu-show relative bar-custom h-full' 
                    onMouseOver={handleSubmenu}

                    >COUNTRY</li>
                </Link>
                <Link href= '#'>
                    <li className=' relative bar-custom'>MOVIES</li>
                </Link>
                <Link href= '#'>
                    <li className=' relative bar-custom'>TV SHOWS</li>
                </Link>
                <Link href= '#'>
                    <li className=' relative bar-custom'>TOP IMDB</li>
                </Link>
            </ul>

            <div className='flex items-center space-x-2 bg-white rounded-sm p-2 cursor-pointer relative top-[-5px]'
                 onClick= {handleShowForm} >
                <CgProfile size= {20} />
                <button className='text-xs md:text-md'>Login</button>
            </div>
            { 
            pathname === '/' ?  
                (<div className='hidden lg:flex absolute max-w-[70%] space-y-12 top-[50%] mx-auto left-0 right-0 flex-col align-center text-center z-10 '>
                    <h1 className='text-4xl font-light'>Find Movies, TV shows and more</h1>
                    <form action="" className='flex justify-center items-center gap-5'>
                        <div className='w-[70%] flex items-center justify-start bg-white rounded-full border px-6 py-4 space-x-6 shadow-lg'>
                            <BsSearch size={20} />
                            <input 
                                className= 'outline-0 border-0 grow relative z-0' 
                                type="text" 
                                placeholder= 'Enter keywords...'
                                value= {searchValue}
                                onChange= {(e) => setSearchValue(e.target.value)}
                            />
                        </div>
                        <Link href= {`/movie-search?search_term=${searchValue}`} >
                            <button className='bg-white p-3 rounded-full shadow-lg pulse-custom'>
                                <AiOutlineArrowRight size={30}/>
                            </button>
                        </Link>
                    </form>
                </div>) : null
            }
            { openSubmenu ? <Submenu /> : null }
        </div>
    )
}

export default Header;