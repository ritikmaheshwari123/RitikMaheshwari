/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ritik Maheshwari",
  title: "Hi all, I'm Ritik",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having an experience of building scalable data processing platforms, GenAI-powered automation tools, and high-performance backend systems using Java, Spring, Microservices, Flink, Kafka, and AI/ML. Proven track record of improving product adoption, reducing development effort and delivering enterprise-grade solutions at scale."
  ),
  resumeLink:"/assets/images/Ritik_SDET_5YOE_NOKIA.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ritikmaheshwari123",
  linkedin: "https://www.linkedin.com/in/ritik-maheshwari-57998a165/",
  gmail: "maheshwariritik85@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK AND BACKEND DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop and scale data processing platforms & high-performance backend systems in Java/Spring"),
    emoji("⚡ Build GenAI-powered automation tools with LangChain, LLMs, and OpenAI APIs"),
    emoji("⚡ Engineer fault-tolerant streaming pipelines with Flink & Kafka for enterprise systems"),
    emoji("⚡ Design and deploy cloud-native microservices ensuring scalability and resilience")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
    skillName: "Java",
    fontAwesomeClassname: "fab fa-java"
  },
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "SQL",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "JDBC",
    fontAwesomeClassname: "fas fa-plug"
  },
  {
    skillName: "Servlets",
    fontAwesomeClassname: "fas fa-server"
  },
  {
    skillName: "JSP",
    fontAwesomeClassname: "fas fa-file-code"
  },
  {
    skillName: "Spring Boot",
    fontAwesomeClassname: "fas fa-leaf"
  },
  {
    skillName: "Hibernate",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "Apache Flink",
    fontAwesomeClassname: "fas fa-stream"
  },
  {
    skillName: "Apache Kafka",
    fontAwesomeClassname: "fas fa-project-diagram"
  },
  {
    skillName: "gRPC",
    fontAwesomeClassname: "fas fa-plug"
  },
  {
    skillName: "Gen AI",
    fontAwesomeClassname: "fas fa-robot"
  },
  {
    skillName: "LangChain",
    fontAwesomeClassname: "fas fa-link"
  },
  {
    skillName: "Ollama",
    fontAwesomeClassname: "fas fa-brain"
  },
  {
    skillName: "Agentic AI",
    fontAwesomeClassname: "fas fa-robot"
  },
  {
    skillName: "RAG",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "MCP",
    fontAwesomeClassname: "fas fa-network-wired"
  },
  {
    skillName: "Vector DB",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "ReactJS",
    fontAwesomeClassname: "fab fa-react"
  },
  {
    skillName: "Docker",
    fontAwesomeClassname: "fab fa-docker"
  },
  {
    skillName: "Kubernetes",
    fontAwesomeClassname: "fas fa-cubes"
  },
  {
    skillName: "Maven",
    fontAwesomeClassname: "fas fa-cogs"
  }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Chandigarh University",
      logo: require("./assets/images/cu-logo.png"),
      subHeader: "Bachelor of Science in Computer Science Specialized in IOT",
      duration: "August 2017 - July 2021",
      desc: "Took courses about Software Engineering, DSA, Operating Systems, ...",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Java Programming", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backnend Development",
      progressPercentage: "70%"
    },
    {
      Stack: "AI/ML",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Nokia",
      companylogo: require("./assets/images/nokia.png"),
      date: "July 2024 – Present",
      desc: "Building an Agentic AI-powered code generation platform leveraging LLMs, LangChain, RAG and MCP which translates designer-provided business logic into optimized Java applications, cutting development effort significantly."
    },
    {
      role: "Solution Engineer",
      company: "Nokia",
      companylogo: require("./assets/images/nokia.png"),
      date: "Aug 2021 – July 2024",
      descBullets: [
        "Developed a Generic Mediation Framework solution in Java + Apache Flink to process multi-source data ingestion, validation, correlations, and aggregations, exporting to multiple downstream systems.",
        "Boosted adoption by 80% by implementing custom Flink sources (TCP) and sinks (gRPC).",
        "Designed fault-tolerant, highly available Flink pipelines, achieving zero data loss recovery.",
        "Architected and deployed scalable microservices on Kubernetes/OpenShift platforms, improving resilience."
      ]
    },
    {
      role: "Student Trainee",
      company: "Nokia",
      companylogo: require("./assets/images/nokia.png"),
      date: "Oct 2020 – Jul 2021",
      descBullets: [
        "Built a ReactJS + Python application to simulate test data, improving testing results by 80% and product analysis by 50%.",
        "Implemented CI/CD pipelines with Jenkins & Docker for seamless deployments.",
        "Enhanced authentication & security via Keycloak, reducing incidents by 40%."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Company Projects and Open Source Projects",
  subtitle: "SOME PROJEXTS THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/dgt.png"),
      projectName: "Data Generation Tool(DGT)",
      projectDesc: "Simulated large-scale test data for product validation, boosting testing efficiency by 30%."
    },
    {
      image: require("./assets/images/GMF.png"),
      projectName: "Generic Mediation Framework (GMF)",
      projectDesc: "Designed scalable Flink pipeline, adopted across multiple Nokia products."
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://nextu.se/"
      //   }
      // ]
    },
    {
      image: require("./assets/images/Lane.webp"),
      projectName: "Lane Detection & Vehicle Tracking",
      projectDesc: "Applied OpenCV & TensorFlow for real-time autonomous driving support."
    },
    {
      image: require("./assets/images/jdbc.png"),
      projectName: "Java Menu Driven Banking Application",
      projectDesc: "This project is a Java-based software application that enables users to perform various banking operations through a menu-driven interface. It utilizes the JDBC (Java Database Connectivity) API for seamless interaction with a database."
    },
    {
      image: require("./assets/images/jsp.png"),
      projectName: "ToDo List Application",
      projectDesc: "Build a Todo web application using JSP, Servlet, JDBC and MySQL database."
    },
    {
      image: require("./assets/images/spring.png"),
      projectName: "Spring Microservices Application",
      projectDesc: "This repository showcases a microservices application using Java, Spring Boot, Maven, and SQL. It features independent services, RESTful APIs, service discovery, centralized configuration, and an API gateway—ideal for learning or enterprise use."
    },
  ],

  footerLink: [
    {
      name: "More Projects",
      url: "https://github.com/ritikmaheshwari123"
    }
  ],
  
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Excellence Award - Data Generation Tool (DGT)",
      subtitle:
        "Recognized for boosting testing efficiency by 30%.",
      image: require("./assets/images/dgt.png"),
      // imageAlt: "Google Code-In Logo",
      footerLink: [
        
      ]
    },
    {
      title: "Excellence Award - Generic Mediation Framework (GMF)",
      subtitle:
        "Enabled scalable integration across multiple products.",
      image: require("./assets/images/GMF.png"),
      // imageAlt: "Google Assistant Action Logo",
      footerLink: [

      ]
    },

    {
      title: "Leadership in Productization of Generic Data Collector (GDC)",
      subtitle: "Credited for leading productization, enhancing interoperability across 10+ products.",
      image: require("./assets/images/GDC.png"),
      // imageAlt: "PWA Logo",
      footerLink: [
        // {name: "Certification", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },

    {
      title: "Machine Learning and Deep Learning",
      subtitle: "Completed Certifcation from HPE for Machine Learning and Deep Learning",
      image: require("./assets/images/MLDL.png"),
      // imageAlt: "PWA Logo",
      footerLink: [
        // {name: "Certification", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },
    {
      title: "Kubernetes curriculum",
      subtitle: "Completed Certifcation from NOKIA for Foundation Kubernetes curriculum",
      image: require("./assets/images/kube.png"),
      // imageAlt: "PWA Logo",
      footerLink: [
        // {name: "Certification", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },
    {
      title: "AI and ML curriculum",
      subtitle: "Completed Certifcation from Nokia for Professional AI and ML curriculum",
      image: require("./assets/images/ai.jpeg"),
      // imageAlt: "PWA Logo",
      footerLink: [
        // {name: "Certification", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7023512581",
  email_address: "maheshwariritik85@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  contactInfo,
  isHireable,
  resumeSection
};
