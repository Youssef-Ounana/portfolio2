import { experience } from "@/data/experience";
import { Timeline } from "./ui/Timeline";
import { SectionHeading } from "./ui/SectionHeading";

const Experience = () => (
  <section id="parcours" className="mx-auto max-w-6xl px-6 py-28">
    <SectionHeading eyebrow="Parcours" title="Formation &" highlight="expériences" />
    <Timeline items={experience} />
  </section>
);

export default Experience;
