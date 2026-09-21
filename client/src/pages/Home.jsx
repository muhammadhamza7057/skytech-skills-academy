import Hero from '../components/Hero'
import CampusesSection from '../components/CampusesSection'
import { usePageSEO } from '../hooks/usePageSEO'
import AcademyHighlights from '../sections/AcademyHighlights'
import ArchitectureServicesPreview from '../sections/ArchitectureServicesPreview'
import CourseCategories from '../sections/CourseCategories'
import EngineeringArchitecture from '../sections/EngineeringArchitecture'
import EnglishIELTS from '../sections/EnglishIELTS'
import EnrollmentCTA from '../sections/EnrollmentCTA'
import OurStoryPreview from '../sections/OurStoryPreview'
import PopularCourses from '../sections/PopularCourses'
import ProjectsPreview from '../sections/ProjectsPreview'
import WebIT from '../sections/WebIT'
import WhyChooseSkytech from '../sections/WhyChooseSkytech'

export default function Home() {
  usePageSEO({
    title: 'Professional IT & Engineering Academy | Architecture Services',
    description:
      'Skytech Skills Academy & Architecture Services: practical courses in AutoCAD, Revit, web development, graphic design, IELTS, plus commercial architectural planning & 3D visualization. 7+ years of experience across 3 campus branches.',
    path: '/',
  })

  return (
    <>
      <Hero />
      <AcademyHighlights />
      <CourseCategories />
      <PopularCourses />
      <ArchitectureServicesPreview />
      <ProjectsPreview />
      <WhyChooseSkytech />
      <EngineeringArchitecture />
      <WebIT />
      <EnglishIELTS />
      <CampusesSection lightBackground={true} />
      <OurStoryPreview />
      <EnrollmentCTA />
    </>
  )
}
