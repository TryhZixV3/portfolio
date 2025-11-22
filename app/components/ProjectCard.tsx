interface Props{
  title: string;
  excerpt: string;
  tags: string[];
  slug: string;
  img?: string;
  date?: string;
}

export default function ProjectCard({title, excerpt, tags, slug, img, date}: Props){
  return (
    <a className="project-card" href={`/projects/${slug}`}>
      <div className="project-media">
        <img src={img || '/avatar.svg'} alt={title} />
      </div>
      <div className="project-body">
        <h4 className="project-title">{title}</h4>
        <p className="project-excerpt">{excerpt}</p>
        <div className="project-meta">
          <div className="project-tags">
            {tags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
        </div>
        <div className="project-footer">
          {date && <span className="project-date">{date}</span>}
          <div className="project-arrow">↗</div>
        </div>
      </div>
    </a>
  )
}
