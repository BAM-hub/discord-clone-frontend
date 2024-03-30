import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import AnimatedParagraph from "~/components/landing/animatedParagraph/animatedParagraph";
import Banner from "~/components/landing/banner/banner";
import { Channels } from "~/components/icons/channels";
import { Hangout } from "~/components/icons/hangout";
import { Rooms } from "~/components/icons/rooms";

export default component$(() => {
  return (
    <section>
      <Banner />
      <AnimatedParagraph
        title="Create an invite-only place where you belong"
        description="Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat."
      >
        <Channels />
      </AnimatedParagraph>
      <AnimatedParagraph
        title="Where hanging out is easy"
        description="Grab a seat in a voice channel when you`re free. Friends in your server can see you`re around and instantly pop in to talk without having to call."
      >
        <Hangout />
      </AnimatedParagraph>
      <AnimatedParagraph
        title="From few to a fandom"
        description="Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more."
      >
        <Rooms />
      </AnimatedParagraph>
    </section>
  );
});

export const head: DocumentHead = {
  title: "Discord | Your Place to talk and hangout",
  meta: [
    {
      name: "discord clone",
      content: "landing for my clone discord site",
    },
  ],
};
