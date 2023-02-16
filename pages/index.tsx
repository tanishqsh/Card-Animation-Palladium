import type { NextPage } from 'next';
import Head from 'next/head';
import CardStrip from '../components/CardStrip/CardStrip';

const Home: NextPage = () => {
	return (
		<div className="w-full h-screen overflow-hidden bg-blac">
			<Head>
				<title>Card Animation Demo – Palladium </title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div
				style={{
					perspective: `100000px`,
					transformStyle: 'preserve-3d',
				}}
				className="relative pt-64 h-[400px]"
			>
				<CardStrip />
			</div>
		</div>
	);
};

export default Home;
