import { MainInformation } from "./MainInformation";
import { Skills } from "./Skills";
import { nextSkills, skills } from "./Skills/skills";
import { Footer } from "./Footer";
import { Portfolio } from "./Portfolio";
import { ThemeSwitch } from "../../common/ThemeSwitch";

export const PersonalHomepage = () => (
    <>
     <ThemeSwitch />
    <MainInformation />
            <Skills
                title="My skillset includes:"
                skills={skills}
            />
            <Skills
                title="What I want to learn next:"
                skills={nextSkills}

            />
             <Portfolio />
            <Footer />
            </>
)