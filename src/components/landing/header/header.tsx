import { component$, useSignal } from "@builder.io/qwik";
import styles from "./header.module.scss";
import Button from "~/components/landing/button/button";
import combine from "~/utils/combine";
import DiscordLogo from "~/components/icons/discordLogo";

export default component$(() => {
  const isModalOpen = useSignal(false);
  return (
    <nav class={styles.nav}>
      <div class="container overflow-hidden">
        <div class={styles.navContainer}>
          <div
            class={combine(
              "transition-all",
              isModalOpen.value ? "opacity-0" : "opacity-100"
            )}
          >
            <DiscordLogo />
          </div>

          <div>
            <ul
              class={styles.linkList}
              data-active={isModalOpen.value ? "true" : "false"}
            >
              <li class={styles["menu-logo"]}>
                <DiscordLogo fill="#000" />
                <div
                  onClick$={() => (isModalOpen.value = false)}
                  class={styles["close"]}
                >
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.5 3.205L8.795 2.5L6 5.295L3.205 2.5L2.5 3.205L5.295 6L2.5 8.795L3.205 9.5L6 6.705L8.795 9.5L9.5 8.795L6.705 6"
                      fill="black"
                    />
                  </svg>
                </div>
              </li>
              <li>
                <a href="#">Download</a>
              </li>

              <li>
                <a href="#">Nitro</a>
              </li>
              <li>
                <a href="#">Discover</a>
              </li>
              <li>
                <a href="#">Safety</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div class={combine("flex items-center", styles["menu-actions"])}>
            <Button>Open Discord</Button>
            <div onClick$={() => (isModalOpen.value = true)}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M33.3327 10H6.66602V15H33.3327V10ZM6.66602 18.3317H33.3327V23.3317H6.66602V18.3317ZM6.66602 26.665H33.3327V31.665H6.66602V26.665Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
});
