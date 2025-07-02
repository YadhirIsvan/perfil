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
  username: "Yadhir Isván",
  title: "Hola Soy Yadhir Isván",
  subTitle: emoji(
    "Desarrollador backend apasionado 🚀 con experiencia en la creación de APIs REST robustas usando Django, Spring Boot y Node.js. Enfocado en soluciones escalables, bases de datos relacionales como MySQL y PostgreSQL, e integración con servicios en la nube como AWS. Actualmente estudiante de Ingeniería de Software, combinando formación académica con proyectos reales y visión de crecimiento profesional constante."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/yadhirisvan",
  linkedin: "https://www.linkedin.com/in/yadhir-isvan/",
  gmail: "yadhirisvan11@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/yadhirisvan.pallaressantiago.5",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "DESARROLLADOR BACKEND OBSESIONADO CON ARMAR ARQUITECTURAS SÓLIDAS Y APIs QUE NO FALLEN",
  skills: [
    emoji(
      "⚡ Desarrollo de APIs REST seguras, documentadas y eficientes para apps web y móviles"
    ),
    emoji("⚡ Arquitecturas limpias, escalables y bien organizadas"),
    emoji(
      "⚡ Integración de servicios cloud (AWS, Firebase) y bases de datos relacionales"
    ),
    emoji(
      "⚡ Automatización, testing y prácticas DevOps en mis proyectos"),
    emoji(
      "⚡ Mantenimiento y despliegue de servidores en entornos Linux"),
      emoji(
        "⚡ Desarrollo de interfaces web funcionales con React, Angular y JavaScript")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "Node.js",
    fontAwesomeClassname: "fab fa-node-js"
  },
  {
    skillName: "Django",
    fontAwesomeClassname: "fas fa-leaf" // No hay ícono oficial de Django, este puede ser simbólico
  },
  {
    skillName: "React",
    fontAwesomeClassname: "fab fa-react"
  },
  {
    skillName: "Angular",
    fontAwesomeClassname: "fab fa-angular"
  },
  {
    skillName: "Flutter",
    fontAwesomeClassname: "fas fa-mobile-alt"
  },
  {
    skillName: "Git",
    fontAwesomeClassname: "fab fa-git-alt"
  },
  {
    skillName: "Docker",
    fontAwesomeClassname: "fab fa-docker"
  },
  {
    skillName: "AWS",
    fontAwesomeClassname: "fab fa-aws"
  },
  {
    skillName: "MongoDB",
    fontAwesomeClassname: "fas fa-leaf" // Mismo ícono de Django (puede compartirse)
  },
  {
    skillName: "MySQL",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "Puppeteer",
    fontAwesomeClassname: "fas fa-robot" // Representativo
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "HTML5",
    fontAwesomeClassname: "fab fa-html5"
  },
  {
    skillName: "CSS3",
    fontAwesomeClassname: "fab fa-css3-alt"
  }
],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universidad Veracruzana",
      logo: require("./assets/images/uv.png"),
      subHeader: "Ingeniería de Software",
      duration: "2022 - Actualidad",
      desc: "Contribuí en el desarrollo de soluciones backend para un proyecto de investigación universitaria sobre sistemas distribuidos y eficiencia en APIs REST. Uno de los módulos fue implementado en un sistema real y reconocido por docentes.",
      descBullets: [
        "Optimizamos respuestas REST hasta un 40% con cacheo inteligente y consultas SQL bien estructuradas",
      "Colaboré en la documentación técnica y presentación del proyecto ante la comunidad académica"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

  const workExperiences = {
    display: true,
    experience: [
      {
        role: "Fundador y Desarrollador Backend",
        company: "PallaresCorp",
        companylogo: require("./assets/images/pallarescorpLogo.jpg"),
        date: "2023 – Actualidad",
        desc: "Inicié una empresa enfocada en el desarrollo de un sistema e-commerce adaptable a micro y pequeñas empresas, combinando tecnología con consultoría personalizada y marketing digital.",
        descBullets: [
          "Diseñé y desarrollé el backend del software usando Django y PostgreSQL",
          "Implementé panel de administración para control de productos, ventas y clientes",
          "Ofrecimos campañas de marketing y acompañamiento a los negocios que adquirieron el sistema",
          "Lideré la estrategia comercial y técnica del proyecto"
        ]
      },
      {
        role: "Consultor en Investigación de Marca",
        company: "Gimnasio Oxygen (proyecto de análisis)",
        companylogo: require("./assets/images/oxygenLogo.jpg"),
        date: "2023",
        desc: "Realicé un análisis de marca para el Gimnasio Oxygen como parte de una propuesta de transformación digital, en colaboración directa con la gerente del negocio.",
        descBullets: [
          "Entrevista a profundidad con la gerencia para entender su posicionamiento de marca",
          "Análisis de competencia, presencia digital y oportunidad de expansión",
          "Propuesta de estrategia digital (no implementada por decisión interna)"
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
  title: "Big Projects",
  subtitle: "SOME COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/tulipantrendyLogo.jpg"),
      projectName: "Tulipán Trendy",
      projectDesc: "Desarrollé su ecommerce personalizado para venta de ropa, conectando catálogo, métodos de pago y diseño responsivo. Fue el primer proyecto comercial de PallaresCorp.",
      footerLink: [
        {
          name: "Visitar sitio (demo o link real)",
          url: "https://tulipantrendy.com" // reemplaza con el link real o demo si tienes
        },
        {
          name: "Ver repositorio",
          url: "https://github.com/Yadhir/tulipan-ecommerce" // pon el link real si existe
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done!",

  achievementsCards: [
    {
      title: "Google Project Management: Professional Certificate",
      subtitle:
        "Certificación emitida por Google a través de Coursera, demostrando conocimientos en planificación, gestión de equipos, metodologías ágiles y liderazgo de proyectos.",
      image: require("./assets/images/projectmanagerLogo.png"), // puedes poner aquí un logo de Google o Coursera
      imageAlt: "Google Project Management Certificate",
      footerLink: [
        {
          name: "Ver Certificación",
          url: "https://www.credly.com/go/AcLdN2RL"
        }
      ]
    },
    {
      title: "Curso de Django, Postgres y Angular | Integración FullStack",
      subtitle:
        "Certificado de Udemy donde se desarrollaron APIs RESTful con Django, Django REST Framework, JWT, Postgres y Heroku, aplicando buenas prácticas de arquitectura backend.",
      image: require("./assets/images/djangoLogo.png"),
      imageAlt: "Udemy Certificate",
      footerLink: [
        {
          name: "Ver Certificado",
          url: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-04b9ccee-d1b3-406d-bdb0-8de6affce181.pdf"
        }
      ]
    },
    {
      title: "Certificaciones Profesionales en Platzi",
      subtitle:
        "Más de 15 cursos completados en backend, bases de datos, DevOps y arquitectura de software, acreditados en una de las plataformas más reconocidas de habla hispana.",
      image: require("./assets/images/platziLogo.png"),
      imageAlt: "Platzi Certificate",
      footerLink: [
        {
          name: "Ver perfil de Platzi",
          url: "https://platzi.com/p/ypallaressantiago49/"
        }
      ]
    }
    
  ],
  display: true
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
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
