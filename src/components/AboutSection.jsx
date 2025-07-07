import { Code,User,Archive } from "lucide-react"

export const AboutSection = () => {
    return (<section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About <span className="text-primary">Me</span> </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Passionate Web Developer & AI Engineer</h3>
                    <p className="text-muted-foreground">I am an enthusiastic Full Stack Developer and AI Engineer currently in my third year at VIT Vellore, maintaining a CGPA of 9.58. I have developed numerous web development projects and worked extensively with Generative AI models, earning a certification in Gen AI from IBM. In addition to my technical skills, I am a passionate logo designer, having created a variety of unique logos for different brands and projects. I love blending creativity with technology to deliver innovative solutions.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#contact" className="cosmic-button">Get In Touch</a>
                        
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className=" flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                 <Code className="h-6 w-6 text-primary"></Code>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p className="text-muted-foreground">I specialize in building responsive, user-friendly web applications using modern technologies like React, Node.js, and Tailwind CSS. My focus is on creating seamless digital experiences that are both visually appealing and highly functional.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className=" flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                 <User className="h-6 w-6 text-primary"></User>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">AI Applications</h4>
                                <p className="text-muted-foreground">I develop intelligent solutions leveraging machine learning and generative AI models. My projects include sentiment analysis, natural language processing, and AI-powered automation to solve real-world problems efficiently.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className=" flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                 <Archive className="h-6 w-6 text-primary"></Archive>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Projects</h4>
                                <p className="text-muted-foreground">My portfolio features a diverse range of projects, from full-stack web apps to AI-driven tools. Each project reflects my commitment to innovation, problem-solving, and delivering high-quality solutions tailored to user needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>)
}