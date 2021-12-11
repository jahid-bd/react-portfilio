import AboutSection from "../AboutSection";
import ContactSection from "../ContactSection";
import FactSection from "../FactSection";
import PortfolioSection from "../PortfolioSection";
import ResumeSection from "../ResumeSection";
import ServicesSection from "../ServicesSection";
import SkillSection from "../SkillsSection";
import TestimonalSection from "../TestimonialSection";

const Layout = () => {
    return(
        <main className='main'>
            <AboutSection />
            <FactSection />
            <SkillSection />
            <ResumeSection />
            <PortfolioSection />
            <ServicesSection />
            <TestimonalSection />
            <ContactSection />
        </main>
    )
}

export default Layout;