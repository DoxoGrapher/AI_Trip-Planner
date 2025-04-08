import AIPage from "./components/AIPage.jsx"
import { BrowserRouter , Routes , Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AIPage/>}/>
    </Routes>

    </BrowserRouter>
  )
}

export default App
