import classes from "./About.module.css";

function Menu() {
  return (
    <>
      <div className={classes.menu}>
        <ul>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Wip</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div>
          <icon>Twitter</icon>
          <icon>Basket</icon>
        </div>
      </div>
    </>
  );
}

function Icons() {
  return <></>;
}

export function About() {
  return (
    <>
      <Menu />
      <Icons />
    </>
  );
}
