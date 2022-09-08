import { BiCodeAlt } from "react-icons/bi";
import { GoDeviceDesktop } from "react-icons/go";
import { FaLaptopCode } from "react-icons/fa";
import { ImMobile2 } from "react-icons/im";

export const ABOUT = {
    title: "About Me",
    name: "Mosabbir Ahamed",
    description: "I am a web developer with a passion for building beautiful, responsive websites and applications. I am currently working on a career in web development.",
    exports: ['JavaScript', 'React', 'NextJS'],
    image: "/Asset/me.jpeg",
    services: [
        {
            title: "Web Development",
            text: "I mostly work on web development.",
            icon: <BiCodeAlt size={33} />
        },
        {
            title: "Web Design",
            text: "I make website design.",
            icon: <GoDeviceDesktop size={33} />
        },
        {
            title: "Clean Code",
            text: "My codes are always clean and formatted.",
            icon: <FaLaptopCode size={33} />
        },
        {
            title: "Responsive Design",
            text: "All my websites are responsive for any device.",
            icon: <ImMobile2 size={33} />
        },
    ]
}