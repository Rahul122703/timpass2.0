import { ClipboardList, MessageCircle, TrendingUp, Shield } from "lucide-react"

const features = [
  {
    name: "Easy Complaint Filing",
    description: "Submit complaints quickly and easily through our user-friendly interface.",
    icon: ClipboardList,
  },
  {
    name: "Real-time Updates",
    description: "Stay informed with real-time status updates on your complaints.",
    icon: TrendingUp,
  },
  {
    name: "Secure & Confidential",
    description: "Your personal information and complaints are kept secure and confidential.",
    icon: Shield,
  },
  {
    name: "Community Engagement",
    description: "Engage with your community and local authorities to drive positive change.",
    icon: MessageCircle,
  },
]

const Features = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Empowering Citizens, Improving Communities
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our platform offers a range of features designed to streamline the complaint management process and foster
            community engagement.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default Features

