/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Harikrushn",
  logo_name: "gillianj.d()",
  nickname: "harry / picleric",
  full_name: "Gillian Joanna Doctor",
  subTitle: "IT Operations, UI/UX Designer, Frontend Developer.",
  resumeLink:
    "https://www.dropbox.com/s/f0f0n8uvos11jb9/Gillian%20Joanna%20Doctor%20-%20Resume.pdf?dl=0",
  mail: "gillianj.doctor@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/ghiedoc",
  linkedin: "https://www.linkedin.com/in/gillian-doctor/",
  gmail: "gillianj.doctor@gmail.com",
  // gitlab: "https://gitlab.com/harikanani",
  // facebook: "https://www.facebook.com/harikrishan.kanani/",
  // twitter: "https://twitter.com/Harikrushn9",
  // instagram: "https://www.instagram.com/hari_kanani_/",
};

const skills = {
  data: [
    {
      title: "Service Operations",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Monitor incidents and issue detection using Site 24x7 and Zabbix",
        "⚡ Utilize JIRA for case/ticket handling",
        "⚡ Maintain and monitor servers using VMware vSphere and RDP",
        "⚡ Perform patching of machines using Shavlik",
        "⚡ Address account requests such as resetting password using windows server",
      ],
      softwareSkills: [
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
      ],
    },
    {
      title: "UI/UX Designer",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Utilized Figma as wireframing/prototyping tool",
        "⚡ Designed mobile and web applications",
        "⚡ Helped in the design, development, and implementation of the graphic and layout materials",
      ],
      softwareSkills: [
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
      ],
    },
    {
      title: "Frontend Developer",
      fileName: "FullStackImg",
      skills: [
        "⚡ Experience developing modules necessary for the website",
        "⚡ Experience creating a mock-up design for the application project",
        "⚡ Experience with ReactJS and Flutter",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#7377AD",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "simple-icons:dart",
          style: {
            color: "#29B0EE",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Apache",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#CA1A22",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "National University-Manila",
      subtitle:
        "Bachelor in Information Technology Major in Mobile and Web Applications",
      logo_path: "num.png",
      alt_name: "NUM",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ I am an IT fresh graduate.",
        "⚡ I have studied core subjects like Data Structures, DBMS, Basic Networking, Security, etc.",
        "⚡ I have also completed various Mobile and Web Applications projects",
      ],
      website_link: "https://national-u.edu.ph/",
    },
    {
      title: "University of Perpetual Help System DALTA - Molino",
      subtitle: "TECHVOC - ICT",
      logo_path: "uphsdm.png",
      alt_name: "UPHSDM",
      duration: "2017 - 2018",
      descriptions: [
        "⚡ Took Technical-Vocational program that focus on Java programming.",
      ],
      website_link: "https://perpetualdalta.edu.ph/molino-2/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Discovery Day Workshop",
      subtitle: "Virtual Instructor-Led training (VILT)",
      logo_path: "aws.png",
      certificate_link: "",
      alt_name: "AWS Discovery",
      color_code: "#ffc475",
    },
    {
      title: "Software Testing Basics: Process to deliver Quality",
      subtitle: "Webinar initiated by the DICT Luzon Cluster 3-Marinduque",
      logo_path: "softesting.png",
      certificate_link: "",
      alt_name: "software testing",
      color_code: "#E2405F",
    },
    {
      title: "National Certificate III",
      subtitle: "TESDA",
      logo_path: "tesda.png",
      certificate_link: "",
      alt_name: "TESDA",
      color_code: "#1A51A3",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Works and Internship",
  description:
    "I've completed two internships. I've done projects mostly by group. I am now looking for a job.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Infrastructure Service Operations (Intern)",
          company: "Trend Micro Inc.",
          company_url: "https://www.trendmicro.com/en_ph/business.html",
          logo_path: "trend.png",
          duration: "Feb 2022 - Apr 2022",
          location: "Work From Home",
          description: `Monitored incidents and issue detection using Site 24x7 and Zabbix.
          Utilized JIRA for case/ticket handling.
          Maintained and monitored servers using VMware vSphere and RDP.
          Addressed account requests such as creating account and resetting the password using the windows server.
          Modified service status portal using Python, AWS Lambda, API Gateway, AWS S3, webhooks, and Site24x7.
          `,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
        {
          title: "Cyber Threat Hunter (Intern)",
          company: "Trend Micro Inc.",
          company_url: "https://www.trendmicro.com/en_ph/business.html",
          logo_path: "trend.png",
          duration: "Nov 2021 - Feb 2022",
          location: "Work From Home",
          description: `Utilized VMware for checking and visiting the collected harmful URLs to verify if it is phishing or not.
          Collected and checked URLs from different websites to determine if they were a scam, phishing, or normal.
          `,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Cross Winter of Code Mentor",
    //       company: "CWOC",
    //       company_url: "https://crosswoc.ieeedtu.in/",
    //       logo_path: "cwoc.png",
    //       duration: "Feb 2021 - Present",
    //       location: "Work From Home",
    //       description:
    //         "Mentorship responsibilities were to help students plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Campus Hustler",
    //       company: "Skillenza",
    //       company_url: "https://skillenza.com/",
    //       logo_path: "skillenza.png",
    //       duration: "Feb 2021 - Present",
    //       location: "Work from Home",
    //       description: "Spread Awareness of new Technologies and new Opportunities to Students and Grow Skillenza Community.",
    //       color: "#196acf",
    //     },
    //     {
    //       title: "GitHub Student Developer",
    //       company: "GitHub",
    //       company_url: "https://github.com/",
    //       logo_path: "github.png",
    //       duration: "Nov 2019 - Present",
    //       location: "Work from Home",
    //       description:
    //       "Contribute to Open Source Community and Open Source Project.",
    //       color: "#040f26",
    //     },
    //     {
    //       title: "Google Local Guide",
    //       company: "Google Map",
    //       company_url: "https://maps.google.com/localguides/",
    //       logo_path: "localguide.png",
    //       duration: "Sep 2018 - Present",
    //       location: "Work From Home",
    //       description:
    //         "Day-to-day responsibilities of helping local businesses to spread their business to the world. Helping users by writing reviews about different locations and spaces such as shops, malls, etc.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "GDG Student Volunteer",
    //       company: "Google Developer Groups",
    //       company_url: "https://gdg.community.dev/",
    //       logo_path: "gdg.png",
    //       duration: "Feb 2021 - Present",
    //       location: "Work From Home",
    //       description:
    //         "Google Developer Group Surat Student Volunteer and Member.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "E. F. I. Student Volunteer",
    //       company: "ENVIRONMENTALIST FOUNDATION OF INDIA",
    //       company_url: "https://indiaenvironment.org/",
    //       logo_path: "efi.png",
    //       duration: "Apr 2017 - Present",
    //       location: "Work From Home",
    //       description:
    //         "Take time out over weekends to join a gang of nation builders, nature enthusiasts to conserve what is left.",
    //       color: "#5a900f",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "gillian.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
  //   link: "https://twitter.com/Harikrushn9",
  //   avatar_image_path: "blogs_image.svg",
  // },
};

const projects = {
  data: [
    {
      id: "0",
      name: "QSelf-Health Check",
      url: "https://github.com/ghiedoc/QSelf--Health-Check",
      description:
        "A mobile application that monitors the health of a person arriving at an airport terminal from overseas that will need to undergo within 14 days for self-quarantine.",
      languages: [
        {
          name: "Flutter",
          iconifyClass: "logos-flutter",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      id: "1",
      name: "Mathsteroids",
      url: "https://github.com/ghiedoc/Mathsteroids",
      description:
        "A mobile android game that lets you hone your multiplication skills. It has three stages where it indicates the difficulty.",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      id: "2",
      name: "Metroute - A Bus Booking System",
      url: "https://github.com/ghiedoc/bus-booking-system",
      description:
        "Metroute is a developed Java Application that is responsible for helping the commuters to administer their seat reservation on preferred bus type from different destination and time. ",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
      ],
    },
    {
      id: "3",
      name: "Dental Clinic Appointment Booking",
      url: "https://github.com/ghiedoc/security-web-app",
      description:
        "Healthy Smile is a dental clinic web application that is made to make the booking of appointment of the dental clinic services online.",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
      ],
    },
    {
      id: "4",
      name: "NU Ready",
      url: "",
      description:
        "A mobile and web application for emergency alert in National University-Manila",
      languages: [
        {
          name: "Flutter",
          iconifyClass: "logos-flutter",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
        {
          name: "Heroku",
          iconifyClass: "logos-heroku",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "5",
      name: "SSP Modification",
      url: "",
      description:
        "A project made by interns to update the Service Status Portal to get the latest information on the services owned by the GIS department pointing to Site24x7.",
      languages: [
        {
          name: "AWS",
          iconifyClass: "logos-aws",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
