import {useState, useEffect} from "react"
import {Link, useNavigate, useParams} from "react-router-dom"
// import {useNavigate} from "react-router-dom"


const ProjectCard = ({project, handleDeleteProject}) => {
  const navigate = useNavigate()
  const {id} = useParams()
  const [projectObj, setProjectObj] = useState(null);
    useEffect(() => {   
        if (!project) {
            fetch(`http://localhost:9292/projects/${id}`)
            .then(resp => resp.json())
            .then(project => setProjectObj(project))
        }
    }, [project, id]);

    const finalProject = project ? project : projectObj
    if (!finalProject) return <h1>Loading...</h1>

    const handleDeleteClick = () => {
      fetch(`http://localhost:9292/projects/${project.id}`, {
        method: "DELETE",
      })
        .then((r) => r.json())
        .then(() => navigate.push("/programminglanguages"))
        .then(() => handleDeleteProject(project.id))
        
    }
    
  return (
    <div style={{border:"solid", width: "17 %", height:"25%", margin:"auto"}}>
      <h2>Title: <Link to={`/projects/${finalProject.id}`}>{finalProject.title}</Link></h2>
      <img src = {finalProject.image_url} alt={finalProject.title} />
      <h2>details</h2>
      <p>{finalProject.details}</p>
      <h2> Reference:{finalProject.refernce}</h2>
      <h2> video_links:{finalProject.video_links}</h2>
      <h2>Programming Language:{finalProject.programminglanguage.name}</h2>
      <button className="remove" onClick={handleDeleteClick}>
        Delete
      </button>
    </div>
  )
}

export default ProjectCard