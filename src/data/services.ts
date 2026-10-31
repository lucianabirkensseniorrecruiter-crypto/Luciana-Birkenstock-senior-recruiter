export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: 'Crown' | 'Users' | 'Search' | 'Clock' | 'Compass' | 'Briefcase';
  ctaText: string;
  focusKeywords: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'executive-search',
    number: '01',
    title: 'Executive Search',
    description:
      'Identifying and connecting organizations with experienced leaders and senior professionals who can make a meaningful impact.',
    iconName: 'Crown',
    ctaText: 'Inquire About Executive Search',
    focusKeywords: ['Leadership Roles', 'C-Suite & VP', 'Board Advisory'],
  },
  {
    id: 'talent-acquisition',
    number: '02',
    title: 'Talent Acquisition',
    description:
      'Supporting organizations in attracting, engaging, and identifying qualified professionals aligned with their hiring needs.',
    iconName: 'Users',
    ctaText: 'Discuss Talent Acquisition',
    focusKeywords: ['Full Lifecycle', 'Team Scaling', 'Strategic Alignment'],
  },
  {
    id: 'candidate-sourcing',
    number: '03',
    title: 'Candidate Sourcing',
    description:
      'Using strategic sourcing and professional networks to identify talent with the right skills, experience, and potential.',
    iconName: 'Search',
    ctaText: 'Explore Sourcing Strategy',
    focusKeywords: ['Passive Talent', 'Niche Roles', 'Market Intelligence'],
  },
  {
    id: 'recruitment-support',
    number: '04',
    title: 'Recruitment Support',
    description:
      'Supporting recruitment coordination, candidate engagement, and hiring processes to create an efficient recruitment experience.',
    iconName: 'Clock',
    ctaText: 'Request Recruitment Support',
    focusKeywords: ['Interview Coordination', 'Candidate Journey', 'Process Agility'],
  },
  {
    id: 'career-opportunities',
    number: '05',
    title: 'Career Opportunities',
    description:
      'Helping professionals explore opportunities aligned with their skills, experience, and long-term career aspirations.',
    iconName: 'Compass',
    ctaText: 'Submit Your Profile',
    focusKeywords: ['Career Mentorship', 'Confidential Search', 'Role Matching'],
  },
  {
    id: 'recruitment-consulting',
    number: '06',
    title: 'Recruitment Consulting',
    description:
      'Supporting organizations with recruitment strategies, talent acquisition processes, and professional hiring practices.',
    iconName: 'Briefcase',
    ctaText: 'Consult on Hiring Strategy',
    focusKeywords: ['Hiring Frameworks', 'Employer Brand', 'Process Optimization'],
  },
];
