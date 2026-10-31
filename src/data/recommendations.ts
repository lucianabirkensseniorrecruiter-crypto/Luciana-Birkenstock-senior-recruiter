export interface Recommendation {
  id: string;
  name: string;
  role: string;
  relationship: string;
  date: string;
  category: 'leader' | 'candidate' | 'colleague';
  testimonial: string;
  initials: string;
}

export const RECOMMENDATIONS: Recommendation[] = [
  {
    id: 'diana-villacorta',
    name: 'Diana Villacorta',
    role: 'Global Talent Delivery Manager - Randstad Enterprise supporting Google',
    relationship: 'Diana managed Luciana directly.',
    date: 'June 15, 2023',
    category: 'leader',
    initials: 'DV',
    testimonial:
      "It's rare to find a recruiter as talented as Luciana. From the moment she joined my team not only was she a top performer, she was also a huge support to her team members and to leadership, readily sharing her knowledge and experience to help those around her. She is extremely adaptable and was able to quickly shift her focus to hit an ever-moving target. Best of all, she has a gift for finding great talent and providing an amazing candidate experience. I would hire Luciana again in a heartbeat!",
  },
  {
    id: 'andres-rocha-gonzalez',
    name: 'Andrés Rocha Gonzalez',
    role: 'Software Engineer',
    relationship: "Andrés was Luciana's client.",
    date: 'May 23, 2023',
    category: 'candidate',
    initials: 'AG',
    testimonial:
      'Highly recommend Luciana, she scouted me and helped me land a job in Google. She was helpful all throughout the process and was always showing interest in me succeeding and attentive, even in trying times.\n\nCannot thank her enough!',
  },
  {
    id: 'prithul-bahukhandi',
    name: 'Prithul Bahukhandi',
    role: 'Software Engineer at Indeed.com',
    relationship: 'Prithul worked with Luciana but they were at different companies.',
    date: 'May 22, 2023',
    category: 'candidate',
    initials: 'PB',
    testimonial:
      "I highly recommend Luciana for any professional opportunity. As a recruiter at Amazon, she played a crucial role in setting up my interview process. Luciana's exceptional dedication, kindness, and support made the entire experience remarkably smooth. She went above and beyond to ensure I had all the necessary information and guidance. Her professionalism and helpfulness truly stood out, and I am grateful for her expertise. I have no doubt that Luciana would excel in any endeavor she pursues, and any team would be fortunate to have her. She was also quick to set up my interview at Google and provided details about the roles available. I highly recommend Luciana!",
  },
  {
    id: 'dryellen-cupertino',
    name: 'Dryellen Cupertino',
    role: 'Recruiter | People OPS | Talent Acquisition | Diversity Equity & Inclusion',
    relationship: 'Dryellen worked with Luciana but on different teams.',
    date: 'March 28, 2023',
    category: 'colleague',
    initials: 'DC',
    testimonial:
      'I highly endorse Luciana for her exceptional skills as a team player and her ability to deliver quality work. She consistently demonstrates a positive attitude and strong work ethic, making her a pleasure to work with. Luciana\'s expertise in her field is evident in her ability to tackle challenges and provide effective solutions. She has a natural talent for anticipating problems and coming up with creative solutions. Luciana\'s dedication and attention to detail make her a valuable asset to any team, and I highly recommend her to anyone seeking a skilled and reliable professional.',
  },
  {
    id: 'ty-johnson',
    name: 'Ty Johnson',
    role: 'VP of Sales | Director of Sales | Channel Sales | Key Accounts',
    relationship: 'Ty was senior to Luciana but did not manage her directly.',
    date: 'June 15, 2022',
    category: 'leader',
    initials: 'TJ',
    testimonial:
      "I always enjoyed Luciana's energy, personality and work ethic. Throughout our time together she proved herself to be responsive, thorough, professional, and had the unique ability to understand the nuances of the roles I needed filled with minimal input from me, infact, she recruited me to my current position and her ability to communicate the specifics of the role, company, and culture was spot-on.",
  },
  {
    id: 'nadezda-maslova',
    name: 'Nadezda (Nadia) Maslova',
    role: 'Test Platform Engineer. Expanding into AI-powered Health Solutions.',
    relationship: "Nadezda (Nadia) was Luciana's client.",
    date: 'February 15, 2019',
    category: 'candidate',
    initials: 'NM',
    testimonial:
      "I worked with Luciana as a candidate for a tech position. It was a complete pleasure to interact with her. Luciana provided me all the necessary information about the position, the company and the interviewing process. She kept me informed at each round of the interviewing, never dropped off communication regardless of its outcome.\nIf I'd ever run my own tech company, I would go with Luciana. She is definitely a reliable ally for all parties in the hiring process.",
  },
  {
    id: 'alli-carpenter',
    name: 'Alli Carpenter, EdD, CSCS',
    role: 'Mental Performance Coach for Athletes | Founder, Raising Strength®',
    relationship: "Alli was Luciana's client.",
    date: 'July 11, 2018',
    category: 'candidate',
    initials: 'AC',
    testimonial:
      "Luciana is a pleasure to work with. During my search for a new position, she was personable, thorough, and prompt in her correspondence. It's evident Luciana is genuine and works hard to help others. She is a light in this job market experience.",
  },
  {
    id: 'aline-forgiarini',
    name: 'Aline Forgiarini',
    role: 'Millwork Sr. Project Manager/Estimator',
    relationship: 'Aline worked with Luciana on the same team.',
    date: 'June 20, 2018',
    category: 'colleague',
    initials: 'AF',
    testimonial:
      "I had the opportunity to work with Luciana at BlueSky where she assisted in my on boarding and training. She demonstrated a great ability to juggle a large number of roles keeping track of candidates and prioritizing according to many client's demands. Her communications skills and desire to contribute to our team meetings were very impressive. She has a very positive attitude and great work ethic. She is highly dedicated and strives constantly to streamline processes and make recruiting more efficient. I was lucky to have her as a mentor!",
  },
  {
    id: 'jeffrey-stout',
    name: 'Jeffrey Stout',
    role: 'President, BlueSky Professional Services Group, LLC - Consulting & Executive Search',
    relationship: 'Jeffrey managed Luciana directly.',
    date: 'June 18, 2018',
    category: 'leader',
    initials: 'JS',
    testimonial:
      'Luciana worked for BlueSky as a Search Associate, ultimately getting promoted to Search Consultant. Luciana is a self starter, creative thinking and looks for ways to contribute value beyond her immediate role / responsibility. She\'s a team player and someone that I personally really enjoyed working with. Feel free to reach out to me directly if you\'d like a personal reference for Luciana.',
  },
  {
    id: 'lorance-b',
    name: 'Lorance B.',
    role: 'Cyber Security and Technology Professional',
    relationship: "Lorance was Luciana's client.",
    date: 'February 16, 2018',
    category: 'candidate',
    initials: 'LB',
    testimonial:
      'Luciana was professional at all times in her interaction with me and was a pleasure to deal with. She was prompt with all her communications and was able to build excellent rapport with me quickly. If an opportunity arises, I would be more than happy to work with her again in future.',
  },
];
