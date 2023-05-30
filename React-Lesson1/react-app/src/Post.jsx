/* eslint-disable react/prop-types */
import classes from "./Post.module.css";
import clsx from "clsx";

export const Post = ({ title, text, children, marked }) => {
  return (
    <div className={clsx(classes.card, marked && classes.marked)}>
      <h3 className={classes}>{title}</h3>
      {children}
      <p>{text}</p>
    </div>
  );
};
