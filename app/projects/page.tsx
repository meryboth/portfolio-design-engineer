export const metadata = {
  title: 'Projects',
  description: 'My working experience over the last couple of years',
};

const projects = [
  {
    title: 'InterAcciona',
    description:
      "Developed an in-house AI-powered feedback collection system for Acciona's People Experience team to enhance collaborator engagement.",
    imageUrl: '/images/interacciona.png',
    iWorkedAs: ['ux-ui designer'],
    stack: ['react js', 'node js', 'openAI'],
    url: '',
    copyright: 'Acciona IT',
  },
  {
    title: 'Criptopoint',
    description:
      'A secure and user-friendly cryptocurrency wallet designed for seamless management and transactions of digital assets.',
    imageUrl: '/images/criptopoint.jpg',
    iWorkedAs: ['ux-ui designer', 'frontend developer'],
    stack: ['react native', 'laravel', 'blockchain'],
    url: '',
    copyright: 'FlockIT',
  },
  {
    title: 'LifeID',
    description:
      'A medical app that allows users to securely store their medical histories on the blockchain, ensuring privacy and accessibility.',
    imageUrl: '/images/lifeid.jpg',
    iWorkedAs: ['ux-ui designer', 'frontend developer'],
    stack: ['react native', 'nextjs', 'blockchain', 'nodejs', 'aws'],
    url: 'https://www.lifeid.ar/',
    copyright: 'FlockIT',
  },
  {
    title: 'Remi',
    description:
      'An AI-driven human resources app for talent acquisition, leveraging advanced algorithms to match candidates with job opportunities.',
    imageUrl: '/images/remi.jpg',
    iWorkedAs: ['ux-ui designer', 'frontend developer'],
    stack: ['nextjs', 'nodejs', 'aws', 'openIA'],
    url: '',
    copyright: 'FlockIT',
  },
  {
    title: 'Pibot',
    description:
      'A 360-degree feedback app for companies, facilitating comprehensive employee reviews and performance assessments.',
    imageUrl: '/images/pibot.jpg',
    iWorkedAs: ['ux-ui designer'],
    stack: ['slack', 'aws'],
    url: '',
    copyright: 'Flock IT',
  },
  {
    title: 'Wellness App',
    description:
      'An AI-powered health platform designed to promote well-being and healthy habits through personalized recommendations.',
    imageUrl: '/images/todowell.jpg',
    iWorkedAs: ['ux-ui designer'],
    stack: ['wordpress'],
    url: 'https://todowell.net/',
    copyright: 'Flock IT',
  },
  {
    title: 'The Collector',
    description:
      'A mobile app for event ticketing with gamification features, enhancing user engagement and experience.',
    imageUrl: '/images/thecollector.jpg',
    iWorkedAs: ['ux-ui designer'],
    stack: ['slack', 'aws'],
    url: 'https://www.behance.net/gallery/177515473/The-Collector-App-UX-UI-Design',
    copyright: 'Marilyn Botheatoz',
  },
  {
    title: 'Mi Estudio',
    description:
      'A web and mobile app for accounting firms, offering tools for efficient management of clients and financial data.',
    imageUrl: '/images/miestudio.jpg',
    iWorkedAs: ['frontend developer'],
    stack: ['react native', 'react js'],
    url: 'https://www.errepar.com/mi-estudio',
    copyright: 'FlockIT',
  },
];

export default function Page() {
  return (
    <section className='bg-black text-white'>
      <h1 className='font-semibold text-2xl mb-8 tracking-tighter'>Projects</h1>
      {projects.map((project, index) => (
        <div key={index} className='mb-12'>
          <h2 className='text-xl font-bold mb-2'>{project.title}</h2>
          <img
            src={project.imageUrl}
            alt={project.title}
            className='mb-4 w-full h-auto rounded'
          />
          <p className='mb-4'>{project.description}</p>
          <div className='mb-4'>
            {project.iWorkedAs.map((role, idx) => (
              <span
                key={idx}
                className='inline-block border border-white text-white px-3 py-1 rounded-full text-sm font-semibold mr-2'
              >
                {role}
              </span>
            ))}
          </div>
          <p className='mb-2'>
            <span className='font-semibold'>Stack:</span>{' '}
            {project.stack.join(', ')}
          </p>
          {project.url && (
            <p className='mb-2'>
              <span className='font-semibold'>URL: </span>
              <a href={project.url} className='text-white underline'>
                Project
              </a>
            </p>
          )}
          <p className='mb-2'>
            <span className='font-semibold'>Copyright:</span>{' '}
            {project.copyright}
          </p>
        </div>
      ))}
    </section>
  );
}
