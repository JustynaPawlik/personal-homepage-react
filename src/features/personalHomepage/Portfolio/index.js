import { StyledGithubIcon, Header, Section, MyRecentProjects } from "./styled";
import { SubHeader } from "../SubHeader";
import {Loading} from "../Portfolio/Content/Loading"

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
                <Loading />
            </Header>
        </Section>
    );
};