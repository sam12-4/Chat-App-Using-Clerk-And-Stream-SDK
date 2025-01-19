import React from "react";

const forums = [
  {
    title: "JavaScript",
    description: "Discuss all things JavaScript, from basics to advanced topics.",
    image: "js.webp",
    link: "/forum/javascript",
  },
  {
    title: "Python",
    description: "Share knowledge, solve problems, and discuss Python libraries.",
    image: `python.png`,
    link: "/forum/python",
  },
  {
    title: "React",
    description: "Dive deep into React, its ecosystem, and best practices.",
    image: "react.png",
    link: "/forum/react",
  },
  {
    title: "Machine Learning",
    description: "Explore algorithms, tools, and applications of machine learning.",
    image: "machine.jpeg",
    link: "/forum/machine-learning",
  },
  {
    title: "CSS & Design",
    description: "Discuss CSS frameworks, design systems, and UI/UX trends.",
    image: "css.jpeg",
    link: "/forum/css-design",
  },
  {
    title: "DevOps",
    description: "Share practices, tools, and workflows in the world of DevOps.",
    image: "devops.jpeg",
    link: "/forum/devops",
  },
];

const DiscussionForums = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Discussion Forums
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {forums.map((forum, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition flex flex-col justify-center items-center"
            >
              {/* Forum Image */}
              <img
                src={forum.image}
                alt={forum.title}
                className="w-fit h-32 object-cover rounded-lg mb-4"
              />

              {/* Forum Title */}
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {forum.title}
              </h3>

              {/* Forum Description */}
              <p className="text-gray-600 mb-4 text-center">{forum.description}</p>

              {/* Join Button */}
              <a
                href={forum.link}
                className="inline-block px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-blue-600 transition"
              >
                Join Discussion
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscussionForums;
