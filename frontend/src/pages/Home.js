import Navbar from "../components/Navbar"
import Features from "../components/Features"
import Facts from "../components/Facts"
import Testimonials from "../components/Testimonials"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
     
      <Navbar />

      <main className="flex-grow">
        {/* <Hero /> */}
        <Features />
        <Facts />
        <Testimonials />
      </main>

      <Footer />
    </div>
  )
}
