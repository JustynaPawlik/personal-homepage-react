import styled from "styled-components";
import { ReactComponent as EnvelopeIcon } from "./envelope.svg";

export const Wrapper = styled.header`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 64px;
    align-items: center;
`;

export const ThisIs = styled.div`
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: initial;
`;

export const Name = styled.h1`
    font-size: 38px;
    font-weight: 900;
    margin: 12px 0 0 0;
`;

export const Summary = styled.p`
    font-size: 20px;
    margin: 36px 0 0 0;
    line-height: 1.4;
    max-widht: 650px;
`;

export const StyledButtonLink = styled.button`
    display: inline-flex;
    align-items: center;
    margin-top: 24px;
`;

export const Avatar = styled.img`
    width: 30vw;
    max-width: 384px;
    border-radius: 50%;
`;

export const ButtonIcon = styled(EnvelopeIcon)`
    margin-right: 16px;
`;