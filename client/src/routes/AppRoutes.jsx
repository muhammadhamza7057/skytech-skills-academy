import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import About from '../pages/About'
import Contact from '../pages/Contact'
import CourseDetails from '../pages/CourseDetails'
import Courses from '../pages/Courses'
import Enroll from '../pages/Enroll'
import Home from '../pages/Home'
import OurStory from '../pages/OurStory'
import Services from '../pages/Services'
import Projects from '../pages/Projects'
import ResidentialCaseStudy from '../pages/ResidentialCaseStudy'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="courses" element={<Courses />} />
        <Route path="course/:slug" element={<CourseDetails />} />
        <Route path="services" element={<Services />} />
        <Route path="projects" element={<Projects />} />
        <Route
          path="projects/residential-architectural-project"
          element={<ResidentialCaseStudy />}
        />
        <Route path="about" element={<About />} />
        <Route path="our-story" element={<OurStory />} />
        <Route path="contact" element={<Contact />} />
        <Route path="enroll" element={<Enroll />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
