import Header from '@/components/Header/Header'
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
    title: 'Crypto Trader',
    url: 'https://cryptotrader.com',
    subtitle: 'Cryptocurrency trading platform',
    description: `Developed a blockchain-based trading platform that enables users to trade cryptocurrencies securely. Implemented real-time price tracking, order matching, and user authentication using blockchain technology. Optimized performance and scalability to handle high traffic.`,
  },
]
export default function Home() {
  return (
    <main className="container grid grid-cols-1 space-y-8 mt-12">
      <Header />
      <Section title="experience" content={experience} />
      <Section title="projects" content={projects} />
    </main>
  )
}
