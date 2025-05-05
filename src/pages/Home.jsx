import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <main>
            <section className=' pt-5 flex flex-col items-center bg-gradient-to-r from-pink-700 to-blue-800 bg-clip-text text-transparent gap-3'>
                <p className='text-5xl font-bold'>Never miss a movie ever again!</p>
                <p className='text-2xl font-bold'>Check out what others are watching</p>
                <Link to='/movie/popular'>
                    <button type="button" className=" cursor-pointer text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Show me!</button>
                </Link>
            </section>
        </main>
    )
}

export default Home