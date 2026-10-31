export interface ProcessStep {
  step: string;
  name: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    name: 'Understand',
    description:
      "Understand the organization's hiring needs, company culture, and recruitment objectives.",
  },
  {
    step: '02',
    name: 'Discover',
    description:
      'Identify qualified professionals through strategic sourcing and professional networks.',
  },
  {
    step: '03',
    name: 'Connect',
    description:
      'Engage candidates and establish meaningful professional relationships.',
  },
  {
    step: '04',
    name: 'Evaluate',
    description:
      'Support candidate assessment and recruitment coordination.',
  },
  {
    step: '05',
    name: 'Deliver',
    description:
      'Connect organizations with suitable talent and support the hiring journey.',
  },
];
