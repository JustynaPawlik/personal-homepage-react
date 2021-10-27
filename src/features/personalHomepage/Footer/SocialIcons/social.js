import { styleIcon } from "./styled";
import { ReactComponent as GithubIcon } from "./icons/github.svg";
import { ReactComponent as LinkedinIcon } from "./icons/linkedin.svg";
import { ReactComponent as FacebookIcon } from "./icons/facebook.svg";
import { ReactComponent as TwitterIcon } from "./icons/twitter.svg";

export const socials = [
  {
    name: "Github",
    url: "https://github.com/JustynaPawlik",
    Icon: styleIcon(GithubIcon),
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com",
    Icon: styleIcon(LinkedinIcon),
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/justyna.pawlik.545",
    Icon: styleIcon(FacebookIcon),
  },
  {
    name: "Twitter",
    url: "https://www.twitter.com",
    Icon: styleIcon(TwitterIcon),
  },
];