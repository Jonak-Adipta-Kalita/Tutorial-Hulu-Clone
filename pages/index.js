import requests from '../utils/requests';
import Head from 'next/head';
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Results from "../components/Results";

export default function Home({ results }) {
	return (
		<div>
			<Head>
				<title>JAK Hulu Clone 2</title>
				<link rel="icon" href="/favicon.ico.png" />
			</Head>
			<Header />
			<Navbar />
			<Results 
				results={results}
			/>
		</div>
	)
}

export async function getServerSideProps(context) {
	const genre = context.query.genre;
	const request = await fetch(
		`https://api.themoviedb.org/3${
			requests[genre]?.url || requests.fetchTrending.url
		}`
	).then((res) => res.json());

	return {
		props: {
			results: request.results,
		},
	};
};
