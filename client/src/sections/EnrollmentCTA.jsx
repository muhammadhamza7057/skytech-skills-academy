import CTASection from '../components/CTASection'

export default function EnrollmentCTA() {
  return (
    <CTASection
      title="Ready to start your next skill?"
      description="Enroll in a practical short course and take a focused step toward your career goals."
      primaryLabel="Enroll Now"
      primaryTo="/enroll"
      secondaryLabel="Browse Courses"
      secondaryTo="/courses"
    />
  )
}
