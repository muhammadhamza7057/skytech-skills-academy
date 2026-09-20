import { useSearchParams } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import EnrollmentForm from '../components/EnrollmentForm'
import SectionHeading from '../components/SectionHeading'
import { usePageSEO } from '../hooks/usePageSEO'

export default function Enroll() {
  const [searchParams] = useSearchParams()
  const defaultCourse = searchParams.get('course') || ''

  usePageSEO({
    title: 'Enroll Online | Skytech Skills Academy',
    description:
      'Enroll in practical short courses at Skytech Skills Academy in Dargai. Prepare your enrollment request for AutoCAD, Revit, MERN stack, graphic design, or IELTS.',
    path: '/enroll',
  })

  return (
    <div className="bg-surface min-h-screen">
      <div className="container-sky section-pad">
        <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Enroll' }]} />
        <SectionHeading
          eyebrow="Admissions & Enrollment"
          title="Enroll in a Skytech Course"
          description="Complete the form below to begin your enrollment process. Our admissions team will review your preferred schedule and contact you with confirmation."
        />
        <div className="mt-10">
          <EnrollmentForm defaultCourse={defaultCourse} />
        </div>
      </div>
    </div>
  )
}
