import { motion } from 'framer-motion';

const Card = ({ id, cardNumber, className, cvv, expirationDate }: CardProps) => {
	return (
		<motion.div
			initial={{ x: -100, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ duration: 0.5, delay: 0.5 }}
			key={id}
			id="card"
			className={`relative ml-[-180px] h-[220px] w-[347px] animate-card-slide cursor-pointer rounded-lg border-2 border-gray-300 bg-card-palladium-gradient bg-size-500 p-5 opacity-80 backdrop-blur-3xl transition-all duration-[2s] hover:mt-[-50px] hover:translate-x-8 hover:opacity-100 hover:shadow-custom hover:shadow-[#0e0e0e] hover:duration-500 ${className}`}
		>
			<div id="card-inner" className="font-space-mono">
				<p className="text-sm text-white">palladium</p>
				<p className="mt-[2px] text-[8px] text-white opacity-50">0xd8da6bf26964af9d7eed9e03e53415d37aa96045</p>
				<div className="absolute bottom-6">
					<div className="flex space-x-2">
						<p className="text-[10px] text-white">{expirationDate}</p>
						<p className="text-[10px] text-white">{cvv}</p>
					</div>
					<p className="mt-1 text-xl text-white">{cardNumber}</p>
				</div>
			</div>
		</motion.div>
	);
};

export default Card;

/**
 * Props for this component
 */
type CardProps = {
	id: string;
	className: string;
	cardNumber: string;
	cardAddress: string;
	cvv: number;
	expirationDate: string;
};
