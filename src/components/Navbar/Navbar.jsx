import logo from '../../assets/logo.png'
import profile from '../../assets/profile_img.png'
import bell from '../../assets/bell_icon.svg'
import search from '../../assets/search_icon.svg'
const Navbar = () => {
  return (
    <>
      <nav className="bg-black dark:bg-gray-800 antialiased">
        <div className=" mx-auto 2xl:container py-4">
          <div className="w-[90%] mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="shrink-0">
                <a href="#" title="" className="">
                  <img
                    className="block w-auto h-4 md:h-6 dark:hidden"
                    src={logo}
                    alt=""
                  />
                  <img
                    className="hidden w-auto h-4 md:h-6 dark:block"
                    src={logo}
                    alt=""
                  />
                </a>
              </div>
              <ul className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
                <li>
                  <a
                    href="#"
                    title=""
                    className="flex text-base font-semibold text-white hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                  >
                    Home
                  </a>
                </li>
                <li className="shrink-0">
                  <a
                    href="#"
                    title=""
                    className="flex text-base font-semibold text-white hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                  >
                    TV Shows
                  </a>
                </li>
                <li className="shrink-0">
                  <a
                    href="#"
                    title=""
                    className="flex text-base font-semibold text-white hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                  >
                    Movies
                  </a>
                </li>
                <li className="shrink-0">
                  <a
                    href="#"
                    title=""
                    className="text-base font-semibold text-white hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                  >
                    New & Popular
                  </a>
                </li>
                <li className="shrink-0">
                  <a
                    href="#"
                    title=""
                    className="text-base font-semibold text-white hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                  >
                    My List
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex justify-center items-center gap-7">
              <div>
                <img src={search} alt="search-icon" className='hidden md:block'/>
              </div>
              <div>
                <img src={bell} alt="subscribe-icon" className='hidden md:block'/>
              </div>
              <div>
                <img src={profile} alt="" className='hidden md:block' />
              </div>  
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
