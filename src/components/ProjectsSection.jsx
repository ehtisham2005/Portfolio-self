import { ExternalLink, Github,ArrowRight } from "lucide-react"

const projects =[
    {
        id:1,
        title:"Youtube Video Gen-AI summarizer",
        description:"This project analyzes YouTube comments to generate sentiment summaries using both rule-based methods and Google's Gemini AI. The system processes comment data, performs sentiment analysis, extracts keywords, and creates insightful video summaries accessible via a graphical interface.",
        image:"/projects/genAI.png",
        tags:["Python","Google Gemini AI","Sentiment Analysis","Natural Language Processing","Prompt Engineering"],
        github:"#"
    },
    {
        id:2,
        title:"A beautiful portfolio website for myself using React JS",
        description:"This project showcases my skills and experiences through a visually appealing portfolio website built with React JS and Tailwind CSS. It features a responsive design, smooth animations, and an intuitive user interface to highlight my work effectively.",
        image:"/projects/webProject.png",
        tags:["React JS","Tailwind CSS","Responsive Design","UI/UX Design"],
        github:"#"
    },
    {
        id:3,
        title:"A backend clone of YouTube",
        description:"This project implements a complete backend solution for a YouTube clone, utilizing Node JS, Express JS, and MongoDB. It includes user authentication, video uploads, comment management, and a RESTful API to support frontend interactions.",
        image:"/projects/backend.png",
        tags:["Node JS","Express JS","MongoDB","RESTful API","Authentication"],
        github:"#"
    }
]

export const ProjectsSection=()=>{
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary">Projects</span></h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects that showcase my skills and creativity. Each project is a testament to my dedication to building innovative solutions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project,key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground" >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            
                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3 mb-1">
                                    <a href={project.github} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank">
                                        <Github/>
                                    </a>
                                </div>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a href="https://github.com/ehtisham2005" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                        Check out more on my GitHub <ArrowRight></ArrowRight>
                    </a>
                </div>
            </div>

        </section>
    )
}