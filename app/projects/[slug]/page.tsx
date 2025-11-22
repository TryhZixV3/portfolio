import { projects } from '@/app/data/projects';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ slug: string }>;
}

// Fonction pour parser le texte avec ** et convertir en JSX
function parseMarkdownBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Parser les retours à la ligne et les mettre en paragraphes
  const paragraphs = project.detailedContent.split('\n\n');

  return (
    <main>
      <section className="project-detail">
        <div className="container">
          {/* Bouton Retour + Breadcrumb en haut, largeur 100% et flex sans superposition */}
          <div style={{ width: '100%', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'nowrap' }}>
            <a href="/projects" className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '14px', whiteSpace: 'nowrap', flexShrink: 0 }}>← Retour</a>
            <nav 
              className="breadcrumb-nav"
              style={{ flex: 1, minWidth: 0, fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'nowrap' }}
            >
              <a href="/projects" style={{ color: '#666666', textDecoration: 'none', fontWeight: '500', whiteSpace: 'nowrap', flexShrink: 0, minWidth: 0 }}>Mes projets</a>
              <span style={{ color: '#666666', flexShrink: 0 }}>/</span>
              <span className="breadcrumb-title-ellipsis" style={{ color: '#000000', fontWeight: '500', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', minWidth: 0, flex: 1 }}>{project.title}</span>
            </nav>
          </div>

          {/* Média (image ou vidéo YouTube) responsive, plus large */}
          <div className="project-detail-image" style={{ marginBottom: '40px', maxWidth: '1100px', width: '100%', marginLeft: 'auto', marginRight: 'auto' }}>
            {project.videoUrl ? (
              <iframe
                className="project-media-responsive-video"
                width="100%"
                height="620"
                src={project.videoUrl}
                title={project.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: '12px', width: '100%', maxWidth: '1100px', height: 'clamp(200px,56.25vw,620px)' }}
              ></iframe>
            ) : (
              <img className="project-media-responsive" src={project.img} alt={project.title} style={{ width: '100%', borderRadius: '12px', maxWidth: '1100px', height: 'clamp(220px,40vw,500px)', objectFit: 'cover', display: 'block', margin: '0 auto' }} />
            )}
          </div>

          {/* Titre - Aligné à gauche */}
          <div className="project-detail-header" style={{ marginBottom: '8px', textAlign: 'left' }}>
            <h1 className="project-detail-title">{project.title}</h1>
          </div>

          {/* Date */}
          <p className="project-detail-date" style={{ marginBottom: '16px', textAlign: 'left' }}>{project.date}</p>

          {/* Tags */}
          <div className="project-detail-tags" style={{ marginBottom: '24px', textAlign: 'left' }}>
            {project.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>

          {/* Contenu détaillé - Aligné à gauche avec paragraphes */}
          <div className="project-detail-content" style={{ textAlign: 'left' }}>
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="project-detail-description" style={{ marginBottom: '16px' }}>
                {parseMarkdownBold(paragraph)}
              </p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
