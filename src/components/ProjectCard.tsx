import youTubeSentiment from "/youTubeSentiment.jpg";
import imageColorization from "/imageColorization.png";
import textSummarizer from "/textSummarizer.jpg";
import aiFitness from "/aiFitness.png"

/* ✅ Data separated from markup — add new projects by editing this array */
const projects = [
  {
    title: "YouTube Sentiment Insights - MLOps Project",
    image: youTubeSentiment,
    live: "https://www.linkedin.com/feed/update/urn:li:activity:7466804470157393920/",
    github: "https://github.com/dvcodebase/YouTube-sentiment-analysis",
    description:
      "Built an end-to-end MLOps pipeline for YouTube sentiment analysis using GitHub Actions, MLflow, DVC, Docker, and AWS. Automated training, versioning, testing, and deployment workflows.",
    tags: [
      "Python",
      "MLOps",
      "Docker",
      "AWS",
      "MLflow",
      "DVC",
      "LightGBM",
      "NLP",
      "GitHub Actions",
    ],
    metrics: ["80% Accuracy", "81% Precision", "79% Recall", "80% F1 Score"],
  },
  {
    title: "AI Fitness Assistant - Multi-Agent RAG System",
    image: aiFitness,
    live: "YOUR_DEPLOYMENT_URL",
    github: "YOUR_GITHUB_URL",
    description:
      "Developed a multi-agent AI fitness assistant using LangChain, LangGraph, AstraDB, and Mistral LLM. Delivered personalized nutrition, fitness planning, and intelligent question answering through Retrieval-Augmented Generation.",
    tags: [
      "Generative AI",
      "RAG",
      "LangChain",
      "LangGraph",
      "AstraDB",
      "Mistral",
      "Flask",
    ],
    metrics: [
      "80% Better Relevance",
      "40% Lower Compute Cost",
      "Multi-Agent RAG",
      "LLM Powered",
    ],
  },
  {
    title: "Intelligent Document Summarizer",
    image: textSummarizer,
    live: "YOUR_DEPLOYMENT_URL",
    github: "https://github.com/dvcodebase/TextSummarization",
    description:
      "Built an end-to-end NLP summarization pipeline that processes PDF documents, performs text preprocessing, and generates concise summaries using transformer-based models. Optimized training configuration for improved efficiency and scalability.",
    tags: [
      "Python",
      "NLP",
      "Transformers",
      "Hugging Face",
      "Deep Learning",
      "PDF Processing",
    ],
    metrics: [
      "70% Less Reading Time",
      "Reduced Training Time",
      "Automated Processing",
      "ROUGE Evaluated",
    ],
  },
  {
    title: "Image Colorization using Deep Learning",
    image: imageColorization,
    live: "YOUR_DEPLOYMENT_URL",
    github: "YOUR_GITHUB_URL",
    description:
      "Designed a deep learning model to transform grayscale images into realistic color images using computer vision techniques and neural networks.",
    tags: [
      "Deep Learning",
      "Computer Vision",
      "TensorFlow",
      "CNN",
      "Image Processing",
    ],
    metrics: [
  "Grayscale → RGB",
  "CNN Based",
  "Image Restoration",
  "Deep Learning"
],
  },
];

/* ✅ Reusable GitHub icon component — no more duplicated SVG */
const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.562 21.8 24 17.302 24 12 24 5.373 18.627 0 12 0z" />
  </svg>
);

const ProjectCard = () => {
  return (
    <div className="flex flex-col gap-6 md:px-16">
      {projects.map((p, i) => (
        <article
          key={i}
          className="border border-gray-200 rounded-sm overflow-hidden
                     flex flex-col md:flex-row hover:border-orange-400
                     hover:-translate-y-0.5 transition-all duration-200"
        >
          {/* Image — links to live site */}
          <a
            href={p.live}
            target="_blank"
            rel="noopener noreferrer"
            className="block shrink-0"
          >
            <img
              src={p.image}
              alt={p.title}
              className="w-full md:w-64 h-48 object-cover object-top"
            />
          </a>

          {/* Content */}
          <div className="flex flex-col justify-between p-5 gap-3">
            {/* Title row */}
            <div className="flex items-start justify-between gap-3">
              <h3
                className="font-semibold text-gray-900 text-base
                              leading-snug"
              >
                {p.title}
              </h3>
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-orange-600
                             border-b border-orange-300 pb-0.5
                             hover:text-orange-800 transition-colors"
                >
                  ↗ Live
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-900 transition-colors"
                  aria-label="GitHub repository"
                >
                  <GithubIcon />
                </a>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-500 leading-relaxed">
              {p.description}
            </p>

            {/* Metrics */}
            <div className="flex flex-wrap gap-2">
              {p.metrics.map((m) => (
                <span
                  key={m}
                  className="text-xs font-mono bg-orange-50 text-orange-700
                             px-2 py-0.5 rounded-sm border border-orange-100"
                >
                  {m}
                </span>
              ))}
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono bg-gray-100 text-gray-500
                             px-2 py-0.5 rounded-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ProjectCard;
