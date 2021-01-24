import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { BlockQuote } from './styledComponents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'

interface QuoteData {
	quote: string;
	author: string;
}

type Props = {
	quote: QuoteData | null;
};

const ShowQuote: React.FC<Props> = ({ quote }) => {
	return (
		<>
			<div className='line-container'>
				<div className='line-icon'>
					<FontAwesomeIcon icon={faQuoteLeft} />
				</div>
			</div>

			<BlockQuote>{quote?.quote}</BlockQuote>
			<cite>- {quote?.author}</cite>

			<div className='line-container'>
				<div className='line-icon'>
					<FontAwesomeIcon icon={faQuoteRight} />
				</div>
			</div>
		</>
	);
};

export default ShowQuote;