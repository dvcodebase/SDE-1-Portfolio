const skills = [
  {
    cat: "Languages",
    title: "Programming Languages",
    tags: ["Python", "C++", "SQL"],
  },

  {
    cat: "Software Engineering",
    title: "CS Fundamentals",
    tags: [
      "Data Structures",
      "Algorithms",
      "OOP",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
    ],
  },

  {
    cat: "Mathematics",
    title: "ML Foundations",
    tags: ["Linear Algebra", "Probability", "Statistics", "Calculus"],
  },

  {
    cat: "Data Science",
    title: "Data Preparation & Analysis",
    tags: [
      "Pandas",
      "NumPy",
      "EDA",
      "Data Cleaning",
      "Feature Engineering",
      "Data Visualization",
    ],
  },

  {
    cat: "Machine Learning",
    title: "ML & Deep Learning",
    tags: [
      "Scikit-learn",
      "TensorFlow",
      "Keras",
      "LightGBM",
      "Neural Networks",
      "Model Evaluation",
    ],
  },

  {
    cat: "Generative AI",
    title: "LLMs, RAG & AI Agents",
    tags: ["Transformers", "RAG", "LangChain", "LangGraph", "AstraDB"],
  },

  {
    cat: "NLP",
    title: "Natural Language Processing",
    tags: [
      "BART",
      "Text Embeddings",
      "Tokenization",
      "Transformer Fine-tuning",
    ],
  },

  {
    cat: "Backend",
    title: "APIs & Services",
    tags: ["FastAPI", "Flask", "REST APIs"],
  },

  {
    cat: "MLOps",
    title: "Deployment & Infrastructure",
    tags: ["Git", "Docker", "AWS", "GitHub Actions", "MLflow", "DVC"],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen py-24 px-6 md:px-16 bg-gray-50"
    >
      <div className="max-w-5xl mx-auto">
        <p
          className="text-xs font-mono uppercase tracking-widest
                     text-orange-600 mb-3 flex items-center gap-2"
        >
          <span className="inline-block w-6 h-px bg-orange-600"></span>
          Expertise
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          What I Work With
        </h2>
        <div
          className="grid grid-cols-2 md:grid-cols-3 divide-x
                     divide-y divide-gray-200 border border-gray-200"
        >
          {skills.map((s) => (
            <div
              key={s.title}
              className="p-6 bg-white hover:bg-gray-50
                         transition-colors"
            >
              <p
                className="text-xs font-mono uppercase tracking-wider
                           text-orange-500 mb-2"
              >
                {s.cat}
              </p>
              <p className="font-semibold text-gray-900 mb-3">{s.title}</p>
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono bg-gray-100
                               text-gray-500 px-2 py-0.5 rounded-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skills;
