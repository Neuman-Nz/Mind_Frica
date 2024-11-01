import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

// import user1 from "../assets/profile-pictures/user1.jpg";
// import user2 from "../assets/profile-pictures/user2.jpg";
// import user3 from "../assets/profile-pictures/user3.jpg";
// import user4 from "../assets/profile-pictures/user4.jpg";
// import user5 from "../assets/profile-pictures/user5.jpg";
// import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "AboutUs", href: "#" },
  { label: "Gallery", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: "https://images.pexels.com/photos/28943316/pexels-photo-28943316/free-photo-of-mystical-portrait-of-woman-in-traditional-jewelry.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: "https://images.pexels.com/photos/28943316/pexels-photo-28943316/free-photo-of-mystical-portrait-of-woman-in-traditional-jewelry.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: "https://images.pexels.com/photos/28943316/pexels-photo-28943316/free-photo-of-mystical-portrait-of-woman-in-traditional-jewelry.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: "https://images.pexels.com/photos/28943316/pexels-photo-28943316/free-photo-of-mystical-portrait-of-woman-in-traditional-jewelry.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: "https://images.pexels.com/photos/28943316/pexels-photo-28943316/free-photo-of-mystical-portrait-of-woman-in-traditional-jewelry.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: "https://images.pexels.com/photos/28943316/pexels-photo-28943316/free-photo-of-mystical-portrait-of-woman-in-traditional-jewelry.jpeg?auto=compress&cs=tinysrgb&w=600",
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Education and Mentorship",
    description:
      "Matriculating minds towards new dimensions of knowledge,growth, and empowerment.",
  },
  {
    icon: <Fingerprint />,
    text: "Sustainable Development",
    description:
      "Actively involving and collaborating with communities to address",
  },
  {
    icon: <ShieldHalf />,
    text: "Healthcare Innovation",
    description:
      "Spearheading pioneering approaches to healthcare that prioritize accessibility, effectiveness, and community well-being.",
  },
  {
    icon: <BatteryCharging />,
    text: "Public Health Research Initiatives",
    description:
      "Undertaking public health research initiatives to assess community health needs, identify trends, and inform evidence-based interventions that contribute to improved healthcare delivery and community well-being.",
  },
  {
    icon: <PlugZap />,
    text: "Community Engagement",
    description:
      "Navigating towards a future where communities thrive in harmony with their environment based on the UN SDGs.",
  },
  {
    icon: <GlobeLock />,
    text: "Governance and Policy",
    description:
      "Advocating for policies that matriculate positive change and empower all.",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];