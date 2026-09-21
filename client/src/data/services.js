import {
  Building2,
  Compass,
  FileText,
  Home,
  Layers,
  Layout,
  Maximize2,
  PenTool,
} from 'lucide-react'

export const architectureServices = [
  {
    id: 'architectural-design',
    title: 'Architectural Design',
    shortDescription:
      'Comprehensive architectural concepts, functional spatial layouts, and professional design planning for modern residential and commercial structures.',
    icon: Building2,
    deliverables: [
      'Concept development',
      'Spatial planning',
      'Architectural layouts',
      'Design presentations',
    ],
  },
  {
    id: '2d-floor-plans',
    title: '2D Floor Plans & Drafting',
    shortDescription:
      'Precise, to-scale 2D floor plans, working drawings, sections, and elevation details ready for review and site execution.',
    icon: Layout,
    deliverables: [
      'Dimensional floor plans',
      'Sectional drawings',
      'Elevation drawings',
      'Furniture layout plans',
    ],
  },
  {
    id: '3d-visualization',
    title: '3D Architectural Visualization',
    shortDescription:
      'Photorealistic 3D exterior and interior visualizations that bring blueprints to life with realistic lighting, textures, and environmental context.',
    icon: Maximize2,
    deliverables: [
      'Photorealistic exterior renders',
      'Day & night lighting views',
      'Material & texture studies',
      'Presentation renderings',
    ],
  },
  {
    id: 'interior-design',
    title: 'Interior Design',
    shortDescription:
      'Thoughtfully planned interior spaces combining aesthetic harmony, ergonomic utility, lighting concepts, and practical material selections.',
    icon: Home,
    deliverables: [
      'Space planning & layout',
      'Interior 3D concepts',
      'Color & material palettes',
      'Lighting & ceiling details',
    ],
  },
  {
    id: 'exterior-design',
    title: 'Exterior Design',
    shortDescription:
      'Striking building facade concepts and modern architectural treatments designed for durability, visual elegance, and structural character.',
    icon: Compass,
    deliverables: [
      'Facade design & styling',
      'Boundary wall concepts',
      'Exterior material selection',
      'Landscape integration',
    ],
  },
  {
    id: 'building-design-planning',
    title: 'Building Design & Planning',
    shortDescription:
      'Holistic building layout design taking into account site orientation, natural airflow, daylight efficiency, and zoning practicality.',
    icon: PenTool,
    deliverables: [
      'Site layout analysis',
      'Zoning & circulation flow',
      'Structural grid coordination',
      'Phased planning solutions',
    ],
  },
  {
    id: 'autocad-drafting',
    title: 'AutoCAD Drafting Services',
    shortDescription:
      'Industry-standard technical CAD drafting, digitization of manual sketches, sheet composition, and layer-organized DWG documentation.',
    icon: FileText,
    deliverables: [
      'CAD conversion & drafting',
      'Detail drafting & schedules',
      'Layer-standard DWG files',
      'Print-ready PDF sets',
    ],
  },
  {
    id: '3d-modeling',
    title: '3D Modeling',
    shortDescription:
      'Accurate geometric 3D models developed in 3Ds Max, Revit, and SketchUp suitable for engineering review, visualization, and client walkthroughs.',
    icon: Layers,
    deliverables: [
      'Detailed volumetric models',
      'BIM-aligned component models',
      'Multi-angle perspectives',
      'Exportable 3D assets',
    ],
  },
]

export const architectureProcess = [
  {
    step: '01',
    title: 'Discuss',
    description:
      'We begin with an in-depth conversation to understand your project goals, functional needs, plot dimensions, and design aspirations.',
  },
  {
    step: '02',
    title: 'Plan',
    description:
      'Our designers establish the preliminary spatial circulation, zoning, and structural proportions for optimal utility.',
  },
  {
    step: '03',
    title: 'Design',
    description:
      'We generate precise 2D technical drawings, detailed elevations, and immersive 3D architectural models.',
  },
  {
    step: '04',
    title: 'Refine',
    description:
      'Together we review the design concepts, incorporating your feedback on materials, layouts, and aesthetics.',
  },
  {
    step: '05',
    title: 'Deliver',
    description:
      'You receive complete, coordinated architectural drawings, 3D renderings, and technical documentation sets.',
  },
]

export const whyWorkWithUs = [
  {
    title: 'Practical Architecture Experience',
    description:
      'Our team brings 7+ years of hands-on experience in drafting, design planning, and visualization across real residential and commercial projects.',
  },
  {
    title: 'Professional Design Approach',
    description:
      'We treat every project with systematic architectural rigor, ensuring aesthetics are balanced with realistic construction feasibility.',
  },
  {
    title: 'Clear Visual Communication',
    description:
      'Through high-resolution 3D renders and clean 2D plans, clients can clearly see and understand every facet of their design before work begins.',
  },
  {
    title: 'Skillful Technical Drafting',
    description:
      'All technical plans adhere strictly to industry drafting standards, accurate dimensioning, and well-organized CAD layering.',
  },
  {
    title: 'Modern Design Tools',
    description:
      'We harness state-of-the-art software including AutoCAD, Revit, 3Ds Max, SketchUp, and Lumion for precision and visual excellence.',
  },
  {
    title: 'Client-Focused Solutions',
    description:
      'We listen carefully, adapt to your specific plot constraints, and provide responsive communication from initial concept to final delivery.',
  },
]
