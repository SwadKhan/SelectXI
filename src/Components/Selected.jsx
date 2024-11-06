

const Selected = ({playerQueue,handleRemove,addMorePlayer}) => {    
    return (
        <div>
        <div className='flex flex-col gap-6'>
            {
                playerQueue.map((player)=>(
                    <div key={player.playerId} className="flex flex-row justify-between border-0.5 border-gray-100">
                        <div className="flex
                         gap-4"><img className="w-16 h-16" src={player.image} alt="player_image" />
                        <div className="flex flex-col gap-1">
                            <h2 className="text-xl font-semibold">{player.name}</h2>
                            <p className="text-lg font-medium">{player.role}</p>
                        </div>
                     <div>
                      <h2 className="text-xl font-semibold">${player.biddingPrice}</h2>
                     </div>
                    </div>
<button onClick={()=>handleRemove(player.playerId)}>
<img className="w-8 h-7" src="/icons8-trash-50.png" alt="" />
</button>
                    </div>
                ))
            }
        </div>
        <div>
            <div className="border-2 rounded-xl p-1 w-52 mt-4 border-white">
                <button  onClick={addMorePlayer} className="bg-lime-200 text-xl font-medium rounded-xl p-2">Add More Players</button>
            </div>     
        </div>
        </div>
    );
};

export default Selected;