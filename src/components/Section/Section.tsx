type Experience = {
  title: string
  url: string
  subtitle: string
  description: string
}

type SectionProps = {
  title: string
  content: Experience[]
}

export default function Section({ title, content }: SectionProps) {
  return (
    <div>
      <h2 className="text-white font-bold text-4xl mb-6">
        <span className="mr-0.5 text-accent">~</span>
        {title}
      </h2>
      <div className="space-y-8">
        {content &&
          content.map((item, index) => (
            <div key={index} className="space-y-2.5">
              <h3 className="text-white font-semibold text-xl tracking-tighter hover:text-accent cursor-pointer">
                <a href={item.url}> {item.title}</a>
              </h3>
              <h4 className="text-sm text-gray-400">{item.subtitle}</h4>
              <p className="text-gray-300 tracking-wide">{item.description}</p>
            </div>
          ))}
      </div>
    </div>
  )
}
