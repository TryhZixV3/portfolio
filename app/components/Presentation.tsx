export default function Presentation(){
  return (
    <section className="presentation">
      <div className="container presentation-grid">
        <div className="presentation-left">
          <img src="/avatar.jpg" alt="Mattéo" className="presentation-photo" />
        </div>
        <div className="presentation-right">
          <h3 className="presentation-title">Mattéo Lopez</h3>
          <p className="presentation-text">Etudiant en BUT MMI, je suis passionné par les jeux vidéo depuis toujours. J’ai développé un intérêt marqué pour le <strong>game design</strong> et la création d’expériences interactives cohérentes et engageantes. Cette passion guide mon objectif professionnel : concevoir des univers et des mécaniques qui marquent les joueurs.
J’aime également travailler l’image, que ce soit à travers <strong>la vidéo</strong> ou <strong>la photographie</strong>, deux disciplines qui enrichissent ma créativité et ma manière d’aborder la narration visuelle.</p>
          <a href="/about" className="btn btn-inline">En savoir plus ↗</a>
        </div>
      </div>
    </section>
  )
}
