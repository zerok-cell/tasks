import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from "react-router";
import App from './App.tsx'
import {store} from "@/store/store.ts";
import {Provider} from 'react-redux'
import {Provider as ChakraProvider} from "@/components/ui/provider"
import MoreInfoPotion from "@/components/MoreInfoPotion.tsx";
createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <ChakraProvider>
            <Provider store={store}>
                        <BrowserRouter>
                            <Routes>
                                <Route  path={'products'}  element={<App />}>
                                    <Route path={':id'} element={<MoreInfoPotion/>}/>
                                </Route>


                            </Routes>
                        </BrowserRouter>
            </Provider>
      </ChakraProvider>
    </StrictMode>

)
