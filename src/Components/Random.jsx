import Spinner from './Spinner'
import useGif from '../Hooks/useGif'
const Random = () => {
    const{gif,loading,fetchData}=useGif();
    function clickHandler(){
        fetchData()
    }
    
  return (
    <div className="w-1/2 bg-green-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-3xl uppercase underline font-bold mt-[15px]">A Random Gif</h1>
      {
        loading ? (<Spinner/>) : (<img src={gif} width="450"/>)
      }
      
      <button onClick={clickHandler} className="w-10/12 bg-white text-xl py-2 rounded-lg font-bold mb-[20px] bg-yellow-500">Generate</button>
    </div>
  )
}

export default Random
