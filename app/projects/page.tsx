import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

export default function ProjectsPage(){

  return (
    <main>
      <section className="projects-page">
        <div className="container">
          <h1 className="projects-page-title">Mes projets</h1>
          <p className="projects-page-subtitle">Découvrez tous mes projets</p>
          
          <div className="projects-grid">
            {projects.map(p => <ProjectCard key={p.title} {...p} />)}
          </div>
        </div>
      </section>
    </main>
  )
}
