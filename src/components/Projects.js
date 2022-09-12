// import React, {useEffect, useState} from 'react'



// function Projects( ) {
//     const [ project, setProjects ] = useState([])
    

//     useEffect(() => {
//         fetch(`http://localhost:9292/project`)
//         .then((res)=> res.json())
//         .then((Data)=>setProjects(Data))
//         .catch(error => alert(error))
//     },[]);

//     // console.log(project)

//     const data=project.map((proj)=>{
//         return(
            
//                 <div className='container'>
//             <div className='row'>
//             <div className='container'>
//                   <h1>{proj.title}</h1>
//                  <video width="200" height="250" controls >
//                  </video>
//                  <>{proj.image_url}</>
//                  <h2>details</h2>
//                  <p>{proj.details}</p>
//                  <h2>Video link</h2>                        
//                 <a href={proj.reference}>Link</a>
//             <p></p>
//             </div>
//             </div>

                
              
//                 {/* <source src={proj.video_links} /> */}
     
//             </div>
            
           
                
        
            
//         )})
 
//   return (
//     <div>
//        {data}
    
//     </div>
   
//   )
// }
// export default Projects