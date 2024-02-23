import { motion } from "framer-motion";
import { containerVariants, textVariants } from "~/utils/animation-config";

const programmingLanguages = [
  {
    name: "TypeScript",
    description:
      "A typed superset of JavaScript that compiles to plain JavaScript.",
    url: "https://www.typescriptlang.org/",
  },
  {
    name: "Elixir",
    description:
      "A dynamic, functional language designed for building scalable and maintainable applications.",
    url: "https://elixir-lang.org/",
  },
  {
    name: "Rust",
    description:
      "A language empowering everyone to build reliable and efficient software.",
    url: "https://www.rust-lang.org/",
  },
  {
    name: "Go",
    description:
      "An open source programming language that makes it easy to build simple, reliable, and efficient software.",
    url: "https://golang.org/",
  },
  {
    name: "Python",
    description:
      "A clear and powerful object-oriented programming language, comparable to Perl, Ruby, Scheme, or Java.",
    url: "https://www.python.org/",
  },
  {
    name: "JavaScript",
    description:
      "JavaScript is a programming language that conforms to the ECMAScript specification.",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Ruby",
    description:
      "A dynamic, open source programming language with a focus on simplicity and productivity.",
    url: "https://www.ruby-lang.org/en/",
  },
  {
    name: "C#",
    description:
      "A simple, general-purpose, object-oriented programming language for the .NET platform.",
    url: "https://docs.microsoft.com/en-us/dotnet/csharp/",
  },
  {
    name: "Kotlin",
    description:
      "A cross-platform, statically typed, general-purpose programming language with type inference.",
    url: "https://kotlinlang.org/",
  },
  {
    name: "Swift",
    description:
      "A powerful and intuitive programming language for macOS, iOS, watchOS",
    url: "https://developer.apple.com/swift/",
  },
  {
    name: "Dart",
    description: "A client-optimized language for fast apps on any platform.",
    url: "https://dart.dev/",
  },
  {
    name: "Lua",
    description:
      "A powerful, efficient, lightweight, embeddable scripting language.",
    url: "https://www.lua.org/",
  },
];

const programmingFrameworks = [
  {
    name: "Rails",
    description:
      "A web-application framework that includes everything needed to create database-backed web applications according to the Model-View-Controller (MVC) pattern.",
    url: "https://rubyonrails.org/",
  },
  {
    name: "Next.JS",
    description: "The React Framework for Production.",
    url: "https://nextjs.org/",
  },
  {
    name: "Phoenix",
    description:
      "A productive web framework that does not compromise speed and maintainability.",
    url: "https://www.phoenixframework.org/",
  },
  {
    name: "Node.js",
    description: "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
    url: "https://nodejs.org/",
  },
  {
    name: "Django",
    description:
      "A high-level Python Web framework that encourages rapid development and clean, pragmatic design.",
    url: "https://www.djangoproject.com/",
  },
  {
    name: "React",
    description: "A JavaScript library for building user interfaces.",
    url: "https://reactjs.org/",
  },
  {
    name: "Angular",
    description:
      "A platform and framework for building single-page client applications using HTML and TypeScript.",
    url: "https://angular.io/",
  },
  {
    name: "Svelte",
    description: "A new way to build web applications.",
    url: "https://svelte.dev/",
  },
  {
    name: "Remix",
    description: "A full-stack web framework for the modern web.",
    url: "https://remix.run/",
  },
  {
    name: "Tokio",
    description:
      "A runtime for writing reliable, asynchronous, and slim applications with the Rust programming language.",
    url: "https://tokio.rs/",
  },
  {
    name: "iOS",
    description:
      "A mobile operating system created and developed by Apple Inc. exclusively for its hardware.",
    url: "https://developer.apple.com/ios/",
  },
  {
    name: "Android",
    description: "A mobile operating system developed by Google.",
    url: "https://developer.android.com/",
  },
  {
    name: ".NET",
    description:
      "A free, cross-platform, open-source developer platform for building many different types of applications.",
    url: "https://dotnet.microsoft.com/",
  },
  {
    name: "Watermill.io",
    description: "A Go library for working efficiently with message streams.",
    url: "https://watermill.io/",
  },
  {
    name: "Kubernetes",
    description:
      "An open-source platform designed to automate deploying, scaling, and operating application containers.",
    url: "https://kubernetes.io/",
  },
];

const leadershipMaterial = [
  {
    name: "Peopleware: Productive Projects & Teams",
    description:
      "A book on the human side of software development, and how to manage and lead software projects.",
    url: "https://www.amazon.com/Peopleware-Productive-Projects-Tom-DeMarco/dp/0932633439",
  },
  {
    name: "Engineering Managment for the Rest of Us",
    description:
      "THIS BOOK ISN’T FOR THE `BORN LEADERS` THIS BOOK IS FOR THE REST OF US.",
    url: "https://www.engmanagement.dev/",
  },
  {
    name: "Engineering Management Fundamentals 101",
    description:
      "Explore a career in software management with guidance from Netflix's Engineering Manager, Jem Young. Learn key motivations, challenges, and essential skills for effective leadership and meeting management, setting the stage for success in engineering management.",
    url: "https://www.engmanagement.dev/",
  },
];

export default function BookShelf() {
  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold sm:text-4xl">My Bookshelf 📚</h2>
      <p className="font-light text-gray-600">
        Projects, Langauges/Paradigms, Good Reads, Books, Videos, and more.
      </p>

      <hr className="my-8" />

      <div>
        <h4 className="text-2xl font-semibold text-slate-800">
          Books & Courses I Enjoyed 📚
        </h4>
        <motion.div variants={textVariants}>
          <ul className="mt-4 space-y-2">
            {leadershipMaterial.map((language) => (
              <li key={language.name}>
                <a
                  href={language.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-slate-800 hover:underline"
                >
                  {language.name}
                </a>
                <p className="text-sm text-gray-500">{language.description}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <hr className="my-8" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="grid grid-cols-1 gap-8 md:grid-cols-2"
      >
        <div>
          <h4 className="text-2xl font-semibold text-slate-800">
            Languages I Enjoy ❤️
          </h4>
          <motion.div variants={textVariants}>
            <ul className="mt-4 space-y-2">
              {programmingLanguages.map((language) => (
                <li key={language.name}>
                  <a
                    href={language.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-slate-800 hover:underline"
                  >
                    {language.name}
                  </a>
                  <p className="text-sm text-gray-500">
                    {language.description}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div>
          <h4 className="text-2xl font-semibold text-slate-800">
            Frameworks I Use 🚀
          </h4>
          <motion.div variants={textVariants}>
            <ul className="mt-4 space-y-2">
              {programmingFrameworks.map((language) => (
                <li key={language.name}>
                  <a
                    href={language.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-slate-800 hover:underline"
                  >
                    {language.name}
                  </a>
                  <p className="text-sm text-gray-500">
                    {language.description}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
