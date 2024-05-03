import { Provider } from "react-redux"
import Header from "./components/Header/Header"
import store from './store/store'
import { RouterProvider } from "react-router-dom"
function App() {



  return (
    <>
<Provider store={store}>
<RouterProvider />
</Provider>
    <Header/>
     </>
  )
}

export default App
