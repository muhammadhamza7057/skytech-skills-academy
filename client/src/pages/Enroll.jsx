import { useSearchParams } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import EnrollmentForm from '../components/EnrollmentForm'
import SectionHeading from '../components/SectionHeading'
import { usePageSEO } from '../hooks/usePageSEO'

export default function Enroll() {
  const [searchParams] = useSearchParams()
  const defaultCourse = searchParams.get('course') || ''

  usePageSEO({
    title: 'Enroll',
    description:
      'Submit an enrollment request for Skytech Skills Academy courses. This form is a frontend demonstration and is not connected to a backend yet.',
    path: '/enroll',
  })

  return (
    <div className="bg-surface">
      <div className="container-sky section-pad">
        <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Enroll' }]} />
        <SectionHeading
          eyebrow="Enrollment"
          title="Enroll in a Skytech course"
          description="Complete the form below to prepare your enrollment request. This is a frontend-only demonstration — data is not saved to a server."
        />
        <div className="mt-10">
          <EnrollmentForm defaultCourse={defaultCourse} />
        </div>
      </div>
    </div>
  )
}
