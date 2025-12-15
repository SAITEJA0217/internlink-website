// ===============================
// Internship Types & Data (InternLink)
// ===============================

export interface Internship {
  id: string;
  title: string;
  description: string;
  icon: string;
  applyUrl: string;
}

export const FORM_URL = 'https://forms.gle/nyV6CrDPCzW5pMJK8';

export const internships: Internship[] = [
  {
    id: '1',
    title: 'Web Development',
    description: 'Learn full-stack development by building real websites & APIs.',
    icon: '🌐',
    applyUrl: FORM_URL,
  },
  {
    id: '2',
    title: 'Data Science',
    description: 'Work with data, visualize results, and build ML models.',
    icon: '📊',
    applyUrl: FORM_URL,
  },
  {
    id: '3',
    title: 'AI / Machine Learning',
    description: 'Train smart AI models and solve real-world problems.',
    icon: '🤖',
    applyUrl: FORM_URL,
  },
  {
    id: '4',
    title: 'Digital Marketing',
    description: 'Grow brands using SEO, social media and analytics.',
    icon: '📱',
    applyUrl: FORM_URL,
  },
  {
    id: '5',
    title: 'UI/UX Design',
    description: 'Design beautiful interfaces using Figma and design principles.',
    icon: '🎨',
    applyUrl: FORM_URL,
  },
  {
    id: '6',
    title: 'Mobile App Development',
    description: 'Build Android/iOS apps using React Native / Flutter.',
    icon: '📲',
    applyUrl: FORM_URL,
  },
  {
    id: '7',
    title: 'Human Resources (HR)',
    description: 'Learn hiring, onboarding and employee engagement tasks.',
    icon: '👥',
    applyUrl: FORM_URL,
  }
];

export const categories = [
  'All',
  'Web Development',
  'Data Science',
  'AI / Machine Learning',
  'Digital Marketing',
  'UI/UX Design',
  'Mobile App Development',
  'Human Resources (HR)',
];
