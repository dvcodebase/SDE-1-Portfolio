const Experience = () => {
  const experiences = [
  {
    company: "Mu Sigma",
    role: "Decision Science Extern",
    period: "Present",
    description: [
      "Working on real-world business analytics and decision science case studies.",
      "Applying data-driven problem solving and analytical thinking to business scenarios.",
      "Collaborating on industry-oriented projects involving data analysis and insights generation."
    ],
    tech: ["Python", "Analytics", "Decision Science", "Data Analysis"]
  },

  {
    company: "Prodigy Infotech",
    role: "Generative AI Intern",
    period: "Aug 2025 - Sep 2025",
    description: [
      "Implemented image-to-image translation using Pix2Pix conditional GANs.",
      "Engineered generator-discriminator architectures using TensorFlow and Keras.",
      "Applied training stabilization, loss optimization, and computer vision techniques.",
      "Gained hands-on experience with adversarial training and GAN architectures."
    ],
    tech: [
      "TensorFlow",
      "Keras",
      "Computer Vision",
      "GANs",
      "Pix2Pix"
    ]
  },

  {
    company: "Proxenix",
    role: "Data Science & Analytics Intern",
    period: "Apr 2025 - Jun 2025",
    description: [
      "Fine-tuned BART transformers on domain-specific documents.",
      "Designed NLP pipelines with tokenization, embeddings, and model optimization.",
      "Evaluated summarization quality using ROUGE and BLEU metrics.",
      "Reduced document reading time by approximately 70%."
    ],
    tech: [
      "Python",
      "Transformers",
      "BART",
      "NLP",
      "ROUGE",
      "BLEU"
    ]
  }
];

  return (
    <section id="experience" className="py-24 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs font-mono uppercase tracking-widest text-orange-600 mb-3">
          Experience
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Professional Journey
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 hover:border-orange-500 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <p className="text-orange-600 font-medium">
                    {exp.company}
                  </p>
                </div>

                <span className="text-gray-500 text-sm">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2 text-gray-600 mb-4">
                {exp.description.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs rounded-full bg-orange-100 text-orange-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;