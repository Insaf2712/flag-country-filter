import React from 'react'
import Filter from '../components/Filter'
import Countries from '../components/Countries'

const Home = ({mode,input,setInput,setCountry,setRegion,region,country}) => {
  return (
    <div>
      <Filter
        mode={mode}
        input={input}
        setInput={setInput}
        setCountry={setCountry}
        setRegion={setRegion}
      />
      <Countries country={country} input={input} region={region} mode={mode} />
    </div>
  )
}

export default Home