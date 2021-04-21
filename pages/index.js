import Head from 'next/head';
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Results from "../components/Results";

export default function Home() {
	return (
		<div>
			<Head>
				<title>JAK Hulu Clone 2</title>
				<link rel="icon" href="/favicon.ico.png" />
			</Head>
			<Header />
			<Navbar />
			<Results />
		</div>
	)
}
