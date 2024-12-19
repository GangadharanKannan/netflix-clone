import ReactDOM from 'react-dom/client'
import './index.css'
import HeroSection from './components/HeroSection/HeroSection'
import Navbar from './components/Navbar/Navbar'
import RowPosters from './components/RowPosters/RowPosters'
import { original ,action , horror, romance, documen} from './components/Urls/Urls'
import Footer from './components/Footer/Footer'
import Player from './components/Player/Player'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection url={original}/>
      <RowPosters title="Netflix Orginals"  url={original}/>
      <RowPosters title="Action" ismall url={action}/>
      <RowPosters title="Romance" ismall url={romance}/>
      <RowPosters title="Documentry" ismall url ={documen} />
      <RowPosters title="Horror" ismall url={horror}/>
      <Footer />
    </>
  )
}

const router = createBrowserRouter([{
  path:"/",
  element:<App/>,
},{   
  path:"/:type/:id",
  element:<Player />,
}])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={router}/>)

