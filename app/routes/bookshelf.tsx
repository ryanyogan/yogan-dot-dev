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

export default function BookShell() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="p-10"
    >
      <ul className="space-y-8">
        <div>
          <h2 className="text-2xl sm:text-4xl font-bold">My Bookshelf 📚</h2>
          <p className="text-gray-600 font-light">
            Projects, Langauges/Paradigms, Good Reads, Books, Videos, and more.
          </p>
        </div>

        <hr />

        <motion.div variants={textVariants}>
          <h4 className="text-slate-800 font-semibold text-2xl">Languages</h4>
          <ul className="mt-4 space-y-1">
            {programmingLanguages.map((language) => (
              <li key={language.name}>
                <a
                  href={language.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-800 font-semibold hover:underline"
                >
                  {language.name}
                </a>
                <p className="text-gray-500 text-sm">{language.description}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </ul>
    </motion.div>
  );
}
