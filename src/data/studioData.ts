import { ProjectItem, ServiceItem, ReviewItem, ProcessStep, PhilosophyItem } from '../types';

export const STUDIO_INFO = {
  name: 'GRAND INTERIOR STUDIO',
  shortName: 'Grand Interior Studio',
  tagline: 'Interior Design • Planning • Execution',
  phone: '+91 79918 97321',
  phoneRaw: '+917991897321',
  whatsappRaw: '917991897321',
  whatsappMessage: 'Hi Grand Interior Studio, I would like to discuss my interior design project.',
  instagramHandle: '@grandinteriorstudio',
  instagramUrl: 'https://www.instagram.com/grandinteriorstudio/',
  googleRating: '5.0',
  reviewCount: '44',
  address: {
    shop: 'Shop Number 12',
    market: 'Bahuguna Market',
    road: 'Hastings Rd',
    locality: 'Ashok Nagar',
    city: 'Prayagraj',
    state: 'Uttar Pradesh',
    pincode: '211001',
    full: 'Shop Number 12, Bahuguna Market, Hastings Rd, Ashok Nagar, Prayagraj, Uttar Pradesh 211001',
  },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Grand+Interior+Studio+Shop+12+Bahuguna+Market+Hastings+Rd+Ashok+Nagar+Prayagraj+211001',
  mapsEmbedQuery: 'Shop+Number+12+Bahuguna+Market+Hastings+Rd+Ashok+Nagar+Prayagraj+Uttar+Pradesh+211001',
  logo: '/assets/images/image-0.png',
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Contemporary Living & Media Space',
    category: 'Living Room',
    image: '/assets/images/image-1.jpg',
    span: 'col-span-12 lg:col-span-7 row-span-2',
    description: 'Custom acoustic wall panelling with integrated ambient warm cove lighting and bespoke floating media console in Prayagraj residence.',
  },
  {
    id: 'proj-2',
    title: 'Architectural False Ceiling & Illumination',
    category: 'Residential',
    image: '/assets/images/image-2.jpg',
    span: 'col-span-12 sm:col-span-6 lg:col-span-5',
    description: 'Layered ceiling geometry with linear architectural profiles, recessed spot fixtures, and warm perimeter illumination.',
  },
  {
    id: 'proj-3',
    title: 'Modern Modular Kitchen Architecture',
    category: 'Kitchen',
    image: '/assets/images/image-3.jpg',
    span: 'col-span-12 sm:col-span-6 lg:col-span-5',
    description: 'Ergonomic dual-tone cabinetry, quartz surface finishes, concealed pull hardware, and task light integration.',
  },
  {
    id: 'proj-4',
    title: 'Refined Master Suite Wall Composition',
    category: 'Bedroom',
    image: '/assets/images/image-4.jpg',
    span: 'col-span-12 sm:col-span-6 lg:col-span-6',
    description: 'Textured fluted panelling, brass trim accents, and tailored bedside pendant lighting.',
  },
  {
    id: 'proj-5',
    title: 'Executive Interior & Bespoke Joinery',
    category: 'Commercial',
    image: '/assets/images/image-5.jpg',
    span: 'col-span-12 sm:col-span-6 lg:col-span-6',
    description: 'Precision carpentry, vertical reeded elements, and minimalist material continuity across spaces.',
  },
  {
    id: 'proj-6',
    title: 'Bespoke Ambient Lounge & Display',
    category: 'Hospitality',
    image: '/assets/images/image-6.jpg',
    span: 'col-span-12 sm:col-span-6 lg:col-span-6',
    description: 'Curated display niches with warm backlighting, natural wood tones, and balanced spatial proportion.',
  },
  {
    id: 'proj-7',
    title: 'Crafted Interior Corridor & Entrance',
    category: 'Interior Project',
    image: '/assets/images/image-7.jpg',
    span: 'col-span-12 sm:col-span-6 lg:col-span-6',
    description: 'Clean spatial transitions featuring architectural reveals, smooth finishes, and balanced lighting zones.',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'serv-1',
    number: '01',
    name: 'Residential Interior Design',
    description: 'Complete interior design for villas, independent floors, and modern apartments tailored to your family’s daily rhythm.',
    previewImage: '/assets/images/image-1.jpg',
  },
  {
    id: 'serv-2',
    number: '02',
    name: 'Commercial Interior Design',
    description: 'Productive workplaces, executive cabins, professional suites, and retail interiors that reinforce brand prestige.',
    previewImage: '/assets/images/image-5.jpg',
  },
  {
    id: 'serv-3',
    number: '03',
    name: 'Kitchen & Living Spaces',
    description: 'Ergonomic modular kitchens, luxurious entertainment zones, and open-concept dining tailored for contemporary living.',
    previewImage: '/assets/images/image-3.jpg',
  },
  {
    id: 'serv-4',
    number: '04',
    name: 'Interior Architecture',
    description: 'Detailed spatial planning, partition layouts, architectural lighting plans, and structural interior optimization.',
    previewImage: '/assets/images/image-2.jpg',
  },
  {
    id: 'serv-5',
    number: '05',
    name: '3D Interior Design',
    description: 'Photorealistic 3D visualization, detailed walkthroughs, and material renderings before physical work commences.',
    previewImage: '/assets/images/image-4.jpg',
  },
  {
    id: 'serv-6',
    number: '06',
    name: 'Turnkey Projects',
    description: 'Single-window accountability from architectural blueprint to handover, including procurement, scheduling, and on-site oversight.',
    previewImage: '/assets/images/image-7.jpg',
  },
  {
    id: 'serv-7',
    number: '07',
    name: 'Hospitality & Restaurant Design',
    description: 'Atmospheric dining spaces, cafes, and hospitality venues focused on customer comfort and functional operational flow.',
    previewImage: '/assets/images/image-6.jpg',
  },
  {
    id: 'serv-8',
    number: '08',
    name: 'Interior Construction & Execution',
    description: 'On-site execution with verified craftsmen, premium carpentry, ceiling installation, electricals, and finishing work.',
    previewImage: '/assets/images/image-1.jpg',
  },
];

export const PHILOSOPHY: PhilosophyItem[] = [
  {
    number: '01',
    title: 'Thoughtful Design',
    description: 'Every element should contribute to the space. We eliminate visual noise to highlight materials, natural light, and clean spatial flow.',
  },
  {
    number: '02',
    title: 'Attention to Detail',
    description: 'Materials, finishes and proportions matter. From subtle shadow-gaps to precise joinery, craftsmanship defines the end result.',
  },
  {
    number: '03',
    title: 'Designed For Living',
    description: 'Beautiful spaces should also work beautifully. We prioritize longevity, ease of maintenance, and ergonomic comfort for everyday life.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Consultation',
    description: 'Understand your space, requirements and vision through an in-depth on-site or studio discussion.',
  },
  {
    number: '02',
    title: 'Concept & Planning',
    description: 'Develop the design direction, zoning, layout options, and preliminary spatial allocations.',
  },
  {
    number: '03',
    title: 'Design Development',
    description: 'Refine materials, details, finishes and visual direction with precise 3D views and specifications.',
  },
  {
    number: '04',
    title: 'Execution',
    description: 'Bring the approved design into the physical space through disciplined on-site craftsmanship and project management.',
  },
];

export const GOOGLE_REVIEWS: ReviewItem[] = [
  {
    quote: 'Best quality, excellent work and owner very good behaviour',
    author: 'Google Reviewer',
    role: 'Homeowner, Prayagraj',
    rating: 5,
  },
  {
    quote: 'Great service, amazing designs and execution',
    author: 'Google Reviewer',
    role: 'Residential Client, Prayagraj',
    rating: 5,
  },
  {
    quote: 'Clients are treated like family and all the work completed right on time.',
    author: 'Google Reviewer',
    role: 'Interior Project Client',
    rating: 5,
  },
];
