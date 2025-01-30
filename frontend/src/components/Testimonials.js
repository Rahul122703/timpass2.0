import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Citizen",
    image: "/testimonial-1.jpg",
    rating: 5,
    comment:
      "The Municipal Complaint Management System has made it so easy to report issues in my neighborhood. I love how quickly the authorities respond!",
  },
  {
    name: "Michael Chen",
    role: "Community Leader",
    image: "/testimonial-2.jpg",
    rating: 5,
    comment:
      "This platform has revolutionized how we engage with our local government. It's user-friendly and incredibly effective.",
  },
  {
    name: "Emily Rodriguez",
    role: "Small Business Owner",
    image: "/testimonial-3.jpg",
    rating: 4,
    comment:
      "As a business owner, I appreciate how this system allows me to quickly report and resolve issues that affect my establishment. Great tool!",
  },
]

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">What Our Users Say</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Hear from citizens who have experienced the power of our platform
          </p>
        </div>
        <div className="mt-12 space-y-8 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                      fill="currentColor"
                    />
                  ))}
                </div>
                <p className="mt-4 text-gray-600">{testimonial.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
