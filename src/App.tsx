/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageView, Project, Service } from './types';
import { PROJECTS_DATA } from './data/projectsData';
import { SERVICES_DATA } from './data/servicesData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { ArchitecturalWalkthrough } from './components/ArchitecturalWalkthrough';
import { ArchitecturalLoader } from './components/ArchitecturalLoader';
import { ScrollTrigger } from './utils/gsapSetup';

// Pages
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ProcessPage } from './pages/ProcessPage';
import { CraftsmanshipPage } from './pages/CraftsmanshipPage';
import { AboutPage } from './pages/AboutPage';
import { JournalPage } from './pages/JournalPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';
import { LegalPage } from './pages/LegalPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [selectedProject, setSelectedProject] = useState<Project>(PROJECTS_DATA[0]);
  const [selectedService, setSelectedService] = useState<Service>(SERVICES_DATA[0]);
  const [isQuoteOpen, setIsQuoteOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Sync document title with current page
  useEffect(() => {
    const titles: Record<PageView, string> = {
      home: 'Vander & Cole | Architectural Construction',
      projects: 'Commissions & Architectural Projects | Vander & Cole',
      'project-detail': `${selectedProject.title} | Vander & Cole`,
      services: 'General Contracting & Building Services | Vander & Cole',
      'service-detail': `${selectedService.title} | Vander & Cole`,
      about: 'About Our Founders & Builders | Vander & Cole',
      process: '5-Phase Construction Process | Vander & Cole',
      craftsmanship: 'Building Science & Craftsmanship | Vander & Cole',
      walkthrough: 'Spatial Architectural Walkthrough | Vander & Cole',
      journal: 'Building Science & Technical Journal | Vander & Cole',
      contact: 'Regional Studios & Contact | Vander & Cole',
      quote: 'Request Feasibility Consultation | Vander & Cole',
      faq: 'Contract & Cost FAQ | Vander & Cole',
      privacy: 'Privacy & Client Non-Disclosure | Vander & Cole',
      terms: 'Terms of Engagement | Vander & Cole'
    };

    document.title = titles[currentPage] || 'Vander & Cole | Architectural Construction';
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Refresh GSAP ScrollTrigger calculation after new page layout paints
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 60);

    return () => clearTimeout(timer);
  }, [currentPage, selectedProject, selectedService]);

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentPage('project-detail');
  };

  const handleSelectService = (service: Service) => {
    setSelectedService(service);
    setCurrentPage('service-detail');
  };

  const handleNavigate = (page: PageView) => {
    if (page === 'quote') {
      setIsQuoteOpen(true);
    } else {
      setCurrentPage(page);
    }
  };

  return (
    <div className="min-h-screen bg-[#0e1013] text-[#e8e6e3] flex flex-col font-body selection:bg-[#c4a47c] selection:text-[#0e1013]">
      {/* Top Bar Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onRequestQuote={() => setIsQuoteOpen(true)}
      />

      {/* Main Page Routing */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && (
          <HomePage
            projects={PROJECTS_DATA}
            services={SERVICES_DATA}
            onSelectProject={handleSelectProject}
            onSelectService={handleSelectService}
            onNavigate={handleNavigate}
            onRequestQuote={() => setIsQuoteOpen(true)}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage
            projects={PROJECTS_DATA}
            onSelectProject={handleSelectProject}
            onNavigate={handleNavigate}
            onRequestQuote={() => setIsQuoteOpen(true)}
          />
        )}

        {currentPage === 'project-detail' && (
          <ProjectDetailPage
            project={selectedProject}
            allProjects={PROJECTS_DATA}
            onBack={() => setCurrentPage('projects')}
            onSelectProject={handleSelectProject}
            onRequestQuote={() => setIsQuoteOpen(true)}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            services={SERVICES_DATA}
            onSelectService={handleSelectService}
            onNavigate={handleNavigate}
            onRequestQuote={() => setIsQuoteOpen(true)}
          />
        )}

        {currentPage === 'service-detail' && (
          <ServiceDetailPage
            service={selectedService}
            onBack={() => setCurrentPage('services')}
            onRequestQuote={() => setIsQuoteOpen(true)}
          />
        )}

        {currentPage === 'process' && (
          <ProcessPage
            onNavigate={handleNavigate}
            onRequestQuote={() => setIsQuoteOpen(true)}
          />
        )}

        {currentPage === 'craftsmanship' && (
          <CraftsmanshipPage
            onNavigate={handleNavigate}
            onRequestQuote={() => setIsQuoteOpen(true)}
          />
        )}

        {currentPage === 'walkthrough' && (
          <div className="min-h-screen bg-[#08090c] pt-4">
            <div className="max-w-7xl mx-auto px-4 py-8">
              <span className="text-xs font-mono uppercase tracking-widest text-[#c4a47c] block mb-1">
                Continuous Spatial Exploration
              </span>
              <h1 className="text-3xl sm:text-5xl font-display font-bold text-white mb-2">
                A Residence, Unfolding in One Continuous Shot
              </h1>
              <p className="text-xs text-[#8c94a2] max-w-xl mb-6">
                Step sequentially through each interior chamber to inspect material specifications, thermal envelope coordinates, and custom joinery.
              </p>
            </div>
            <ArchitecturalWalkthrough />
          </div>
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onRequestQuote={() => setIsQuoteOpen(true)}
          />
        )}

        {currentPage === 'journal' && (
          <JournalPage
            onNavigate={handleNavigate}
            onRequestQuote={() => setIsQuoteOpen(true)}
          />
        )}

        {currentPage === 'contact' && <ContactPage />}

        {currentPage === 'faq' && (
          <FAQPage
            onNavigate={handleNavigate}
            onRequestQuote={() => setIsQuoteOpen(true)}
          />
        )}

        {currentPage === 'privacy' && (
          <LegalPage type="privacy" onNavigate={handleNavigate} />
        )}

        {currentPage === 'terms' && (
          <LegalPage type="terms" onNavigate={handleNavigate} />
        )}
      </main>

      {/* Global Comprehensive Footer */}
      <Footer
        onNavigate={handleNavigate}
        onRequestQuote={() => setIsQuoteOpen(true)}
        onReplayIntro={() => setIsLoading(true)}
      />

      {/* Project Feasibility Consultation Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
      />

      {/* High-Precision Architectural Loading Screen */}
      {isLoading && (
        <ArchitecturalLoader
          forceShow={isLoading}
          onComplete={() => {
            setIsLoading(false);
            setTimeout(() => ScrollTrigger.refresh(), 50);
          }}
        />
      )}
    </div>
  );
}
