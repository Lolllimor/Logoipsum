import liwhat from "./liWhat";

const What = () => {
  return (
    <>
      <div class="orange o-what"></div>

      <section class="what">
        <h2>What you'll learn</h2>
        <p>
          Create beautiful webflow sites with flowbase. Clone for free and get
          started building a site today.
        </p>
        {liwhat.map((what) => (
          <div key={what.id} class="liWhat">
            <div class="whatBg"></div>
            <div class="img-bg">
              <img src="./images/Icon.svg" alt="" />
            </div>
            <div class="whatText">
              <h3>{what.title}</h3>

              <p>
                {what.text}
              </p>
            </div>
            <div class="whatBtn btn">
              <a href="#" class="vids">
               {what.videos}
              </a>
              <span class="line"></span>
              <a href="#" class="time">
                {what.time}
              </a>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default What;
