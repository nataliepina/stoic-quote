import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import DisplayQuote from "./DisplayQuote";
import { copyText } from "./helpers/helpers";
import { Button, Main } from "./styledComponents";

interface QuoteData {
  quote: string;
  author: string;
}

const StoicQuote: React.FC = () => {
  const [quote, setQuote] = useState<QuoteData | null>(null);
  const [loading, setLoading] = useState(true);
  const [toolTip, setToolTip] = useState("Copy");
  const text = useRef("");

  useEffect(() => {
    const stoicQuote = require("stoic-quotes");

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
        setTimeout(() => setLoading(false), 500);
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
    setToolTip("Copied");
    setTimeout(() => setToolTip("Copy"), 1500);
  };

  return (
    <>
      <div className="Quote">
        <Main className="Quote-Main">
          {loading ? (
            <Loader type="ThreeDots" color="lightgray" height={80} width={80} />
          ) : (
            <DisplayQuote quote={quote} />
          )}
        </Main>
        <section className="Quote-Buttons">
          <Button onClick={getNewQuote}>New Quote</Button>
          <Button onClick={handleCopy}>{toolTip}</Button>
          <Button>
            <a
              id="tweet-quote"
              title="Tweet This Quote!"
              href={`https://twitter.com/intent/tweet?text=${text.current}`}
              target="_blank"
              rel="noopener noreferrer"
              className="Tweet-Button"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </Button>
        </section>
      </div>
    </>
  );
};

export default StoicQuote;
