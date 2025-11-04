import { ExperiencePosts } from 'app/components/posts';

export default function Page() {
  return (
    <section>
      <div className='flex flex-col mb-6'>
        <h1 className='text-2xl font-semibold tracking-tighter'>
          Marilyn Botheatoz
        </h1>
        <div className='flex'>
          <h6 className='font-light'>AI Engineer / R&D Lead</h6>
        </div>
      </div>
      <p className='mb-4'>
        {`As an AI Engineer and R&D Lead, I specialize in developing and implementing machine learning solutions that drive innovation and create tangible business value. With a multidisciplinary background in architecture and design, I bring a unique perspective to solving complex AI challenges. My expertise spans across Large Language Models (LLMs), computer vision, deep learning, and full-stack ML pipeline development. I lead research and development initiatives from conception to production, bridging the gap between cutting-edge AI research and practical, scalable solutions. Currently pursuing a Master's degree in Information Technology, I continuously expand my technical capabilities in artificial intelligence and machine learning.`}
      </p>
      <div className='mb-4'>
        <h2 className='font-semibold text-lg mb-2 tracking-tight'>Areas of Expertise</h2>
        <ul className='list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300'>
          <li>Large Language Models (LLMs) and Generative AI</li>
          <li>Conversational AI and Chatbot Development</li>
          <li>Computer Vision and Image Processing</li>
          <li>Deep Learning and Neural Networks</li>
          <li>Machine Learning Engineering and MLOps</li>
          <li>Natural Language Processing (NLP)</li>
          <li>AI Product Development and Strategy</li>
        </ul>
      </div>
      <div className='mb-4'>
        <h2 className='font-semibold text-lg mb-2 tracking-tight'>Tech Stack</h2>
        <div className='space-y-3'>
          <div>
            <h3 className='font-medium text-sm text-neutral-600 dark:text-neutral-400 mb-1'>AI/ML Frameworks</h3>
            <p className='text-neutral-700 dark:text-neutral-300 text-sm'>
              PyTorch, TensorFlow, Keras, Scikit-learn, Hugging Face Transformers, LangChain, LangGraph, CrewAI
            </p>
          </div>
          <div>
            <h3 className='font-medium text-sm text-neutral-600 dark:text-neutral-400 mb-1'>Backend & APIs</h3>
            <p className='text-neutral-700 dark:text-neutral-300 text-sm'>
              Node.js, Express, Python, FastAPI, Flask
            </p>
          </div>
          <div>
            <h3 className='font-medium text-sm text-neutral-600 dark:text-neutral-400 mb-1'>Frontend</h3>
            <p className='text-neutral-700 dark:text-neutral-300 text-sm'>
              React, Next.js, TypeScript, Tailwind CSS
            </p>
          </div>
          <div>
            <h3 className='font-medium text-sm text-neutral-600 dark:text-neutral-400 mb-1'>Databases & Vector Stores</h3>
            <p className='text-neutral-700 dark:text-neutral-300 text-sm'>
              MongoDB, PostgreSQL, Pinecone, Weaviate, ChromaDB
            </p>
          </div>
          <div>
            <h3 className='font-medium text-sm text-neutral-600 dark:text-neutral-400 mb-1'>Cloud & DevOps</h3>
            <p className='text-neutral-700 dark:text-neutral-300 text-sm'>
              Docker, Kubernetes, AWS, GCP, CI/CD
            </p>
          </div>
        </div>
      </div>
      <div className='my-8'>
        <ExperiencePosts />
      </div>
    </section>
  );
}
