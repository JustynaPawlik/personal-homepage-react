import { StyledGithubIcon, Header, Section, MyRecentProjects } from "./styled";
import { SubHeader } from "../SubHeader";
import {ErrorBox} from "../Portfolio/Content/ErrorBox"

export const Portfolio = () => {
    return (
        <Section>
            <Header>
                <StyledGithubIcon />
                <SubHeader>
                    Portfolio
                </SubHeader>
                <MyRecentProjects>
                    My recent projects
                </MyRecentProjects>
                <ErrorBox/>
            </Header>
        </Section>
    );
};