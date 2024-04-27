import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Wheather = () => {
  const [data ,setData] = useState([])
  const [cityName, setCityName] = useState()

  function getWheatherAPI(city){
    const apiurl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=61077e5ad002d732ba425bf99dcabdf8`

        axios.get(apiurl).then((res)=>{
          setData(res.data)
          // console.log(res)
        }).catch((err)=>{
          console.log(err)
        })
  }

  useEffect(()=>{
    getWheatherAPI("")
  },[])

  function handleSearch(){
    getWheatherAPI(cityName)
  }


  return (
    <div >
    <section  >
      <div className='container' >
        <div className='row'  >
            <div className='col-md-4'></div>
            <div className='col-md-4'  >
                
                <div className="card" style={{Width: "18rem;"}}>
                    
                    <div className="card-body" >
                    <h3 className="card-title" style={{textAlign:'center',color:'white'}}>My Wheather App</h3>
                    <input type='text' id='card'  className='form-control mt-3 mb-2' value={cityName} onChange={(e)=>{setCityName(e.target.value)}}/>
                    <button type='submit' id='card' className='form-control' onClick={handleSearch}>Check Now</button>
                    <br/>
                    <h2 style={{textAlign:'center'}}> {data?.name}</h2>
                    <br/>
                    <h5>Temp :- {((data?.main?.temp)-273.15).toFixed(2)}°C</h5>
                    <h5>MaxTemp :- {((data?.main?.temp_max)-273.15).toFixed(2)}°C</h5>
                    <h5>MinTemp :- {((data?.main?.temp_min)-273.15).toFixed(2)}°C</h5>
                    <h5>Wind :- {data?.wind?.speed}</h5>
    
                </div>
            </div>

        </div>
            <div className='col-md-4'></div>
            

        </div>
      </div>
      </section>
    </div>
    

    
  )
}

export default Wheather
