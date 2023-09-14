import foots from "./foots"

const Footer = () => {
  return (
    <footer>
      <div class="search">
        <img src="./images/Logo.svg" alt="" />
        <form action="">
          <input
            type="text"
            placeholder="Stay in the loop + sign up with your email"
          />
          <button class="sub btn">Subscribe</button>
        </form>
      </div>
      <div class="menu row">
      {foots.map((foot) => (
        <div key={foot.id} class="col">
          <h4>{foot.title}</h4>
          <ul>
            <li>{foot.li1}</li>
            <li>{foot.li2}</li>
            <li>{foot.li3}</li>
            <li>{foot.li4}</li>
          </ul>
        </div>
            ))}
        
      </div>
    </footer>

  )
}

export default Footer