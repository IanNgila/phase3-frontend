import {useState, useEffect} from 'react'
import Projects from '../components/Projects'

const ProjectsContainer = () => {
  const [projects, setProjects] = useState([])
  const fetchData = () => {
      fetch("http://localhost:9292/projects")
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => alert(error))
  }

  useEffect(() => {
      fetchData()
  }, [])

  const handleDeleteProject = (id) => {
    const updatedProjecs = projects.filter((project) => project.id !== id);
    setProjects(updatedAnimes);
  }
  return (
    <div>
      <Projects projects={projects} handleDeleteProject={handleDeleteProject}/>
    </div>
  )
}

export default ProjectsContainer