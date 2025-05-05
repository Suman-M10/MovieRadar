import posterNotAvailable from '../assets/posterNotAvailable.jpg';
import { Link,useLocation } from "react-router-dom";
import { useEffect } from "react";

function PageNotFound() {
  const location=useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(()=>{
    document.title='Page Not Found | MovieRadar'
  })
  return (
    <main>
      <section className="flex flex-col items-center">
        <div className="text-2xl font-bold py-4 dark:text-white ">
          <p>Error 404, Page Not Found</p>
        </div>
        <div className='max-w-xl h-2xl'>
          <img src={posterNotAvailable} alt="page not found" className='rounded shadow-sm dark:shadow-gray-700'/>
          <Link to='/'>
          <button type="button" className=" relative -top-20 left-35 md:-top-20 md:left-55 cursor-pointer text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Back to Home</button>
          </Link>
        </div>
      </section>
    </main>

  )
}

export default PageNotFound