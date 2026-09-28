// All site content lives here — edit text and swap image URLs without touching components.

export const brand = {
  name: "HAVI ARCH",
  email: "haviengineering66@gmail.com",
  phone: "+92 304 6060476",
  address: "Circular road near Girls High School No 1,Samundri",
};

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Studio", href: "#studio" },
];

export const hero = {
  statement: "Architecture shaped around how you actually live and work.",
  sub: "Homes, workplaces and renovations — planned clearly, built from honest materials, detailed with care.",
  image:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80",
  imageAlt: "Modern house with large glass openings at dusk",
};

export const projects = [
  {
    name: "Courtyard House",
    type: "Residential",
    place: "Green Avenue plot, 420 m²",
    year: 2025,
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    alt: "Open living room facing a planted courtyard",
  },
  {
    name: "Linear Office",
    type: "Commercial",
    place: "Business district, 1,800 m²",
    year: 2024,
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    alt: "Bright open-plan office with long desks",
  },
  {
    name: "Stone Terrace Villa",
    type: "Residential",
    place: "Hillside, 610 m²",
    year: 2024,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
    alt: "White villa with pool and terrace",
  },
  {
    name: "Mill Conversion",
    type: "Renovation",
    place: "Old town, 950 m²",
    year: 2023,
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1600&q=80",
    alt: "White concrete facade with deep window reveals",
  },
];

export const services = [
  {
    title: "Residential",
    text: "New homes and extensions planned around daylight, privacy and the way your family uses each room.",
    includes: ["Site and brief study", "Concept to construction drawings", "Approvals support"],
  },
  {
    title: "Commercial",
    text: "Offices, retail and hospitality spaces that work hard for the business and are easy to maintain.",
    includes: ["Space planning", "Façade and structure coordination", "Fit-out design"],
  },
  {
    title: "Renovation",
    text: "We keep what's worth keeping and rework the rest — structure, layout, services and finishes.",
    includes: ["Condition survey", "Phased works plan", "Heritage-sensitive detailing"],
  },
  {
    title: "Interiors",
    text: "Joinery, lighting and material palettes drawn together with the architecture, not added afterwards.",
    includes: ["Custom joinery", "Lighting design", "Furniture and finishes schedule"],
  },
  { title: "Approvals & Permits", text: "We help you navigate the government approval process, prepare the required documentation and coordinate submissions for your project.", includes: [ "Approval requirements guidance", "Documentation preparation", "Government submission support", ], },
];

export const process = [
  {
    title: "Listen",
    text: "We visit the site, walk through your brief and agree on budget, timeline and what success looks like.",
  },
  {
    title: "Design",
    text: "Sketches become plans and 3D views. You review options at each stage before we develop the chosen one.",
  },
  {
    title: "Document",
    text: "Full drawings and specifications for approvals, pricing and construction — nothing left to guesswork.",
  },
  {
    title: "Build",
    text: "We stay on site through construction, checking quality and answering contractor questions until handover.",
  },
];

export const studio = {
  text: [
    "HAVI ARCH is an architecture and interior design studio. We work on a small number of projects at a time so every client works directly with the architects drawing their building.",
    "Our approach is simple: understand the site, solve the plan properly, and choose materials that age well. Good buildings don't need decoration to feel generous.",
  ],
  facts: [
    { label: "Founded", value: "2014" },
    { label: "Projects completed", value: "120+" },
    { label: "Team", value: "14 architects & designers" },
  ],
  image:
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
  imageAlt: "Architectural drawings and tools on a desk",
};
