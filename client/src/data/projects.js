import img1 from '../assets/Image1.jpeg'
import img2 from '../assets/Image 2.jpeg'
import img3 from '../assets/Image 3.jpeg'
import img4 from '../assets/Image 4.jpeg'
import img5 from '../assets/Image 5.jpeg'
import img6 from '../assets/Image 6.jpeg'
import img7 from '../assets/Image 7.jpeg'
import img8 from '../assets/Image 8.jpeg'
import img9 from '../assets/Image 9.jpeg'

export const projects = [
  {
    id: '01',
    title: 'Project 01',
    category: 'Exterior Visualization',
    categoryFilter: 'exterior',
    description: 'Modern multi-story facade rendering featuring balanced glazing, structural framing, and realistic lighting simulation.',
    image: img1,
    specs: ['3D Modeling', 'Exterior Rendering', 'Lumion & 3Ds Max'],
  },
  {
    id: '02',
    title: 'Project 02',
    category: 'Architectural Planning',
    categoryFilter: 'planning',
    description: 'Comprehensive elevation study and residential envelope design optimized for natural light and regional climate response.',
    image: img2,
    specs: ['AutoCAD Elevation', 'Facade Detail', 'Material Mapping'],
  },
  {
    id: '03',
    title: 'Project 03',
    category: 'Interior Architecture',
    categoryFilter: 'interior',
    description: 'Contemporary interior space planning with custom ceiling details, ambient lighting layout, and refined material palette.',
    image: img3,
    specs: ['Interior Design', 'Lighting Layout', 'V-Ray Rendering'],
  },
  {
    id: '04',
    title: 'Project 04',
    category: 'Commercial & Multi-Unit',
    categoryFilter: 'exterior',
    description: 'Dynamic commercial exterior visualization showcasing street-level circulation, storefront glass, and upper-level setbacks.',
    image: img4,
    specs: ['Commercial Design', 'Exterior Perspective', 'Sketchup & Lumion'],
  },
  {
    id: '05',
    title: 'Project 05',
    category: 'Residential Design',
    categoryFilter: 'residential',
    description: 'Elegant modern villa exterior concept with layered volumes, cantilevers, and integrated perimeter landscape treatments.',
    image: img5,
    specs: ['Villa Architecture', '3D Photorealism', 'Material Curation'],
  },
  {
    id: '06',
    title: 'Project 06',
    category: 'Interior Architecture',
    categoryFilter: 'interior',
    description: 'Harmonious living area visualization highlighting spatial balance, wood accent paneling, and acoustic flow.',
    image: img6,
    specs: ['Living Concept', 'Custom Joinery Details', 'High-Res Render'],
  },
  {
    id: '07',
    title: 'Project 07',
    category: 'Exterior Visualization',
    categoryFilter: 'exterior',
    description: 'Daylight exterior rendering capturing authentic material textures, parapet profiles, and solar shading elements.',
    image: img7,
    specs: ['Daylight Study', 'Texturing & Shading', 'Photorealistic Output'],
  },
  {
    id: '08',
    title: 'Project 08',
    category: 'Residential Design',
    categoryFilter: 'residential',
    description: 'Contemporary multi-level family residence design balancing private domestic zones with open-air terrace perspectives.',
    image: img8,
    specs: ['Terrace Architecture', 'Envelope Modeling', 'Revit & 3Ds Max'],
  },
  {
    id: '09',
    title: 'Project 09',
    category: 'Architectural Planning',
    categoryFilter: 'planning',
    description: 'Precision architectural massing study emphasizing clean geometric symmetry, structural balance, and site context.',
    image: img9,
    specs: ['Massing Study', 'Contextual Integration', 'Architectural Drafting'],
  },
]

export const projectFilters = [
  { label: 'All Projects', value: 'all' },
  { label: 'Exterior', value: 'exterior' },
  { label: 'Interior', value: 'interior' },
  { label: 'Residential', value: 'residential' },
  { label: 'Planning', value: 'planning' },
]
