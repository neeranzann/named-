import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router';

const Home = () => {
  const { infos } = useSelector((store) => store.info);

  const nav = useNavigate();
  return (
    <div className='p-5 grid grid-cols-3 '>
      {infos.length === 0 ? <h1>No Data</h1> : infos.map((info, i) => {
        return <div key={i}>
          <img className='object-cover h-[250px]' src={info.review} alt="" />
          <div className=' p-2 font-bold space-y-2 text-xl'>
            <p>{info.name}</p>
            <p>{info.email}</p>
            <p>Gender: {info.gender}</p>
            <p>Country: {info.country}</p>
            <p>{info.detail}</p>

            <div className=' flex justify-end space-x-3'>
              <button onClick={() => nav(`update/${info.id}`)}><i className="fa-solid fa-pen-to-square"></i></button>
              <button><i className="fa-solid fa-trash"></i></button>
            </div>

          </div>
        </div>
      })}
    </div>
  )
}

export default Home