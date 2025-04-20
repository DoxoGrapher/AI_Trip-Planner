import AIPage from "./components/AIPage.jsx"
import { BrowserRouter , Routes , Route } from "react-router-dom"
import Chatbot from "./components/Chatbot.jsx"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AIPage/>}/>
      <Route path="/chat" element={<Chatbot/>}/>
    </Routes>

    </BrowserRouter>
  )
}

export default App
