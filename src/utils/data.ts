export const personalInfo = {
  name: 'Bhavya Butani',
  role: 'Full Stack Web Developer',
  location: 'Amreli, Gujarat, India',
  email: 'bhavyabutani1234@gmail.com',
  phone: '8200480754',
  linkedin: 'https://www.linkedin.com/in/bhavya-butani-b39383290',
  github: 'https://github.com/BHAVYA13014ME',
  tagline: 'Building modern, scalable web experiences with cutting-edge technologies.',
  bio: `I'm a passionate Full Stack Web Developer from Amreli, Gujarat, India. I specialize in building modern, performant web applications using React, Node.js, and cloud technologies. I love turning complex problems into elegant solutions and continually push the boundaries of what's possible on the web.`,
  bio2: `With experience across the full stack — from crafting intuitive UIs with React and Tailwind CSS to building robust REST APIs with Node.js and Express — I'm dedicated to writing clean, maintainable code that scales. Always learning, always building.`,
  availableFor: 'Open to Opportunities',
  education: 'B.Tech IT • Charusat University',
};

export const skills = [
  {
    category: 'Frontend',
    icon: '🎨',
    color: '#00d4ff',
    items: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 92 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 82 },
      { name: 'React', level: 88 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    color: '#7c3aed',
    items: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 83 },
      { name: 'REST APIs', level: 88 },
    ],
  },
  {
    category: 'Database',
    icon: '🗄️',
    color: '#10b981',
    items: [
      { name: 'MongoDB', level: 82 },
      { name: 'SQL', level: 78 },
    ],
  },
  {
    category: 'Tools',
    icon: '🛠️',
    color: '#f59e0b',
    items: [
      { name: 'Git', level: 88 },
      { name: 'GitHub', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Vercel', level: 85 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: 'Rentora',
    description: 'A modern rental platform where users can explore and manage property listings. Features user authentication, advanced filtering, and a clean, intuitive interface built with modern full-stack technologies.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/BHAVYA13014ME/Rentora',
    live: 'https://rentora-omega.vercel.app/',
    featured: true,
    color: '#00d4ff',
  },
  {
    id: 2,
    title: 'Virtual Learning Platform (VPL)',
    description: 'A full-stack virtual learning system supporting authentication, course management, assignments, and interactive learning tools. Built for seamless online education experiences.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
    github: 'https://github.com/BHAVYA13014ME/VPL',
    live: 'https://vpl-zeta.vercel.app/',
    featured: true,
    color: '#7c3aed',
  },
  {
    id: 3,
    title: 'AutoFit',
    description: 'A project focused on automation and system efficiency, streamlining workflows and improving productivity through intelligent automation techniques.',
    tech: ['JavaScript', 'Node.js', 'Automation'],
    github: 'https://github.com/BHAVYA13014ME/autofit',
    live: null,
    featured: false,
    color: '#10b981',
  },
  {
    id: 4,
    title: 'Student CRUD (.NET)',
    description: 'A robust .NET application implementing full CRUD functionality for student management. Clean architecture with a responsive UI for managing student records efficiently.',
    tech: ['.NET', 'C#', 'SQL', 'REST API'],
    github: 'https://github.com/BHAVYA13014ME/STUDENT-CRUD-.NET',
    live: null,
    featured: false,
    color: '#f59e0b',
  },
  {
    id: 5,
    title: 'Sourcer',
    description: 'A developer-focused tool related to source management and application development, designed to simplify workflows for developers.',
    tech: ['JavaScript', 'React', 'Node.js'],
    github: 'https://github.com/BHAVYA13014ME/Sourcer',
    live: null,
    featured: false,
    color: '#ec4899',
  },
];

export const stats = [
  { label: 'Projects Built', value: '5+', icon: '🚀' },
  { label: 'Technologies', value: '15+', icon: '⚡' },
  { label: 'GitHub Repos', value: '10+', icon: '📦' },
  { label: 'Always Learning', value: '100%', icon: '🎯' },
];

export const certifications = [
  {
    id: 1,
    title: 'Certificate of Achievement', // Update with your actual certificate title
    issuer: 'Issuing Organization',        // Update with actual issuer name
    date: '2025',
    description: 'Professional certification demonstrating expertise in modern technologies.',
    driveId: '1S0lv-Fv_lBZ6Yt3WZtdt-H-kYBvW_H82',
    link: 'https://drive.google.com/file/d/1S0lv-Fv_lBZ6Yt3WZtdt-H-kYBvW_H82/view?usp=drive_link',
    color: '#00d4ff',
  },
];

export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];
