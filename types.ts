
export interface NavItem {
  name: string;
  path: string;
}

export interface Plan {
  id: string;
  name: string;
  price: number;
  features: string[];
  isPopular?: boolean;
  tagline: string;
}

export interface Trainer {
  id: number;
  name: string;
  specialty: string;
  image: string;
  bio: string;
  qualifications: string[];
  philosophy: string;
  experience: string;
  socials: {
    instagram?: string;
    twitter?: string;
  };
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
  image: string;
  role: string;
}

export interface ScheduleItem {
  time: string;
  activity: string;
  trainer: string;
}

export interface DaySchedule {
  day: string;
  items: ScheduleItem[];
}