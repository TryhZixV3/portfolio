interface Props {
  title: string;
  date: string;
  description: string;
  tags: string[];
  img?: string;
}

export default function ProjectDetail({ title, date, description, tags, img }: Props) {
  return (
    <main>
      <section className="project-detail">
        <div className="container">
          <div className="project-detail-header">
            <h1 className="project-detail-title">{title}</h1>
            <p className="project-detail-date">{date}</p>
          </div>

          {img && (
            <div className="project-detail-image">
              <img src={img} alt={title} />
            </div>
          )}

          <div className="project-detail-content">
            <div className="project-detail-tags">
              {tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
            <p className="project-detail-description">{description}</p>
          </div>
        </div>
      </section>
    </main>
  )
}
