// import Header from "./components/header";
import AboutUs from "./components/about";
import Contact from "./components/contact-us";
import Header from "./components/header";
import Initiatives from "./components/initiatives";
import Navbar from "./components/navbar";

export default async function HomePage() {
	return (
		<>
			<Navbar />
			<Header />
			<AboutUs />
			<Initiatives />
			<Contact />
		</>
	);
}
