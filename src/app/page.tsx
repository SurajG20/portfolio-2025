import Header from '@/components/Header/Header'
import Links from '@/components/Links/Links'
import Section from '@/components/Section/Section'

const experience = [
  {
    title: 'Wiseway Tec',
    url: 'https://wisewaytec.com',
    subtitle: 'Full Stack Developer (September 2024 - Present)',
    description: `Led development of blockchain-based trading platforms and a
  high-traffic Telegram mini app serving 10k+ users. Built
  responsive web interfaces with React following best practices and
  optimized performance. Implemented backend services using Node.js
  with SQL databases for efficient data management and scalability.`,
  },
  {
    title: 'Wise Logics Digital Solutions',
    url: 'https://wiselogicsdigitalsolutions.com',
    subtitle: 'Full Stack Developer (March 2024 - August 2024)',
    description: `Developed and maintained multiple client projects using the MERN stack. Implemented secure user authentication, real-time notifications, and payment integrations. Collaborated with UI/UX team to create intuitive user interfaces and improve overall user experience.`,
  },
  {
    title: 'Livinart Technologies',
    url: 'https://www.livinarttech.com/',
    subtitle: 'Full Stack Developer (October 2023 - February 2024)',
    description: `Built and deployed full-stack applications for clients in transportation and fintech sectors. Implemented real-time tracking features using Socket.IO, integrated payment gateways, and developed responsive UI components. Reduced API response times by 30% through optimization`,
  },
]
const projects = [
  {
    title: 'Urban Garage',
    url: 'https://urbangarage.com',
    subtitle: 'Full-stack automotive marketplace',
    description:
      'Built with the MERN stack featuring an intuitive admin dashboard, Redux state management, and real-time inventory updates. Includes user authentication, vehicle listings, and booking management.',
  },
  {
    title: 'Bazaar',
    url: 'https://bazaar.com',
    subtitle: 'Modern e-commerce platform',
    description:
      'Built with React, Node.js and MongoDB. Features include secure JWT authentication, Stripe payment integration, shopping cart functionality, order management, and cloud-based image storage with Firebase.',
  },
  {
    title: 'Expense Tracker',
    url: 'https://expensetracker.com',
    subtitle: 'React-based personal finance application',
    description:
      'With MongoDB backend for tracking income and expenses. Features include interactive charts, budget categories, transaction history, and data visualization to help users manage their finances effectively.',
  },
  {
    title: 'Cinemato',
    url: 'https://cinemato.com',
    subtitle: 'Modern movie discovery platform',
    description:
      'Built with React that integrates with the TMDB API. Features include advanced search functionality, movie/TV show details, ratings, reviews, and responsive design for optimal viewing across devices.',
  },
]
export default function Home() {
  return (
    <main className="container grid grid-cols-1 space-y-8 mt-12">
      <Header />
      <Section title="experience" content={experience} />
      <Section title="projects" content={projects} />
      <Links />
    </main>
  )
}
