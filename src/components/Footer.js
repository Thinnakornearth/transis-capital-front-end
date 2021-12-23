import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
HeadingLogo,
SocialIconDiv
} from "./FooterElements";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
		<Column>
			<HeadingLogo>
            Transis Digital
            </HeadingLogo>
		</Column>
		<Column>
			<Heading>Protocol</Heading>
			<FooterLink href="#">Audit</FooterLink>
			<FooterLink href="#">Code</FooterLink>
			<FooterLink href="#">Docs</FooterLink>
			<FooterLink href="#">Transis Bug Bounty</FooterLink>
            <FooterLink href="#">Transis Sub Graph</FooterLink>
		</Column>
		<Column>
			<Heading>Users</Heading>
			<FooterLink href="#">Vault Managers</FooterLink>
			<FooterLink href="#">Savers</FooterLink>
			<FooterLink href="#">Telegram</FooterLink>
			<FooterLink href="#">Discord</FooterLink>
		</Column>
        <Column>
			<Heading>Transis</Heading>
			<FooterLink href="#">Governance</FooterLink>
			<FooterLink href="#">Tokenomics</FooterLink>
			<FooterLink href="#">Press</FooterLink>
			<FooterLink href="#">Terms and Conditions</FooterLink>
		</Column>
		</Row>
	</Container>
    <SocialIconDiv>
    <SocialIcon className="social" url="https://www.linkedin.com/in/thinnakorn-chitsincharoen-829054199/"/>
    <SocialIcon className="social" url="https://github.com/Thinnakornearth/YesterdayStoriesDeveloperChallenge.git"/>
    <SocialIcon className="social" url="https://discord.gg/zu6hzTNK"/>
    </SocialIconDiv>
	</Box>
);
};
export default Footer;
