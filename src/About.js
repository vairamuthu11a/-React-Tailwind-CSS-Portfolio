import AboutImg from "./assets/About-removebg.png";


export default function About() {

  const config = {
    line1: "I am a web developer. I build beautiful Websites with React.js, Tailwind CSS + Bootstrap5",
    line2: "I have completed the certified The Complete 2024 Web Development Bootcamp course taught by Dr. Angela Yu on Udemy.",
    line3: "I have completed the course on Web Designing certified by LiveWire approved by National Skill Development Corporation skill India",
    line4: "I am proficient in Front-end skills like React.js, CSS3, Tailwind CSS, Axios, Api",
    line5: "In Backend I know Node.js, Express.js, EJS, Api,FireBase,MongoDB, SQL, Postgres SQL, Web3, Block-Chain."
  }
  return <section id="about" className="flex flex-col md:flex-row bg-ternary px-4">
    <div className="py-5 md:w-1/2 ">
      <img src={AboutImg} />
    </div>
    <div className="md:w-1/2 flex justify-center">
      <div className="flex flex-col justify-center text-white">
        <h1 className="text-4xl  border-b-4 border-[#5551E3] w-[170px] mb-5 font-bold">About Me</h1>
        <p className="pb-5">{config.line1}</p>
        <p className="pb-5">{config.line2}</p>
        <p className="pb-5">{config.line3}</p>
        <p className="pb-5">{config.line4}</p>
        <p className="pb-5">{config.line5}</p>
      </div>
    </div>
  </section>
}