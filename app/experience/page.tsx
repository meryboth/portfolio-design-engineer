import { ExperiencePosts } from 'app/components/posts';

export const metadata = {
  title: 'Experience',
  description: 'My working experience over the last couple of years',
};

export default function Page() {
  return (
    <section>
      <h1 className='font-semibold text-2xl mb-8 tracking-tighter'>
        Experience
      </h1>
      <ExperiencePosts />
    </section>
  );
}
