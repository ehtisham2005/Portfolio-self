import React from 'react';
import { ThemeToggle } from '../components/ThemeToggle';
import { StarBackground } from '../components/StarBackground';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { SkillsSection } from '../components/SkillsSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { ContactSection } from '../components/ContactSection';
import {FooterSection} from '../components/FooterSection';
export const Home = () => {
    return <div className="min-h-screen w-full bg-background text-foreground overflow-x-hidden">
        {/*theme Toggle*/}
        <ThemeToggle/>

        {/*BG effects*/}
        <StarBackground/>

        {/*navbar*/}
        <Navbar/>

        {/*Main Content*/}
        <main>
            <HeroSection/>
            <AboutSection/>
            <SkillsSection/>
            <ProjectsSection/>
            <ContactSection/>
        </main>

        {/*Footer*/}
        <FooterSection/>
    </div>
}