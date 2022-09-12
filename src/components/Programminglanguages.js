import React, {useEffect, useState} from 'react'


function Programminglanguages() {
  const [ programminglanguage, setProgramminglanguages ] = useState([])

  useEffect(() => {
    fetch(`http://localhost:9292/programminglanguages`)
    .then((res)=> res.json())
    .then((Data)=>setProgramminglanguages(Data))
    .catch(error => alert(error))
},[]);

// console.log(programminglanguage)

const data=programminglanguage.map((prog)=>{
  return(
    <div className='program'>
      <p>{prog.name}</p>
      <p>{prog.library}</p>
    </div>
  )})
  return (
    <div>
       {data}
    
    </div>
   
  )
  }



export default Programminglanguages