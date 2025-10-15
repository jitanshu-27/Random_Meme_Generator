import Spinner from './Spinner'
import useGif from '../Hooks/useGif'
import { useState } from 'react'
const API_KEY = import.meta.env.VITE_GIPHY_API_KEY
const Tags = () => {
    const [tag,setTag] = useState('car')
    const{gif,loading,fetchData}= useGif(tag);
    function clickHandler(){
        fetchData(tag)
    }
    function changeHandler(event){
        setTag(event.target.value)
    }
  return (
    <div className="w-1/2 bg-blue-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-3xl uppercase underline font-bold mt-[15px]">Random {tag} Gif</h1>
      {
        loading ? (<Spinner/>) : (<img src={gif} width="450"/>)
      }
      <input type="text" className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"onChange={changeHandler} value={tag}/>
      <button onClick={clickHandler} className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold mb-[20px] bg-yellow-500">Generate</button>
    </div>
  )
}

export default Tags
