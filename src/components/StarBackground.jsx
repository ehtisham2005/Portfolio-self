import { X } from "lucide-react";
import { useEffect, useState } from "react";


export const StarBackground=()=>{
    const [stars,setStars]=useState([])
    const [meteors,setMeteors]=useState([])
    const [isDarkMode,setIsDarkMode]=useState(false);
    useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains("dark"));
    // Optionally, listen for theme changes if your app supports toggling
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

    useEffect(()=>{
        generateStars();
        generateMeteors();
        const handleResize=()=>{
            generateStars();
        }
        window.addEventListener('resize',handleResize)
        return ()=>window.removeEventListener('resize',handleResize)
    },[]);

    const generateStars=()=>{
        const numberOfStars = Math.floor(
            (window.innerWidth*window.innerHeight)/5000
        );

        const newStars=[]
        for(let i=0;i<numberOfStars;i++){
            newStars.push({
                id:i,
                size:Math.random()*3+1,
                x:Math.random()*100,
                y:Math.random()*100,
                opacity:Math.random()*0.5+0.5,
                animationDuration: Math.random()*4+2,
            })
        }
        setStars(newStars);
    }
    const meteorColors = [
  "linear-gradient(to right, #fff, transparent)",         // white
  "linear-gradient(to right, #3b82f6, transparent)",      // blue
  "linear-gradient(to right, #f59e42, transparent)",      // orange
  "linear-gradient(to right, #f472b6, transparent)",      // pink
  "linear-gradient(to right, #34d399, transparent)",      // green
  "linear-gradient(to right, #facc15, transparent)",      // yellow
];

    const generateMeteors=()=>{
        const numberOfMeteors = 5;

        const newMeteors=[]
        for(let i=0;i<numberOfMeteors;i++){
            newMeteors.push({
                id:i,
                size:Math.random()*2+1,
                x:Math.random()*100,
                y:Math.random()*20,
                opacity:Math.random()*15,
                animationDuration: Math.random()*3+3,
                color: meteorColors[Math.floor(Math.random() * meteorColors.length)]
            })
        }
        setMeteors(newMeteors);
    }

    return <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star)=>(
            <div key={star.id} className="star animate-pulse-subtle" style={{width:star.size+"px",height:star.size+"px",left:star.x+"%",top:star.y+"%",opacity:star.opacity,animationDuration:star.animationDuration+"s"}}/>
        ))}

        {isDarkMode && meteors.map((meteor)=>(
            <div key={meteor.id} className="meteor animate-meteor" style={{width:meteor.size*50+"px",height:meteor.size+"px",left:meteor.x+"%",top:meteor.y+"%",animationDelay:meteor.delay,animationDuration:meteor.animationDuration+"s",background:meteor.color}}/>
        ))}
    </div>;
}