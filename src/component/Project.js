import websiteImg from "../assets/Screenshot (1).png"
import weatherapp from "../assets/WEATHER-APP.JPG"
import chatApp from "../assets/Screenshot (4).png"
export default function Project() {
  const config = {
    project: [

      {
        image: weatherapp,
        description: ' Project Title: React JS Weather App, Built a weather app using React JS and OpenWeatherMap API, displaying real-time weather data for any location.',
        link: 'https://v-weather-app-v.netlify.app/'
      },
      {
        image: chatApp,
        description: 'Developed a real-time chat application using React, Vite, Firebase. Implemented user authentication, messaging, and image sharing features. storage, and real-time database management.',
        link: 'https://chat-app-vairamuthu11a.vercel.app/'
      },
      {
        image: websiteImg,
        description: 'Project Title: Tailwind CSS Landing Page Development,Mastered Tailwind CSS fundamentals and built a fully responsive landing page, including a navbar, hero section, pricing, stories, and footer.',
        link: 'https://vairamuthu11a.github.io/tail-wind-project/'
      }

    ]
  }

  return <section id="project" className="flex flex-col justify-center py-20 px-5 bg-secondary text-white">
    <div className="w-full ">
      <div className="flex flex-col px-10 py-5">
        <h1 className="text-4xl  border-b-4 border-[#2b2d77] w-[130px] mb-5 font-bold">Project</h1>
        <p>These are some of the my best projects. I have built these with React,vite, MERN and CSS3 and Tailwind. Check them out.</p>
      </div>
    </div>

    <div className="w-full">

      <div className="flex flex-col md:flex-row px-10 gap-5">

        {config.project.map((project) => (<div className="relative ">
          <img className="h-[200px]" src={project.image} />
          <div className="project-style">
            <p className="text-center md:px-6 md:py-4">{project.description}</p>
            <div className="flex justify-center">
              <a className="btn" href={project.link} target="_blank">View Project</a>
            </div>
          </div>
        </div>))}








      </div>
    </div>


  </section>

}