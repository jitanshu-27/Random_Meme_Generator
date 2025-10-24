import Spinner from './Spinner'
import LikeButton from './LikeButton'
import SearchAndCategories from './SearchAndCategories'
import useGif from '../Hooks/useGif'
import { useState } from 'react'
import { useTheme } from '../hooks/useTheme'

const Tags = () => {
    const [tag,setTag] = useState('car')
    const{gif,loading,fetchData}= useGif(tag);
    const { isDark } = useTheme();
    
    function clickHandler(){
        fetchData(tag)
    }
    function changeHandler(event){
        setTag(event.target.value)
    }

    const handleSearch = (searchTerm) => {
        setTag(searchTerm);
        fetchData(searchTerm);
    };

    const handleCategorySelect = (category) => {
        setTag(category);
        fetchData(category);
    };
    
  return (
    <section className="w-full flex flex-col items-center gap-y-6 px-4" aria-label="Tagged gif generator">
      {/* Search and Categories */}
      <SearchAndCategories 
        onSearch={handleSearch}
        onCategorySelect={handleCategorySelect}
        currentTag={tag}
      />
      
      {/* Main GIF Display */}
      <div className={`w-full max-w-lg mx-auto rounded-lg border flex flex-col items-center gap-y-5 transition-colors duration-300 ${
        isDark ? 'bg-blue-600 border-gray-600' : 'bg-blue-500 border-black'
      }`}>
        <h2 className={`text-xl sm:text-2xl md:text-3xl uppercase underline font-bold mt-[15px] transition-colors duration-300 text-center px-4 ${
          isDark ? 'text-white' : 'text-black'
        }`}>
          Random {tag} Gif
        </h2>
        
        {loading ? (
          <div role="status" aria-label={`Loading ${tag} gif`}>
            <Spinner/>
          </div>
        ) : (
          <div className="relative w-full max-w-md px-4">
            <img 
              src={gif} 
              alt={`Random ${tag} gif`} 
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
            <div className="absolute top-2 right-6">
              <LikeButton gif={gif} tag={tag} />
            </div>
          </div>
        )}
        
        <div className="w-full px-4 flex flex-col gap-3">
          <label htmlFor="tag-input" className="sr-only">
            Enter a tag for gif generation
          </label>
          <input 
            id="tag-input"
            type="text" 
            className={`w-full text-lg py-3 px-4 rounded-lg text-center transition-colors duration-300 focus:outline-none focus:ring-4 ${
              isDark 
                ? 'bg-gray-700 text-white border-gray-600 placeholder-gray-400 focus:ring-blue-300' 
                : 'bg-white text-black placeholder-gray-500 focus:ring-blue-200'
            }`}
            onChange={changeHandler} 
            value={tag}
            placeholder="Enter a tag..."
            aria-describedby="tag-help"
          />
          <p id="tag-help" className="sr-only">
            Enter any word to generate a related gif
          </p>
          
          <button 
            onClick={clickHandler} 
            className={`w-full text-lg sm:text-xl py-3 px-4 rounded-lg font-bold mb-[20px] transition-all duration-300 focus:outline-none focus:ring-4 ${
              isDark 
                ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300 focus:ring-yellow-300' 
                : 'bg-yellow-500 text-black hover:bg-yellow-400 focus:ring-yellow-200'
            }`}
            aria-label={`Generate a new ${tag} gif`}
          >
            Generate
          </button>
        </div>
      </div>
    </section>
  )
}

export default Tags
