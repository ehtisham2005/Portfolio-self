import { ExternalLink, Github, ArrowRight } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Virtual Material Prototyping System (Gen-AI)",
        description: "An end-to-end Generative AI application for fashion texture swapping. Integrates MobileSAM for one-click segmentation and a custom diffusion pipeline (ControlNet + IP-Adapter) to realistically transfer textures while preserving structural details like folds and hardware elements.",
        image: "/projects/texture_transfer.png",
        tags: ["Stable Diffusion", "MobileSAM", "PyTorch", "ControlNet", "Gradio"],
        github: "https://github.com/ehtisham2005"
    },
    {
        id: 2,
        title: "Leather Defect Detection & Classification",
        description: "A computer vision system engineered using YOLOv8 to automatically detect and classify various leather surface defects. Designed to streamline quality control in manufacturing, with a roadmap to implement automated leather grading based on defect density and type.",
        image: "/projects/defect_detect.png",
        tags: ["YOLOv8", "Python", "Computer Vision", "Deep Learning", "Quality Control"],
        github: "https://github.com/ehtisham2005"
    },
    
    {
        id: 3,
        title: "YouTube Video Gen-AI Summarizer",
        description: "This project analyzes YouTube comments to generate sentiment summaries using both rule-based methods and Google's Gemini AI. The system processes comment data, performs sentiment analysis, and creates insightful video summaries via a dashboard.",
        image: "/projects/ytsum.png",
        tags: ["Python", "Google Gemini AI", "NLP", "Prompt Engineering", "Chart.js"],
        github: "https://github.com/ehtisham2005/youtube-video-performance-summarizer.git"
    },
    {
        id: 4,
        title: "A Backend Clone of YouTube",
        description: "A complete RESTful backend solution for a video platform, utilizing Node.js, Express.js, and MongoDB. It implements complex schema relationships for user authentication, video uploads, and nested comment management.",
        image: "/projects/backend.png",
        tags: ["Node.js", "Express.js", "MongoDB", "RESTful API", "Authentication"],
        github: "https://github.com/ehtisham2005/indieTube-backend-structure.git"
    }
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary">Projects</span></h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects that showcase my skills and creativity. Each project is a testament to my dedication to building innovative solutions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card hover flex flex-col">
                            <div className="h-48 overflow-hidden shrink-0">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground" >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>
                                <div className="flex justify-between items-center mt-auto">
                                    <div className="flex space-x-3 mb-1">
                                        <a href={project.github} className="text-foreground/80 hover:text-primary transition-colors duration-300" target="_blank" rel="noopener noreferrer">
                                            <Github />
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
