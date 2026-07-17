'use client';

import { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import {
  projectSections,
  projectTabs,
  type DesignProject,
  type ErdProject,
  type ProjectSectionKey,
  type UiUxProject,
  type WebProject
} from '../data/projectsData';

type LightboxState = {
  images: string[];
  index: number;
};

function resolveImageSrc(src: string): string {
  return src.replace('/my-protfolio-main/public', '');
}

function ProjectTabs({ activeTab, onChange }: { activeTab: ProjectSectionKey; onChange: (value: ProjectSectionKey) => void }) {
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      event.preventDefault();
      const direction = event.key === 'ArrowRight' ? 1 : -1;
      const nextIndex = (index + direction + projectTabs.length) % projectTabs.length;
      const nextTab = projectTabs[nextIndex];
      onChange(nextTab.key);
      tabRefs.current[nextIndex]?.focus();
    }

    if (event.key === 'Home') {
      event.preventDefault();
      onChange(projectTabs[0].key);
      tabRefs.current[0]?.focus();
    }

    if (event.key === 'End') {
      event.preventDefault();
      onChange(projectTabs[projectTabs.length - 1].key);
      tabRefs.current[projectTabs.length - 1]?.focus();
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-2" role="tablist" aria-label="Project categories">
      {projectTabs.map((tab, index) => (
        <button
          key={tab.key}
          ref={(element) => {
            tabRefs.current[index] = element;
          }}
          role="tab"
          id={`projects-tab-${tab.key}`}
          aria-selected={activeTab === tab.key}
          aria-controls={`projects-panel-${tab.key}`}
          tabIndex={activeTab === tab.key ? 0 : -1}
          onClick={() => onChange(tab.key)}
          onKeyDown={(event) => handleKeyDown(event, index)}
          className={`btn btn-sm sm:btn-md px-4 sm:px-5 transition-all duration-200 ${
            activeTab === tab.key ? 'btn-primary' : 'btn-outline'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

function GalleryGrid({
  images,
  title,
  onOpen
}: {
  images: string[];
  title: string;
  onOpen: (index: number) => void;
}) {
  return (
    <div className="grid  gap-2 s">
      {images.map((image, index) => (
        <div key={`${title}-${image}-${index}`} className="relative aspect-video overflow-hidden rounded-lg border border-base-300 bg-base-200 shadow-sm">
          <button
            type="button"
            className="group block w-full h-full text-left"
            onClick={() => onOpen(index)}
            aria-label={`Open ${title} image ${index + 1}`}
          >
            <Image
              src={resolveImageSrc(image)}
              alt={`${title} preview ${index + 1}`}
              fill
              className="object-cover transition duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
              loading="lazy"
            />
          </button>
        </div>
      ))}
    </div>
  );
}

function Lightbox({
  state,
  onClose
}: {
  state: LightboxState;
  onClose: () => void;
}) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(state.index);

  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  useEffect(() => {
    setCurrentImageIndex(state.index);
  }, [state.index]);

  const currentImage = state.images[currentImageIndex];

  if (!currentImage) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-2 sm:p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Fullscreen image preview"
      onClick={onClose}
    >
      <div className="relative w-full max-w-5xl rounded-2xl bg-base-100 p-3 shadow-2xl sm:p-4" onClick={(event) => event.stopPropagation()}>
        <div className="mb-2 flex justify-end">
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="btn btn-sm btn-circle btn-ghost"
            aria-label="Close preview"
          >
            ×
          </button>
        </div>
        <div className="relative overflow-hidden rounded-xl bg-black/5 flex items-center justify-center">
          <Image
            src={resolveImageSrc(currentImage)}
            alt="Fullscreen preview"
            width={1200}
            height={800}
            className="max-h-[65vh] sm:max-h-[75vh] w-auto h-auto object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}

function WebProjectCard({ project, index }: { project: WebProject; index: number }) {
  return (
    <div
      id={project.id}
      className="card bg-base-100 shadow-sm border border-base-200 flex flex-col h-full"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <figure className="relative h-48 sm:h-52 w-full overflow-hidden bg-base-200">
        <Image
          src={resolveImageSrc(project.imageSrc)}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
      </figure>
      <div className="card-body flex flex-col flex-1 p-5 text-center">
        <h2 className="card-title justify-center text-lg sm:text-xl font-bold">{project.title}</h2>
        <p className="text-sm sm:text-base text-neutral-content flex-1 mt-1">{project.description}</p>
        <div className="card-actions justify-center gap-2 mt-5">
          <a href={project.demo} className="btn btn-primary btn-sm sm:btn-md" target="_blank" rel="noreferrer">
            View Project
          </a>
          <a href={project.source.trim()} className="btn btn-outline btn-sm sm:btn-md" target="_blank" rel="noreferrer">
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}

function DesignProjectCard({ project, onOpen }: { project: DesignProject; onOpen: (index: number) => void }) {
  return (
    <div className="card bg-base-100 shadow-sm border border-base-200 flex flex-col h-full" data-aos="fade-up">
      <div className="card-body flex flex-col gap-4 p-5">
        <GalleryGrid
          images={project.images}
          title={project.title}
          onOpen={onOpen}
        />
        <div className="flex flex-1 flex-col justify-between gap-4 text-center">
          <div>
            <h2 className="card-title justify-center text-lg sm:text-xl font-bold">{project.title}</h2>
            <p className="text-sm sm:text-base text-neutral-content mt-1">{project.description}</p>
          </div>
          {project.externalUrl ? (
            <div className="card-actions justify-center mt-2">
              <a href={project.externalUrl} className="btn btn-primary btn-sm sm:btn-md w-full sm:w-auto" target="_blank" rel="noreferrer">
                Open Design
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function ErdProjectCard({ project }: { project: ErdProject }) {
  return (
    <div className="card bg-base-100 shadow-sm border border-base-200 flex flex-col h-full" data-aos="fade-up">
      <figure className="relative h-48 sm:h-52 w-full overflow-hidden bg-base-200">
        {project.previewImage ? (
          <Image
            src={resolveImageSrc(project.previewImage)}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full border border-dashed border-base-300" />
        )}
      </figure>
      <div className="card-body flex flex-col flex-1 p-5 text-center">
        <h2 className="card-title justify-center text-lg sm:text-xl font-bold">{project.title}</h2>
        <p className="text-sm sm:text-base text-neutral-content flex-1 mt-1">{project.description}</p>
        <div className="card-actions justify-center mt-5">
          {project.externalUrl ? (
            <a href={project.externalUrl} className="btn btn-primary btn-sm sm:btn-md" target="_blank" rel="noreferrer">
              View ERD
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function UiUxProjectCard({ project, onOpen }: { project: UiUxProject; onOpen: (index: number) => void }) {
  return (
    <div className="card bg-base-100 shadow-sm border border-base-200 flex flex-col h-full" data-aos="fade-up">
      <div className="card-body flex flex-col gap-4 p-5">
        <GalleryGrid images={project.images} title={project.title} onOpen={onOpen} />
        <div className="flex flex-1 flex-col justify-between gap-4 text-center">
          <div>
            <h2 className="card-title justify-center text-lg sm:text-xl font-bold">{project.title}</h2>
            <p className="text-sm sm:text-base text-neutral-content mt-1">{project.description}</p>
          </div>
          {project.externalUrl ? (
            <div className="card-actions justify-center mt-2">
              <a href={project.externalUrl} className="btn btn-primary btn-sm sm:btn-md w-full sm:w-auto" target="_blank" rel="noreferrer">
                Open UI/UX
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState<ProjectSectionKey>('web');
  const [lightboxState, setLightboxState] = useState<LightboxState | null>(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const renderProjects = () => {
    if (activeTab === 'web') {
      return (projectSections.web as WebProject[]).map((project, index) => (
        <WebProjectCard key={project.id} project={project} index={index} />
      ));
    }

    if (activeTab === 'design') {
      return (projectSections.design as DesignProject[]).map((project) => (
        <DesignProjectCard key={project.id} project={project} onOpen={(index) => setLightboxState({ images: project.images, index })} />
      ));
    }

    if (activeTab === 'erd') {
      return (projectSections.erd as ErdProject[]).map((project) => <ErdProjectCard key={project.id} project={project} />);
    }

    return (projectSections.uiux as UiUxProject[]).map((project) => (
      <UiUxProjectCard key={project.id} project={project} onOpen={(index) => setLightboxState({ images: project.images, index })} />
    ));
  };

  return (
    <section className="space-y-8 py-8 px-4 max-w-7xl mx-auto" id="Projects">
      <ProjectTabs activeTab={activeTab} onChange={setActiveTab} />
      <div
        id={`projects-panel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`projects-tab-${activeTab}`}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {renderProjects()}
      </div>
      {lightboxState ? <Lightbox state={lightboxState} onClose={() => setLightboxState(null)} /> : null}
    </section>
  );
}
