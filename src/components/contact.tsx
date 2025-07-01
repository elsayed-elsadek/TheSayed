import 'aos/dist/aos.css'
import { useEffect } from 'react'
import AOS from 'aos'
import { Mail, Phone, Linkedin, Github } from 'lucide-react'

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <section id="contact" className="p-6 bg-base-100 text-base-content">
      <div className="max-w-3xl mx-auto space-y-10">
        <h2 className="text-4xl font-bold text-center" data-aos="fade-up">
          Contact Me
        </h2>

        {/* Contact Info */}
        <div
          className="card shadow-lg p-6 bg-base-200 space-y-4"
          data-aos="fade-up"
        >
          <p className="text-lg">
            Feel free to reach out to me via email or connect with me through my professional profiles.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <a
                href="mailto:elsadek134@gmail.com"
                className="link link-hover"
              >
                elsadek134@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <a
                href="tel:+201061965771"
                className="link link-hover"
              >
                (+20) 1061965771
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin className="w-5 h-5" />
              <a
                href="https://www.linkedin.com/in/elsayed-elsadek-061549258"
                className="link link-hover"
                target="_blank"
              >
                LinkedIn Profile
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Github className="w-5 h-5" />
              <a
                href="https://github.com/elsayed-elsadek"
                className="link link-hover"
                target="_blank"
              >
                GitHub Profile
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div
          className="card shadow-lg p-6 bg-base-200"
          data-aos="fade-up"
        >
          <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>
          <form className="space-y-4" action="https://formspree.io/f/mnnvwljw" method="POST">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              required
            />
            <textarea
              name="message"
              className="textarea textarea-bordered w-full"
              placeholder="Your Message"
              rows={5}
              required
            ></textarea>
            <button type="submit" className="btn btn-primary w-full">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
