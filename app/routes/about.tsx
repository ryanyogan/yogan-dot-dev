import { motion } from "framer-motion";
import { textVariants } from "~/utils/animation-config";

export default function AboutPage() {
  return (
    <div className="p-10">
      <h2 className="text-2xl sm:text-4xl font-bold">Hi, 👋 I&apos;m Ryan.</h2>
      <h2 className="text-gray-600 font-light pb-10">
        Engineering Leader, Software Developer, Aviation Nerd
      </h2>

      <hr />

      <motion.div
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className="prose"
      >
        <div className="text-slate-700">
          <h2 className="text-lg sm:text-2xl font-bold mt-10">
            What&apos;s up with the &quot;Incredible Thoughts?&quot;
          </h2>
          <div className="mb-2">
            I love the movie &quot;Popstar: Never Stop Never Stopping,&quot;
            feel free to enjoy Michael Bolton&apos;s &quot;Incredible
            Thoughts&quot; scene below. 🔥
          </div>
          <a
            href="https://www.youtube.com/watch?v=WRlIDIu2qpg"
            target="_blank"
            rel="noreferrer"
          >
            Popstar - Incredible Thoughts Scene [NSFW Language]
          </a>
          <h2 className="text-lg sm:text-2xl font-bold mt-10">
            2024 will be a year of personal growth
          </h2>
          I have a personal &quot;OKR&quot; that I will work on being open, I
          will ask for help{" "}
          <a
            href="https://www.linkedin.com/feed/update/urn:li:activity:7161089259175645184/"
            target="_blank"
            rel="noreferrer"
          >
            with humility, in the open, avoiding my fears
          </a>
          , and start writing again. Let&apos;s see if I can stick to it this
          time. I may ramble about leadership, engineering, life, aviation...
          why not, my parents are a majority of my traffic, hi mom 👋. Perhaps I
          may help that one individual who is struggling with the same things I
          have struggled with. 🤷
          <h2 className="text-lg sm:text-2xl font-bold mt-10">
            Okay, here is what Chat GPT has to say about me
          </h2>
          Embarking on my tech journey with a 386 computer, I quickly became the
          family IT department, graduating from building PCs to conjuring AOL
          &quot;proggies&quot; in Visual Basic. My love affair with server racks
          in chilly rooms was just the beginning, and my entry into theater!
          Fast forward through a symphony of C#, PHP spells, and Rails-powered
          rollercoasters, and you&apos;ll find me professing my love for all
          things engineering. These days, I&apos;m crafting video game
          masterpieces in Rust—so &quot;unique&quot; they&apos;re practically
          art, and hoarding leadership books like they&apos;re going out of
          style. My toolkit? A kaleidoscope of TypeScript frameworks so
          infamous, they dare not speak their names.
          <br />
          <br />
          I&apos;ve navigated the startup scene from a cozy nook above a Chicago
          bar to the dizzying heights of corporate skyscrapers, only to realize
          my living room beats them all. Amidst a quirky relationship with Emacs
          and Clojure (we&apos;re complicated), I find Zen in configuring Neovim
          more than I do in housekeeping. I occasionally pine for the days of
          wrestling with ColdFusion, Perl, and coaxing that last table and gif
          into pixel-perfect harmony for IE6—ah, simpler times.
          <br />
          <br />
          My home doubles as an aircraft hangar, thanks to an obsession with
          tinkering on aircrafts and simulators. I&apos;ve taken &quot;home
          office&quot; to new altitudes, recreating a commercial flight
          experience that&apos;s just one cranky passenger short of actual
          takeoff.
          <h2 className="text-lg sm:text-2xl font-bold mt-10">
            What matters most to me?
          </h2>
          <ul>
            <li>👨‍👩‍👦‍👦 is my love.</li>
            <li>🛩 is my joy.</li>
            <li>🎸 is my jam.</li>
            <li>🐕 & 🐈‍⬛ pain in the ass.</li>
            <li>🚙 detailing cars is my zen.</li>
            <li>🏒 full-time ice dad.</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
