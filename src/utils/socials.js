import { GitHub, Linkedin, Mail, Phone, Twitter } from "react-feather";

const socials = [
	{
		username: "@G-Anubhav",
		link: "https://www.linkedin.com/in/anubhav-goyal-962744211",
		service: "linkedin",
		icon: <Linkedin />,
	},
	{
		username: "@G-Anubhav",
		link: "https://github.com/G-Anubhav",
		service: "github",
		icon: <GitHub />,
	},
	{
		username: "+91 76899 03145",
		link: "tel:+917689903145",
		service: "phone",
		icon: <Phone />,
	},
	{
		username: "anubhavgoyal868@gmail.com",
		link: "mailto:anubhavgoyal868@gmail.com",
		service: "mail",
		icon: <Mail />,
	},
];

export default socials;
