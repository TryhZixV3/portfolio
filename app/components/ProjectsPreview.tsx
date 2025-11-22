import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function ProjectsPreview(){
  // Afficher les 3 derniers projets (les premiers du tableau, triés par date décroissante)
  const latestProjects = projects.slice(0, 3);

  return (
    <section className="projects-preview">
      <div className="container">
        <h3 className="section-heading">Mes derniers projets</h3>
        <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {latestProjects.map(p => <ProjectCard key={p.title} {...p} />)}
        </div>
      </div>
    </section>
  )
}
