import AIPage from "./components/AIPage.jsx"
import { BrowserRouter , Routes , Route } from "react-router-dom"
import Chatbot from "./components/Chatbot.jsx"
import TripDetailsComponent from "./components/TripDetailsComponent.jsx"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AIPage/>}/>
      <Route path="/chat" element={<Chatbot/>}/>
      <Route path="/trip-details" element={<TripDetailsComponent/>}/>
    </Routes>

    </BrowserRouter>
  )
}

export default App
