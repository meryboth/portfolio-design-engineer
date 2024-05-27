export const metadata = {
  title: 'Education',
  description: 'My working experience over the last couple of years',
};

const academy = [
  {
    title: 'Bachelor of Architecture (6-year program)',
    institution: 'Universidad de Buenos Aires',
    type: "Bachelor's Degree",
    url: 'https://www.fadu.uba.ar/',
    startedYear: 2013,
    graduationYear: 2019,
  },
  {
    title: 'Professional Certification in Software Development - Frontend',
    institution: 'Coderhouse',
    type: 'Professional Certification',
    url: 'https://www.coderhouse.com/ar/',
    startedYear: 2020,
    graduationYear: 2021,
  },
  {
    title: "Master's Degree in Information Technology",
    institution: 'Universidad de Palermo',
    type: "Master's Degree",
    url: 'https://www.palermo.edu/',
    startedYear: 2024,
    graduationYear: 2025,
  },
  {
    title:
      'Postgraduate Course in Strategic User Experience Design (Advanced UX)',
    institution: 'Universidad de Buenos Aires',
    type: 'Postgraduate Course',
    url: 'http://www.somosuxlabs.com.ar',
    startedYear: 2024,
    graduationYear: 2024,
  },
];

export default function Page() {
  return (
    <section>
      <h1 className='font-semibold text-2xl mb-8 tracking-tighter'>
        Education
      </h1>
      <ul>
        {academy
          .sort((a, b) => b.graduationYear - a.graduationYear)
          .map((item, index) => (
            <li key={index} className='mt-3'>
              <a href={item.url} target='_blank' rel='noopener noreferrer'>
                <h4 className='font-semibold'>{item.title}</h4>
                <p className='font-light'>{item.institution}</p>
                <p className='font-light'>{item.type}</p>
                <p className='text-gray-500'>
                  {item.startedYear} - {item.graduationYear}
                </p>
              </a>
            </li>
          ))}
      </ul>
    </section>
  );
}
