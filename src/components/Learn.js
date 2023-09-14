import Button from "./Button";
import learnImg from "./LearnImg";

const Learn = () => {
  return (
    <>
      <div class="learn-bg"></div>
      <section class="learn">
        <div class="learned">
          <h1 class="learn-text">Learn no-code tools today.</h1>
          <p>
            Create beautiful webflow sites with flowbase. Clone for free and get
            started building a site today.
          </p>
          <Button newClass= 'start' btword='Get started'/>

          <div class="students-no">
            {learnImg.map((img) => (
              <div className="stu" key={img.id}>
                <img src={img.imgURL} alt={img.alt} />
              </div>
            ))}

            <span>
              Join over <span class="noOfStudents">4,000+</span> students
            </span>
          </div>
        </div>
        <div class="codeplay">
          <img src="./images/coding.png" class="code" alt="code" />
          <img src="./images/Play.svg" class="play" alt="play" />
        </div>
      </section>
    </>
  );
};

export default Learn;
