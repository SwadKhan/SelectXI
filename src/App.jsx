import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Selected from './Components/Selected'

import './App.css'
import Players from './Components/Players'
import Newsletter from './Components/Newsletter';
import Footer from './Components/Footer';

function App() {
  const [playerQueue,setPlayerQueue]=useState([]);
  const [coin, setCoin] = useState(0)

  const [showSelected,setShowSelected]=useState(false)

  const addMorePlayer=()=>{
    setShowSelected(false)
  }
//  Adding player
  const addPlayerQueue= players =>{
    if(playerQueue.length<6){
      const isExist=playerQueue.find(previousSelected=>previousSelected.playerId===players.playerId)
    if(!isExist){
    setPlayerQueue([...playerQueue,players])
    toast.success(`${players.name} is now in your Team.`)
    }
    else{
      console.log(players.playerId),
      toast.error("Player already chosen before.")
    }
    }
    else{
      toast.error("Sorry, the maximum player limit has been reached.")
    }
    
  }
// Deducting coin on choosing players
  const CoinReset=(Dcoin,players)=>{
    if (Dcoin<=coin){
      setCoin(coin-Dcoin)
      addPlayerQueue(players)
    }
    else{
      toast.error("Sorry. Not Enough Coin!!!")
    }
    
  }

  //claiming coin or adding  
  const Claimcoin=()=>{
    setCoin(coin+2500000)
    toast.success("$2500000 claimed Successfully")
  }

  const handleRemove=id=>{
    const updateQueue=playerQueue.filter(player=>player.playerId!==id)
    setPlayerQueue(updateQueue)
  }

  return (
   
    <div >
      <div className='w-11/12 mx-auto px-4 gap-2'>
      <ToastContainer position="top-center" />
     
     {/* Navbar */}
     <Navbar coin={coin} ></Navbar>
     <Banner Claimcoin={Claimcoin}></Banner>

     
     <div className='flex flex-col md:flex-row md:justify-between items-center my-8'>
        <h1 className='text-2xl font-bold'>{showSelected? "Selected":"Available"}</h1>
        <div >
            <button className={`btn rounded-l-lg rounded-r-none ${!showSelected ? 'bg-green-300' : 'bg-slate-300'}   text-black hover:bg-red-300`} onClick={() => setShowSelected(false)}>Available </button>
            <button className={`btn rounded-r-lg rounded-l-none ${showSelected ? 'bg-green-300' : 'bg-slate-300'} text-black hover:bg-red-300`} 
            onClick={() => setShowSelected(true)}>(Selected {playerQueue.length}/6)</button>
        </div>
        </div>

      {showSelected ? (
        <Selected playerQueue={playerQueue} handleRemove={handleRemove} addMorePlayer={addMorePlayer}/>
      ) : (
        <Players CoinReset={CoinReset} />
      )}

      <Newsletter></Newsletter>

      
    </div>
    <div><Footer></Footer></div>
    </div>
  )
}

export default App
