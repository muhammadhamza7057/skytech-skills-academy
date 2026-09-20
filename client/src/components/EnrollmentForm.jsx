import { useEffect, useMemo, useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { courses } from '../data/courses'
import {
  initialEnrollmentValues,
  validateEnrollment,
} from '../utils/validation'

function Field({
  label,
  _name,
  error,
  required,
  children,
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
        {required ? <span className="text-accent"> *</span> : null}
      </span>
      {children}
      {error ? (
        <span className="mt-1 block text-xs font-medium text-accent" role="alert">
          {error}
        </span>
      ) : null}
    </label>
  )
}

const inputClass = 'input-field'
const errorInputClass = 'border-accent'

export default function EnrollmentForm({ defaultCourse = '' }) {
  const [values, setValues] = useState({
    ...initialEnrollmentValues,
    selectedCourse: defaultCourse,
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (defaultCourse) {
      setValues((prev) => ({ ...prev, selectedCourse: defaultCourse }))
    }
  }, [defaultCourse])

  const courseOptions = useMemo(
    () => courses.map((course) => ({ value: course.slug, label: course.name })),
    []
  )

  const update = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validateEnrollment(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-border bg-white p-6 sm:p-8" role="status">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface text-blue">
            <CheckCircle2 size={24} aria-hidden="true" />
          </span>
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy">
              Enrollment Request Received
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              Thank you, {values.firstName}. Your enrollment form has been prepared
              as a frontend demonstration. No data has been saved to a server yet.
              Our team will connect this form to the backend in a future update.
            </p>
            <p className="mt-4 text-sm font-semibold text-navy">
              Selected course:{' '}
              {courseOptions.find((c) => c.value === values.selectedCourse)?.label}
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-10">
      <section className="rounded-xl border border-border bg-white p-5 sm:p-6">
        <h2 className="font-display text-2xl font-semibold text-navy">
          Student Information
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Field label="First Name" name="firstName" required error={errors.firstName}>
            <input
              className={`${inputClass} ${errors.firstName ? errorInputClass : ''}`}
              value={values.firstName}
              onChange={(e) => update('firstName', e.target.value)}
              autoComplete="given-name"
            />
          </Field>
          <Field label="Last Name" name="lastName" required error={errors.lastName}>
            <input
              className={`${inputClass} ${errors.lastName ? errorInputClass : ''}`}
              value={values.lastName}
              onChange={(e) => update('lastName', e.target.value)}
              autoComplete="family-name"
            />
          </Field>
          <Field label="Father's Name" name="fatherName" required error={errors.fatherName}>
            <input
              className={`${inputClass} ${errors.fatherName ? errorInputClass : ''}`}
              value={values.fatherName}
              onChange={(e) => update('fatherName', e.target.value)}
            />
          </Field>
          <Field label="Date of Birth" name="dateOfBirth" required error={errors.dateOfBirth}>
            <input
              type="date"
              className={`${inputClass} ${errors.dateOfBirth ? errorInputClass : ''}`}
              value={values.dateOfBirth}
              onChange={(e) => update('dateOfBirth', e.target.value)}
            />
          </Field>
          <Field label="Gender" name="gender" required error={errors.gender}>
            <select
              className={`${inputClass} ${errors.gender ? errorInputClass : ''}`}
              value={values.gender}
              onChange={(e) => update('gender', e.target.value)}
            >
              <option value="">Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
          </Field>
          <Field label="CNIC / B-Form" name="cnic" required error={errors.cnic}>
            <input
              className={`${inputClass} ${errors.cnic ? errorInputClass : ''}`}
              value={values.cnic}
              onChange={(e) => update('cnic', e.target.value)}
              placeholder="xxxxx-xxxxxxx-x"
            />
          </Field>
          <Field label="Phone" name="phone" required error={errors.phone}>
            <input
              className={`${inputClass} ${errors.phone ? errorInputClass : ''}`}
              value={values.phone}
              onChange={(e) => update('phone', e.target.value)}
              autoComplete="tel"
            />
          </Field>
          <Field label="WhatsApp" name="whatsapp" required error={errors.whatsapp}>
            <input
              className={`${inputClass} ${errors.whatsapp ? errorInputClass : ''}`}
              value={values.whatsapp}
              onChange={(e) => update('whatsapp', e.target.value)}
            />
          </Field>
          <Field label="Email" name="email" required error={errors.email}>
            <input
              type="email"
              className={`${inputClass} ${errors.email ? errorInputClass : ''}`}
              value={values.email}
              onChange={(e) => update('email', e.target.value)}
              autoComplete="email"
            />
          </Field>
          <Field label="City" name="city" required error={errors.city}>
            <input
              className={`${inputClass} ${errors.city ? errorInputClass : ''}`}
              value={values.city}
              onChange={(e) => update('city', e.target.value)}
              autoComplete="address-level2"
            />
          </Field>
          <div className="sm:col-span-2">
            <Field label="Address" name="address" required error={errors.address}>
              <textarea
                rows={3}
                className={`${inputClass} ${errors.address ? errorInputClass : ''}`}
                value={values.address}
                onChange={(e) => update('address', e.target.value)}
                autoComplete="street-address"
              />
            </Field>
          </div>
          <Field label="Education" name="education" required error={errors.education}>
            <input
              className={`${inputClass} ${errors.education ? errorInputClass : ''}`}
              value={values.education}
              onChange={(e) => update('education', e.target.value)}
              placeholder="e.g. Intermediate, Bachelor's"
            />
          </Field>
          <Field label="Occupation" name="occupation" error={errors.occupation}>
            <input
              className={inputClass}
              value={values.occupation}
              onChange={(e) => update('occupation', e.target.value)}
            />
          </Field>
          <div className="sm:col-span-2">
            <Field
              label="Previous Experience"
              name="previousExperience"
              error={errors.previousExperience}
            >
              <textarea
                rows={3}
                className={inputClass}
                value={values.previousExperience}
                onChange={(e) => update('previousExperience', e.target.value)}
              />
            </Field>
          </div>
          <div className="sm:col-span-2">
            <Field
              label="Selected Course"
              name="selectedCourse"
              required
              error={errors.selectedCourse}
            >
              <select
                className={`${inputClass} ${errors.selectedCourse ? errorInputClass : ''}`}
                value={values.selectedCourse}
                onChange={(e) => update('selectedCourse', e.target.value)}
              >
                <option value="">Select a course</option>
                {courseOptions.map((course) => (
                  <option key={course.value} value={course.value}>
                    {course.label}
                  </option>
                ))}
              </select>
            </Field>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-border bg-white p-5 sm:p-6">
        <h2 className="font-display text-2xl font-semibold text-navy">
          Guardian Information
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Field label="Guardian Name" name="guardianName" required error={errors.guardianName}>
            <input
              className={`${inputClass} ${errors.guardianName ? errorInputClass : ''}`}
              value={values.guardianName}
              onChange={(e) => update('guardianName', e.target.value)}
            />
          </Field>
          <Field label="Relationship" name="relationship" required error={errors.relationship}>
            <input
              className={`${inputClass} ${errors.relationship ? errorInputClass : ''}`}
              value={values.relationship}
              onChange={(e) => update('relationship', e.target.value)}
              placeholder="e.g. Father, Mother, Guardian"
            />
          </Field>
          <Field
            label="Guardian Phone"
            name="guardianPhone"
            required
            error={errors.guardianPhone}
          >
            <input
              className={`${inputClass} ${errors.guardianPhone ? errorInputClass : ''}`}
              value={values.guardianPhone}
              onChange={(e) => update('guardianPhone', e.target.value)}
            />
          </Field>
          <Field label="Guardian CNIC" name="guardianCnic" error={errors.guardianCnic}>
            <input
              className={`${inputClass} ${errors.guardianCnic ? errorInputClass : ''}`}
              value={values.guardianCnic}
              onChange={(e) => update('guardianCnic', e.target.value)}
              placeholder="xxxxx-xxxxxxx-x"
            />
          </Field>
          <Field
            label="Guardian Occupation"
            name="guardianOccupation"
            error={errors.guardianOccupation}
          >
            <input
              className={inputClass}
              value={values.guardianOccupation}
              onChange={(e) => update('guardianOccupation', e.target.value)}
            />
          </Field>
          <div className="sm:col-span-2">
            <Field
              label="Guardian Address"
              name="guardianAddress"
              error={errors.guardianAddress}
            >
              <textarea
                rows={3}
                className={inputClass}
                value={values.guardianAddress}
                onChange={(e) => update('guardianAddress', e.target.value)}
              />
            </Field>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-border bg-white p-5 sm:p-6">
        <h2 className="font-display text-2xl font-semibold text-navy">Additional</h2>
        <div className="mt-6 grid gap-4">
          <Field label="How did you hear about us?" name="hearAboutUs">
            <select
              className={inputClass}
              value={values.hearAboutUs}
              onChange={(e) => update('hearAboutUs', e.target.value)}
            >
              <option value="">Select an option</option>
              <option value="Social Media">Social Media</option>
              <option value="Friend or Family">Friend or Family</option>
              <option value="Search Engine">Search Engine</option>
              <option value="Advertisement">Advertisement</option>
              <option value="Other">Other</option>
            </select>
          </Field>
          <Field label="Additional Message" name="additionalMessage">
            <textarea
              rows={4}
              className={inputClass}
              value={values.additionalMessage}
              onChange={(e) => update('additionalMessage', e.target.value)}
            />
          </Field>
          <div>
            <label className="flex items-start gap-3 text-sm text-ink">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-border text-blue"
                checked={values.termsAccepted}
                onChange={(e) => update('termsAccepted', e.target.checked)}
              />
              <span>
                I agree to the terms and conditions and confirm that the information
                provided is accurate. <span className="text-accent">*</span>
              </span>
            </label>
            {errors.termsAccepted ? (
              <span className="mt-1 block text-xs font-medium text-accent" role="alert">
                {errors.termsAccepted}
              </span>
            ) : null}
          </div>
        </div>
      </section>

      <button type="submit" className="btn-accent w-full sm:w-auto">
        Submit Enrollment
      </button>
    </form>
  )
}
