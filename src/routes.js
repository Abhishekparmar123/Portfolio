import Index from "./views";
import About from "./views/pages/About";
import Contact from "./views/pages/Contact";
import Projects from "./views/pages/Projects";
import Resume from "./views/pages/Resume";
import Skills from "./views/pages/Skills";

const routes = [
    {
        path: "home",
        name: "Home",
        component: <Index/>,
    },
    {
        path: "about",
        name: "About",
        component: <About/>,
    },
    {
        path: "skills",
        name: "Skills",
        component: <Skills/>,
    },
    {
        path: "projects",
        name: "Projects",
        component: <Projects/>,
    },
    {
        path: "resume",
        name: "Resume",
        component: <Resume/>,
    },
    {
        path: "contact",
        name: "Contact",
        component: <Contact/>,
    }
]

export default routes;
