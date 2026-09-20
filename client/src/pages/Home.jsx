import Hero from '../components/Hero'
import { usePageSEO } from '../hooks/usePageSEO'
import AcademyHighlights from '../sections/AcademyHighlights'
import ContactPreview from '../sections/ContactPreview'
import CourseCategories from '../sections/CourseCategories'
import EngineeringArchitecture from '../sections/EngineeringArchitecture'
import EnglishIELTS from '../sections/EnglishIELTS'
import EnrollmentCTA from '../sections/EnrollmentCTA'
import OurStoryPreview from '../sections/OurStoryPreview'
import PopularCourses from '../sections/PopularCourses'
import WebIT from '../sections/WebIT'
import WhyChooseSkytech from '../sections/WhyChooseSkytech'

export default function Home() {
  usePageSEO({
    title: 'Professional IT & Engineering Courses',
    description:
      'Skytech Skills Academy offers practical short courses in AutoCAD, Revit, web development, graphic design, spoken English, and IELTS.',
    path: '/',
  })

  return (
    <>
      <Hero />
      <AcademyHighlights />
      <CourseCategories />
      <PopularCourses />
      <WhyChooseSkytech />
      <EngineeringArchitecture />
      <WebIT />
      <EnglishIELTS />
      <OurStoryPreview />
      <EnrollmentCTA />
      <ContactPreview />
    </>
  )
}
