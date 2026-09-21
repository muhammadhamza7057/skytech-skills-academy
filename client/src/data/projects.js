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
    title: 'Modern Villa Twilight Facade',
    category: 'Exterior Visualization',
    categoryFilter: 'exterior',
    tags: ['exterior', 'residential'],
    description: 'Striking multi-story residential facade visualization at dusk, featuring warm accent uplighting, cantilevered balconies, and architectural perimeter planters.',
    image: img1,
    specs: ['3D Exterior Visualization', 'Twilight Lighting Simulation', 'Lumion & 3Ds Max'],
  },
  {
    id: '02',
    title: 'Contemporary Residence with Jali Screens',
    category: 'Residential Architecture',
    categoryFilter: 'residential',
    tags: ['exterior', 'residential'],
    description: 'Modern two-story residence combining decorative geometric screen panels, cantilevered overhangs, tempered glass balustrades, and lush site landscaping.',
    image: img2,
    specs: ['Architectural Envelope', 'Screen & Louver Detailing', 'Revit & 3Ds Max'],
  },
  {
    id: '03',
    title: 'Neoclassical Luxury Villa',
    category: 'Classical Villa Exterior',
    categoryFilter: 'residential',
    tags: ['exterior', 'residential'],
    description: 'Grand neoclassical residence showcasing classical fluted columns, ornate window cornices, arched entry portico, and sculpted pediments.',
    image: img3,
    specs: ['Neoclassical Facade', 'Colonnade & Portico Modeling', 'V-Ray & SketchUp'],
  },
  {
    id: '04',
    title: 'Master Bedroom Suite & Accent Wall',
    category: 'Master Suite Interior',
    categoryFilter: 'interior',
    tags: ['interior', 'residential'],
    description: 'Sophisticated master bedroom interior design featuring vertical fluted headboard panelling, directional track spotlights, ambient LED cove illumination, and bespoke nightstands.',
    image: img4,
    specs: ['Interior Space Planning', '3D Wall Articulation', 'Custom Joinery & Lighting'],
  },
  {
    id: '05',
    title: 'Bedroom Lounge & Media Display Wall',
    category: 'Lounge & Bedroom Interior',
    categoryFilter: 'interior',
    tags: ['interior', 'residential'],
    description: 'Modern bedroom living corner designed with an integrated fluted media backdrop, warm backlit display shelving niches, minimalist credenza, and ergonomic seating.',
    image: img5,
    specs: ['Media Wall Detailing', 'Backlit Accent Niches', 'Ergonomic Interior Layout'],
  },
  {
    id: '06',
    title: 'Two-Story Residence with Stone Cladding',
    category: 'Residential Exterior',
    categoryFilter: 'residential',
    tags: ['exterior', 'residential'],
    description: 'Contemporary two-story residence articulating natural stone masonry cladding, horizontal slat timber gates, upper terrace planters, and clean geometric parapets.',
    image: img6,
    specs: ['Material Harmonization', 'Stone Masonry Detailing', 'Boundary & Gate Integration'],
  },
  {
    id: '07',
    title: 'Symmetric Modern Villa Facade',
    category: 'Villa Facade & Site Planning',
    categoryFilter: 'residential',
    tags: ['exterior', 'residential'],
    description: 'Daylight exterior rendering capturing clean volumetric massing, paved entry driveway, concealed roofline cove lighting, and perimeter boundary security detailing.',
    image: img7,
    specs: ['Symmetric Massing Study', 'Facade Illumination Design', 'Architectural Visualization'],
  },
  {
    id: '08',
    title: 'Modern Islamic Architectural Complex',
    category: 'Community & Islamic Architecture',
    categoryFilter: 'commercial',
    tags: ['commercial', 'exterior', 'community'],
    description: 'Contemporary Islamic community mosque complex showcasing an elegant geometric minaret tower, Quranic calligraphic feature panels, elevated prayer hall, and arched circulation colonnades.',
    image: img8,
    specs: ['Islamic Geometric Styling', 'Minaret & Dome Proportions', 'Public Circulation Planning'],
  },
  {
    id: '09',
    title: 'Mosque Entrance Portal & Prayer Terrace',
    category: 'Civic & Cultural Architecture',
    categoryFilter: 'commercial',
    tags: ['commercial', 'exterior', 'community'],
    description: 'Twilight perspective of the community mosque entrance portal, upper open-air ablution terrace, grand stair access, and atmospheric evening lighting design.',
    image: img9,
    specs: ['Terrace & Portal Detailing', 'Twilight Illumination Study', 'Volumetric CAD Modeling'],
  },
]

export const projectFilters = [
  { label: 'All Projects', value: 'all' },
  { label: 'Residential', value: 'residential' },
  { label: 'Exterior Design', value: 'exterior' },
  { label: 'Interior Design', value: 'interior' },
  { label: 'Commercial & Community', value: 'commercial' },
]
