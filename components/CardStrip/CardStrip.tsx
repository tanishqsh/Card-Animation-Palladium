import RandomCard from './RandomCard';
import { motion } from 'framer-motion';

const CardStrip = () => {
	return (
		<>
			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ y: -100, opacity: 0.4, scale: 1 }}
				transition={{ duration: 1, delay: 2.5 }}
				className="absolute flex items-center w-full"
			>
				<div className="m-auto h-[200px] w-[500px] rounded-full bg-white opacity-10 blur-3xl"></div>
			</motion.div>
			<div className="hovering-cards absolute mt-[-300px] flex space-x-3 transition-all duration-500 md:mt-[-50px]">
				{
					// run a loop for 25
					Array.from(Array(15).keys()).map((index) => {
						// if the index is 5, then add a class to the card
						return <RandomCard key={index} className="" />;
					})
				}
			</div>
		</>
	);
};

export default CardStrip;
