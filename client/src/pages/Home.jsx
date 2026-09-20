import Hero from '../components/Hero'
import { usePageSEO } from '../hooks/usePageSEO'
import AcademyHighlights from '../sections/AcademyHighlights'
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
    title: 'Professional IT & Engineering Courses in Dargai',
    description:
      'Skytech Skills Academy in Dargai, Malakand offers practical short courses in AutoCAD, Revit, web development, graphic design, and IELTS. 4+ years of experience.',
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
    </>
  )
}
