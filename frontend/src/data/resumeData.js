import IMG1 from "../img/adams-corner.png";
import IMG2 from "../img/clothing.png";
import IMG3 from "../img/kanban.png";
import IMG4 from "../img/paint-clone.png";
import IMG5 from "../img/countdown.png";
import IMG6 from "../img/quotegen.png";

const resumeData = {
  name: "Adam Abdulkadir",
  linkedinId: "https://www.linkedin.com/in/adam-abdulkadir/",
  address: "Gainesvile, Virginia",
  phone: "703-364-8616",
  email: "adama1862@outlook.com",
  github: "https://github.com/aabdulk862",
  role: "Software Engineer",
  roleDescription:
    "Skilled Software Engineer with a strong focus on full-stack development and cloud solutions. Experienced in building responsive and user-friendly front-end applications using React and JavaScript, and developing robust, scalable back-end systems with technologies such as Java, Python, and Node.js. Adept at designing secure and scalable cloud infrastructures on both AWS and Azure platforms, while also automating CI/CD pipelines to streamline deployment processes and improve development efficiency. Proven track record of optimizing application performance, implementing security best practices throughout the development lifecycle, and collaborating effectively with cross-functional teams to deliver high-quality software solutions. My deep expertise in both full-stack development and cloud technologies empowers me to create innovative, reliable, and efficient applications that meet modern business needs.",
  education: [
    {
      schoolName: "George Mason University",
      specialization: "Bachelor of Science in Information Technology",
      monthOfPassing: "December",
      yearOfPassing: "2023",
      achievements:
        "IT Architecture, Systems Analysis and Design, Object-Oriented Programming, Operating Systems, Databases, Cybersecurity, Advanced Web Development, Networking, Cloud Computing, Project Management, Information Visualization.",
    },
    {
      schoolName: "George Mason University",
      specialization: "Minor in Business",
      monthOfPassing: "December",
      yearOfPassing: "2023",
      achievements:
        "Accounting, Entrepreneurship, Management, Marketing, Corporate Finance and Investments.",
    },
  ],
  work: [
    {
      companyName: "Revature",
      role: "Software Engineer",
      summary:
        "Completed an intensive 11-week full-stack pre-employment training program focused on Java, Javelin, SQL, Git, and Spring. Leveraged Java APIs to write algorithms to solve various challenges and problem sets. Developed a backend for a social media app, managing user accounts and messages, including registration, login, message creation, updates, deletions, and retrieval by user or message ID. Gained hands-on experience with Azure Active Directory, automation tools, command-line interface (CLI), and Azure DevOps, contributing to streamlined project workflows. Worked with AWS and Azure core platforms (compute, storage, networking) to support cloud applications",
      monthOfStarting: "August",
      yearOfStarting: "2023",
      monthOfLeaving: "May",
      yearOfLeaving: "2023",
      achievements: "",
      presentEmployer: false,
    },
    {
      companyName: "GAMEC",
      role: "Web Developer",
      summary:
        "Spearheaded the design and development of the official website for the Global Association of Muslim Eritrean Communities (GAMEC), a nonprofit organization. Managed website updates, maintenance, and troubleshooting to ensure optimal performance and security. Evaluated emerging technologies and trends in web development and digital communication to recommend innovative solutions for GAMEC's online presence.",
      monthOfStarting: "August",
      yearOfStarting: "2023",
      monthOfLeaving: "May",
      yearOfLeaving: "2023",
      achievements: "",
      presentEmployer: false,
    },
    {
      companyName: "Crocodile Solutions",
      role: "Frontend Developer Intern",
      summary:
        "Upgraded legacy applications for a leading legal software company, significantly enhancing performance and user experience. Developed efficient and responsive single-page applications (SPAs) utilizing advanced front-end technologies, including HTML, CSS, React, and Next.js. Integrated back-end functionalities into front-end applications through seamless collaboration with RESTful web services.",
      monthOfStarting: "April",
      yearOfStarting: "2023",
      monthOfLeaving: "July",
      yearOfLeaving: "2023",
      achievements: "",
      presentEmployer: true,
    },
    {
      companyName: "Zero To Mastery Academy",
      role: "Open-Source Developer",
      summary:
        "Contributed to open-sourced projects for Zero To Mastery Academy involving reviewing code submissions, raising/fixing issues in code, and ensuring deployments are up and running.",
      monthOfStarting: "Jan",
      yearOfStarting: "2022",
      monthOfLeaving: "Dec",
      yearOfLeaving: "2022",
      achievements: "",
      presentEmployer: false,
    },
  ],
  skills: [
    { skillname: "JavaScript", yearsOfExperience: 4 },
    { skillname: "React", yearsOfExperience: 2 },
    { skillname: "Next.js", yearsOfExperience: 1 }, // Added Next.js
    { skillname: "Node.js", yearsOfExperience: 2 },
    { skillname: "Java", yearsOfExperience: 2 }, // Added Java
    { skillname: "Javalin", yearsOfExperience: 1 }, // Added Javalin
    { skillname: "Python", yearsOfExperience: 2 },
    { skillname: "MySQL", yearsOfExperience: 2 },
    { skillname: "PL/SQL", yearsOfExperience: 1 }, // Added PL/SQL
    { skillname: "MongoDB", yearsOfExperience: 1 },
    { skillname: "HTML", yearsOfExperience: 4 },
    { skillname: "CSS", yearsOfExperience: 4 },
    { skillname: "GraphQL", yearsOfExperience: 1 }, // Added GraphQL
    { skillname: "AWS", yearsOfExperience: 1 }, // Added AWS
    { skillname: "Azure", yearsOfExperience: 1 }, // Added Azure
    { skillname: "Git", yearsOfExperience: 2 }, // Added Git
    { skillname: "Docker", yearsOfExperience: 1 }, // Added Docker
    { skillname: "Azure DevOps", yearsOfExperience: 1 }, // Added Azure DevOps
  ],

  projects: [
    {
      id: 1,
      image: IMG1,
      title:
        "Restaurant management system that allows users to perform CRUD operations on the menu items. Built with React and Express.",
      link: "https://github.com/aabdulk862/adams-corner",
      demo: "https://adams-corner.netlify.app/",
    },
    {
      id: 2,
      image: IMG2,
      title:
        "Royal Clothing Outlet - Ecommerce site made with React, Redux, Stripe, Firebase.",
      link: "https://github.com/aabdulk862/royal-clothing-outlet",
      demo: "https://royal-clothing-outlet.netlify.app/",
    },
    {
      id: 3,
      image: IMG3,
      title:
        "Kanban Board - Project management tool designed to help visualize work.",
      link: "https://github.com/aabdulk862/kanban-board",
      demo: "https://aabdulk862.github.io/kanban-board/",
    },
    {
      id: 4,
      image: IMG4,
      title:
        "Paint Clone - Allows user save their work as an image and to local storage.",
      link: "https://github.com/aabdulk862/paint-clone-js",
      demo: "https://aabdulk862.github.io/paint-clone-js/",
    },
    {
      id: 5,
      image: IMG5,
      title:
        "Custom Countdown - Counts down the days, hours, minutes, and seconds to a given date.",
      link: "https://github.com/aabdulk862/custom-countdown-app",
      demo: "https://aabdulk862.github.io/custom-countdown-app/",
    },
    {
      id: 6,
      image: IMG6,
      title:
        "Quote Generator - Display a random quote from an api of quotes and tweet it to your followers.",
      link: "https://github.com/aabdulk862/quote-generator",
      demo: "https://aabdulk862.github.io/quote-generator/",
    },
  ],

  references: [
    {
      name: "Keyeriya Anwar",
      description: "Devops Engineer",
      email: "keyeriyaa@gmail.com",
      phone: "703-565-3928",
    },
    {
      name: "Anwar Atta",
      description: "Quality Assurance Tester",
      email: "",
      phone: "571-234-3760",
    },
    {
      name: "Khalid Ibrahim",
      description: "GAMEC",
      email: "khlid1992suleman@gmail.com",
      phone: "202-423-6162",
    },
  ],
};

export default resumeData;
