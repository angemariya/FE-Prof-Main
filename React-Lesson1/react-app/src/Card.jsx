import classes from "./Card.module.css";

export function Card() {
  return (
    <>
      <div className={classes.wrapper}>
        <img className={classes.image} src="https://picsum.photos/200/300" />
        <div>
          <h2>My name Blabla</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, eius
            explicabo. Delectus labore rerum illum unde est? Quisquam eligendi
            rem repudiandae sapiente magnam numquam suscipit nihil, pariatur
            culpa, optio eum!
          </p>
        </div>
      </div>
    </>
  );
}
