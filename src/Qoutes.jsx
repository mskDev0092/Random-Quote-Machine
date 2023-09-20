import React from 'react';
import './style.css';

import React, { useState } from 'react';

const RandomQuote = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const qoutesList = [
    {
      qoute: 'A rose by any other name would smell as sweet.',
      author: 'William Shakespeare ',
    },
    {
      qoute: 'All that glitters is not gold.',
      author: ' William Shakespeare ',
    },
    {
      qoute:
        'All the world’s a stage, and all the men and women merely players.',
      author: ' William Shakespeare ',
    },
    {
      qoute: 'Ask, and it shall be given you; seek, and you shall find.',
      author: ' The Bible ',
    },
    {
      qoute: 'Eighty percent of success is showing up. ',
      author: 'Woody Allen 	',
    },
    { qoute: 'Elementary, my dear Watson. ', author: 'Sherlock Holmes  	' },
    {
      qoute: 'For those to whom much is given, much is required. ',
      author: 'The Bible 	',
    },
    {
      qoute: 'Frankly, my dear, I dont give a damn. 	',
      author: 'Rhett Butler  	',
    },
    {
      qoute:
        'Genius is one percent inspiration and ninety-nine percent perspiration. ',
      author: 'Thomas Edison',
    },
    { qoute: 'Go ahead, make my day. 	', author: 'Harry Callahan  	' },
    {
      qoute: 'He travels the fastest who travels alone. ',
      author: 'Rudyard Kipling 	',
    },
    {
      qoute: 'Hell has no fury like a woman scorned. ',
      author: '	William Congreve ',
    },
    { qoute: 'Hell is other people. ', author: 'Jean-Paul Sartre 	' },
    { qoute: "Here's looking at you, kid. ", author: 'Rick Blaine  	' },
    { qoute: 'Houston, we have a problem. ', author: 'Jim Lovell  	' },
    {
      qoute:
        'I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character. ',
      author: 'Martin Luther King 	',
    },
    {
      qoute: 'I have always depended on the kindness of strangers. 	',
      author: 'Blanche Dubois  	',
    },
    {
      qoute: 'I love the smell of napalm in the morning. ',
      author: 'Lt. Kilgore  	',
    },
    { qoute: 'I think therefore I am. ', author: 'Rene Descartes 	' },
    {
      qoute: 'If at first you don’t succeed, try, try again. 	',
      author: 'W. E. Hickson 	',
    },
    {
      qoute: 'If you are going through hell, keep going. ',
      author: 'Winston Churchill 	',
    },
    { qoute: 'If you build it, they will come. ', author: 'Joe Jackson  	' },
    {
      qoute: 'If you want something done right, do it yourself. ',
      author: 'Charles-Guillaume Étienne 	',
    },
    {
      qoute:
        'If you want something said, ask a man; if you want something done, ask a woman.',
      author: ' Margaret Thatcher 	',
    },
    { qoute: "I'll be back. 	", author: 'Terminator  	' },
    {
      qoute: "I'm gonna make him an offer he can't refuse. ",
      author: 'Vito Corleone  	',
    },
    {
      qoute: 'Keep your friends close, but your enemies closer.',
      author: ' Michael Corleone  	',
    },
    { qoute: 'Knowledge is power. 	', author: 'Sir Francis ' },
    {
      qoute:
        'Life is like a box of chocolates. You never know what you’re gonna get. ',
      author: 'Forrest Gump ',
    },
    {
      qoute:
        'Life is like riding a bicycle. To keep your balance, you must keep moving. ',
      author: 'Albert Einstein 	',
    },
    {
      qoute: 'May the Force be with you. 	',
      author: 'Star Wars (many characters) 	',
    },
    {
      qoute: 'No one can make you feel inferior without your consent. ',
      author: 'Eleanor Roosevelt 	',
    },
    {
      qoute: 'Not all those who wander are lost. ',
      author: 'J. R. R. Tolkein 	',
    },
    {
      qoute:
        'Ask not what your country can do for you; ask what you can do for your country. ',
      author: 'John Kennedy 	',
    },
    {
      qoute: 'Nothing is certain except for death and taxes. 	',
      author: 'Benjamin Franklin 	',
    },
    { qoute: 'Parting is such sweet sorrow ', author: 'William Shakespeare 	' },
    {
      qoute: 'Power corrupts; absolute power corrupts absolutely. ',
      author: 'John Dalberg-Acton 	',
    },
    {
      qoute: 'Speak softly and carry a big stick ',
      author: 'Theodore Roosevelt 	',
    },
    {
      qoute: 'That’s one small step for a man, a giant leap for mankind. ',
      author: 'Neil Armstrong 	',
    },
    {
      qoute: 'The love of money is the root of all evil. ',
      author: 'The Bible 	',
    },
    {
      qoute: 'The only thing we have to fear is fear itself. 	',
      author: 'Franklin D. Roosevelt 	',
    },
    { qoute: 'The truth will set you free. ', author: 'The Bible 	' },
    { qoute: "There's no place like home. ", author: 'Dorothy  	' },
    {
      qoute: 'Three can keep a secret, if two of them are dead. ',
      author: 'Benjamin Franklin ',
    },
    {
      qoute:
        'Tis better to have loved and lost than never to have loved at all. ',
      author: 'Alfred Lord Tennyson 	',
    },
    {
      qoute: 'To be or not to be, that is the question. ',
      author: 'William Shakespeare 	',
    },
    {
      qoute: 'To err is human; to forgive, divine. ',
      author: 'Alexander Pope 	',
    },
    { qoute: 'To thine own self, be true. ', author: 'William Shakespeare 	' },
    {
      qoute:
        'Two roads diverged in a wood, and I, I took the one less travelled by, and that has made all the difference. ',
      author: 'Robert Frost 	',
    },
    { qoute: 'United we stand, divided we fall. ', author: 'Aesop 	' },
    {
      qoute: "What doesn't kill us makes us stronger. ",
      author: 'Friedrich Nietzsche ',
    },
    {
      qoute:
        "What we've got here is failure to communicate. Some men you just can't reach. ",
      author: 'Captain  ',
    },
    { qoute: 'Whatever you are be a good one. ', author: 'Abraham Lincoln 	' },
    {
      qoute:
        "You can fool all of the people some of the time, and some of the people all of the time, but you can't fool all of the people all of the time. ",
      author: 'Abraham Lincoln ',
    },
    {
      qoute: 'You must be the change you wish to see in the world. ',
      author: 'Mahatma 	',
    },
    { qoute: "You talkin' to me? ", author: 'Bickle  	' },
    {
      qoute: "I've got a feeling we're not in Kansas anymore. ",
      author: 'Dorothy  ',
    },
  ];

  const getQuote = () => {
    const randomNum = Math.floor(Math.random() * qoutesList.length);
    return qoutesList[randomNum];
  };

  const showNextQuote = () => {
    setQuoteIndex((quoteIndex + 1) % qoutesList.length);
  };

  const currentQuote = getQuote();

  return (
    <>
      <div id="container" class="main">
        <div id="quote-box" class="quote-box">
          <h1 id="text">{currentQuote.qoute}</h1>
          <h2 id="author">{currentQuote.author}</h2>
          <button id="new-quote" onClick={showNextQuote}>
            Next Qoute
          </button>
          <a id="tweet-quote" href="twitter.com/intent/tweet">
            <svg viewBox="0 0 448 512" width="20px" title="share-alt">
              <path d="M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z" />
            </svg>
          </a>
          <img
            src="https://images.unsplash.com/photo-1690221124090-6e31a1737108?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTE0OTI3NTN8&ixlib=rb-4.0.3&q=85);"
            alt="Background"
          />
        </div>
      </div>
    </>
  );
};

export default RandomQuote;
