'use client'
import { PiFilmReelFill } from 'react-icons/pi'
import { LiaTimesCircle } from 'react-icons/lia'
import {useState, useEffect} from 'react'
import useMenu from '../(store)/store'

const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isNewbie, setIsNewbie] = useState(false)

    const { showForm, setShowForm} = useMenu()

    useEffect(() => {
        const body = document.body
        return () => {
            body.style.position = 'static'
            body.style.top= ''
        }
    },[])

    const handleFormClose = () => {
        setShowForm(false)
        const body = document.body
        body.style.position = 'static'
        body.style.top= ''
    }

    return (
        showForm && (
            <div className='absolute inset-x-0 top-0 h-screen bg-black/80 grid place-items-center z-50' >
                <div className='slide-custom relative bg-white p-4 md:p-10 w-[95%] max-w-[500px] text-sm text-gray-400 rounded-sm'>
                    <LiaTimesCircle
                        size={30}
                        className='absolute right-[8px] top-[8px] hover:text-black'
                        onClick={handleFormClose}
                    />
                    <div className='grid place-items-center p-2 text-black font-bold'>
                        <h1>Welcome Back!</h1>
                        <span><PiFilmReelFill size={40} /></span>
                    </div>
                    <form action="" onSubmit={(e) => e.preventDefault()}>
                        <div className='mb-4'>
                            <label htmlFor="">EMAIL</label>
                            <br></br>
                            <input type="text" value={email} className='p-2 border border-gray-300 rounded-sm w-full mt-1' />
                        </div>
                        <div className='mb-4'>
                            <label htmlFor="">PASSWORD</label>
                            <br></br>
                            <input type="password" value={password} className='p-2 border border-gray-300 rounded-sm w-full mt-1' />
                        </div>
                        <div className='mb-4 flex justify-between items-center'>
                            <div className='flex items-center'>
                                <input type="checkbox" className='mr-2' />
                                <label>Remember me</label>
                            </div>
                            <p className='hover:text-black cursor-pointer'>Forgot Password?</p>
                        </div>
                        <button className='my-2 p-3 w-full bg-yellow-300 rounded-md hover:bg-yellow-200 text-black'>Login</button>
                    </form>
                    <div
                        className='p-5 text-center text-black'>Dont have an account?
                        <span className='hover:text-gray-400 cursor-pointer ml-2' onClick={() => setIsNewbie(!isNewbie)}>REGISTER</span>
                    </div>
                </div>
            </div>
        )
    );
}
 
export default Form;