import {useState, useEffect} from 'react'
import {useNavigate} from "react-router-dom"

const CreateProject = () => {
  const [programminglanguages, setProgramminglanguages] = useState([])
  const fetchData = () => {
      fetch("http://localhost:9292/programminglanguages")
      .then(response => response.json())
      .then(data => setProgramminglanguages(data))
      
  }

  useEffect(() => {
      fetchData()
  }, [])

  const [project, setProject] = useState({
    title: "",
    details: "",
    reference: "",
    video_links: "",
    source_code: "",
    programminglanguages: "Ufotable"
});
const navigate = useNavigate()

const handleChange = (e) => {
  setProject({
      ...project,
      [e.target.name]: e.target.value
  })
}

const handleSubmit = e => {
  e.preventDefault()
  const newProject = {
    title: project.title,
    details: project.details,
    reference: project.reference,
    video_links: project.video_links,
    source_code: project.source_code,
    programminglanguages: project.programminglanguages
}

fetch("http://localhost:9292/projects", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(newProject)
})
.then(() => navigate("/projects"))
}

const ProgramminglanguagesMap = programminglanguages.map(programminglanguage => {
  return <option value={programminglanguage.name} name = "programminglanguage">{programminglanguage.name}</option>
}) 

  return (
    <>
    <div className='color'> 
      <h3>Create a Project</h3>
      <form onSubmit={handleSubmit}>
         <label htmlFor="title">Title</label>
         <input onChange={handleChange} type="text" name="title" value={project.title} required/><br />
         <label htmlFor="details">Details</label>
         <input onChange={handleChange} type="text" name="details" value={project.details}/><br />
         <label htmlFor="reference"> Reference </label>
         <input onChange={handleChange} type="text" name="reference" value={project.reference}/><br />
         <label htmlFor="video_links"> video_links</label>
         <input onChange={handleChange} type="text" name="video_links" value={project.video_links}/><br />
         <label htmlFor="source_code"> source_code </label>
         <input onChange={handleChange} type="text" name="source_code" value={project.source_code}/><br />
         <label htmlFor="programminglanguage">Programminglanguage </label>
         <select
          name = "Programminglanguage"
          value = {project.programminglanguage}
          onChange={handleChange}
          type="text"
          
          
          >
          {ProgramminglanguagesMap}
         </select>
         <input type="submit"  value="Create Project" />
      </form>
      </div>

    </>
  )
}

export default CreateProject