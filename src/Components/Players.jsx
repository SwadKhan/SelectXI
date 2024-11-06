import  { useEffect, useState } from 'react';

const Players = ({CoinReset}) => {
    const [players,setPlayer]=useState([]);
    useEffect(()=>{
        fetch('player.json')
        .then(res=>res.json())
        .then(data=>setPlayer(data))
    },[])
    return (
        <div>
        <div className='grid grid-col-1 lg:grid-cols-3 md:grid-cols-2 gap-6'>
  
        {
           players.map(players=>(
               <div key={players.players_id} className="card bg-base-100 border-2 shadow-lg">
               <figure className='px-8 pt-6'>
                 <img className='md:h-52 w-full rounded-xl'
                   src={players.image}
                   alt="players image" />
               </figure>
               <div className="card-body">
                <div className='flex gap-2'><img className='w-8 h-8' src="/profile_icon.png" alt="" />
                <h2 className="card-title text-2xl text-grey-800 font-bold">{players.name}</h2></div>
                 {/* <div> country and role */}
                 <div className='flex justify-between'>
                 <div className='flex gap-2'>
                    <img className='w-10 h-10' src="/flag.png" alt="" />
                 <p className='text-white-600 text-xl'>{players.country}
                 </p>
                 </div>
                 <div className='border-none bg-slate-300 rounded-xl text-black text-center items-center p-2'>
                    <h2>{players.role}</h2></div>
                </div>
                <div className='h-0.5 bg-slate-300'></div>
                 <div className='flex  gap-4 justify-between mt-4'>
                    <p>{players.battingType}</p>
                    <p>{players.bowlingType}</p>
                 </div>
                </div>
                 <div className="card-actions justify-between flex mb-2 mx-auto gap-8">
                    <div>Price: ${players.biddingPrice}</div>
                   <button className="btn rounded-full px-4 text-lg bg-slate-300 text-black  font-medium -mt-3 hover:bg-green-300 "onClick={()=>CoinReset(players.biddingPrice,players)}
                    >Choose Player</button>
                 </div>
                 
           </div>
           ))
        } 

    </div>
    </div>
    )
}
export default Players;