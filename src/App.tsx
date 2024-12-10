
import {Suspense} from 'react'



import './App.css'
import CardsNews from "@/CardsNews.tsx";
import {Spinner} from "@chakra-ui/react";
function App() {


  return (
    <>
        <Suspense fallback={<Spinner />} >
            <CardsNews/>
        </Suspense>
    </>
  )
}

export default App
