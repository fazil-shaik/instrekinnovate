export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  service: string;
  message: string;
}

export interface NewsletterData {
  email: string;
}

export interface TechnologyCard {
  icon: JSX.Element;
  title: string;
  description: string;
  tags: string[];
  bgColor: string;
}

export interface ServiceCard {
  icon: JSX.Element;
  title: string;
  description: string;
  features: string[];
  iconBg: string;
  iconColor: string;
}

export interface CaseStudyCard {
  image: string;
  tag: string;
  industry: string;
  title: string;
  description: string;
  link: string;
  tagBg: string;
  tagText: string;
  linkColor: string;
}
