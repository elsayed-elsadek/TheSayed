import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // تأكد من استيراد ملف CSS لتأثيرات AOS
import Image from "next/image";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // التأثير يظهر مرة واحدة
    });
  }, []);

  return (
    <div className="hero bg-base-200 min-h-screen" id="about">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          src="/my-4.jpeg"
          alt="Mohammed Khalifa"
          width={300}
          height={300}
          className="max-w-xs rounded-lg shadow-2xl h-72 sm:h-full"
          data-aos="fade-right"
        />
        <div data-aos="fade-left">
          <h1 className="text-2xl md:text-5xl font-bold">I&apos;m a frontend developer</h1>
          <p className="py-6 max-w-xl text-sm md:text-[15px]">
           Front-End Developer specializing in React, and a Computer Science student,
eager to leverage my skills in building dynamic web applications and contribute to innovative projects in the tech industry.
          </p>
          <div className="flex gap-4">
            <a
              href="elsadek134@gmail.com"
              className="btn btn-primary"
            >
              Contact Me
            </a>
            <a
              href="https://www.linkedin.com/in/elsayed-elsadek-061549258"
              className="btn btn-outline"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/elsayed-elsadek"
              className="btn btn-outline"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
