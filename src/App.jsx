import { Provider } from "react-redux"
import store from './store/store'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Body from "./components/Body/Body"
import Home from "./components/Home/Home"
import Watch from "./components/Watch/Watch"
function App() {

const router  = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/watch',
        element:<Watch/>
      },
      
    ]
  }
])

  return (
    <>
<Provider store={store}>
<RouterProvider router={router}/>
</Provider>
     </>
  )
}

export default App
