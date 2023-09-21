"use client"
import {useEffect, useRef, useState} from 'react'
import useMenu from '../(store)/store'
import { sublinks } from '../data'
import Link from 'next/link'

const Submenu = () => {
    const { menuPosition } = useMenu()
    const menuRef = useRef(null)

    const [links, setLinks] = useState([])

    useEffect(() => {
        const { page, center } = menuPosition
        const submenu = menuRef.current
        submenu.style.left = `${center}px`
        getPageLinks(page)
    }, [menuPosition])

    function getPageLinks(page) {
        const menulinks = sublinks.find((item) => item.page === page)
        if (menulinks) {
            const links = menulinks.links
            setLinks(links)
        }
    }

    return ( 
        <div ref= {menuRef} className='menu-show pt-6 top-[41px] absolute left-[50%] translate-x-[-50%] z-50 shadow-lg transition ease-in-out duration-1000'>
            <div className="submenu-custom menu-show bg-black text-white rounded-sm p-2">
                {
                    links.map((item, index) => {
                        return(
                            <Link key= {index} href= {`/movie-search?search_term=${item}`} className='px-2 py-1 menu-show'>
                                <div className='menu-show p-0.5 px-1 rounded-sm hover:bg-yellow-500 hover:text-black'>{item}</div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
     );
}
 
export default Submenu;