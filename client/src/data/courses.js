export const categories = [
  'Engineering & Architecture',
  'Web & IT',
  'Design & Digital',
  'English & IELTS',
  'Office Skills',
]

const faqsCommon = [
  {
    question: 'Who can enroll in this course?',
    answer:
      'This course is open to students, fresh graduates, and working professionals who want practical, career-focused training.',
  },
  {
    question: 'Will I receive a certificate?',
    answer:
      'Yes. Learners who successfully complete the course requirements receive a Certificate of Completion from Skytech Skills Academy.',
  },
  {
    question: 'Do I need prior experience?',
    answer:
      'Most courses start from foundational concepts. Specific requirements are listed on each course page so you can choose the right level.',
  },
  {
    question: 'How do classes work?',
    answer:
      'Sessions combine instructor-led teaching with hands-on practice so you can apply tools and workflows used in real projects.',
  },
]

export const courses = [
  {
    id: 1,
    slug: 'autocad',
    name: 'AutoCAD',
    category: 'Engineering & Architecture',
    shortDescription:
      'Draft precise 2D drawings and technical plans used across engineering and architecture.',
    description:
      'Learn AutoCAD from core drafting commands to professional drawing standards. This course helps you produce clean floor plans, elevations, sections, and technical documentation with accuracy and speed.',
    fee: 'PKR 18,000',
    duration: '2 Months',
    level: 'Beginner to Intermediate',
    mode: 'On-campus / Hybrid',
    image:
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    whatYouLearn: [
      'Interface, units, and drawing setup',
      'Precision drafting with layers and blocks',
      'Floor plans, elevations, and detailing',
      'Dimensions, annotations, and title blocks',
      'Plotting and professional drawing standards',
    ],
    courseOutline: [
      'Getting started with AutoCAD workspace',
      'Drawing and modifying tools',
      'Layers, blocks, and reusable content',
      'Architectural and engineering drawings',
      'Annotation, dimensioning, and layouts',
      'Final drafting project',
    ],
    requirements: [
      'Basic computer literacy',
      'Interest in design or technical drawing',
      'No prior AutoCAD experience required',
    ],
    targetAudience: [
      'Architecture and engineering students',
      'Draftspeople and junior designers',
      'Professionals seeking CAD skills',
    ],
    certificateInfo:
      'Certificate of Completion awarded after project submission and attendance requirements are met.',
    faqs: faqsCommon,
  },
  {
    id: 2,
    slug: '3ds-max',
    name: '3Ds Max',
    category: 'Engineering & Architecture',
    shortDescription:
      'Create realistic 3D models and visualizations for architecture and product design.',
    description:
      'Build modeling, materials, lighting, and rendering skills in 3Ds Max. Ideal for architectural visualization and design presentations that communicate space and material clearly.',
    fee: 'PKR 22,000',
    duration: '2.5 Months',
    level: 'Beginner to Intermediate',
    mode: 'On-campus / Hybrid',
    image:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    whatYouLearn: [
      'Polygon and spline modeling fundamentals',
      'Materials, maps, and UV basics',
      'Lighting setups for interiors and exteriors',
      'Camera composition for presentations',
      'Rendering workflows for client-ready visuals',
    ],
    courseOutline: [
      '3Ds Max interface and project setup',
      'Modeling architectural forms',
      'Materials and lighting',
      'Cameras and scene composition',
      'Rendering and presentation outputs',
      'Capstone visualization project',
    ],
    requirements: [
      'Basic computer skills',
      'Familiarity with design concepts is helpful',
      'Willingness to practice modeling regularly',
    ],
    targetAudience: [
      'Architecture and interior design students',
      'Visualization beginners',
      'Design professionals expanding into 3D',
    ],
    certificateInfo:
      'Certificate of Completion awarded after successful final project review.',
    faqs: faqsCommon,
  },
  {
    id: 3,
    slug: 'revit',
    name: 'Revit',
    category: 'Engineering & Architecture',
    shortDescription:
      'Master BIM workflows for coordinated architectural and engineering documentation.',
    description:
      'Learn Revit for Building Information Modeling (BIM). Create intelligent models, generate views and schedules, and understand how coordinated documentation supports modern project delivery.',
    fee: 'PKR 24,000',
    duration: '2.5 Months',
    level: 'Beginner to Intermediate',
    mode: 'On-campus / Hybrid',
    image:
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=80',
    whatYouLearn: [
      'BIM concepts and Revit project structure',
      'Walls, floors, roofs, and family basics',
      'Views, sheets, and documentation',
      'Schedules and quantities overview',
      'Collaboration-ready model practices',
    ],
    courseOutline: [
      'Introduction to BIM and Revit',
      'Modeling building elements',
      'Views, levels, and grids',
      'Annotation and sheets',
      'Schedules and documentation',
      'Project submission',
    ],
    requirements: [
      'Basic computer literacy',
      'Interest in architecture or construction',
      'No prior Revit experience required',
    ],
    targetAudience: [
      'Architecture students',
      'Civil and construction learners',
      'Professionals moving to BIM tools',
    ],
    certificateInfo:
      'Certificate of Completion awarded upon meeting course and project criteria.',
    faqs: faqsCommon,
  },
  {
    id: 4,
    slug: 'sketchup',
    name: 'SketchUp',
    category: 'Engineering & Architecture',
    shortDescription:
      'Model spaces quickly and present design ideas with clarity and confidence.',
    description:
      'Use SketchUp to develop conceptual and detailed 3D models for architecture and interior design. Focus on speed, clean geometry, and presentation-ready outputs.',
    fee: 'PKR 16,000',
    duration: '1.5 Months',
    level: 'Beginner',
    mode: 'On-campus / Hybrid',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    whatYouLearn: [
      'SketchUp tools and modeling logic',
      'Components, groups, and organization',
      'Materials and scene setup',
      'Layouts for presentation drawings',
      'Exporting visuals for client review',
    ],
    courseOutline: [
      'Interface and navigation',
      'Modeling interiors and exteriors',
      'Components and materials',
      'Scenes and styles',
      'Presentation and export',
      'Design model project',
    ],
    requirements: [
      'Basic computer skills',
      'Interest in spatial design',
    ],
    targetAudience: [
      'Interior and architecture learners',
      'Design beginners',
      'Freelancers needing fast 3D concepts',
    ],
    certificateInfo:
      'Certificate of Completion provided after project assessment.',
    faqs: faqsCommon,
  },
  {
    id: 5,
    slug: 'lumion',
    name: 'Lumion',
    category: 'Engineering & Architecture',
    shortDescription:
      'Turn 3D models into immersive architectural renders and walkthroughs.',
    description:
      'Learn Lumion to enhance architectural presentations with lighting, materials, vegetation, and atmospheric effects that help clients understand design intent.',
    fee: 'PKR 20,000',
    duration: '1.5 Months',
    level: 'Intermediate',
    mode: 'On-campus / Hybrid',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    whatYouLearn: [
      'Importing and preparing models',
      'Materials and object libraries',
      'Daylight and mood lighting',
      'Effects for photoreal presentation',
      'Still renders and simple animations',
    ],
    courseOutline: [
      'Lumion workspace overview',
      'Materials and environment setup',
      'Lighting and weather effects',
      'Camera paths and animation basics',
      'Rendering outputs',
      'Presentation package project',
    ],
    requirements: [
      'Basic 3D modeling familiarity recommended',
      'Ability to import a simple architectural model',
    ],
    targetAudience: [
      'Architecture visualization learners',
      '3D artists improving presentation quality',
      'Design studio juniors',
    ],
    certificateInfo:
      'Certificate of Completion awarded after final render set submission.',
    faqs: faqsCommon,
  },
  {
    id: 6,
    slug: 'mern-stack',
    name: 'MERN Stack',
    category: 'Web & IT',
    shortDescription:
      'Build full-stack web applications with MongoDB, Express, React, and Node.js.',
    description:
      'Develop end-to-end web apps using the MERN stack. Learn frontend UI development, REST APIs, authentication concepts, and deployment readiness through practical projects.',
    fee: 'PKR 35,000',
    duration: '4 Months',
    level: 'Intermediate',
    mode: 'On-campus / Hybrid',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
    whatYouLearn: [
      'React component architecture',
      'Node.js and Express APIs',
      'MongoDB data modeling basics',
      'Connecting frontend and backend',
      'Project structure and deployment basics',
    ],
    courseOutline: [
      'Web fundamentals and tooling',
      'React frontend development',
      'Node/Express backend APIs',
      'MongoDB and data flow',
      'Full-stack integration',
      'Capstone web application',
    ],
    requirements: [
      'Basic HTML, CSS, and JavaScript knowledge',
      'Commitment to weekly coding practice',
    ],
    targetAudience: [
      'Aspiring full-stack developers',
      'Frontend learners expanding to backend',
      'Career switchers into web development',
    ],
    certificateInfo:
      'Certificate of Completion awarded after successful capstone project delivery.',
    faqs: faqsCommon,
  },
  {
    id: 7,
    slug: 'web-development',
    name: 'Web Development',
    category: 'Web & IT',
    shortDescription:
      'Learn to build responsive websites with modern HTML, CSS, and JavaScript.',
    description:
      'Start your web journey with structured foundations in markup, styling, responsiveness, and interactive scripting. Build portfolio-ready pages with clean structure and accessible practices.',
    fee: 'PKR 25,000',
    duration: '3 Months',
    level: 'Beginner to Intermediate',
    mode: 'On-campus / Hybrid',
    image:
      'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80',
    whatYouLearn: [
      'Semantic HTML structure',
      'Modern CSS layout and responsive design',
      'JavaScript fundamentals for interactivity',
      'Forms, validation, and usability basics',
      'Deploying a simple website',
    ],
    courseOutline: [
      'HTML foundations',
      'CSS styling and layouts',
      'Responsive design techniques',
      'JavaScript essentials',
      'Mini projects and polishing',
      'Portfolio website project',
    ],
    requirements: [
      'Basic computer literacy',
      'No prior coding experience required',
    ],
    targetAudience: [
      'Beginners entering tech',
      'Students building a digital portfolio',
      'Freelancers offering website services',
    ],
    certificateInfo:
      'Certificate of Completion provided after portfolio project review.',
    faqs: faqsCommon,
  },
  {
    id: 8,
    slug: 'graphic-designing',
    name: 'Graphic Designing',
    category: 'Design & Digital',
    shortDescription:
      'Design visual identities, marketing creatives, and brand-ready assets.',
    description:
      'Develop practical graphic design skills for print and digital media. Learn composition, typography, color, and production workflows used for branding and marketing materials.',
    fee: 'PKR 20,000',
    duration: '2 Months',
    level: 'Beginner',
    mode: 'On-campus / Hybrid',
    image:
      'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=1200&q=80',
    whatYouLearn: [
      'Design principles and visual hierarchy',
      'Typography and color systems',
      'Brand identity basics',
      'Social and print creatives',
      'Export settings for professional delivery',
    ],
    courseOutline: [
      'Design fundamentals',
      'Tool workflows and file management',
      'Logo and brand assets',
      'Marketing collateral',
      'Portfolio presentation',
      'Final design package',
    ],
    requirements: [
      'Basic computer skills',
      'Creative interest and consistent practice',
    ],
    targetAudience: [
      'Aspiring designers',
      'Marketing assistants',
      'Entrepreneurs creating brand assets',
    ],
    certificateInfo:
      'Certificate of Completion awarded after portfolio submission.',
    faqs: faqsCommon,
  },
  {
    id: 9,
    slug: 'digital-marketing',
    name: 'Digital Marketing',
    category: 'Design & Digital',
    shortDescription:
      'Plan and execute digital campaigns across social, content, and search channels.',
    description:
      'Understand practical digital marketing foundations including content strategy, social media planning, SEO basics, and campaign measurement for small businesses and freelancers.',
    fee: 'PKR 18,000',
    duration: '2 Months',
    level: 'Beginner',
    mode: 'On-campus / Hybrid',
    image:
      'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1200&q=80',
    whatYouLearn: [
      'Digital marketing ecosystem overview',
      'Content and social media planning',
      'SEO fundamentals',
      'Ads concepts and targeting basics',
      'Simple analytics and reporting',
    ],
    courseOutline: [
      'Marketing foundations',
      'Content and social strategy',
      'SEO essentials',
      'Paid promotion basics',
      'Measurement and reporting',
      'Campaign plan project',
    ],
    requirements: [
      'Basic computer and internet literacy',
      'Interest in business or communication',
    ],
    targetAudience: [
      'Marketing beginners',
      'Small business owners',
      'Freelancers expanding service offerings',
    ],
    certificateInfo:
      'Certificate of Completion awarded after campaign plan submission.',
    faqs: faqsCommon,
  },
  {
    id: 10,
    slug: 'microsoft-office',
    name: 'Microsoft Office',
    category: 'Office Skills',
    shortDescription:
      'Gain workplace productivity skills in Word, Excel, PowerPoint, and Outlook.',
    description:
      'Build essential Microsoft Office skills for academic and professional environments. Focus on documents, spreadsheets, presentations, and practical workplace workflows.',
    fee: 'PKR 12,000',
    duration: '1.5 Months',
    level: 'Beginner',
    mode: 'On-campus / Hybrid',
    image:
      'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80',
    whatYouLearn: [
      'Professional document formatting in Word',
      'Excel formulas, charts, and tables',
      'PowerPoint presentation design',
      'Email and calendar basics in Outlook',
      'File organization and productivity habits',
    ],
    courseOutline: [
      'Word for reports and letters',
      'Excel for data and calculations',
      'PowerPoint for presentations',
      'Outlook and workplace communication',
      'Integrated productivity project',
    ],
    requirements: [
      'Basic computer operation skills',
    ],
    targetAudience: [
      'Students and job seekers',
      'Office assistants',
      'Professionals improving workplace tools',
    ],
    certificateInfo:
      'Certificate of Completion provided after skills assessment.',
    faqs: faqsCommon,
  },
  {
    id: 11,
    slug: 'spoken-english',
    name: 'Spoken English',
    category: 'English & IELTS',
    shortDescription:
      'Improve fluency, confidence, and everyday professional communication in English.',
    description:
      'Develop practical spoken English for study, interviews, and workplace conversations. Focus on clarity, vocabulary, grammar in speech, and confident delivery.',
    fee: 'PKR 15,000',
    duration: '2 Months',
    level: 'Beginner to Intermediate',
    mode: 'On-campus / Hybrid',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    whatYouLearn: [
      'Pronunciation and clarity',
      'Everyday and workplace conversation',
      'Grammar for spoken accuracy',
      'Listening and response skills',
      'Presentation and interview confidence',
    ],
    courseOutline: [
      'Speaking foundations',
      'Conversation practice',
      'Grammar in context',
      'Listening and response drills',
      'Interview and presentation practice',
      'Final speaking assessment',
    ],
    requirements: [
      'Basic English reading ability preferred',
      'Willingness to participate in speaking practice',
    ],
    targetAudience: [
      'Students improving communication',
      'Job seekers preparing for interviews',
      'Professionals needing workplace English',
    ],
    certificateInfo:
      'Certificate of Completion awarded after speaking assessment.',
    faqs: faqsCommon,
  },
  {
    id: 12,
    slug: 'ielts-preparation',
    name: 'IELTS Preparation',
    category: 'English & IELTS',
    shortDescription:
      'Prepare strategically for IELTS Reading, Writing, Listening, and Speaking.',
    description:
      'Build exam strategy and skill practice across all IELTS modules. Learn task approaches, timing techniques, and feedback-driven improvement for Academic or General pathways as guided in class.',
    fee: 'PKR 22,000',
    duration: '2.5 Months',
    level: 'Intermediate',
    mode: 'On-campus / Hybrid',
    image:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80',
    whatYouLearn: [
      'IELTS format and scoring overview',
      'Reading strategies and timing',
      'Writing Task approaches',
      'Listening accuracy techniques',
      'Speaking fluency and coherence practice',
    ],
    courseOutline: [
      'Exam overview and diagnostics',
      'Listening skills and practice',
      'Reading strategies',
      'Writing Task 1 and Task 2',
      'Speaking practice and feedback',
      'Full mock test review',
    ],
    requirements: [
      'Intermediate English proficiency recommended',
      'Commitment to homework and timed practice',
    ],
    targetAudience: [
      'Students applying abroad',
      'Professionals needing English proof',
      'Learners aiming to improve band strategies',
    ],
    certificateInfo:
      'Certificate of Completion awarded after course and mock assessment completion.',
    faqs: faqsCommon,
  },
]

export const popularCourseSlugs = [
  'autocad',
  'revit',
  'mern-stack',
  'web-development',
  'graphic-designing',
  'ielts-preparation',
]

export function getCourseBySlug(slug) {
  return courses.find((course) => course.slug === slug)
}

export function getPopularCourses() {
  return popularCourseSlugs
    .map((slug) => getCourseBySlug(slug))
    .filter(Boolean)
}

export function getCoursesByCategory(category) {
  return courses.filter((course) => course.category === category)
}

export const COURSE_FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80'
