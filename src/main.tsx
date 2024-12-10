import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {store} from "@/store/store.ts";
import {Provider} from 'react-redux'
import {Provider as ChakraProvider} from "@/components/ui/provider"
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ChakraProvider>
<Provider store={store}>
    <App />

</Provider>
      </ChakraProvider>
  </StrictMode>
)
