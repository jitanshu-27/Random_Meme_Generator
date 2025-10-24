import Spinner from './Spinner'
import LikeButton from './LikeButton'
import useGif from '../Hooks/useGif'
import { useTheme } from '../hooks/useTheme'

const Random = () => {
    const { gif, loading, fetchData, error } = useGif();
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
      
      {error ? (
        <div className={`w-full max-w-md p-4 rounded-lg text-center ${
          isDark ? 'bg-red-900 text-red-200' : 'bg-red-100 text-red-800'
        }`}>
          <p className="font-medium mb-2">⚠️ Error</p>
          <p className="text-sm">{error}</p>
          {error.includes('API key') && (
            <div className="mt-3 text-xs">
              <p>To fix this:</p>
              <ol className="text-left mt-1 space-y-1">
                <li>1. Get a free API key from <a href="https://developers.giphy.com/" target="_blank" rel="noopener noreferrer" className="underline">developers.giphy.com</a></li>
                <li>2. Add it to your .env file</li>
                <li>3. Restart the server</li>
              </ol>
            </div>
          )}
        </div>
      ) : loading ? (
        <div role="status" aria-label="Loading random gif">
          <Spinner/>
        </div>
      ) : gif ? (
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
      ) : (
        <div className={`w-full max-w-md p-8 rounded-lg text-center border-2 border-dashed ${
          isDark ? 'border-gray-400 text-gray-300' : 'border-gray-400 text-gray-600'
        }`}>
          <p>🎬 No GIF to display</p>
          <p className="text-sm mt-1">Click Generate to fetch a random GIF</p>
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
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate'}
      </button>
    </section>
  )
}

export default Random
