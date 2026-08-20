import SCES from "../assets/images/sces.png";
import HungryPaws from "../assets/images/hungrypaws.png";
import Endgame from "../assets/images/endgame.jpg";
import FlutterQuiz from "../assets/images/flutterquiz.jpg";

export const featured = [
  {
    title: "St. Lorenzo Ruiz Parish Web System",
    type: "Current project · In development",
    description:
      "A parish booking platform and experimental indoor AR navigation system for St. Lorenzo Ruiz Parish.",
    features: [
      "Multi-service booking and OTP flows",
      "Laravel APIs and role-based workflows",
      "Route graphs, QR calibration, and A* pathfinding",
    ],
    stack: ["React", "TypeScript", "Laravel", "MySQL"],
    visual: "route",
    repo: null,
  },
  {
    title: "Hungry Paws SIMIS",
    type: "Sales & inventory system",
    description:
      "A multi-branch pet-store system covering point-of-sale, inventory, services, and management reporting.",
    features: [
      "Four role-specific workspaces",
      "Approval-based stock transfers",
      "FEFO batch inventory handling",
    ],
    stack: ["PHP", "MySQL", "JavaScript", "Chart.js"],
    image: HungryPaws,
    repo: "https://github.com/FranzMarlo/HungryPawsSIMIS",
  },
  {
    title: "SCES Learning Platform",
    type: "Capstone · Educational analytics",
    description:
      "A complete learning platform for Sta. Clara Elementary School with lessons, assessment, records, and analytics.",
    features: [
      "Admin, faculty, and student portals",
      "Quiz, GWA, and ranking workflows",
      "Python/Flask analytics endpoints",
    ],
    stack: ["PHP", "MySQL", "Python", "Chart.js"],
    image: SCES,
    repo: "https://github.com/FranzMarlo/SCES-Online-Learning-Platform",
  },
  {
    title: "EverStill",
    type: "Devotional web application",
    description:
      "A Laravel application for publishing and moderating devotional content with separate user and administrator access.",
    features: [
      "Role-based access control",
      "Content CRUD and moderation",
      "Admin dashboard and user management",
    ],
    stack: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    visual: "ever",
    repo: "https://github.com/FranzMarlo/Everstill",
  },
];

export const other = [
  {
    title: "Assembly: Endgame",
    description:
      "Interactive word game with dynamic state, feedback, and win/loss flows.",
    stack: "React · Vite · JavaScript",
    image: Endgame,
    repo: "https://github.com/FranzMarlo/Assembly-End-Game",
  },
  {
    title: "Flutter Quiz App",
    description:
      "Mobile quiz experience with scoring, answer feedback, and responsive widgets.",
    stack: "Flutter · Dart",
    image: FlutterQuiz,
    repo: "https://github.com/FranzMarlo/Flutter-Quiz-App",
  },
  {
    title: "Python Utility App",
    description:
      "Desktop toolkit combining a calculator, unit converter, and text editor.",
    stack: "Python · Tkinter",
    image: null,
    repo: "https://github.com/FranzMarlo/All-In-One-Python-App--",
  },
];
