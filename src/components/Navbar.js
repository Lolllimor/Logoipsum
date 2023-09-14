import NavItem from "./NavItem";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg ">
      <div class="container-fluid">
        <a class="navbar-brand" href="/#">
          <img src="./images/Logo.svg" alt="Logo" />
        </a>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <NavItem word="Course topics" />
            <NavItem word="What students say" />
          </ul>
          <div class="end">
            <ul class="navbar-nav ml-auto">
              <NavItem word="Sign in" />
              <li class="nav-item">
                <Button btword='Get started'/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
