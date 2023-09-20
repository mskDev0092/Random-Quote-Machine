import React from 'react';
import './style.css';

import React, { useState } from 'react';

export default function App() {
  return (
    <div>
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
        </div>
        <img
          src="https://images.unsplash.com/photo-1690221124090-6e31a1737108?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTE0OTI3NTN8&ixlib=rb-4.0.3&q=85);"
          alt="Background"
        />
      </div>
    </div>
  );
}
