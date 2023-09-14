import Shapes from "./Shapes"
import statcount from "./StatCount"


const Stats = () => {
  return (
    <>
    <Shapes colorClass="p-stat purple"/>
    <Shapes colorClass="o-stat orange"/>

    <section className="container-fluid stats-container">
      <div className="row">
      {statcount.map((count) => (<>
        <div key={count.id} className="stats col">
          <h3>{count.title}</h3>
          <p>{count.paragraph}</p>
        </div>
        <span className="line s-line"></span>
        </>
            ))}
        
      </div>
    </section>

    </>
  )
}

export default Stats