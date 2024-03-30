import { $, Slot, component$, useId, useOnDocument } from "@builder.io/qwik";
import styles from "./animatedParagraph.module.scss";
import combine from "~/utils/combine";

type AnimatedSectionProps = {
  title: string;
  description: string;
};

export default component$(({ title, description }: AnimatedSectionProps) => {
  const id = useId();
  useOnDocument(
    "DOMContentLoaded",
    $(() => {
      const element = document.getElementById(id);
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) element?.classList.add("opacity-100");
          });
        },
        { threshold: 0.5 }
      );
      if (element) observer.observe(element);
    })
  );
  return (
    <div
      id={id}
      class={combine(
        "container opacity-0 transition-all",
        styles["animated-container"]
      )}
    >
      <div class={styles["image-container"]}>
        <Slot />
      </div>

      <div class={styles["text-container"]}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
});
