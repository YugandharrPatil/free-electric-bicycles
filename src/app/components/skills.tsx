"use client";
import { useState } from "react";
import Heading from "./heading";
import Hr from "./hr";
import SkillCard from "./skill-card";
import SkillDescription from "./skill-description";
import { Card } from "./ui/card";

export default function Skills() {
	const [skillDescription, setSkillDescription] = useState({
		heading: "My Skills",
		content:
			"A self-taught programmer on an incredible journey, I've traversed an inspiring path of growth and discovery. From my humble beginnings, I've harnessed the power of determination to evolve into the skilled developer I am today. My journey is a testament to the potential of self-guided learning and the boundless horizons it can unv",
	});

	const data = {
		webdev: {
			heading: "Full-Stack Web Development",
			content:
				"Embarking on a journey into the world of full-stack web development, I'm excited to unravel the intricacies of creating robust and interactive digital experiences. As a newcomer in this dynamic field, I'm enthusiastically diving into both front-end and back-end technologies, eager to understand the seamless synergy between them. With a strong foundation in programming and an insatiable curiosity, I'm eager to master the art of crafting user-friendly interfaces, optimizing server-side functionalities, and connecting the dots to build comprehensive web solutions. The path ahead is filled with opportunities to learn and innovate, and I'm thrilled to be on this quest to become a proficient full-stack developer.",
		},
		appdev: {
			heading: "Mobile App Development",
			content:
				"Embarking on a journey into the dynamic realm of mobile app development, I'm excited to delve into the art of crafting intuitive and engaging digital experiences. As a newcomer in this vibrant field, I'm eagerly immersing myself in the intricacies of user interfaces, responsive designs, and the diverse ecosystems of mobile platforms. With a passion for innovation and a determination to create impactful solutions, I'm embracing the challenges that come with mastering the tools and languages specific to mobile development. The adventure has just begun, and I'm enthusiastic about honing my skills to create apps that seamlessly integrate into the daily lives of users around the world.",
		},
		blockchaindev: {
			heading: "Blockchain App Development",
			content:
				"Embarking on a journey into the world of blockchain app development, I find myself captivated by the potential of decentralized technologies. As a newcomer to this innovative realm, I'm enthusiastically immersing myself in understanding the intricacies of blockchain architecture, smart contracts, and the possibilities they offer for secure and transparent applications. With a strong foundation in software development and an insatiable curiosity, I'm eager to unravel the complexities of this evolving field and contribute to the creation of cutting-edge solutions that harness the power of blockchain to reshape industries and enhance digital interactions.",
		},
		cybersec: {
			heading: "Cybersecurity",
			content:
				"Recently venturing into the dynamic realm of cybersecurity, I've embarked on an exciting journey to understand the intricacies of safeguarding digital landscapes. With a deep interest for safeguarding softwares in the virtual world, I'm in the early stages of unraveling the complexities of this vital field. As I delve into the ever-evolving challenges posed by cyber threats, I'm excited to contribute my dedication and enthusiasm to building a safer digital future.",
		},
		gamedev: {
			heading: "Game Development",
			content:
				"Stepping into the captivating realm of game development, I've embarked on an exhilarating journey to craft interactive worlds and immersive experiences. As a newcomer to this vibrant field, I'm enthusiastically diving into the intricacies of game mechanics, storytelling, and visual aesthetics. With a passion for both technology and creativity, I'm eager to learn, experiment, and contribute my unique perspective to the process of bringing virtual adventures to life. The quest to master the art of game development has just begun, and I'm thrilled to see where this path of innovation and imagination will lead.",
		},
		devops: {
			heading: "DevOps",
			content:
				"Embarking on a fresh exploration in the dynamic domain of DevOps, I've set out on a path to merge the worlds of development and operations. In the early stages of this journey, I'm enthusiastically delving into the methodologies that streamline workflows, enhance collaboration, and expedite software delivery. Through hands-on experiences and a commitment to continuous learning, I'm excited to harness the power of DevOps practices to bridge the gap between development and deployment, ultimately contributing to more efficient and resilient systems.",
		},
	};

	return (
		<>
			<Heading heading="Skills" id="skills" />

			<Card className="w-5/6 mx-auto flex gap-2">
				{/* BUTTONS */}
				<div className="buttons xl:justify-start flex-wrap 2xl:justify-start flex w-1/2">
					<SkillCard
						setDescription={() => setSkillDescription(data.webdev)}
						altText="webdev"
						lightIcon="/webdevlight.png"
						darkIcon="/webdevdark.png"
						skill="Web Dev"
					/>
					<SkillCard
						setDescription={() => setSkillDescription(data.appdev)}
						altText="appdev"
						lightIcon="/appdevlight.png"
						darkIcon="/appdevdark.png"
						skill="Mobile App Dev"
					/>
					<SkillCard
						altText="blockchaindev"
						setDescription={() => setSkillDescription(data.blockchaindev)}
						lightIcon="/blockchaindevlight.png"
						darkIcon="/blockchaindevdark.png"
						skill="Blockchain App Dev"
					/>
					<SkillCard
						altText="gamedev"
						setDescription={() => setSkillDescription(data.gamedev)}
						lightIcon="/gamedevlight.png"
						darkIcon="/gamedevdark.png"
						skill="Game Dev"
					/>
					<SkillCard
						altText="devops"
						setDescription={() => setSkillDescription(data.devops)}
						lightIcon="/devopslight.png"
						darkIcon="/devopsdark.png"
						skill="DevOps"
					/>
					<SkillCard
						altText="cybersec"
						setDescription={() => setSkillDescription(data.cybersec)}
						lightIcon="/cyberseclight.png"
						darkIcon="/cybersecdark.png"
						skill="Cybersecurity"
					/>
				</div>
				{/* DESCRIPTION */}
				<div className="description px-5 w-1/2">
					<h1 className="text-[1.2rem] sm:text-[1.3rem] md:text-[1.6rem] font-bold mt-3">{skillDescription.heading}</h1>
					<p className="text-[1rem] md:text-[1.05rem] mt-3">{skillDescription.content}</p>
				</div>
				<SkillDescription /> {/*this component contains the description for each skill, switches dynamically for each skill*/}
			</Card>
			<div className="my-40">
				<Hr />
			</div>
		</>
	);
}
