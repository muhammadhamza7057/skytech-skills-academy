import Hero from '../components/Hero'
import CampusesSection from '../components/CampusesSection'
import { usePageSEO } from '../hooks/usePageSEO'
import AcademyHighlights from '../sections/AcademyHighlights'
import ArchitectureServicesPreview from '../sections/ArchitectureServicesPreview'
import PopularCourses from '../sections/PopularCourses'
import ProjectsPreview from '../sections/ProjectsPreview'
import WhyChooseSkytech from '../sections/WhyChooseSkytech'
import OurStoryPreview from '../sections/OurStoryPreview'
import EnrollmentCTA from '../sections/EnrollmentCTA'

export default function Home() {
  usePageSEO({
    title: 'Professional IT & Engineering Academy | Architecture Services',
    description:
      'Skytech Skills Academy & Architecture Services: practical training in AutoCAD, Revit, web development, and design, alongside commercial architectural planning and 3D visualization across 3 regional branches.',
    path: '/',
  })

  return (
    <>
      {/* 1 & 2. Hero with Two Clear Paths: Learners vs Clients */}
      <Hero />

      {/* 3. Key Trust Signals: 7+ Years, 1000+ Students, Practical Training, Architecture & Design */}
      <AcademyHighlights />

      {/* 4. Popular Courses Preview */}
      <PopularCourses />

      {/* 5. Why Skytech: Practical Learning & Service Philosophy */}
      <WhyChooseSkytech />

      {/* 6. Architecture & Design Services Preview */}
      <ArchitectureServicesPreview />

      {/* 7. Selected Architectural Projects Preview */}
      <ProjectsPreview />

      {/* 8. Our Story Preview */}
      <OurStoryPreview />

      {/* Regional Campuses */}
      <CampusesSection lightBackground={true} />

      {/* 9. Final Dual CTA: For Students & For Clients */}
      <EnrollmentCTA />
    </>
  )
}
