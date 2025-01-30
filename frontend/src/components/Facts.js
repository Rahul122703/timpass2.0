import { Users, Star, FileText, CheckCircle } from "lucide-react"

const facts = [
  { name: "Active Users", value: "10,000+", icon: Users },
  { name: "Website Rating", value: "4.8/5", icon: Star },
  { name: "Total Complaints", value: "50,000+", icon: FileText },
  { name: "Resolved Complaints", value: "45,000+", icon: CheckCircle },
]

const Facts = () => {
  return (
    <section className="bg-indigo-800 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.name} className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-md bg-indigo-500 text-white mx-auto">
                <fact.icon className="h-8 w-8" aria-hidden="true" />
              </div>
              <p className="mt-4 text-4xl font-extrabold text-white">{fact.value}</p>
              <p className="mt-2 text-lg font-medium text-indigo-100">{fact.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Facts

