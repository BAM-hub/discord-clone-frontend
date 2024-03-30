import { component$ } from "@builder.io/qwik";
import styles from "./banner.module.scss";
import Button from "~/components/landing/button/button";

export default component$(() => {
  return (
    <div class={styles["banner"]}>
      <div class="container">
        <div class={styles["content-container"]}>
          <h1 class={styles["main-header"]}>IMAGINE A PLACE...</h1>
          <p class={styles["header-paragraph"]}>
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>
          <div class={styles["button-container"]}>
            <Button variant="dark">Download for Windows</Button>
            <Button>Open in your Discord Browser</Button>
          </div>
        </div>
      </div>
    </div>
  );
});
