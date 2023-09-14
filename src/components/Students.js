import students from "./student-text";

const Students = () => {
  return (
    <section class="student">
      <h2>What my students say</h2>
      <p>
        Create custom landing pages with Shades that convert more visitors than
        any website—no coding required.
      </p>
      <div class="carousel">
        {students.map((student) => (
          <div key={student.id} class="card">
            <div class="card-body">
              <p>{student.text}</p>
              <div className="info">
                <img src={student.imgURL} alt="/#" />
                <div className="info-text">
                  <h6>{student.name}</h6>
                  <span>{student.title}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Students;
