export interface ValuePillar {
  id: string;
  title: string;
  description: string;
  iconName: 'HeartHandshake' | 'Target' | 'Users' | 'Sparkles';
}

export const WHY_WORK_WITH_LUCIANA: ValuePillar[] = [
  {
    id: 'candidate-experience',
    title: 'Exceptional Candidate Experience',
    description: 'Creating a supportive, informative, and engaging candidate journey.',
    iconName: 'HeartHandshake',
  },
  {
    id: 'strategic-talent-acquisition',
    title: 'Strategic Talent Acquisition',
    description:
      'Understanding recruitment needs and identifying professionals who can make a meaningful impact.',
    iconName: 'Target',
  },
  {
    id: 'professional-relationships',
    title: 'Professional Relationships',
    description:
      'Building trust through communication, collaboration, and genuine professional connections.',
    iconName: 'Users',
  },
  {
    id: 'recruitment-excellence',
    title: 'Recruitment Excellence',
    description:
      'Bringing dedication, adaptability, and attention to detail to the recruitment process.',
    iconName: 'Sparkles',
  },
];

export const TESTIMONIAL_HIGHLIGHTS = [
  {
    title: 'Exceptional Candidate Experience',
    description:
      'Candidates consistently praise supportive communication, comprehensive guidance, and persistent advocacy through every interview stage.',
    iconName: 'HeartHandshake',
  },
  {
    title: 'Strategic Talent Acquisition',
    description:
      'Deep capability to assess organizational needs with minimal guidance and pinpoint candidates who align seamlessly with company culture.',
    iconName: 'Target',
  },
  {
    title: 'Trusted Professional Relationships',
    description:
      'Recognized by managers, engineering leads, and candidates for empathy, rapid rapport building, and unwavering integrity.',
    iconName: 'Users',
  },
  {
    title: 'Recruitment Excellence',
    description:
      'High adaptability to fast-moving hiring targets across premier tech leaders and specialized boutique search firms.',
    iconName: 'Sparkles',
  },
];
