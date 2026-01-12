import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains("dark"));

    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => generateStars();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const count = Math.floor(
      (window.innerWidth * window.innerHeight) / 5000
    );

    setStars(
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      }))
    );
  };

  const meteorColors = [
    "linear-gradient(to right, #fff, transparent)",
    "linear-gradient(to right, #3b82f6, transparent)",
    "linear-gradient(to right, #f59e42, transparent)",
    "linear-gradient(to right, #f472b6, transparent)",
    "linear-gradient(to right, #34d399, transparent)",
    "linear-gradient(to right, #facc15, transparent)",
  ];

  const generateMeteors = () => {
    setMeteors(
      Array.from({ length: 5 }).map((_, i) => ({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        animationDuration: Math.random() * 3 + 3,
        color: meteorColors[Math.floor(Math.random() * meteorColors.length)],
      }))
    );
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}

      {isDarkMode &&
        meteors.map((meteor) => (
          <div
            key={meteor.id}
            className="meteor animate-meteor"
            style={{
              width: `${meteor.size * 50}px`,
              height: `${meteor.size}px`,
              left: `${meteor.x}%`,
              top: `${meteor.y}%`,
              animationDuration: `${meteor.animationDuration}s`,
              background: meteor.color,
            }}
          />
        ))}

      {!isDarkMode &&
        Array.from({ length: 24 }).map((_, i) => (
          <div
            key={`light-${i}`}
            className="light-particle"
            style={{
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animationDelay: Math.random() * 6 + "s",
              animationDuration: Math.random() * 10 + 8 + "s",
            }}
          />
        ))}
    </div>
  );
};
