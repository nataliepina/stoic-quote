import {
  useEffect,
  useRef,
  useState,
} from 'react';

import { QuoteData } from 'components/Quote';
// @ts-ignore
import stoicQuote from 'stoic-quotes';

import { copyText } from '../helpers/helpers';

const useQuote = () => {
  const [quote, setQuote] = useState<QuoteData | null>(null);
  const [loading, setLoading] = useState(false);
  const [toolTip, setToolTip] = useState('Copy');
  const text = useRef('');

  useEffect(() => {
    const getQuote = async () => {
      try {
        setLoading(true);
        const res = await stoicQuote();
        const { quote, author } = res;

        setQuote({ quote, author });
        text.current = `"${quote}" -${author}`;
      } catch (e) {
        setQuote(null);
      } finally {
        setTimeout(() => setLoading(false), 300);
      }
    };
    if (!quote) getQuote();
  }, [quote]);

  const getNewQuote = () => {
    setQuote(null);
    setLoading(true);
  };

  const handleCopy = () => {
    copyText(text.current);
    setToolTip('Copied');
    setTimeout(() => setToolTip('Copy'), 1500);
  };

  return { quote, loading, toolTip, text, handleCopy, getNewQuote };
};

export default useQuote;
