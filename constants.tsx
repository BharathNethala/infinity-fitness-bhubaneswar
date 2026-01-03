import React from 'react';
import { NavItem, Plan, Trainer, Testimonial, DaySchedule } from './types';
import { Dumbbell, Shield, Trophy, Zap, Heart, Utensils } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', path: 'home' },
  { name: 'About', path: 'about' },
  { name: 'Services', path: 'services' },
  { name: 'Trainers', path: 'trainers' },
  { name: 'Plans', path: 'plans' },
  { name: 'Results', path: 'results' },
  { name: 'Contact', path: 'contact' },
];

export const PLANS: Plan[] = [
  {
    id: 'starter',
    name: 'Starter Plan',
    price: 999,
    tagline: 'Perfect for self-motivated individuals',
    features: [
      'Unlimited gym access (5 AM - 11 PM)',
      'Initial fitness assessment',
      'Secure locker facility',
      'Member mobile app',
      'Group class access'
    ],
  },
  {
    id: 'elite',
    name: 'Elite Plan',
    price: 1999,
    isPopular: true,
    tagline: 'Best for goal-oriented transformation',
    features: [
      'Everything in Starter, plus:',
      '4 personal training sessions/month',
      'Customized nutrition consultation',
      'Priority group class booking',
      'Steam room & premium showers',
      'Monthly progress tracking'
    ],
  },
  {
    id: 'infinity',
    name: 'Infinity Plan',
    price: 4999,
    tagline: 'The ultimate performance package',
    features: [
      'Everything in Elite, plus:',
      'Unlimited personal training sessions',
      'Weekly meal planning & grocery guides',
      '2 guest passes monthly',
      'VIP lounge access',
      'Quarterly physiotherapy assessment',
      'Supplement guidance & discounts'
    ],
  },
];

export const TRAINERS: Trainer[] = [
  {
    id: 1,
    name: 'Vikram Singh',
    specialty: 'Strength & Bodybuilding Specialist',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fe?q=80&w=400&h=500&auto=format&fit=crop',
    bio: 'Vikram has competed nationally in bodybuilding and transformed over 500 clients. His approach combines classic hypertrophy principles with modern periodization, ensuring you build muscle safely and sustainably. Specializes in powerlifting technique and physique sculpting.',
    qualifications: ['NASM-CPT', 'ACE Strength Specialist'],
    philosophy: 'Train like there is no tomorrow. Consistency over intensity, always.',
    experience: '12+ years',
    socials: { instagram: '#' },
  },
  {
    id: 2,
    name: 'Anjali Patnaik',
    specialty: 'Yoga & Mobility Specialist',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=400&h=500&auto=format&fit=crop',
    bio: 'Anjali bridges ancient yogic wisdom with modern mobility science. Whether you\'re recovering from injury, improving flexibility, or enhancing athletic performance, her classes deliver results. Specializes in power vinyasa and therapeutic yoga.',
    qualifications: ['500-Hour RYT', 'Functional Movement Specialist'],
    philosophy: 'The body achieves what the mind believes. Find balance in the hustle.',
    experience: '8+ years',
    socials: { instagram: '#' },
  },
  {
    id: 3,
    name: 'Rahul Das',
    specialty: 'HIIT & Conditioning Coach',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&h=500&auto=format&fit=crop',
    bio: 'Known for creating the most challenging yet accessible HIIT sessions in Bhubaneswar, Rahul specializes in fat loss and metabolic conditioning. His programming has helped hundreds achieve dramatic body recomposition in record time.',
    qualifications: ['ACE-CPT', 'Precision Nutrition Level 1'],
    philosophy: 'Excuses don\'t burn calories. Sweat is just fat crying.',
    experience: '10+ years',
    socials: { instagram: '#' },
  },
  {
    id: 4,
    name: 'Sarah D\'Souza',
    specialty: 'CrossFit & Functional Fitness',
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d17a4d?q=80&w=400&h=500&auto=format&fit=crop',
    bio: 'Former regional CrossFit competitor, Sarah brings elite-level programming to everyday athletes. She specializes in Olympic lifting, gymnastics movements, and building explosive power. Perfect for those wanting comprehensive athletic development.',
    qualifications: ['CrossFit Level 2', 'USAW Sports Performance'],
    philosophy: 'Strong is the new sexy. Build a body that performs as good as it looks.',
    experience: '9+ years',
    socials: { instagram: '#' },
  },
  {
    id: 5,
    name: 'David Johnson',
    specialty: 'Nutrition & Lifestyle Coach',
    image: 'https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=400&h=500&auto=format&fit=crop',
    bio: 'David believes transformation is 70% nutrition, 30% training. He creates sustainable eating strategies that fit your lifestyle—no crash diets, no extreme restrictions. Specializes in metabolic health and long-term habit change.',
    qualifications: ['Precision Nutrition Level 2', 'Sports Nutritionist'],
    philosophy: 'Eat to live, don\'t live to eat. Nourishment is the foundation of progress.',
    experience: '11+ years',
    socials: { instagram: '#' },
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Sumit Mohanty',
    role: 'Member since 2022',
    text: "Best decision I've made. Living in Sundarpada, I used to travel across the city for quality equipment. Infinity Fitness Den changed that—world-class facility right in our neighborhood. The equipment is impeccably maintained, and the coaching is phenomenal.",
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=sumit',
  },
  {
    id: 2,
    name: 'Priyanka Rao',
    role: 'Competitive Powerlifter',
    text: "As an athlete, I need expert coaching and serious equipment. Vikram's strength programming took my lifts to the next level. The energy here is unmatched—everyone is pushing themselves, which makes you want to push harder too.",
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=priyanka',
  },
  {
    id: 3,
    name: 'Debashis Mishra',
    role: 'IT Professional',
    text: "After long work hours, this is my sanctuary. Clean, organized, professional staff, and zero ego. Just focused people putting in the work. The 24/7 access means I can train at 6 AM or 10 PM—whatever fits my schedule.",
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=debashis',
  },
  {
    id: 4,
    name: 'Rashmi Parida',
    role: 'Yoga Enthusiast',
    text: "I was nervous about joining a serious training facility, but Anjali's yoga classes made me feel completely at home. It's remarkably supportive for women—I've never felt unsafe or uncomfortable. The community is truly welcoming.",
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=rashmi',
  },
  {
    id: 5,
    name: 'Arjun Jena',
    role: 'Fitness Content Creator',
    text: "I've trained at facilities across India, and this is easily the best in Bhubaneswar. The HIIT zone is brutal in the best way—every session leaves you accomplished. The nutrition café is legit too; those protein shakes are restaurant-quality.",
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=arjun',
  },
  {
    id: 6,
    name: 'Sneha Mohapatra',
    role: 'University Student',
    text: "Student discounts made this affordable, and I've found an incredible workout community. Rahul's fat loss programming is effective and actually fun. I've made lifelong friends here—people who genuinely support your progress.",
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=sneha',
  },
  {
    id: 7,
    name: 'Tapan Pradhan',
    role: 'Entrepreneur',
    text: "Biometric 24/7 access is a game-changer for my unpredictable schedule. I can train at 2 AM if needed. Equipment is commercial-grade, and the industrial aesthetic keeps you motivated. This is a serious training facility.",
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=tapan',
  },
  {
    id: 8,
    name: 'Liza Das',
    role: 'Postpartum Fitness',
    text: "Starting my postpartum journey here was the best choice. The trainers provided personalized attention and understood my unique needs. Lost 8 kg in three months, but more importantly, I feel strong and confident again.",
    rating: 5,
    image: 'https://i.pravatar.cc/150?u=liza',
  }
];

export const SERVICES_CONTENT = {
  headline: "Engineered for Excellence",
  subheadline: "Every detail designed to accelerate your progress. From biometric tracking to personalized nutrition, we've built a complete ecosystem for transformation.",
  features: [
    { icon: <Dumbbell className="w-8 h-8" />, title: 'Premium Equipment', desc: 'Industry-leading machines from Hammer Strength and Life Fitness. Maintained to perfection, calibrated for performance.' },
    { icon: <Shield className="w-8 h-8" />, title: 'Biometric Security', desc: '24/7 access with fingerprint entry. Train on your schedule, not ours. Full CCTV coverage for complete peace of mind.' },
    { icon: <Trophy className="w-8 h-8" />, title: 'Expert Coaching', desc: 'Work with ACE and NASM certified trainers who\'ve transformed over 2,000 bodies. Science-backed programming, personalized to you.' },
    { icon: <Zap className="w-8 h-8" />, title: 'Functional Training Zone', desc: 'Dedicated HIIT and CrossFit area with battle ropes, sleds, plyo boxes, and Olympic lifting platforms.' },
    { icon: <Heart className="w-8 h-8" />, title: 'Progress Tracking', desc: 'Monthly body composition analysis, strength assessments, and progress reports. See exactly how your body is changing.' },
    { icon: <Utensils className="w-8 h-8" />, title: 'Recovery & Nutrition', desc: 'In-house café with premium protein shakes, post-workout meals, and supplements. Steam room and shower facilities included.' },
  ]
};

export const FAQ_DATA = [
  { q: "Do I need prior gym experience?", a: "Not at all. We train everyone from complete beginners to competitive athletes. Your first session includes a comprehensive assessment and personalized program design." },
  { q: "What are your peak hours?", a: "Typically 6-9 AM and 6-9 PM on weekdays. However, we maintain ample equipment to minimize wait times even during peak periods." },
  { q: "Can I freeze my membership?", a: "Yes. Elite and Infinity members can freeze memberships for up to 2 months per year for medical or travel reasons." },
  { q: "Do you offer couple or family plans?", a: "Yes. Contact us for custom family packages with preferential pricing." },
  { q: "What's included in the fitness assessment?", a: "Body composition analysis, flexibility testing, strength baseline, movement screening, and goal-setting consultation—approximately 45 minutes." },
  { q: "Is nutrition coaching included?", a: "It's included with Elite and Infinity plans. Starter members can add nutrition coaching for ₹4,999/month." }
];
