import styles from "./modal.module.css";

/**
 * @param {Node} trigger 
 * @param {Node | String} content 
 */
export function setupModal(trigger, content) {
  const backdrop = document.createElement("div");

  backdrop.classList.add(styles.backdrop, styles.closed, styles.animationClosed);

  const modal = document.createElement("div");

  modal.classList.add(styles.modal);

  modal.addEventListener("click", (e) => e.stopPropagation());

  trigger.addEventListener("click", () => {
    backdrop.classList.remove(styles.closed);
    setTimeout(() => {
      backdrop.classList.remove(styles.animationClosed);
    }, 0);
  });

  backdrop.addEventListener("click", () => {
    backdrop.classList.add(styles.animationClosed);
  });
  backdrop.addEventListener("transitionend", () => {
    if (backdrop.classList.contains(styles.animationClosed)) {
      backdrop.classList.add(styles.closed);
    }
  });


  modal.append(content);
  backdrop.append(modal);
  document.body.append(backdrop);
}
