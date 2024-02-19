import frontend from '../assets/images/frontend.png';
import backend from '../assets/images/backend.png';
import tools from '../assets/images/tools.png';
import soft_skill from '../assets/images/soft_skill.png';



export const SKILLS = [
    {
        title:'Frontend',
        icon: frontend,
        skills: [
            {skill:"HTML5",percentage:"70%"},
            {skill:"CSS3",percentage:"60%"},
            {skill:"JavaScript",percentage:"40%"},
            {skill:"React.js",percentage:"70%"}
        ]
    },
    {
        title:'Backend',
        icon: backend,
        skills: [
            {skill:"MongoDB",percentage:"40%"},
            {skill:"Express",percentage:"60%"},
            {skill:"Node.js",percentage:"20%"},
        ]
    },
    {
        title:'Tools',
        icon: tools,
        skills: [
            {skill:"Github",percentage:"70%"},
            {skill:"Visual Studio Code",percentage:"70%"},
            {skill:"Debugging",percentage:"60%"},
        ]
    },
    {
        title:'Soft Skills',
        icon: soft_skill,
        skills: [
            {skill:"Problem Solving",percentage:"50%"},
            {skill:"Collaboration",percentage:"60%"},
        ]
    },
];

export const WORK_EXPERIENCE = [
    {
        "position": "Junior Web Developer",
        "company": "Tech Solutions Inc.",
        "location": "New York, NY",
        "dates": "June 2020 - December 2021",
        "responsibilities": [
            "Assisted in the development of responsive and interactive web applications using HTML5, CSS3, JavaScript, and jQuery.",
            "Collaborated with senior developers to implement new features and enhancements.",
            "Conducted testing and debugging to ensure optimal performance across various browsers and devices.",
            "Participated in team meetings to discuss project requirements and timelines."
        ]
    },
    {
        "position": "Frontend Developer",
        "company": "Digital Innovations Co.",
        "location": "San Francisco, CA",
        "dates": "January 2019 - Present",
        "responsibilities": [
            "Designed and developed user-friendly interfaces and layouts for web applications using modern frontend frameworks such as React.js and Vue.js.",
            "Worked closely with UI/UX designers to implement responsive designs and ensure seamless user experiences.",
            "Optimized website performance through code refactoring, image optimization, and implementing best practices.",
            "Integrated third-party APIs for enhanced functionality and data visualization."
        ]
    },
    {
        "position": "Full Stack Web Developer",
        "company": "Innovative Solutions Ltd.",
        "location": "London, UK",
        "dates": "March 2017 - October 2019",
        "responsibilities": [
            "Developed dynamic web applications from concept to deployment using a combination of frontend and backend technologies such as HTML, CSS, JavaScript, Node.js, and MongoDB.",
            "Implemented RESTful APIs for seamless communication between frontend and backend systems.",
            "Managed databases and performed database optimization to ensure efficient data storage and retrieval.",
            "Collaborated with cross-functional teams including designers, QA engineers, and project managers to deliver high-quality software solutions within deadlines."
        ]
    }


      
]