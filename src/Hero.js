import img from "./assets/Home.jpg.png";
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai";


export default function Hero() {

    const config ={
        subTitle : "Junior Full-Stack Developer specializing in Front-End, Back-End, and MERN-Stack",
        social: {
            github:"https://github.com/vairamuthu11a",
            linkedIn:"http://www.linkedin.com/in/vairamuthu14",
            instaGram:""
        }
    }

    return <section id="hero" className="flex flex-col md:flex-row justify-center px-5 py-32 bg-secondary">
        <div className='md:w-1/2 flex flex-col'>
        <h1 className="text-6xl font-hero-font  text-white"> Hi, <br />Im <span className="text-black">G </span>Vairamuthu

            <p className="text-2xl">{config.subTitle}</p>
        </h1>
        <div className="flex py-10">
            <a href={config.social.github} target="_blank"  className="pr-5 hover:text-white" ><AiOutlineGithub size={40} /> </a>
            <a href={config.social.linkedIn} target="_blank"  className="pr-5 hover:text-white"><AiOutlineLinkedin size={40} /></a>
            <a href={config.social.instaGram} target="_blank"  className="hover:text-white"><AiOutlineInstagram size={40} /></a>

        </div>
        </div>
        <img className="md:w-1/3" src={img} alt="img" />



    </section>
}