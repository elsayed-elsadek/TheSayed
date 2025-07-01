'use client'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import AOS from 'aos'
import { Mail, Phone, Linkedin, Code2 } from 'lucide-react'

export default function Resume() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <section id="resume" className="p-6 bg-base-100 text-base-content">
      <div className="max-w-4xl mx-auto space-y-10">
        <h2 className="text-4xl font-bold text-center" data-aos="fade-up">
          Resume
        </h2>

        {/* Personal Info */}
        <div className="card shadow-lg p-6 bg-base-200" data-aos="fade-up">
          <h3 className="text-2xl font-semibold mb-4">Personal Information</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5" />elsadek134@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5" /> (+20) 1061965771
            </li>
            <li className="flex items-center gap-2">
              <Linkedin className="w-5 h-5" />
              <a
                href="https://www.linkedin.com/in/elsayed-elsadek-061549258"
                target="_blank"
                className="link link-hover"
              >
                LinkedIn Profile
              </a>
            </li>
          </ul>
        </div>

        {/* Education */}
        <div className="card shadow-lg p-6 bg-base-200" data-aos="fade-up">
          <h3 className="text-2xl font-semibold mb-4">Education</h3>
          <p>
            <strong>Bachelor&#39;s in Computer Science (4th Year Student)</strong><br />
            Faculty of Computer and Information, Menoufia University, Egypt<br />
            10/09/2020 – Present
          </p>
        </div>

        {/* Experience */}
        <div className="card shadow-lg p-6 bg-base-200" data-aos="fade-up">
          <h3 className="text-2xl font-semibold mb-4">Work Experience</h3>
          <div className="space-y-6">
            {/* Frontend Developer */}
            <div className="flex items-start gap-4">
              <span className="text-primary">
            <Code2 />
              </span>
              <div>
                <strong>Frontend Developer</strong>
                <br />
                I&#39;m a frontend developer with experience in building responsive and
                optimized sites using modern technologies like React.js.
              </div>
            </div>
            {/* Training with Web Master */}
            <div className="flex items-start gap-4">
              <img
                src="/webmaster.png"
                alt="Web Master"
                className="w-8 h-8 rounded-full"
              />
              <div>
                <strong>Training with Web Master</strong>
                <br />
                Completed intensive training in frontend development, focusing on
                responsive design, performance optimization, and teamwork.
              </div>
            </div>
            {/* Freelance Work - Khamsat */}
            <div className="flex items-start gap-4">
              <img src="/khamsat.png" alt="Khamsat" className="w-8 h-8 rounded" />
              <div>
                <strong>Freelance Work (Khamsat)</strong>
                <br />
                Delivering custom web solutions on Khamsat, specializing in
                user-friendly interfaces and efficient code.
              </div>
            </div>
            {/* Freelance Work - Fiverr */}
            <div className="flex items-start gap-4">
              <img
                src="/fiverrpng.png"
                alt="Fiverr"
                className="w-8 h-8 rounded-full"
              />
              <div>
                <strong>Freelance Work (Fiverr)</strong>
                <br />
                Delivering custom web solutions on Fiverr, specializing in
                user-friendly interfaces and efficient code.
              </div>
            </div>
          </div>
        </div>

        {/* Certificates
        <div className="card shadow-lg p-6 bg-base-200" data-aos="fade-up">
          <h3 className="text-2xl font-semibold mb-4">Certificates & Trainings</h3>
          <p>
            Add any certifications or online course links (e.g., from Coursera, Udemy).
          </p>
        </div> */}
      </div>
    </section>
  )
}
