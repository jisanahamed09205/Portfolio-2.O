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