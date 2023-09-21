import { PiFilmReelFill } from 'react-icons/pi'

const Footer = () => {
    return ( 
        <div className='my-6 bg-white text-sm'>
            <div className=' w-full md:w-[90%] lg:w-[80%] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10 p-4 rounded-md lg:px-10'>
                <PiFilmReelFill size= {80} className='hidden md:block'/>
                <p className='md:max-w-[50%]'>
                    ShowboxMovies is a Free Movies streaming site with zero ads. We let you watch movies online without having to register or paying, with over 10000 movies and TV-Series. You can also Download full movies from ShowboxMovies and watch it later if you want.
                </p>
                <ul>
                    <li>Terms of service</li>
                    <li>Contact</li>
                    <li>Sitemap</li>
                    <li>9Anime</li>
                </ul>
            </div>
        </div>
     );
}
 
export default Footer;