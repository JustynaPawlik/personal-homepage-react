import { MainInformation } from "./MainInformation";
import { Skills } from "./Skills";
import { nextSkills, skills } from "./Skills/skills";
import { Footer } from "./Footer";
import { Portfolio } from "./Portfolio";
import { ThemeSwitch } from "../../common/ThemeSwitch";
import  Container  from "../../common/Container";

export const PersonalHomepage = () => (
    <Container>
        <ThemeSwitch />
        <MainInformation />
        <main>
            <Skills
                title={"My skillset includes: 🛠️"}
                skills={skills}
            />
            <Skills
                title={"What I want to learn next: 🚀"}
                skills={nextSkills}
            />
            <Portfolio />
            <Footer />
        </main>
    </Container>
)