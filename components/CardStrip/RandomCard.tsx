import Card from './CardTemplate';
import { generateCreditCardNumber, obfuscateCardNumber } from './utils';

const RandomCard = ({ className = '' }) => {
	// generate a random ID
	const id = Math.random().toString(36).substring(2, 15);

	// generate a random 16 digit number
	const cardNumber = generateCreditCardNumber();

	// generate a random card ethereum address
	const cardAddress = '';

	// randon CVV
	const cvv = Math.floor(Math.random() * (999 - 100 + 1)) + 100;

	// random expiration date - month between 1-12, year between 24-27
	const expirationDate = `${Math.floor(Math.random() * (12 - 1 + 1)) + 1}/${Math.floor(Math.random() * (27 - 24 + 1)) + 24}`;

	return (
		<Card
			className={`${className}`}
			id={id}
			cvv={cvv}
			expirationDate={expirationDate}
			cardNumber={obfuscateCardNumber(cardNumber)}
			cardAddress={cardAddress}
		/>
	);
};

export default RandomCard;
