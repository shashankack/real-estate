// Villa
import villa1 from "../assets/images/projects/villa/image_1.jpg";
import villa2 from "../assets/images/projects/villa/image_2.jpg";
import villa3 from "../assets/images/projects/villa/image_3.jpg";
import villa4 from "../assets/images/projects/villa/image_4.jpg";
import villa5 from "../assets/images/projects/villa/image_5.jpg";
import villa6 from "../assets/images/projects/villa/image_6.jpg";
import villa7 from "../assets/images/projects/villa/image_7.jpg";
import villa8 from "../assets/images/projects/villa/image_8.jpg";
import villa9 from "../assets/images/projects/villa/image_9.jpg";
import villa10 from "../assets/images/projects/villa/image_10.jpg";
import villa11 from "../assets/images/projects/villa/image_11.jpg";

// Phase 1
import phase1_1 from "../assets/images/projects/avyaarthEnclave/phase1/image_1.jpg";
import phase1_2 from "../assets/images/projects/avyaarthEnclave/phase1/image_2.jpg";
import phase1_3 from "../assets/images/projects/avyaarthEnclave/phase1/image_3.jpg";
import phase1_4 from "../assets/images/projects/avyaarthEnclave/phase1/image_4.jpg";
import phase1_5 from "../assets/images/projects/avyaarthEnclave/phase1/image_5.jpg";
import phase1_6 from "../assets/images/projects/avyaarthEnclave/phase1/image_6.jpg";
import phase1_7 from "../assets/images/projects/avyaarthEnclave/phase1/image_7.jpg";
import phase1Thumbnail from "../assets/images/projects/avyaarthEnclave/phase1/thumbnail.jpg";

// Phase 2
import phase2Thumbnail from "../assets/images/projects/avyaarthEnclave/phase2/thumbnail.jpg";
import phase2_1 from "../assets/images/projects/avyaarthEnclave/phase2/image_1.jpg";
import phase2_2 from "../assets/images/projects/avyaarthEnclave/phase2/image_2.jpg";
import phase2_3 from "../assets/images/projects/avyaarthEnclave/phase2/image_3.jpg";
import phase2_4 from "../assets/images/projects/avyaarthEnclave/phase2/image_4.jpg";
import phase2_5 from "../assets/images/projects/avyaarthEnclave/phase2/image_5.jpg";
import phase2_6 from "../assets/images/projects/avyaarthEnclave/phase2/image_6.jpg";

// Warehouse
import warehouseThumbnail from "../assets/images/projects/warehouse/thumbnail.png";
import warehouse1 from "../assets/images/projects/warehouse/image_1.jpg";
import warehouse2 from "../assets/images/projects/warehouse/image_2.jpg";
import warehouse3 from "../assets/images/projects/warehouse/image_3.jpg";
import warehouse4 from "../assets/images/projects/warehouse/image_4.jpg";
import warehouse5 from "../assets/images/projects/warehouse/image_5.jpg";
import warehouse6 from "../assets/images/projects/warehouse/image_6.jpg";

export const videosData = {
  intro:
    "https://res.cloudinary.com/dhlowafw0/video/upload/f_auto/q_auto/v1751870349/intro_video_ckbwtf.mp4",
  avyaarthEnclave:
    "https://res.cloudinary.com/dhlowafw0/video/upload/f_auto/q_auto/v1751870022/phase_1_rm8yig.mp4",
  northWoordVillas:
    "https://res.cloudinary.com/dhlowafw0/video/upload/f_auto/q_auto/v1751870040/phase_2_qc0mcs.mp4",
  industrialProject:
    "https://res.cloudinary.com/dhlowafw0/video/upload/f_auto/q_auto/v1751870179/warehouse_gycn4t.mp4",
};

export const projectsData = [
  {
    id: 1,
    title: "Avyaarth Enclave Phase 1",
    thumbnail: phase1Thumbnail,
    gallery: [
      phase1_1,
      phase1_2,
      phase1_3,
      phase1_4,
      phase1_5,
      phase1_6,
      phase1_7,
    ],
    video: videosData.avyaarthEnclave,
    description:
      "Avyaarth Enclave Phase 1 is a residential project located in Malur, Karnataka. This project was developed under a 50:50 Joint Development Agreement (JDA) and spans 12 acres and 37 guntas. It features a contemporary design and was completed between 2016 and 2018.",
    location: "Malur, Karnataka",
    tags: ["Residential", "Completed", "Contemporary"],
    statistics: [
      { value: "12 Acres, 37 Guntas", label: "Land Area" },
      { value: "2016 – 2018", label: "Development Period" },
      { value: "50:50", label: "JDA Ratio" },
      { value: "2018", label: "Completion Year" },
    ],
  },

  {
    id: 2,
    title: "Avyaarth Enclave Phase 2",
    description:
      "Avyaarth Enclave Phase 2 is a premium residential layout located in Malur, Karnataka, developed under a Joint Development Agreement. Spanning 4 acres and 30 guntas (4.30 Gunte), the project was completed in 2024 with a strong emphasis on underground cable infrastructure and landscape-first planning. It reflects a modern approach to utility design and community living.",
    location: "Malur, Karnataka",
    thumbnail: phase2Thumbnail,
    gallery: [phase2_1, phase2_2, phase2_3, phase2_4, phase2_5, phase2_6],
    video:
      "https://res.cloudinary.com/dhlowafw0/video/upload/f_auto/q_auto/v1751870040/phase_2_qc0mcs.mp4",
    tags: [
      "Residential",
      "Premium",
      "Completed",
      "Modern Utilities",
      "Landscape-first",
    ],
    statistics: [
      { value: "4 Acres, 30 Guntas", label: "Land Area" },
      { value: "2016 – 2018", label: "Development Period" },
      { value: "2024", label: "Completion Year" },
      { value: "JDA", label: "Development Type" },
    ],
  },

  {
    id: 3,
    title: "Industrial Project – Malur",
    description:
      "Located in Malur, Karnataka, this industrial project was executed under a 49:51 Joint Development Agreement from 2019 to 2022. Spread across 5 acres, it delivered 85 sq ft of total built-up warehouse space across two units. Despite pandemic-related challenges, the project was seamlessly completed with strong logistic infrastructure and operational efficiency.",
    location: "Malur, Karnataka",
    thumbnail: warehouseThumbnail,
    gallery: [
      warehouse1,
      warehouse2,
      warehouse3,
      warehouse4,
      warehouse5,
      warehouse6,
    ],
    video: videosData.industrialProject,
    tags: ["Industrial", "Warehouse", "Logistics", "JDA 49:51"],
    statistics: [
      { value: "5 Acres", label: "Land Area" },
      { value: "85 sq ft", label: "Warehouse Space" },
      { value: "2019 – 2022", label: "Development Period" },
      { value: "49:51", label: "JDA Ratio" },
      { value: "2022", label: "Completion Year" },
    ],
  },

  {
    id: 4,
    title: "Northwood Villas – Hegganahalli",
    video: videosData.northWoordVillas,
    thumbnail:
      "https://res.cloudinary.com/dhlowafw0/image/upload/f_auto/q_auto/v1751877774/thumbnail_zxc8kt.jpg",
    description:
      "Northwood Villas is an ongoing residential project located in Hegganahalli, Devanahalli, Karnataka. With a robust structural foundation already in place, the project embraces an aesthetically refined architectural approach. It is steadily progressing toward its 2025 completion, with major construction milestones scheduled in the coming months.",
    location: "Hegganahalli, Devanahalli, Karnataka",
    gallery: [
      villa1,
      villa2,
      villa3,
      villa4,
      villa5,
      villa6,
      villa7,
      villa8,
      villa9,
      villa10,
      villa11,
    ],
    tags: ["Residential", "Ongoing", "Under Construction", "Architectural"],
    statistics: [
      { value: "Under Construction", label: "Current Stage" },
      { value: "2025", label: "Estimated Completion" },
      { value: "JDA", label: "Development Type" },
    ],
  },
];

export const faqData = [
  {
    question: "How long does it take to get a response?",
    answer: "We typically respond within 24 to 48 hours on working days.",
  },
  {
    question: "Can I schedule an in-person consultation?",
    answer:
      "Yes! Use the form above to request a meeting and we’ll coordinate a time with you.",
  },
  {
    question: "Where is your office located?",
    answer:
      "We're based in Bangalore, India. You can find our exact location on the map below.",
  },
  {
    question: "What are your office hours?",
    answer: "Our office is open Monday to Friday, 9 AM to 6 PM IST.",
  },
  {
    question: "Do you offer virtual consultations?",
    answer:
      "Absolutely! We can arrange video calls or phone consultations at your convenience.",
  },
  {
    question: "How can I subscribe to your newsletter?",
    answer:
      "You can subscribe using the form in the footer of our website. Just enter your email address and click 'Subscribe'.",
  },
];
