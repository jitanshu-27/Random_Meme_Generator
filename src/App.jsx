import './App.css'
import Random from './Components/Random'
import Tags from './Components/Tags'
import ThemeToggle from './Components/ThemeToggle'
import FavoritesList from './Components/FavoritesList'
import { useTheme } from './hooks/useTheme'

function App() {
  const { isDark } = useTheme();
  
  return (
    <div className={`w-full min-h-screen flex flex-col relative items-center overflow-x-hidden transition-colors duration-300 ${
      isDark ? 'bg-gray-900' : 'background'
    }`}>
      <ThemeToggle />
      <FavoritesList />
      
      <header>
        <h1 className={`rounded-lg uppercase w-11/12 max-w-4xl text-center mt-[40px] mx-auto py-4 px-6 text-2xl sm:text-3xl md:text-4xl font-bold transition-colors duration-300 ${
          isDark ? 'bg-gray-800 text-white' : 'bg-white text-black'
        }`}>
          Random Gifs
        </h1>
      </header>
      
      <main className="flex flex-col w-full items-center gap-y-10 mt-[30px] pb-10">
        <Random/>
        <Tags/>
      </main>
    </div>
  )
}

export default App
