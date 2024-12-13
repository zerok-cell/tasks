



import './App.css'
import CardsNews from "@/CardsNews.tsx";
import {Outlet, useParams} from "react-router";
function App() {
    const param = useParams();

  return (
    <>

        {
            param?.id ? (<Outlet/>):(<CardsNews/>)

        }


    </>
  )
}

export default App
