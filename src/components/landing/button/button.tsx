import { Slot, component$ } from "@builder.io/qwik";
import styles from "./button.module.scss";
import combine from "~/utils/combine";

type ButtonPorps = {
  variant?: "light" | "dark";
};

export default component$(({ variant = "light" }: ButtonPorps) => {
  return (
    <button
      class={combine(
        styles["btn"],
        variant === "light" ? styles["light"] : styles["dark"]
      )}
    >
      <Slot />
    </button>
  );
});
