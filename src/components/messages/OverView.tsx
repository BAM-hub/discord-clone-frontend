import { component$ } from "@builder.io/qwik";
import DiscordAvatar from "../icons/discord_avatar";
import styles from "./overView.module.scss";
import Friends from "../icons/frindes";
import Nitro from "../icons/nitro";
import Shop from "../icons/Shop";
import combine from "~/utils/combine";

export default component$(() => {
  return (
    <aside class={styles["aside"]}>
      <div class={styles["cta-container"]}>
        <button>Find or start a conversation</button>
      </div>

      <ul class={styles["nav-header"]}>
        <li>
          <Friends /> Friends
        </li>
        <li>
          <Nitro /> Nitro
        </li>
        <li>
          <Shop /> Shop
        </li>
      </ul>
      <h3 class={styles["nav-title"]}>Direct Messages</h3>
      <ul>
        <li>
          <div class={styles["user-fig"]}>
            <DiscordAvatar width={20} height={20} fill="#fff" />
            <div class={styles["status-indecator"]}>
              <div />
            </div>
          </div>
          Jhon doe
        </li>
        <li>
          <div class={styles["user-fig"]}>
            <DiscordAvatar width={20} height={20} fill="#fff" />
            <div class={styles["status-indecator"]}>
              <div />
            </div>
          </div>
          Jhon doe
        </li>
      </ul>
      <figure class={combine(styles["current-user-fig"])}>
        <div class={styles["user-fig"]}>
          <DiscordAvatar width={20} height={20} fill="#fff" />
          <div class={styles["status-indecator"]}>
            <div />
          </div>
        </div>
        <figure class={styles["status-container"]}>
          <div>
            <figcaption>Bam</figcaption>
          </div>
          <div class={styles["user-status-container"]}>
            <span>online</span>
          </div>
        </figure>
      </figure>
    </aside>
  );
});
