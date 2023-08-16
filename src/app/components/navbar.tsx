"use client";

import { Briefcase, HelpCircle, Menu, Send, X } from "lucide-react";
import { useTheme } from "next-themes";
import { Cinzel } from "next/font/google";
import Link from "next/link";
import NavItem from "./nav-item";
import ThemeToggle from "./theme-toggle";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

const cinzel = Cinzel({
	weight: "500",
	subsets: ["latin"],
});

export default function Navbar() {
	let { theme } = useTheme();

	return (
		<>
			<nav className={`border-b-2 border-gray-800 h-24 sticky top-0 z-50 ${theme === "light" ? "bg-white" : "bg-dark"}`}>
				<div className="h-full items-center flex justify-between gap-2 w-11/12 xl:w-5/6 lg:w-11/12 md:w-5/6 sm:w-5/6 mx-auto">
					<Link href="#">
						<h1 className={`text-[1rem] min-[390px]:text-[1.5rem] min-[835px]:text-[2rem] ${cinzel.className}`}>A Dr.Kothur G Manjunath Project</h1>
					</Link>
					<div className="flex gap-4">
						<div className="min-[1284px]:block hidden">
							<NavItem navText="About Us" target="#about" />
							<NavItem navText="Our Initiatives" target="#initiatives" />
							<NavItem navText="Contact Us" target="#contact" />
						</div>
						<div className="dropdown min-[1284px]:hidden">
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button variant="ghost" size="icon">
										<Menu className="h-[1.2rem] w-[1.2rem]" />
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent className="w-32">
									<DropdownMenuItem>
										<HelpCircle className="mr-2 h-4 w-4" />
										<span>
											<Link href="#about">About Us</Link>
										</span>
									</DropdownMenuItem>
									<DropdownMenuItem>
										<Briefcase className="mr-2 h-4 w-4" />
										<span>
											<Link href="#projects">Our Initiatives</Link>
										</span>
									</DropdownMenuItem>
									<DropdownMenuItem>
										<Send className="mr-2 h-4 w-4" />
										<span>
											<Link href="#contact">Contact </Link>
										</span>
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
						<ThemeToggle />
					</div>
				</div>
			</nav>
		</>
	);
}
