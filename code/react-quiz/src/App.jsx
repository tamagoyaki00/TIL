
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { ROUTES } from './const'
import HomePage from './pages/HomePage'
import QuizPage from './pages/QuizPage'
import ResultPage from './pages/ResultPage'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />}></Route>
        <Route path={ROUTES.QUIZ} element={<QuizPage />}></Route>
        <Route path={ROUTES.RESULT} element={<ResultPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
