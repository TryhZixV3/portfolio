export default function About(){
  const software = [
    { name: 'Gitbook', logo: '/gitbook-logo.svg', color: '#4285FD', className: 'software-gitbook' },
    { name: 'Premiere Pro', logo: '/premiere-pro-logo.svg', color: '#9999FF', className: 'software-premiere' },
    { name: 'After Effects', logo: '/after-effect-logo.svg', color: '#9999FF', className: 'software-aftereffects' },
    { name: 'Photoshop', logo: '/photoshop-logo.svg', color: '#31A8FF', className: 'software-photoshop' },
    { name: 'Lightroom', logo: '/lightroom-logo.svg', color: '#31A8FF', className: 'software-lightroom' }
  ]

  return (
    <main>
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img src="/me.jpg" alt="Mattéo Lopez" className="about-photo" />
            </div>
            <div className="about-right">
              <div className="about-content">
                <h1 className="about-title">À propos de moi</h1>
                <p className="about-text">
                  Depuis des années, les jeux vidéo occupent une place centrale dans mon quotidien. Au-delà du simple divertissement, ils sont devenus pour moi un terrain d'analyse, de curiosité et de compréhension des mécaniques interactives. Cette fascination m'a naturellement conduit vers une ambition précise : devenir Game Designer. Ce qui m'attire dans ce domaine, ce n'est pas seulement l'idée de créer des mondes, mais surtout celle d'imaginer des systèmes, des règles et des expériences capables d'influencer directement la façon dont un joueur perçoit, réfléchit et interagit.
                </p>
                <p className="about-text">
                  En parallèle, je m'intéresse fortement à la vidéo et à la photographie. Ces deux médiums m'offrent d'autres façons d'explorer la narration, le rythme, la composition et l'émotion. Ils complètent ma vision du game design : comprendre l'image, la lumière, le cadrage et la construction d'un récit visuel renforce ma capacité à concevoir des univers cohérents et immersifs.
                </p>
                <p className="about-text">
                  Aujourd'hui, je veux mettre à profit cet ensemble de compétences pour créer des expériences qui allient créativité, intention et maîtrise technique. Mon objectif est clair : contribuer à des projets capables de marquer les joueurs et de leur offrir des moments qui restent en mémoire.
                </p>
              </div>
            </div>
          </div>

          <div className="software-block-full">
            <h2 className="software-title">Mes logiciels</h2>
            <p className="software-subtitle">Les outils que j'utilise au quotidien pour concevoir et créer.</p>
            
            <div className="software-pills">
              {software.map((soft) => (
                <div
                  key={soft.name}
                  className={`software-pill ${soft.className}`}
                >
                  <img src={soft.logo} alt={soft.name} className="software-logo" />
                  <span>{soft.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
