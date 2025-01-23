import './App.css'
import { Header } from './components/header'
import { Formation } from './screens/formation'
import { Hero } from './screens/Hero'
import { Project } from './screens/Project'
import { Skills } from './screens/Skills'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <Project />
      <Formation />
    </>
  )
}

export default App
