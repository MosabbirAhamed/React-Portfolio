import { BiUserCheck } from "react-icons/bi";
import { FaBusinessTime } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";

export const ABOUT = {
    title: "About Me",
    name: "Mosabbir Ahamed",
    description: "I am a Lead Generation Expert specializing in B2B lead generation, email outreach, and digital marketing strategies. With a data-driven approach, I help businesses connect with potential clients and grow their revenue.",
    exports: ['Lead Generation', 'Data Scraping', 'B2B Marketing'],
    image: "/Asset/me.jpeg",
    services: [
        {
            title: "B2B Lead Generation",
            text: "I help businesses generate high-quality leads to boost their sales pipeline.",
            icon: <BiUserCheck size={33} />
        },
        {
            title: "Business Development",
            text: "Strategizing outreach and engagement plans for long-term business growth.",
            icon: <FaBusinessTime size={33} />
        },
        {
            title: "Data Scraper",
            text: "Extracting accurate and relevant data from various online sources efficiently.",
            icon: <MdCloudDownload size={33} />
        },
        {
            title: "Client Acquisition",
            text: "Helping companies find and connect with their ideal customers.",
            icon: <RiTeamFill size={33} />
        },
    ]
}
