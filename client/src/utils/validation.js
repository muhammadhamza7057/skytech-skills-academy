const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phonePattern = /^[0-9+\-\s()]{10,20}$/
const cnicPattern = /^(\d{5}-\d{7}-\d{1}|\d{13})$/

export const initialEnrollmentValues = {
  firstName: '',
  lastName: '',
  fatherName: '',
  dateOfBirth: '',
  gender: '',
  cnic: '',
  phone: '',
  whatsapp: '',
  email: '',
  address: '',
  city: '',
  education: '',
  occupation: '',
  previousExperience: '',
  selectedCourse: '',
  guardianName: '',
  relationship: '',
  guardianPhone: '',
  guardianCnic: '',
  guardianOccupation: '',
  guardianAddress: '',
  hearAboutUs: '',
  additionalMessage: '',
  termsAccepted: false,
}

export function validateEnrollment(values) {
  const errors = {}

  if (!values.firstName.trim()) errors.firstName = 'First name is required.'
  if (!values.lastName.trim()) errors.lastName = 'Last name is required.'
  if (!values.fatherName.trim()) errors.fatherName = "Father's name is required."
  if (!values.dateOfBirth) errors.dateOfBirth = 'Date of birth is required.'
  if (!values.gender) errors.gender = 'Please select a gender.'

  if (!values.cnic.trim()) {
    errors.cnic = 'CNIC / B-Form is required.'
  } else if (!cnicPattern.test(values.cnic.trim())) {
    errors.cnic = 'Enter a valid CNIC (xxxxx-xxxxxxx-x) or 13 digits.'
  }

  if (!values.phone.trim()) {
    errors.phone = 'Phone number is required.'
  } else if (!phonePattern.test(values.phone.trim())) {
    errors.phone = 'Enter a valid phone number.'
  }

  if (!values.whatsapp.trim()) {
    errors.whatsapp = 'WhatsApp number is required.'
  } else if (!phonePattern.test(values.whatsapp.trim())) {
    errors.whatsapp = 'Enter a valid WhatsApp number.'
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }

  if (!values.address.trim()) errors.address = 'Address is required.'
  if (!values.city.trim()) errors.city = 'City is required.'
  if (!values.education.trim()) errors.education = 'Education is required.'
  if (!values.selectedCourse) errors.selectedCourse = 'Please select a course.'

  if (!values.guardianName.trim()) errors.guardianName = 'Guardian name is required.'
  if (!values.relationship.trim()) errors.relationship = 'Relationship is required.'

  if (!values.guardianPhone.trim()) {
    errors.guardianPhone = 'Guardian phone is required.'
  } else if (!phonePattern.test(values.guardianPhone.trim())) {
    errors.guardianPhone = 'Enter a valid guardian phone number.'
  }

  if (values.guardianCnic.trim() && !cnicPattern.test(values.guardianCnic.trim())) {
    errors.guardianCnic = 'Enter a valid guardian CNIC.'
  }

  if (!values.termsAccepted) {
    errors.termsAccepted = 'You must accept the terms and conditions.'
  }

  return errors
}

export function validateContact(values) {
  const errors = {}

  if (!values.name.trim()) errors.name = 'Name is required.'
  if (!values.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }
  if (!values.phone.trim()) {
    errors.phone = 'Phone is required.'
  } else if (!phonePattern.test(values.phone.trim())) {
    errors.phone = 'Enter a valid phone number.'
  }
  if (!values.subject.trim()) errors.subject = 'Subject is required.'
  if (!values.message.trim()) errors.message = 'Message is required.'
  else if (values.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.'
  }

  return errors
}
