import { ExperiencePosts } from 'app/components/posts';

export default function Page() {
  return (
    <section>
      <div className='flex flex-col mb-6'>
        <h1 className='text-2xl font-semibold tracking-tighter'>
          Marilyn Botheatoz
        </h1>
        <div className='flex'>
          <h6 className='font-light'>Design Engineer</h6>
          <p className='font-light ml-3 text-gray-400'>Senior</p>
        </div>
      </div>
      <p className='mb-4'>
        {`As a Design Engineer, I bring a unique blend of expertise in frontend development and product design to my role in a R&D team. With a strong background in architecture, I have honed my design skills and apply them effectively in the tech industry. My responsibilities cover the entire product lifecycle, from ideation and research to design and frontend implementation for both web and mobile platforms. My multidisciplinary approach allows me to create innovative solutions that enhance user experiences and drive product success. Currently, I am pursuing a Master's degree in Information Technology, further enhancing my technical knowledge and capabilities.`}
      </p>
      <div className='my-8'>
        <ExperiencePosts />
      </div>
    </section>
  );
}
