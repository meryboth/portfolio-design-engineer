import Link from 'next/link';
import { formatYear, getBlogPosts } from 'app/experience/utils';

export function ExperiencePosts() {
  let allBlogs = getBlogPosts();

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.metadata.startedAt) > new Date(b.metadata.startedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => {
          const startYear = formatYear(post.metadata.startedAt);
          const endYear =
            new Date(post.metadata.finishedAt).getFullYear() ===
            new Date().getFullYear()
              ? 'present'
              : formatYear(post.metadata.finishedAt);

          // Separar el título por el carácter '|'
          const [titleMain, titleSub] = post.metadata.title.split('|');

          return (
            <Link
              key={post.slug}
              className='flex flex-col space-y-1 mb-4'
              href={`/experience/${post.slug}`}
            >
              <div className='w-full flex flex-col md:flex-row space-x-0 md:space-x-2'>
                <p className='text-neutral-600 dark:text-neutral-400 w-[120px] tabular-nums'>
                  {startYear} - {endYear}
                </p>
                <p className='text-neutral-900 dark:text-neutral-100 tracking-tight'>
                  {titleMain}
                  {titleSub && (
                    <span className='text-neutral-400 font-light ml-2'>
                      {titleSub}
                    </span>
                  )}
                </p>
              </div>
            </Link>
          );
        })}
    </div>
  );
}
