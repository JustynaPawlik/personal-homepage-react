import { Avatar, ButtonIcon, Name, StyledButtonLink, Summary, ThisIs, Wrapper } from "./styled"
import JustynaPawlikProfile from "./JustynaPawlikProfile.jpg";
import { email } from "../email";

export const MainInformation = () => (
  <Wrapper>
    <Avatar src={JustynaPawlikProfile} alt="Justyna Pawlik" />
    <div>
      <ThisIs>This is</ThisIs>
      <Name>Justyna Pawlik</Name>
      <Summary>
        👩💻 I am a passionate person about programming, especially in JavaScript and React. And now I'm looking for new job opportunities.
       </Summary>
       <StyledButtonLink href={`mailto:${email}`} title={email}>
        <ButtonIcon />
        Hire me
       </StyledButtonLink>
    </div>
  </Wrapper>
);