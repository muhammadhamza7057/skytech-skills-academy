import heroRender from '../assets/residential_project_hero.webp'
import sheet01 from '../assets/projects/residential-project/01.webp'
import sheet02 from '../assets/projects/residential-project/02.webp'
import sheet03 from '../assets/projects/residential-project/03.webp'
import sheet04 from '../assets/projects/residential-project/04.webp'
import sheet05 from '../assets/projects/residential-project/05.webp'
import sheet06 from '../assets/projects/residential-project/06.webp'
import sheet07 from '../assets/projects/residential-project/07.webp'
import sheet08 from '../assets/projects/residential-project/08.webp'
import sheet09 from '../assets/projects/residential-project/09.webp'
import sheet10 from '../assets/projects/residential-project/10.webp'
import sheet11 from '../assets/projects/residential-project/11.webp'
import sheet12 from '../assets/projects/residential-project/12.webp'
import sheet13 from '../assets/projects/residential-project/13.webp'
import sheet14 from '../assets/projects/residential-project/14.webp'
import sheet15 from '../assets/projects/residential-project/15.webp'
import sheet16 from '../assets/projects/residential-project/16.webp'
import sheet17 from '../assets/projects/residential-project/17.webp'
import sheet18 from '../assets/projects/residential-project/18.webp'
import sheet19 from '../assets/projects/residential-project/19.webp'
import sheet20 from '../assets/projects/residential-project/20.webp'
import sheet21 from '../assets/projects/residential-project/21.webp'
import sheet22 from '../assets/projects/residential-project/22.webp'
import sheet23 from '../assets/projects/residential-project/23.webp'
import sheet24 from '../assets/projects/residential-project/24.webp'
import sheet25 from '../assets/projects/residential-project/25.webp'
import sheet26 from '../assets/projects/residential-project/26.webp'
import sheet27 from '../assets/projects/residential-project/27.webp'
import sheet28 from '../assets/projects/residential-project/28.webp'
import sheet29 from '../assets/projects/residential-project/29.webp'
import sheet30 from '../assets/projects/residential-project/30.webp'
import sheet31 from '../assets/projects/residential-project/31.webp'
import sheet32 from '../assets/projects/residential-project/32.webp'
import sheet33 from '../assets/projects/residential-project/33.webp'
import sheet34 from '../assets/projects/residential-project/34.webp'
import sheet35 from '../assets/projects/residential-project/35.webp'

export const residentialProjectOverview = {
  title: 'Residential Architectural Project',
  category: 'Full Architectural Documentation & 3D Visualization',
  designer: 'Wajid Khan',
  designerRole: 'Architectural Designer',
  designerPhone: '+92 342 2421701',
  designerWhatsapp: 'https://wa.me/923422421701',
  projectType: 'Residential',
  heroImage: heroRender,
  description:
    'A professionally documented residential architectural project covering spatial planning, working drawings, exterior elevations, structural sections, electrical schematics, and public health sanitary documentation.',
  summary:
    'A professionally documented residential architectural project covering spatial planning, working drawings, exterior elevations, structural sections, electrical schematics, and public health sanitary documentation.',
  specifications: {
    totalCoveredArea: '3,750.50 sq. ft.',
    groundFloorArea: '1,697.75 sq. ft.',
    firstFloorArea: '1,697.75 sq. ft.',
    mumtyFloorArea: '355.00 sq. ft.',
    designer: 'Wajid Khan',
    totalSheets: 35,
    software: 'AutoCAD, 3Ds Max, Lumion',
    floors: 'Ground + First + Mumty',
  },
  areas: [
    { label: 'Ground Floor', value: '1,697.75 sq. ft.', detail: 'Living lounge, drawing room, guest room, kitchen, 2 bedrooms & attached baths' },
    { label: 'First Floor', value: '1,697.75 sq. ft.', detail: 'Lounge, open terrace, secondary kitchen, 2 master bedrooms & en-suite baths' },
    { label: 'Mumty Floor', value: '355.00 sq. ft.', detail: 'Stair tower, dedicated laundry room, overhead water tank access & terrace' },
    { label: 'Total Covered Area', value: '3,750.50 sq. ft.', detail: 'Complete documented gross built-up architectural area' },
  ],
  stats: {
    totalSheets: 35,
    software: 'AutoCAD, 3Ds Max, Lumion',
    deliverables: 'Architecture, Working Drawings, Elevations, Sections, MEP',
  },
}

export const projectWorkflowJourney = [
  { step: '01', title: 'Floor Planning', phase: 'Floor Planning', count: 'Sheets 02-04', sheets: 'Sheets 02-04', desc: 'Spatial zoning, room dimensions, circulation, and boundary setbacks.', description: 'Spatial zoning, room dimensions, circulation, and boundary setbacks.' },
  { step: '02', title: 'Working Planning', phase: 'Working Planning', count: 'Sheets 05-10', sheets: 'Sheets 05-10', desc: 'Detailed masonry dimensions, wall thicknesses, and opening schedules.', description: 'Detailed masonry dimensions, wall thicknesses, and opening schedules.' },
  { step: '03', title: 'Material & Finishing', phase: 'Material & Finishing', count: 'Sheets 11-13', sheets: 'Sheets 11-13', desc: 'Schedules for porcelain tiles, Verona marble, and roof finishes.', description: 'Schedules for porcelain tiles, Verona marble, and roof finishes.' },
  { step: '04', title: 'Elevations', phase: 'Elevations', count: 'Sheets 14-17', sheets: 'Sheets 14-17', desc: 'Front, right, left, and rear architectural elevation treatments.', description: 'Front, right, left, and rear architectural elevation treatments.' },
  { step: '05', title: 'Sections', phase: 'Sections', count: 'Sheets 18-22', sheets: 'Sheets 18-22', desc: 'Longitudinal and cross sections showing slab levels and floor heights.', description: 'Longitudinal and cross sections showing slab levels and floor heights.' },
  { step: '06', title: 'Electrical Documentation', phase: 'Electrical Documentation', count: 'Sheets 23-31', sheets: 'Sheets 23-31', desc: 'Electrical symbols legend, wiring notes, lighting & power circuit plans.', description: 'Electrical symbols legend, wiring notes, lighting & power circuit plans.' },
  { step: '07', title: 'Public Health Documentation', phase: 'Public Health Documentation', count: 'Sheets 32-35', sheets: 'Sheets 32-35', desc: 'Water supply lines, sanitary drop stacks, and rainwater roof drainage.', description: 'Water supply lines, sanitary drop stacks, and rainwater roof drainage.' },
  { step: '08', title: '3D Project Presentation', phase: '3D Project Presentation', count: 'Sheet 01 & Render', sheets: 'Sheet 01 & Render', desc: 'Photorealistic exterior architectural rendering and design presentation.', description: 'Photorealistic exterior architectural rendering and design presentation.' },
]

export const allProjectSheets = [
  {
    id: 1,
    sheetNumber: '01',
    title: '3D Architectural Project Presentation',
    category: 'Presentation',
    image: sheet01,
    description: 'Photorealistic exterior visualization showcasing modern facade volumes, cantilever balcony, geometric accent wall, and ambient night illumination.',
  },
  {
    id: 2,
    sheetNumber: '02',
    title: 'Ground Floor Architectural Plan',
    category: 'Floor Planning',
    image: sheet02,
    description: 'Ground Floor layout (1,697.75 sq. ft.) detailing Car Porch (19x12), Drawing Room (11-6x12), Guest Room (12-6x11-9), Central Lobby, Lounge, Kitchen (12-6x8-9), and 2 Bed Rooms (12x14) with attached toilets.',
  },
  {
    id: 3,
    sheetNumber: '03',
    title: 'First Floor Architectural Plan',
    category: 'Floor Planning',
    image: sheet03,
    description: 'First Floor layout (1,697.75 sq. ft.) featuring expansive Front Terrace (19x12), Drawing Room, Living Lounge, Kitchen, and 2 Bed Rooms (12x14) with en-suite bathrooms.',
  },
  {
    id: 4,
    sheetNumber: '04',
    title: 'Mumty Floor Architectural Plan',
    category: 'Floor Planning',
    image: sheet04,
    description: 'Mumty Floor layout (355.00 sq. ft.) with stairwell head, dedicated Laundry Room (12x14), and Overhead Water Tank (O.H.W.T) platform.',
  },
  {
    id: 5,
    sheetNumber: '05',
    title: 'Ground Floor Dimension Plan',
    category: 'Working Planning',
    image: sheet05,
    description: 'Precise center-line and clear-span dimensional coordinates for all ground floor structural walls, partitions, and door frames.',
  },
  {
    id: 6,
    sheetNumber: '06',
    title: 'First Floor Dimension Plan',
    category: 'Working Planning',
    image: sheet06,
    description: 'Upper-level dimension plan showing exact setback offsets, cantilever overhangs, balcony parapet lines, and internal room dimensions.',
  },
  {
    id: 7,
    sheetNumber: '07',
    title: 'Mumty Floor Dimension Plan',
    category: 'Working Planning',
    image: sheet07,
    description: 'Rooftop dimension plan detailing stair enclosure envelope, laundry room masonry dimensions, and roof parapet clearances.',
  },
  {
    id: 8,
    sheetNumber: '08',
    title: 'Ground Floor Working Planning',
    category: 'Working Planning',
    image: sheet08,
    description: 'Site-executable construction drawing indicating masonry thicknesses (9" external / 4.5" internal), sill/lintel heights, and door-window schedules.',
  },
  {
    id: 9,
    sheetNumber: '09',
    title: 'First Floor Working Planning',
    category: 'Working Planning',
    image: sheet09,
    description: 'Construction-ready working plan for the first floor with door/window swing annotations, duct shafts, and masonry offsets.',
  },
  {
    id: 10,
    sheetNumber: '10',
    title: 'Mumty Floor Working Planning',
    category: 'Working Planning',
    image: sheet10,
    description: 'Detailed construction sheet for the stair tower, laundry room walls, lintel bands, and overhead tank load-bearing walls.',
  },
  {
    id: 11,
    sheetNumber: '11',
    title: 'Ground Floor Material & Tile Finishing',
    category: 'Material & Finishing',
    image: sheet11,
    description: 'Finishing specification sheet: Kitchen Porcelain Tile (12"x12"), Lobby Verona Marble, Drawing Room Porcelain Tile (18"x18"), Guest Room Tile, and Toilet Porcelain Tile (9"x36").',
  },
  {
    id: 12,
    sheetNumber: '12',
    title: 'First Floor Material & Tile Finishing',
    category: 'Material & Finishing',
    image: sheet12,
    description: 'Upper-level flooring schedule: Lobby Verona Marble, Bed Rooms Porcelain Tile (18"x18"), Toilets Porcelain Tile (9"x36"), and anti-skid terrace tiles.',
  },
  {
    id: 13,
    sheetNumber: '13',
    title: 'Mumty Floor & Roof Finishing Details',
    category: 'Material & Finishing',
    image: sheet13,
    description: 'Roof weatherproofing and surface finishing: Laundry Room Porcelain Tile (18"x18"), Top Roof marble chips / choka finish with water-slope gradients.',
  },
  {
    id: 14,
    sheetNumber: '14',
    title: 'Front Elevation',
    category: 'Elevations',
    image: sheet14,
    description: 'Detailed Front Elevation with datum levels: Road (0\'-0"), Driveway (1\'-6"), Porch (3\'-0"), Ground Floor (14\'-6"), First Floor (26\'-0"), Parapet Wall (28\'-6"), and Mumty (34\'-0").',
  },
  {
    id: 15,
    sheetNumber: '15',
    title: 'Right Elevation',
    category: 'Elevations',
    image: sheet15,
    description: 'Right lateral elevation drawing showing side fenestrations, sunshade projections, parapet profiles, and vertical level markers.',
  },
  {
    id: 16,
    sheetNumber: '16',
    title: 'Left Elevation',
    category: 'Elevations',
    image: sheet16,
    description: 'Left lateral elevation drawing illustrating window alignments, wall textures, ventilation openings, and structural datum heights.',
  },
  {
    id: 17,
    sheetNumber: '17',
    title: 'Rear Elevation',
    category: 'Elevations',
    image: sheet17,
    description: 'Rear building facade elevation depicting back boundary setbacks, rear bedroom windows, plumbing duct drops, and roofline parapet.',
  },
  {
    id: 18,
    sheetNumber: '18',
    title: 'Ground Floor Section Cut References',
    category: 'Sections',
    image: sheet18,
    description: 'Floor plan overlay showing the exact cutting plane coordinates for longitudinal Section AA and transverse Section BB.',
  },
  {
    id: 19,
    sheetNumber: '19',
    title: 'First Floor Section Cut References',
    category: 'Sections',
    image: sheet19,
    description: 'Upper floor plan with Section AA and Section BB cutting trajectory through the stairwell, terrace, and bedroom spans.',
  },
  {
    id: 20,
    sheetNumber: '20',
    title: 'Mumty Floor Section Cut References',
    category: 'Sections',
    image: sheet20,
    description: 'Roof and mumty level plan showing the continuous section line cuts through the stair enclosure and overhead water tank.',
  },
  {
    id: 21,
    sheetNumber: '21',
    title: 'Section AA (Longitudinal Section)',
    category: 'Sections',
    image: sheet21,
    description: 'Full longitudinal cross-section cutting through foundation, plinth beam, stair flights, 1st floor slab, and mumty roof headroom (34\'-0").',
  },
  {
    id: 22,
    sheetNumber: '22',
    title: 'Section BB (Transverse Section)',
    category: 'Sections',
    image: sheet22,
    description: 'Transverse cross-section illustrating interior clear ceiling heights, door/window lintels, floor finishes, and parapet copings.',
  },
  {
    id: 23,
    sheetNumber: '23',
    title: 'Electrification Cover Sheet',
    category: 'Electrical Documentation',
    image: sheet23,
    description: 'Title cover and engineering discipline divider for the building electrical and power documentation package.',
  },
  {
    id: 24,
    sheetNumber: '24',
    title: 'Electrical Symbols Legend & Schedule',
    category: 'Electrical Documentation',
    image: sheet24,
    description: 'Comprehensive electrical legend: 10A International switch-sockets, 15A power plugs, downlights, chandeliers, ceiling fans, AC outlets, telephone/TV junction boxes, and installation mounting heights.',
  },
  {
    id: 25,
    sheetNumber: '25',
    title: 'Electrical General Notes & Wiring Specs',
    category: 'Electrical Documentation',
    image: sheet25,
    description: 'Engineering wiring specifications: single-core PVC insulated copper conductors for single-phase circuits, main distribution board earthing, and conduit standards.',
  },
  {
    id: 26,
    sheetNumber: '26',
    title: 'Ground Floor Lighting & Fan Layout',
    category: 'Electrical Documentation',
    image: sheet26,
    description: 'Lighting, ceiling fan, and chandelier circuit layout for ground floor rooms, porch, corridors, and exterior boundary lights.',
  },
  {
    id: 27,
    sheetNumber: '27',
    title: 'First Floor Lighting & Fan Layout',
    category: 'Electrical Documentation',
    image: sheet27,
    description: 'First floor ceiling fixture conduit mapping, switch board locations, terrace spotlights, and hallway illumination circuits.',
  },
  {
    id: 28,
    sheetNumber: '28',
    title: 'Mumty Floor Lighting Layout',
    category: 'Electrical Documentation',
    image: sheet28,
    description: 'Rooftop lighting and electrical points for the stair landing, laundry room, water pump isolator switch, and perimeter security lights.',
  },
  {
    id: 29,
    sheetNumber: '29',
    title: 'Ground Floor Power & Appliance Layout',
    category: 'Electrical Documentation',
    image: sheet29,
    description: 'Heavy appliance circuit mapping: 1.5-ton AC power sockets, refrigerator, kitchen microwave/oven circuits, and main distribution board (DB) home runs.',
  },
  {
    id: 30,
    sheetNumber: '30',
    title: 'First Floor Power & Appliance Layout',
    category: 'Electrical Documentation',
    image: sheet30,
    description: 'Upper floor power outlets, bedroom air-conditioning socket locations, sub-distribution board feeds, and TV/telephone data connections.',
  },
  {
    id: 31,
    sheetNumber: '31',
    title: 'Mumty Floor Power Layout',
    category: 'Electrical Documentation',
    image: sheet31,
    description: 'Dedicated power circuits for washing machines, electric water heater, and automated water level sensor wiring for O.H.W.T.',
  },
  {
    id: 32,
    sheetNumber: '32',
    title: 'Public Health Documentation Cover',
    category: 'Public Health Documentation',
    image: sheet32,
    description: 'Title cover and engineering discipline divider for public health, plumbing, and sanitary drainage drawings.',
  },
  {
    id: 33,
    sheetNumber: '33',
    title: 'Ground Floor Plumbing & Drainage Plan',
    category: 'Public Health Documentation',
    image: sheet33,
    description: 'Potable cold/hot water distribution pipes, waste water drop connections, soil waste gully traps, floor traps, and outdoor sewer inspection chambers.',
  },
  {
    id: 34,
    sheetNumber: '34',
    title: 'First Floor Plumbing & Drainage Plan',
    category: 'Public Health Documentation',
    image: sheet34,
    description: 'Upper-level sanitary pipe routing, concealed water supply lines for baths and kitchen, vertical drop pipes, and vent cowl pipes.',
  },
  {
    id: 35,
    sheetNumber: '35',
    title: 'Mumty Floor & Roof Rainwater Drainage',
    category: 'Public Health Documentation',
    image: sheet35,
    description: 'Rooftop stormwater disposal slopes, rainwater rainwater downspouts, and overhead water tank (O.H.W.T) inlet/outlet/overflow plumbing details.',
  },
]
