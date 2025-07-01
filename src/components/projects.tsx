'use client'
import { projects } from '../data/projectsData';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from "next/image";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4" id="Projects">
      {projects.map((project, index) => (
        <div
          key={index}
          id={project.id}
          className="card bg-base-100 shadow-sm flex flex-col"
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <figure className="overflow-hidden flex items-center justify-center h-52">
            <Image
              src={project.imageSrc.replace('/my-protfolio-main/public', '')}
              alt={project.title}
              width={400}
              height={300}
              className="w-full h-full object-center sm:object-contain lg:object-cover"
            />
          </figure>
          <div className="card-body flex flex-col flex-1">
            <h2 className="card-title text-center">{project.title}</h2>
            <p className="text-center flex-1">{project.description}</p>
            <div className="card-actions justify-center mt-4">
              <a
                href={project.demo}
                className="btn btn-primary"
                target="_blank"
              >
                View Project
              </a>
              <a
                href={project.source.trim()}
                className="btn btn-primary"
                target="_blank"
              >
                View code
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
