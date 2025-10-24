import Spinner from './Spinner'
import LikeButton from './LikeButton'
import useGif from '../Hooks/useGif'
import { useTheme } from '../hooks/useTheme'

const Random = () => {
    const{gif,loading,fetchData}=useGif();
    const { isDark } = useTheme();
    
    function clickHandler(){
        fetchData()
    }
    
  return (
    <section 
      className={`w-full max-w-lg mx-auto px-4 rounded-lg border flex flex-col items-center gap-y-5 mt-[15px] transition-colors duration-300 ${
        isDark ? 'bg-green-600 border-gray-600' : 'bg-green-500 border-black'
      }`}
      aria-labelledby="random-heading"
    >
      <h2 
        id="random-heading"
        className={`text-xl sm:text-2xl md:text-3xl uppercase underline font-bold mt-[15px] transition-colors duration-300 text-center ${
          isDark ? 'text-white' : 'text-black'
        }`}
      >
        A Random Gif
      </h2>
      
      {loading ? (
        <div role="status" aria-label="Loading random gif">
          <Spinner/>
        </div>
      ) : (
        <div className="relative w-full max-w-md">
          <img 
            src={gif} 
            alt="Random gif" 
            className="w-full h-auto rounded-lg"
            loading="lazy"
          />
          <div className="absolute top-2 right-2">
            <LikeButton gif={gif} tag="random" />
          </div>
        </div>
      )}
      
      <button 
        onClick={clickHandler} 
        className={`w-full max-w-sm text-lg sm:text-xl py-3 px-4 rounded-lg font-bold mb-[20px] transition-all duration-300 focus:outline-none focus:ring-4 ${
          isDark 
            ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300 focus:ring-yellow-300' 
            : 'bg-yellow-500 text-black hover:bg-yellow-400 focus:ring-yellow-200'
        }`}
        aria-label="Generate a new random gif"
      >
        Generate
      </button>
    </section>
  )
}

export default Random
