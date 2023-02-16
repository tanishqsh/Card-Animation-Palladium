/**
 *
 * Should be shifted to utils
 */
function generateCreditCardNumber() {
	let cardNumber = '';
	const cardNumberLength = 16;
	const cardNumberPrefix = '4';
	// should be a random number between 1 and 9
	const cardNumberSuffix = Math.floor(Math.random() * (9 - 1 + 1) + 1);

	for (let i = 0; i < cardNumberLength; i++) {
		if (i === 0) {
			cardNumber += cardNumberPrefix;
		} else if (i === cardNumberLength - 1) {
			cardNumber += cardNumberSuffix;
		} else {
			cardNumber += Math.floor(Math.random() * 10);
		}
	}

	return cardNumber;
}

/**
 * format card number in the gaps of 4
 */
function obfuscateCardNumber(cardNumber: string) {
	let obfuscatedCardNumber = '';
	for (let i = 0; i < cardNumber.length; i++) {
		if (i % 4 === 0 && i !== 0) {
			obfuscatedCardNumber += ' ';

			obfuscatedCardNumber += cardNumber[i];
		} else {
			obfuscatedCardNumber += cardNumber[i];
		}
	}
	return obfuscatedCardNumber;
}

export { generateCreditCardNumber, obfuscateCardNumber };
